var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var log = require("hey-log");
var config = require('./server/config/data');
var chalk = require("chalk");
var utils = require("hey-utils");

global.log = log;
global.logs = function () {
  log(chalk.green(...arguments))
};

const sequelize = new Sequelize('poetry', config.user, config.password, config.seq);

const Poetry = sequelize.import("./server/models/poetry");
const Author = sequelize.import("./server/models/author");
const PoetryLine = sequelize.import("./server/models/poetry_line");

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
  Poetry.findAll({
    where: {
      id: id
    }
  }).then((result) => {
    index++;
    poetryData = result;
    resFun();
  });

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
  let word = req.query.word;
  console.log(req.query);
  let page = parseInt(req.query.page) || 1;
  let type = req.query.type || 'author';
  let keyword = req.query.keyword;

  if (type == 'author') {
    let where = {};
    if (word) {
      where.name = {
        $like: `%${word}%`
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
    let where = {};
    let hasWhere = false;
    let $or = [];
    if (word) {
      hasWhere = true;
      $or.push({
        title: {
          $like: `%${word}%`
        }
      });
      
      $or.push({
        description: {
          $like: `%${word}%`
        }
      });
    }
    if (keyword) {
      hasWhere = true;
      $or.push({
        keywords: {
          $like: `%${keyword}%`
        }
      });
    }
    if ($or.length) where.$or = $or;
    if (req.query.dynasty) {
      hasWhere = true;
      where.dynasty = req.query.dynasty
    }
    Poetry.findAll({
      where: hasWhere ? where : null,
      offset: (page - 1) * 20,
      limit: 20
    }).then((result) => {
      poetryData = result;
      res.json({ datas: poetryData, status: 200 });
    });
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
