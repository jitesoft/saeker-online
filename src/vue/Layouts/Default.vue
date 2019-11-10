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
    }

    .content-wrapper {
        padding: 0 3vw;
        top: 13vh;
        position: absolute;
        width: 60%;
        left: 20%;
        min-height: 75vh;
    }
</style>
