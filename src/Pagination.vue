<template>
  <nav class="pagination" v-bind:class="`is-${tabletLocation}`" role="navigation" aria-label="pagination">
    <a class="pagination-previous" v-on:click="onPrev()" v-bind:disabled="current === 1">Previous</a>
    <a class="pagination-next" v-on:click="onNext()" v-bind:disabled="current === maxPage">Next page</a>
    <ul class="pagination-list">
      <li v-for="page in pages">
        <a class="pagination-link" v-on:click="onChange(page)" v-bind:class="{ 'is-current' : page === current }">{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'vue-bulma-pagination',
    props: {
      initialPage: {
        type: Number,
        default: 1
      },
      maxPage: {
        type: Number,
        required: true
      },
      displayPage: {
        type: Number,
        default: 5
      },
      count: {
        type: Object
      },
      page: {
        type: Object
      },
      tabletLocation: {
        type: String,
        default: 'centered'
      }
    },
    data () {
      return {
        current: this.initialPage
      }
    },
    computed: {
      pages () {
        let startPage = Math.max(this.current - Math.floor(this.displayPage / 2), 1)
        const endPage = Math.min(startPage + this.displayPage - 1, this.maxPage)
        if (endPage - startPage < this.displayPage - 1) {
          startPage = Math.max(endPage - this.displayPage + 1, 1)
        }
        const pages = []
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i)
        }
        return pages
      }
    },
    methods: {
      onNext () {
        this.onChange(Math.min(this.current + 1, this.maxPage))
      },
      onPrev () {
        this.onChange(Math.max(this.current - 1, 1))
      },
      onChange (page) {
        this.current = page
        this.$emit('update', this.current)
      }
    }
  }
</script>