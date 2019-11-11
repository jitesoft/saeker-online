<template>
    <ul>
        <li><router-link to="/">Hem</router-link></li>
        <li><router-link :to="{name: 'about', lang: 'swe'}">Om sidan</router-link></li>
        <li><router-link :to="{name: 'social-safety', lang: 'swe'}">Social Säkerhet</router-link></li>
        <li><router-link :to="{name: 'it-security', lang: 'swe'}">IT-Säkerhet</router-link></li>
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
