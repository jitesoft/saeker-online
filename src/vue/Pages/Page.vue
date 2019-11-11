<template>
    <div>
        <VueShowdown v-if="this.content" class="content" :markdown="this.content" />
        <div v-else>
            Loading...
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.component('Page', {
  props: {
    lang: {
      type: String,
      default: 'swe'
    }
  },
  created () {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData: function () {
      this.content = null;
      this.$logger.debug('Loading page: %s', this.$route.name);
      fetch(`content/${this.$route.name ?? 'home'}/index.${this.lang}.md`)
        .then(r => r.text())
        .then(r => {
          this.content = r;
        });
    }
  },
  data: function () {
    return {
      content: null
    };
  }
});
</script>
<style lang="scss" scoped>

    .content {
        font-family: Consolas, serif;
    }
</style>
