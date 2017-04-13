<template lang="jade">
  #app
    h1
      router-link.appname(to="/") {{ name }}

    <!-- <img src="./assets/logo.png"> -->
    router-view
</template>

<script>
export default {
  name: 'texxit',
  data () {
    return {
      name: 'texxit'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.appname {
  color: #2c3e50;
  text-decoration: none;
}
</style>
