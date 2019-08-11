<template>
  <div class="main-grid">
      <sticky-nav></sticky-nav>
      <campaign-form></campaign-form>
  </div>
</template>

<script>
import StickyNav from './StickyNav.vue'
import CampaignForm from './CampaignForm.vue'

export default {
  name: "FormGrid",
  components: {
    StickyNav,
    CampaignForm
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

.main-grid {
    display: grid;
    grid-template-rows: 120px auto auto;
    grid-template-columns: repeat(8, 1fr);
    z-index: 500;
}

</style>
