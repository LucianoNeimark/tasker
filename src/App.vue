<template>
  <div id="app">
  	<navBar />
    <infoPage />
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import infoPage from './components/screens/infoPage.vue'
export default {
  name: 'app',
  components: {
  	navBar,
    infoPage

  }
}
</script>

<style>
  
</style>
