// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Pagination.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App v-on:update="onChange" :maxPage="10" tabletLocation="left"/>',
  methods: {
    onChange (page) {
      console.log(page)
    }
  },
  components: { App }
})
