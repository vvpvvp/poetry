<template>
  <div class="poetry-vue">
    <div>
      <nuxt-link :to="'/poetry/'+ (parseInt(params.id)-1)">上一个</nuxt-link>
      <nuxt-link :to="'/poetry/'+ (parseInt(params.id)+1)">下一个</nuxt-link>
    </div>
    <div v-if="!poetry">
      <p class="not-found">不存在该首诗。</p>
    </div>
    <div v-else>
      <h1>{{poetry.title}}</h1><a>赞</a><a>认识</a>
      <p>朝代: {{poetry.dynasty}}</p>
      <p>作者：
        <nuxt-link :to="'/author/'+ poetry.author_id" v-if="poetry.author_id">{{poetry.author}}</nuxt-link>
        <span v-else>{{poetry.author}}</span>
      </p>
      <ul>
        <li v-for="line of poetryList">
          <p>{{line.words}}</p>
          <p>{{line.desc}}</p>
          <p>{{line.notes}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import location from '../src/js/location';

export default {
  transition: 'bounce',
  asyncData({ params, error }) {
    return axios.get(`${location()}/poetry?id=${params.id}`)
      .then((res) => {
        if (res.data.status == 200) {
          return { poetry: res.data.poetry, poetryList: res.data.poetryList, params: params };
        } else {
          return { poetry: null, poetryList: [], params: params };
        }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Not found' })
      })
  },
  name: 'poetryId',
  data(){
    return {
      load: false
    }
  },
  head() {
    return {
      title: this.poetry ? this.poetry.title : '不存在' 
    }
  }
}
</script>