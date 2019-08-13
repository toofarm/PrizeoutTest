<template>
  <nav>
    <ul class="nav-menu">
        <li>
            <a href="#">
                Campaigns
            </a>
        </li>
        <li>
            <a href="#">
                Images
            </a>
        </li>
        <li>
            <a href="#">
                Offers
            </a>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavMenu"
};
</script>

<style lang="scss" scoped>

nav {
    display: flex;
    margin-left: auto;
    border-right: 1px solid #666;
    ul {
        list-style: none;
        justify-self: end;
        margin: 0;
        align-self: center;
        li {
            display: inline-block;
            margin-right: 2em;
            a {
                color: #FFF;
                text-decoration: none;
                position: relative;
                padding-bottom: 5px;
                transition: all 0.3s ease-in-out;
                font-size: 16px;
            }
            a:hover {
                color: #DDD;
            }
            a:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: #DDD;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
            }
            a:hover:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }
        }
    }
}

</style>
