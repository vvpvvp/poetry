var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var mysql = require("mysql");
var log = require("hey-log");
var config = require('./server/config/data');
var chalk = require("chalk");
var utils = require("hey-utils");

global.log = log;
global.logs = function () {
  log(chalk.green(...arguments))
};

const pool = mysql.createPool(config.mysql);
const sequelize = new Sequelize('poetry', 'root', 'root', config);
const Poetry = sequelize.import("./server/models/poetry");
const Author = sequelize.import("./server/models/author");
const PoetryLine = sequelize.import("./server/models/poetry_line");
const PoetryWords = sequelize.import("./server/models/poetry_words");


sequelize
  .authenticate()
  .then(err => {
    logs('Connection has been established successfully.');
  })
  .catch(err => {
    log.error('Unable to connect to the database:', err);
  });

var app = express();
var server = require('http').Server(app);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
const port = 3002;

server.listen(port);

app.get('/poetry', function (req, res) {
  let id = req.query.id;
  if (id == undefined) {
    res.json({ status: 403 });
  }
  let poetryData = [];
  let poetryLines = [];
  let index = 0;

  let resFun = () => {
    if (index == 2) {
      if (poetryData.length == 0) {
        res.json({ status: 403 });
      } else {
        // log(results);
        res.json({ poetry: poetryData[0], poetryList: poetryLines, status: 200 });
      }
    }
  }

  // pool.query(`select from poetry where id = ?`, [id], function (error, results, fields) {
  //   index++;
  //   poetryData = results;
  //   resFun();
  // })
  Poetry.findAll({
    where: {
      id: id
    }
  }).then((result) => {
    index++;
    poetryData = result;
    resFun();
  });


  // pool.query(`select from poetry_line where poetry = ?`, [id], function (error, results, fields) {
  //   index++;
  //   poetryLines = results;
  //   resFun();
  // })
  PoetryLine.findAll({
    where: {
      poetry: id
    }
  }).then((result) => {
    index++;
    poetryLines = result;
    resFun();
  });

});


app.post('/poetry', function (req, res) {
  // 创建事务
  let id = null;
  sequelize.transaction(function (t) {
    return Poetry.create(req.body.poetry, {transaction:t}).then(function(poetry){
      id = poetry.id;
      let ps = [];
      for(var line of req.body.poetryLine) {
        line.poetry = poetry.id;
        ps.push(PoetryLine.create(line, {transaction:t}));
      }
      return Promise.all(ps);
    });
  }).then(function (results){
    /* 操作成功，事务会自动提交 */
    res.json({ status: 200, id: id });
  }).catch(function(err){
    /* 操作失败，事件会自动回滚 */
    console.log(err);
    res.json({ status: 500 });
  });
  
});

app.post('/poetry/:id', function (req, res) {
  let id = req.params.id;
  if (id == undefined) {
    res.json({ status: 403 });
  }
  // console.log(req.body);
  // 创建事务
  sequelize.transaction(function (t) {
    log(req.body.poetry)
    return Poetry.update(req.body.poetry, {'where':{'id':id}}, {transaction:t})
    .then(function(){
      console.log('line')
      
      let ps = [];
      ps.push(PoetryLine.destroy({'where':{'poetry': id}}, {transaction:t}));
      for(var line of req.body.poetryLine) {
        line.poetry = id;
        ps.push(PoetryLine.create(line, {transaction:t}));
      }

      return Promise.all(ps);
    })
  }).then(function (results){
    /* 操作成功，事务会自动提交 */
    res.json({ status: 200 });
  }).catch(function(err){
    console.log(err);
    /* 操作失败，事件会自动回滚 */
    res.json({ status: 500 });
  });
  
});


