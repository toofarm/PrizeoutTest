<template>
  <main>
      <form-grid></form-grid>
  </main>
</template>

<script>
import FormGrid from './CampaignForm/FormGrid.vue'

export default {
  name: "MainBody",
  components: {
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
