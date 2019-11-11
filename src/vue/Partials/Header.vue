<template>
    <header>
        <h1>Säker Online</h1>
        <header-menu></header-menu>
    </header>
</template>
<script>
import Vue from 'vue';
import 'src/vue/Components/HeaderMenu';
export default Vue.component('page-header', {
});
</script>
<style lang="scss" scoped>
    header {
        width: 70%;
        font-family: Averia, serif;
        transform: translateX(20%);
        height: 6em;
        font-size: 1em;

        h1 {
            text-align: center;
            font-size: 2em;
        }
    }
</style>
