<template>
  <header>
      <div class="header-wrap">
        <h1>
            <a href="https://www.prizeout.com/">
                <img alt="Prizeout logo" src="../../assets/White Prizeout@2x@2x.png">
            </a>
        </h1>
        <nav-menu></nav-menu>
        <nav-icons></nav-icons>
      </div>
      <prompt-banner></prompt-banner>
  </header>
</template>

<script>
import NavMenu from './NavMenu.vue'
import NavIcons from './NavIcons.vue'
import PromptBanner from './PromptBanner.vue'

export default {
  name: 'NavBar',
  components: {
      NavMenu,
      NavIcons,
      PromptBanner
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_globals.scss';

header {
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 550;
    .header-wrap {
        background-color: $navBackground;
        display: flex;
        padding: 10px 50px;
        box-sizing: border-box;
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
}
</style>
