<template>
  <div>
    <h1>{{poetry.title}}</h1>
    <p>朝代: {{poetry.dynasty}}</p>
    <p>作者：<nuxt-link :to="'/author/'+ poetry.author_id" v-if="poetry.author_id">{{poetry.author}}</nuxt-link><span v-else>{{poetry.author}}</span></p>
    <ul>
      <li v-for="line of poetryList">
        <p>{{line.words}}</p>
        <p>{{line.desc}}</p>
        <p>{{line.notes}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  asyncData ({ params, error }) {
    return axios.get(`http://localhost:3002/poetry?id=${params.id}`)
    .then((res) => {
      if(res.status == 200){
        return res.data;
      }else{
        error({ statusCode: 404, message: 'Not found' })
      }
      return {};
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Not found' })
    })
  },
  head() {
    return {
      title: this.poetry.title
    }
  }
}
</script>