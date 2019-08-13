<template>
  <div class="campaign-form-subsection">
      <h3>Budget</h3>
      <div class="form-entry-wrap">
          <div class="inner-form-wrap-label">
            <label for="cpa">CPA</label>
            <img alt="Info icon" src="../../assets/i Icon.svg" />
          </div>
          <div class="inner-form-wrap-input">
            <input id="cpa" placeholder="$0.00" type="number" v-model="cpa" />
          </div>
          <div class="form-field-explainer">
                The Cost per Acquisition you're willing to pay for <span>a new user.</span>
            </div>
      </div>
      <div class="form-entry-wrap">
          <div class="inner-form-wrap-label">
            <label for="cpa">CPR %</label>
            <img alt="Info icon" src="../../assets/i Icon.svg" />
          </div>
          <div class="inner-form-wrap-input">
            <input id="cpr" placeholder="0%" type="number" v-model="cpr" />
          </div>
          <div class="form-field-explainer">
                The Cost per Withdrawl percentage for <span>a new user.</span>
            </div>
      </div>
      <div class="form-entry-wrap">
          <div class="inner-form-wrap-label">
            <label for="budget">Max Budget</label>
            <img alt="Info icon" src="../../assets/i Icon.svg" />
          </div>
          <div class="inner-form-wrap-input">
            <input id="budget" placeholder="00.00" type="number" v-model="budget" />
          </div>
          <div class="form-field-explainer">
                The max dollar value to spend on acquiring users.
            </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "CampaignFormSubsection3",
  data () {
      return {
          cpa: "",
          cpr: "",
          budget: ""
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

.campaign-form-subsection {
    @extend %form-subsection;
    .form-entry-wrap {
        @extend %form-entry;
        grid-template-columns: 33% 23% 33%;
            .inner-form-wrap-label {
                grid-column: 1 / 2;
            }
            .inner-form-wrap-input {
               grid-column: 2 /3;
            }
            .form-field-explainer {
                grid-column: 3 / 4;
                display: inline-block;
                font-size: 12px;
                max-width: 184px;
                line-height: 1.5em;
                span {
                    font-weight: bold;
                    color: $headerText;
                }
            }
    }
}

</style>
