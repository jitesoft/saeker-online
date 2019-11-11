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
        display: flex;
        flex-wrap: nowrap;
        width: 70%;
        height: 1.5em;
        justify-content: space-evenly;
        list-style-type: none;
        max-height: 2vh;
        margin: auto;

        a {
            text-decoration: none;
            color: black;
        }
    }
</style>
