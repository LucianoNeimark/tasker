<template>
<div id="goodbyeWorld">
  Hola, mi nombre es {{ nombre }}.
  y mi apellido es{{ apellido }}
    <br>
    <br>
  <input type="text" v-model="nombre" placeholder="Ingrese su nombre" />
  <input type="text" v-model="apellido" placeholder="Ingrese su apellido" />
  <br>
  <br>
  <button v-on:click="alerta">Alerta</button>
</div>
</template>

<script>

// amoritan@ort.edu.ar
//hola bb soy git hub

export default {
  name: 'GoodbyeWorld',
  data () {
    return {
      nombre: '',
      apellido: ''
    }
  },
  methods: {
    alerta () {
      alert(this.nombre + this.apellido)
    }
  }
}
</script>

<style scoped>

</style>
