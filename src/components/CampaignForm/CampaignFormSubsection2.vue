<template>
  <div class="campaign-form-subsection">
      <h3>Audience</h3>
      <div class="form-entry-wrap">
          <div class="inner-form-wrap-label">
            <label for="audience-creation">Audience Creation</label>
            <img alt="Info icon" src="../../assets/i Icon.svg" />
          </div>
          <div class="inner-form-wrap-input">
            <label for="audience-creation" class="dropdown-label">
                <select id="audience-creation" name="audience-creation" v-model="audienceSelect">
                    <option value="create">Create a new audience</option>
                    <option value="import">Import audience from DMP</option>
                    <option value="select">Select Prizeout audience</option>
                </select>
            </label>
          </div>
      </div>
      <div class="form-entry-wrap">
          <div class="inner-form-wrap-label">
            <label for="audience-name">Audience Name</label>
            <img alt="Info icon" src="../../assets/i Icon.svg" />
          </div>
          <div class="inner-form-wrap-input">
            <input type="text" id="audience-name" v-model="audienceName" placeholder="Audience 1" />
          </div>
      </div>
      <div class="form-entry-wrap">
          <div class="inner-form-wrap-label">
            <label for="audience-name">User Targeting</label>
            <img alt="Info icon" src="../../assets/i Icon.svg" />
          </div>
          <div class="inner-form-wrap-input">
            <label class="radio-container">
                <input type="radio" name="targeting" v-model="targeting" value="all" 
               checked="true" />
                <div class="fake-radio first">All</div>
            </label>
            <label class="radio-container">
                <input type="radio" name="targeting" v-model="targeting" value="new"  />
                <div class="fake-radio">New</div>
            </label>
            <label class="radio-container">
                <input type="radio" name="targeting" v-model="targeting" value="existing" />
                <div class="fake-radio last">Existing</div>
            </label>
          </div>
      </div>
      <div class="form-entry-wrap">
          <div class="inner-form-wrap-label">
            <label for="audience-creation">Age Range</label>
            <img alt="Info icon" src="../../assets/i Icon.svg" />
          </div>
          <div class="inner-form-wrap-input">
            <select id="age-select-lower"
                name="age-select-lower" 
                class="small-select"
                v-model="ageSelectLower">
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
            </select>
            &nbsp;–	&nbsp;
            <select id="age-select-upper"
                name="age-select-upper" 
                class="small-select"
                v-model="ageSelectUpper">
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
            </select>
          </div>
      </div>
      <div class="form-entry-wrap">
          <div class="inner-form-wrap-label">
            <label for="audience-name">Gender</label>
            <img alt="Info icon" src="../../assets/i Icon.svg" />
          </div>
          <div class="inner-form-wrap-input">
            <label class="radio-container">
                <input type="radio" name="gender" v-model="gender" value="all" 
               checked="true" />
                <div class="fake-radio first">All</div>
            </label>
            <label class="radio-container">
                <input type="radio" name="gender" v-model="gender" value="new"  />
                <div class="fake-radio">New</div>
            </label>
            <label class="radio-container">
                <input type="radio" name="gender" v-model="gender" value="existing" />
                <div class="fake-radio last">Existing</div>
            </label>
          </div>
      </div>
      <div class="form-entry-wrap two-row">
          <div class="inner-form-wrap-label">
            <label for="audience-name">Target Location</label>
            <img alt="Info icon" src="../../assets/i Icon.svg" />
          </div>
          <div class="text-box-wrap">
                <input type="text" 
                name="target-location" 
                id="target-location" 
                placeholder="Type to add a location"
                v-model="targetLocation" />
                <div class="location-corral"></div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "CampaignFormSubsection1",
  data () {
      return {
          audienceSelect: "create",
          audienceName: "",
          targeting: "all",
          ageSelectLower: 18,
          ageSelectUpper: 25,
          gender: "all",
          targetLocation: ""
      }
  }
}

</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

.campaign-form-subsection {
    @extend %form-subsection;
    .form-entry-wrap {
        @extend %form-entry;
    }
    .two-row {
        grid-template-rows: 20% auto auto;
        .text-box-wrap {
            display: block;
            text-align: center;
            grid-row: 2;
            grid-column: 1 / 3;
            margin-bottom: 3em;
            input {
                width: 370px;
                border-top: 1px solid #707070;
                border-left: 1px solid #707070;
                border-right: 1px solid #707070;
                box-shadow: none;
            }
            .location-corral {
                width: 370px;
                background-color: #D5D5D5;
                border-bottom: 1px solid #707070;
                border-left: 1px solid #707070;
                border-right: 1px solid #707070;
                height: 140px;
                display: block;
                margin: 0 auto;
                padding: 0 10px;
            }
        }
    }
}

</style>
