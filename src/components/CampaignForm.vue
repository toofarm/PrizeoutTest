<template>
  <div class="campaign-form">
      <div class="top-border">
          <div class="campaign-header-wrap">
            <h3>Campaign</h3>
            <h4>Create your ad campaign</h4>
          </div>
      </div>
      <campaign-form-subsection1></campaign-form-subsection1>
      <campaign-form-subsection2></campaign-form-subsection2>
      <campaign-form-subsection3></campaign-form-subsection3>
  </div>
</template>

<script>
import CampaignFormSubsection1 from './CampaignFormSubsection1.vue'
import CampaignFormSubsection2 from './CampaignFormSubsection2.vue'
import CampaignFormSubsection3 from './CampaignFormSubsection3.vue'

export default {
  name: "CampaignForm",
  components: {
      CampaignFormSubsection1,
      CampaignFormSubsection2,
      CampaignFormSubsection3
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

.campaign-form {
    grid-row-start: 2;
    grid-column-start: 3;
    grid-column-end: 7;
    background-color: $formBackground;
    z-index: 500;
    box-shadow: $standardShadow;
    border: 1.5px solid $softBlue;
    .top-border {
        height: 69px;
        background: $headerGradient;
        color: white;
        text-align: left;
        padding: 0 24px;
        display: flex;
        .campaign-header-wrap {
            align-self: center;
            h3 {
            font-size: 15px;
            margin: 5px 0;
            }
            h4 {
                font-size: 11px;
                margin: 0;
            }
        }
    }
}

</style>
