<template>
    <component :is="this.layout">
        <router-view></router-view>
    </component>
</template>

<script>
import Vue from 'vue';
import 'src/vue/Layouts/Default';
export default Vue.component('App', {
  computed: {
    layout () {
      return 'default-layout';
    }
  }
});
</script>
