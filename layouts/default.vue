<template>
  <div class="main-vue">
    <div class="header">
      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link :to="'/poetry/'+randomId" @click.native="change">随机一首</nuxt-link>
      <div class="search-div">
        <input type="text" placeholder="查询诗句/诗人" v-model="searchText" @keyup.enter="search" />
        <nuxt-link class="searchLink" :to="'/search/'+searchText">查询</nuxt-link>
      </div>
    </div>
    <nuxt/>
  </div>
</template>

<script>

const randomPoetry = () => {
  return parseInt(Math.random()*70000);
}
export default {
  data(){
    let searchText = (this.$route.name == 'search-id'? this.$route.params.id : '') || '';
    return {
      randomId: randomPoetry(),
      searchText: searchText
    }
    // this.$route.name == 'search-id'? this.$route.params.id : ''
  },
  methods: {
    change() {
      this.randomId = randomPoetry();
    },
    search() {
      this.$el.querySelector(".searchLink").click();
    }
  }
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?4eb6cac6d602b00b0de3b0dd0a59f0c1";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