app.get('/search', function (req, res) {
  let words = req.query.word;
  let page = parseInt(req.query.page) || 1;
  let type = req.query.type || 'author';
  let keyword = req.query.keyword;
  let size = req.query.size;
  let columns = req.query.columns;
  let rows = req.query.rows;
  console.log(req.query);

  if (type == 'author') {
    let where = {};
    if (words) {
      where.name = {
        $like: `%${words}%`
      }
    }
    if (req.query.dynasty) {
      where.dynasty = req.query.dynasty
    }
    if (keyword) {
      where.name = {
        $like: `%${keyword}%`
      }
    }

    Author.findAll({
      where: where,
      offset: (page - 1) * 20,
      limit: 20
    }).then((result) => {
      authorData = result;
      res.json({ datas: authorData, status: 200 });
    });
  } else {
    let sql = 'select a.*, b.words words from poetry a, poetry_words b where a.id = b.id '
    let wheres = [];
    if(words) {
      wheres.push(`( a.title like '%${words}%' or b.words like '%${words}%' )`);
    }
    if(keyword) {
      wheres.push(` a.keywords like '%${pool.escape(keyword)}%' `);
    }

    if(keyword) {
      wheres.push(` a.keywords like '%${pool.escape(keyword)}%' `);
    }
    if (columns) {
      wheres.push(` b.columns = ${pool.escape(columns)} `);
    }
    if(columns && rows) {
      size = columns * rows;
    }
    if (size) {
      wheres.push(` b.size = ${pool.escape(size)} `);
    }
    // if ($or.length) where.$or = $or;
    if (req.query.dynasty) {
      wheres.push(` a.dynasty = ${pool.escape(req.query.dynasty)} `);
    }

    wheres = wheres.join(' and ');
    if(wheres) {
      sql += ' and ' + wheres;
    }
    
    sql += ` limit ${(page-1) * 20}, 20`;
    console.log(sql)
    try{
      pool.query(sql, function(error, results, fields) {
        if (error) res.json({ status: 500 });
        // log(results)
        res.json({ datas: results, status: 200 });
      });
    }catch(e) {
      res.json({ status: 500 });
    }
    
    // let where = {};
    // let hasWhere = false;
    // let $or = [];
    // let rwhere = {id: Sequelize.col('poetry.id')}
    // if (word) {
    //   hasWhere = true;
    //   $or.push({
    //     title: {
    //       $like: `%${word}%`
    //     }
    //   });
      
    //   rwhere.words = {
    //     $like: `%${word}%`
    //   }
    //   // $or.push({
    //   //   description: {
    //   //     $like: `%${word}%`
    //   //   }
    //   // });
    // }
    // if (keyword) {
    //   $or.push({
    //     keywords: {
    //       $like: `%${keyword}%`
    //     }
    //   });
    // }
    // if (size) {
    //   rwhere.size = size;
    // }
    // if(columns) {
    //   rwhere.columns = columns;
    // }
    // if ($or.length) where.$or = $or;
    // if (req.query.dynasty) {
    //   hasWhere = true;
    //   where.dynasty = req.query.dynasty
    // }
    // Poetry.findAll({
    //   where: hasWhere ? where : null,
    //   offset: (page - 1) * 20,
    //   limit: 20,
    //   include: [{
    //     model: PoetryWords,
    //     where: rwhere
    //   }]
    // }).then((result) => {
    //   poetryData = result;
    //   res.json({ datas: poetryData, status: 200 });
    // });
  }
});

app.get('/author', function (req, res) {
  let id = req.query.id;
  if (id == undefined) {
    res.json({ status: 403 });
  }
  let poetryData = [];
  let authorData = [];
  let index = 0;

  let resFun = () => {
    if (index == 2) {
      if (authorData.length == 0) {
        res.json({ status: 403 });
      } else {
        // log(results);
        res.json({ author: authorData[0], poetrys: poetryData, status: 200 });
      }
    }
  }
  Poetry.findAll({
    where: {
      author_id: id
    },
    limit: parseInt(req.query.size) || 5
  }).then((result) => {
    index++;
    poetryData = result;
    resFun();
  });

  Author.findAll({
    where: {
      id: id
    }
  }).then((result) => {
    index++;
    authorData = result;
    resFun();
  });

});

logs('系统启动成功:', port);
