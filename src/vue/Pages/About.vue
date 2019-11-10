<template>
    <div>
        <VueShowdown v-if="this.content" :markdown="this.content" />
        <div v-else>
            Loading...
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { VueShowdown } from 'vue-showdown';
export default Vue.component('About', {
  props: {
    lang: {
      type: String,
      default: 'swe'
    }
  },
  mounted: function() {
    fetch(`content/about/about.${this.lang}.md`).then(r => r.text()).then(result => {
      this.content = result;
    });
  },
  data: function () {
    return {
      content: ''
    }
  }
});
</script>
