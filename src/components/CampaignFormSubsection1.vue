<template>
  <div class="campaign-form-subsection">
      <h3>Campaign Info</h3>
      <div class="form-entry-wrap">
          <div class="inner-form-wrap-label">
            <label for="campaign-name">Campaign Name</label>
            <img alt="Info icon" src="../assets/i Icon.svg" />
          </div>
          <div class="inner-form-wrap-input">
            <input id="campaign-name" placeholder="NFL_Week3" type="text" v-model="campaign" />
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "CampaignFormSubsection1",
  data () {
      return {
          campaign: ""
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

.campaign-form-subsection {
    @extend %form-subsection;
    .form-entry-wrap {
        @extend %form-entry;
    }
}

</style>
