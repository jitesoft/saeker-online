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
        position: absolute;
        width: 70%;
        font-family: Averia, serif;
        left: 15%;
        height: 12vh;

        h1 {
            text-align: center;
        }
    }
</style>
