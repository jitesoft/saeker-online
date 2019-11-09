<template>
    <div>
        <div id="page-container">
            <page-header />
            <div class="content-wrapper">
                <slot/>
            </div>
            <page-footer />
        </div>
        <fork-me></fork-me>
    </div>
</template>
<script>
import 'src/vue/Partials/Header';
import 'src/vue/Partials/Footer';
import 'src/vue/Components/ForkMe';
import Vue from 'vue';
export default Vue.component('default-layout', {
});
</script>
<style lang="scss" scoped>
    #page-container {
        min-height: 97vh;
        height: fit-content;
        position: relative;
        padding-bottom: 1vh;
    }

    .content-wrapper {
        padding: 8vh 3vw 1vh;
    }
</style>
