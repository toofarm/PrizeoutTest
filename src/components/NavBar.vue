<template>
  <header>
      <h1>
        <a href="https://www.prizeout.com/">
          <img alt="Prizeout logo" src="../assets/White Prizeout@2x@2x.png">
        </a>
      </h1>
      <nav-menu></nav-menu>
      <nav-icons></nav-icons>
  </header>
</template>

<script>
import NavMenu from './NavMenu.vue'
import NavIcons from './NavIcons.vue'

export default {
  name: 'NavBar',
  components: {
      NavMenu,
      NavIcons
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_globals.scss';

header {
    position: fixed;
    width: 100%;
    top: 0px;
    background-color: $navBackground;
    display: flex;
    padding: 10px 50px;
    box-sizing: border-box;
    z-index: 550;
    h1 {
        padding: 0px;
        margin: 0px;
        align-self: center;
        img {
            width: 91px;
            height: 19px;
        }
    }
}
</style>
