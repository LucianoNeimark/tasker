<template>
  <div class="navBar">
	<b-navbar toggleable="md" type="dark" variant="dark" sticky="true">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">Tasker</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#"></b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

    <b-navbar-nav>
      <b-nav-item href="#">Log In</b-nav-item>
      <b-nav-item href="#">Register</b-nav-item>
    </b-navbar-nav>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>

</div>
</template>

<script>
	 export default {
  name: 'navBar', // nombre del componente
  data () {
    return {
      
    }
  },
  methods: 
  {

  }
}

</script>

<style>
</style>