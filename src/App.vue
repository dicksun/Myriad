<template>
  <div id="app">
   <!-- Navigation Bar -->
   <NavBar></NavBar>
   <Services></Services>
  </div>
</template>

<script>
import Services from './components/Services.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    Services
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
