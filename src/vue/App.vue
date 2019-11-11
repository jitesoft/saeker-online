<template>
    <component :is="this.layout">
        <div class="inner-content">
            <router-view></router-view>
        </div>
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
