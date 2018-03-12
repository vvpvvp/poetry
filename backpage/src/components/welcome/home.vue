<style lang='less'>
.poetry-table{
  margin: 20px 50px 0 0;
  width: 1000px;
  position: relative;
  .h-tag {
    cursor: pointer;
    &:hover{
      background: @primary-color;
      color: #FFF;
    }
  }

  .section-title{
    margin: 10px 40px;
    font-size: 20px;
  }
  .deleteIcon {
    position: absolute;
    right: -100px;
  }
}
</style>
<template>
  <div class="app-home" v-padding="20">
    <Form class="poetry-table" mode="twocolumn">
      <div class="clearfix">
      <FormItem label="搜索" single>
        <Search v-model="id" @search="get" showSearchButton></Search>
        <span class="link" @click="clear">清空</span>
      </FormItem>
      <FormItem label="诗" >
        <input type="text" v-model="poetry.title">
      </FormItem>
      <FormItem label="作者">
        <input type="text" v-model="poetry.author">
      </FormItem>
      <FormItem label="朝代">
        <input type="text" v-model="poetry.dynasty">
      </FormItem>
      <FormItem label="年代">
        <input type="text" v-model="poetry.from">
      </FormItem>
      <FormItem label="关键字">
        <TagInput v-model="poetry.tagList"></TagInput>
      </FormItem>
      <FormItem label="补充" readonly>
        <span v-for="t of tags" class="h-tag" @click="saveTag(t)">{{t}}</span>
      </FormItem>
      <FormItem label="描述" single>
        <textarea v-model="poetry.description" v-autosize></textarea>
      </FormItem>
      </div>
      <div v-for="(line,index) of poetryLine" class="clearfix">
        <div class="section-title">第{{index +1}}行</div>
        <div>
          <FormItem label="诗词" single>
            <textarea v-model="line.words" v-autosize></textarea>
          </FormItem>
          <FormItem label="描述">
            <textarea v-model="line.desc" v-autosize></textarea>
          </FormItem>
          <FormItem label="注解">
            <textarea v-model="line.notes" v-autosize></textarea>
          </FormItem>
          <div class="deleteIcon">
            <Button color="red" @click="deletePoetry(index)">删除一行</Button>
          </div>
        </div>
      </div>
      <FormItem single>
        <Button color="primary" @click="addPoetry()">添加一行</Button>
      </FormItem>
      <FormItem>
        <Button color="primary" @click="savePoetry()">保存</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>

import Poetry from 'model/Poetry';
import PoetryLine from 'model/PoetryLine';

export default {
  data() {
    return {
      id: this.$route.query.id,
      poetry: Poetry.parse({}),
      poetryLine: [],
      tags: [
        '四言',
        '五言',
        '六言',
        '七言',
        '八言',
        '九言',
        '碑刻',
      ]
    }
  },
  mounted() {
    this.get();
  },
  methods: {
    clear() {
      // this.$router.push("/");
      this.id = null;
      this.poetry = Poetry.parse({});
      this.poetryLine = [];
    },
    deletePoetry(index) {
      this.poetryLine.splice(index, 1);
    },
    addPoetry() {
      this.poetryLine.push(PoetryLine.parse({}));
    },
    saveTag(t) {
      let exist = false;
      for(let tag of this.tags) {
        let index = this.poetry.tagList.indexOf(tag);
        if( index > -1){
          if(t == tag) exist = true;
          this.poetry.tagList.splice(index, 1);
        } 
      }
      if(!exist) {
        this.poetry.tagList.push(t);
      }
    },
    get: async function () {
      if(!this.id){
        return;
      }
      this.$router.push("/?id="+this.id);
      let resp = await R.P.get(this.id);
      if(resp.ok) {
        this.poetry = Poetry.parse(resp.poetry);
        this.poetry.tagList = this.poetry.keywords? (this.poetry.keywords||'').split(",") : [];
        this.poetryLine = PoetryLine.parse(resp.poetryList);
      }
    },
    savePoetry: async function () {
      if(this.poetryLine.length == 0) {
        this.$Message('没有对应的诗文');
      }

      let description = '';
      this.poetryLine.forEach(item => description += item.words);
      this.poetry.description = description;

      this.poetry.keywords = this.poetry.tagList.join(',');
      if(this.id) {
        let resp = await R.P.update(this.id, {poetry: this.poetry, poetryLine: this.poetryLine});
        if(resp.ok) {
          this.$Message('保存成功');
        }
      } else {
        let resp = await R.P.create({poetry: this.poetry, poetryLine: this.poetryLine});
        if(resp.ok) {
          this.$Message('保存成功');
          this.id = resp.id;
          this.$router.push("/?id="+this.id);
        }
      }
      this.get();
    }
  }
}
</script>
