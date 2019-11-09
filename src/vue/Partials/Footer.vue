<template>
    <footer>
        <a href="https://github.com/jitesoft/saeker-online/blob/master/LICENSE" target="_blank">Copyright © 2019</a> <a href="https://jitesoft.com" target="_blank">Jitesoft</a>
    </footer>
</template>
<script>
import Vue from 'vue';
export default Vue.component('page-footer', {

})
</script>
<style lang="scss" scoped>
    footer {
        position: absolute;
        height: 1vh;
        bottom: 0;
        left: 10%;
        width: 80%;
        text-align: center;
    }

    a {
        color: black;
        font-family: monospace;
    }
</style>
