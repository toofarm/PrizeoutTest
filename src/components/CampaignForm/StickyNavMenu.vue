<template>
  <div class="sticky-nav-menu">
      <h3>{{menu.title}}</h3>
      <br />
      <ul>
          <li
          v-for="item in menu.items"
          :key="item">
            <a href="#">
                {{item}}
            </a>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  props: ['menu'],
  name: "StickyNavMenu"
};
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

.sticky-nav-menu {
    border-top: 1px solid #CCC;
    font-size: 13px;
    padding: 0.5em 0 0.5em 1em;
    h3 {
        color: #566481;
        text-align: left;
        font-size: 13px;
        max-width: 33px;
        margin-bottom: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
        li {
            display: block;
            margin: 0.7em 2em;
            a {
                text-decoration: none;
                color: $mainBodyText;
                transition: 0.2s all ease-in-out;
            }
            a:hover {
                color: #222;
            }
        }
    }
}

</style>
