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
        position: relative;
        width: 60%;
        left: 20%;
        font-size: 1em;
        padding-bottom: 2rem;
        min-height: 65vh;
    }
</style>
