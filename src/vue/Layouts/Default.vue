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
    .content-wrapper {
        min-height: calc(100vh - 3em - 8em);
        position: relative;
        width: 60%;
        left: 20%;
        font-size: 1em;
    }
</style>
