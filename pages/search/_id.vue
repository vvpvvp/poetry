<template>
  <div class="search-vue">
    <div class="search-div">
      <div v-if="query.tag">
        <span>分类</span>
        <span class="selected">{{query.tag}}</span>
        <nuxt-link class="searchLink" :to="'/search/?type='+type">清除</nuxt-link>
      </div>
      <div>
        <span>类型</span>
        <span :class="{'selected': type=='poetry'}" class="link" @click="searchType('poetry')">诗词</span>
        <span :class="{'selected': type=='author'}" class="link" @click="searchType('author')">诗人</span>
        <!-- <nuxt-link :class="{'selected': type=='poetry'}" :to="typeUrl('poetry')">诗词</nuxt-link> -->
      </div>
      <div>
        <span>朝代</span>
        <span :class="{'selected': !dynasty || dynasty==''}" class="link" @click="searchDynasty('')" key="不限">不限</span>
        <span v-for="d of dynastys" :class="{'selected': dynasty==d}" class="link" @click="searchDynasty(d)" :key="d">{{d}}</span>
      </div>
      <div>
        <span>其他</span>
        <input type="text" placeholder="几言" style="width: 30px" v-model="columns" @keyup.enter="search" />
        <input type="text" placeholder="几行" style="width: 30px" v-model="rows" @keyup.enter="search" />
        <input type="text" placeholder="字数" style="width: 30px" v-model="size" @keyup.enter="search" />
        <input type="text" placeholder="查询诗句/诗人" v-model="id" @keyup.enter="search" />
        <span class="link" @click="search">查询</span>
        <span class="link" @click="emptySearch">清除</span>
      </div>
    </div>
    <div v-if="type == 'author'">
      <div v-for="author of datas" class="author-info">
        <div class="img" :style="{'background-image': ('url('+(author.src||'/image/default.png')+')')}"></div>
        <div class="author-desc">
          <p class="title">
            <nuxt-link :to="'/author/'+ author.id">{{author.name}}</nuxt-link>
          </p>
          <p>朝代: {{author.dynasty}}</p>
          <article class="dark">{{author.description}}</article>
        </div>
      </div>
    </div>
    <div v-else class="resultlist">
      <div v-for="poetry of datas">
        <p class="title">
          <nuxt-link :to="'/poetry/'+ poetry.id">{{poetry.title}}</nuxt-link>
        </p>
        <p>朝代: {{poetry.dynasty}}&nbsp;&nbsp;&nbsp; 作者：
          <nuxt-link :to="'/author/'+ poetry.author_id" v-if="poetry.author_id">{{poetry.author}}</nuxt-link>
          <span v-else>{{poetry.author}}</span>
        </p>
        <p class="dark">{{poetry.words}}</p>
      </div>
    </div>
    <div v-if="datas.length == 0" class="gray text-center no-result">
      未找到数据
    </div>
    <div class="page">
      <span>当前第{{page}}页</span>
      <nuxt-link v-if="query.page>1" :to="curl+'&page='+(page-1)">上一页</nuxt-link>
      <nuxt-link v-if="datas.length>=20" :to="curl+'&page='+(page+1)">下一页</nuxt-link>
    </div>
  </div>
</template>
<script>
import location from '../../src/js/location';
import axios from 'axios';
export default {
  transition: 'bounce',
  asyncData({ params, query, error }) {
    let type = query.type || 'poetry';
    let page = parseInt(query.page) || 1;
    let id = params.id || '';
    let tag = query.tag || '';
    // console.log(`http://localhost:3002/search?word=${params.id}&page=${query.page||1}&type=${type}`);
    let p = {
      word: id,
      keyword: tag,
      type: type,
      page,
      rows: query.rows || null,
      columns: query.columns || null,
      size: query.size || null,
      dynasty: query.dynasty || '',
    }
    return axios.get(`${location()}/search`, {
      params: p
    }).then((res) => {
      let data = { 
        datas: (res.data ? res.data.datas : [])
      };
      return data;
    }).catch((e) => {
      error({ statusCode: 404, message: 'Not found' })
    })
  },
  data() {
    return {
      dynastys: [
        '先秦',
        '两汉',
        '魏晋',
        '南北朝',
        '隋代',
        '唐代',
        '五代',
        '宋代',
        '金朝',
        '元代',
        '明代',
        '清代',
      ],
      dynasty: this.$route.query.dynasty,
      id: this.$route.params.id || '',
      tag: this.$route.query.tag,
      type: this.$route.query.type,
      // page: parseInt(this.$route.query.page) || 1,
      rows: this.$route.query.rows,
      columns: this.$route.query.columns,
      size: this.$route.query.size,
    }
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    query() {
      return this.$route.query;
    },
    curl() {
      return `/search/${this.id || ''}?type=${this.type||''}&tag=${this.tag||''}&dynasty=${this.dynasty||''}&rows=${this.rows||''}&columns=${this.columns||''}&size=${this.size||''}`;
    }
  },
  head() {
    return {
      title: '诗词'
    }
  },
  methods: {
    emptySearch() {
      this.$router.push(`/search?type=${this.type}`);
    },
    searchType(type) {
      this.type = type;
      this.search();
    },
    searchDynasty(dynasty) {
      this.dynasty = dynasty;
      this.search();
    },
    search() {
      this.$router.push(this.curl);
    }
  }
}
</script>