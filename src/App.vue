<template>
  <div id="app">
    <GoodbyeWorld />
    <rating />
    <popUp/>
    <busquedaPorColores/>
  </div>
</template>

<script>
import GoodbyeWorld from './components/GoodbyeWorld.vue'
import rating from './components/rating.vue'
import popUp from './components/popUp.vue'
import busquedaPorColores from './components/busquedaPorColores.vue'
export default {
  name: 'app',
  components: {
    GoodbyeWorld,
    rating,
    popUp,
    busquedaPorColores
  }
}
</script>

<style>
</style>
