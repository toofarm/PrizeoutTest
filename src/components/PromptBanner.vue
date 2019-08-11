<template>
        <div 
        class="banner"
        v-if="open">
            <div class="banner-inner">
                <h2>
                    Hi, it looks like you're new here. Would you like a tour?
                </h2>
                <button
                @click="open = !open">
                    Yes
                </button>
                <button
                @click="open = !open">
                    Maybe later
                </button>
            </div>
            <div id="close-banner"
            @click="open = !open">
                X
            </div>
        </div>
</template>

<script>
export default {
  name: "PromptBanner",
  data() {
    return {
      open: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

.banner {
  width: 100%;
  display: flex;
  background-color: $waveBlue;
  padding: 15px 20px;
  text-align: center;
  box-shadow: 0px 2px 4px rgb(156, 155, 155);
  box-sizing: border-box;
  position: fixed;
  z-index: 550;
  .banner-inner {
    align-self: center;
    display: inline-block;
    margin: 0 auto;
    h2 {
      color: $headerText;
      font-size: 20px;
      display: inline-block;
    }
    button {
      @extend %prompt-btn;
      display: inline-block;
    }
  }
  #close-banner {
    align-self: flex-start;
    display: inline-block;
  }
  #close-banner:hover {
    cursor: pointer;
    color: #222;
  }
}
</style>
