<style>
  .loading-page p{
    background: url(/loading.png) no-repeat;
    background-size: contain;
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
</style>
<template lang="html">
  <div class="loading-page" v-if="loading">
    <p></p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>