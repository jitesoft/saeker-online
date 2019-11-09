<template>
    <ul>
        <li><router-link to="/">Hem</router-link></li>
        <li><router-link to="/om-sidan">Om sidan</router-link></li>
    </ul>
</template>
<script>
import Vue from 'vue';
export default Vue.component('header-menu', {});
</script>
<style lang="scss" scoped>
    ul {
        list-style-type: none;
        max-height: 2vh;
        margin: auto;

        li {
            float: left;
            padding-left: 2em;
            padding-right: 2em;
        }

        a {
            text-decoration: none;
            color: black;
        }
    }


</style>
