<template>
  <div>
    <h1>{{author.name}}</h1>
    <p>朝代: {{author.dynasty}}</p>
    <article>{{author.description}}</article>
    <div>
      <dl>
        <template v-for="p of poetrys">
        <dt><nuxt-link :to="'/poetry/'+ p.id">{{p.title}}</nuxt-link></dt>
        </template>
      </dl>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  asyncData ({ params, error }) {
    return axios.get(`http://localhost:3002/author?id=${params.id}`)
    .then((res) => {
      if(res.status == 200){
        return res.data;
      }else{
        error({ statusCode: 404, message: 'Post not found' })
      }
      return {};
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Post not found' })
    })
  },
  head() {
    return {
      title: this.author.name
    }
  }
}
</script>