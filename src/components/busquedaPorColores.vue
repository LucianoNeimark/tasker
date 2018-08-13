<template>
<div>
  <h6>Default</h6>
  <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />

  <div class="mt-4">currentPage: {{currentPage}}</div>
</div>
</template>

<script>
  //OLax
export default {
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#page/' + pageNum + '/foobar'
    }
  }
}
</script>