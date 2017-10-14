<template>
  <div id="app">
    <pagination :maxPage="10"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Pagination from '../../src/Pagination'

  Vue.component('pagination', Pagination)

  export default {
    name: 'app'
  }
</script>
