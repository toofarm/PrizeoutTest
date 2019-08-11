<template>
  <main>
      <prompt-banner></prompt-banner>
      <form-grid></form-grid>
  </main>
</template>

<script>
import PromptBanner from './PromptBanner.vue'
import FormGrid from './FormGrid.vue'

export default {
  name: "MainBody",
  components: {
      PromptBanner,
      FormGrid
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

main {
  background-color: $mainBackground;
  width: 100%;
  box-sizing: border-box;
  margin-top: 57px;
  padding-bottom: 3em;
}
</style>
