<template>
  <div class="author-vue">
    <div class="page">
      <nuxt-link :to="'/author/'+ (parseInt(params.id)-1)">上一个</nuxt-link>
      <nuxt-link :to="'/author/'+ (parseInt(params.id)+1)">下一个</nuxt-link>
    </div>
    <div class="img" :style="{'background-image': ('url('+author.src+')')}"></div>
    <div class="author-desc">
      <p class="title">{{author.name}}</p>
      <p>朝代: {{author.dynasty}}</p>
      <article>{{author.description}}</article>
      <div>
        <dl class="poetrylist">
          <div class="poetrylist-desc">共{{poetrys.length}}首诗</div>
          <template v-for="p of poetrys">
            <dt>
              <nuxt-link :to="'/poetry/'+ p.id">{{p.title}}</nuxt-link>
            </dt>
          </template>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import location from '../../src/js/location';

export default {
  name: 'authorall',
  transition: 'bounce',
  asyncData({ params, error }) {
    return axios.get(`${location()}/author?id=${params.id}&&size=5000`)
      .then((res) => {
        if (res.status == 200) {
          return { author: res.data.author, poetrys: res.data.poetrys, params: params };
        } else {
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