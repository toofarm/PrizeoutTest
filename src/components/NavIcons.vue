<template>
  <ul>
    <li id="profile">
        <a href="#">
            <font-awesome-icon icon="user" />
        </a>
    </li>
    <li id="notifications">
        <a href="#">
            <font-awesome-icon icon="bell" />
        </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavIcons"
};
</script>

<style lang="scss" scoped>
@import "../styles/_globals.scss";

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    align-self: center;
    display: flex;
    flex-direction: row;
    li {
        align-self: center;
        margin-left: 2em;
    }
    #profile > a {
        background-color: #FFF;
        border-radius: 20px;
        height: 1.5em;
        width: 1.5em;
        display: flex;
        color: black;
        font-size: 18px;
        svg {
            align-self: center;
            margin: 0 auto;
        }
    }
    #notifications > a {
        height: 1.5em;
        width: 1.5em;
        display: flex;
        color: white;
        font-size: 20px;
        svg {
            align-self: center;
        }
    }
}

</style>
