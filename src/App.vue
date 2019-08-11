<template>
  <div id="app">
    <div id="wave"></div>
    <nav-bar></nav-bar>
    <main-body></main-body>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import MainBody from './components/MainBody.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    MainBody
  }
}
</script>

<style lang="scss">
@import "./styles/_globals.scss";

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Open Sans SemiBold', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $mainBodyText;
  height: 100vh;
  background-color: $mainBackground;
  height: 100vh;
  width: 100%;
  #wave {
    position: fixed;
    height: 70px;
    width: 100%;
    background: $waveBlue;
    margin-top: 200px;
  }
  #wave:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 100%;
    height: 80px;
    background-color: $mainBackground;
    top: 40px;
  }
  #wave:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 800px;
    height: 70px;
    background-color: $waveBlue;
    left: 0;
    top: 27px;
  }
}
</style>
