<template>
  <div class="search-vue">
    <div class="search-div">
      <div class="search-input">
        <input type="text" placeholder="查询诗句/诗人" v-model="searchText" @keyup.enter="search" />
        <nuxt-link class="searchLink" :to="'/search/'+searchText+'?type='+type">查询</nuxt-link>
        <nuxt-link class="searchLink" :to="'/search/?type='+type">清除</nuxt-link>
      </div>
      <div v-if="query.keyword">
        <span>分类</span>
        <span class="selected">{{query.keyword}}</span>
        <nuxt-link class="searchLink" :to="'/search/?type='+type">清除</nuxt-link>
      </div>
      <div>
        <span>类型</span>
        <nuxt-link :class="{'selected': type=='author'}" :to="typeUrl('author')">诗人</nuxt-link>
        <nuxt-link :class="{'selected': type=='poetry'}" :to="typeUrl('poetry')">诗词</nuxt-link>
      </div>
      <div>
        <span>朝代</span>
        <nuxt-link :class="{'selected': !query.dynasty || query.dynasty==''}" :to="dynastyUrl('')" key="不限">不限</nuxt-link>
        <nuxt-link v-for="d of dynasty" :class="{'selected': query.dynasty==d}" :to="dynastyUrl(d)" :key="d">{{d}}</nuxt-link>
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
        <p class="dark">{{poetry.description}}</p>
      </div>
    </div>
    <div v-if="datas.length == 0" class="gray text-center no-result">
      未找到数据
    </div>
    <div class="page">
      <span>当前第{{page}}页</span>
      <nuxt-link v-if="query.page>1" :to="url+'&page='+(page-1)">上一页</nuxt-link>
      <nuxt-link v-if="datas.length>=20" :to="url+'&page='+(page+1)">下一页</nuxt-link>
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
    let word = params.id || '';
    let keyword = query.keyword || '';
    // console.log(`http://localhost:3002/search?word=${params.id}&page=${query.page||1}&type=${type}`);
    return axios.get(`${location()}/search`, {
      params: {
        word: word,
        keyword,
        type: type,
        page,
        dynasty: query.dynasty || '',
      }
    }).then((res) => {
      let url = '/search/' + word + '?type=' + type + '&dynasty=' + (query.dynasty || '') + '&keyword=' + (query.keyword || '');
      // console.log(url);
      let data = { datas: (res.data ? res.data.datas : []), params, query, type, page, url };
      // console.log(data);
      return data;
    })
      .catch((e) => {
        error({ statusCode: 404, message: 'Not found' })
      })
  },
  data() {
    let searchText = this.$route.params.id || '';
    return {
      dynasty: [
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
      searchText: searchText
    }
  },
  head() {
    return {
      title: '诗词'
    }
  },
  methods: {
    typeUrl(type) {
      return '/search/' + (this.params.id || '') + '?type=' + type + '&keyword=' + (this.query.keyword || '') + '&dynasty=' + (this.query.dynasty || '');
    },
    dynastyUrl(type) {
      return '/search/' + (this.params.id || '') + '?type=' + this.type + '&keyword=' + (this.query.keyword || '') + '&dynasty=' + type;
    },
    search() {
      this.$el.querySelector(".searchLink").click();
    }
  }
}
</script>