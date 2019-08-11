<template>
  <div class="sticky-nav">
      <div class="top-border"></div>
      <sticky-nav-menu
      v-for="menu in menus"
      :key="menu.title"
      :menu="menu"></sticky-nav-menu>
  </div>
</template>

<script>
import StickyNavMenu from './StickyNavMenu.vue'

export default {
  name: "StickyNav",
  data () {
    return {
      menus: [
        {
          'title' : 'Campaign',
          'items' : ['Campaign Info', 'Audience', 'Budget']
        },
        {
          'title' : 'Ads',
          'items' : ['Creative', 'Offer']
        }
      ]
    }
  },
  components: {
    StickyNavMenu
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

.sticky-nav {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 1;
    background-color: $formBackground;
    margin-top: 10em;
    border: 1.5px solid #8898B2;
    box-shadow: $standardShadow;
    z-index: 500;
    height: 272px;
    max-width: 176px;
    position: fixed;
    .top-border {
         background: linear-gradient(90deg, rgba(58,134,191,1) 0%, rgba(55,118,167,1) 100%);
         height: 7px;
    }
}

</style>
