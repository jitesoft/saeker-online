// General imports for code setup.
import onLoad from '@jitesoft/on-load';
import logger from '@jitesoft/yolog/browser';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ShowDown from 'vue-showdown';
// Internal imports.
import App from 'src/vue/App';
import Logger from 'src/js/Plugins/Logger';

Vue.use(VueRouter);
Vue.use(Logger);
Vue.use(ShowDown, {
  flavor: 'github',
  options: {
    headerLevelStart: 3,
    metadata: true
  }
});

onLoad.then(() => {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        // For code split we use a promise here to import dynamically.
        component: () => Promise.resolve(import('src/vue/Pages/Page'))
      },
      {
        path: '/om-sidan',
        name: 'about',
        component: () => Promise.resolve(import('src/vue/Pages/Page'))
      },
      {
        path: '/social-säkerhet',
        name: 'social-safety',
        component: () => Promise.resolve(import('src/vue/Pages/Page'))
      },
      {
        path: '/it-säkerhet',
        name: 'it-security',
        component: () => Promise.resolve(import('src/vue/Pages/Page'))
      }
    ]
  });

  new Vue({
    render: h => h(App),
    router
  }).$mount('#root');
}).catch(e => logger.error(e.message));
