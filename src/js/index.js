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
  flavor: 'github'
});

onLoad.then(() => {

  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        // For code split we use a promise here to import dynamically.
        component: () => Promise.resolve(import('src/vue/Pages/Index'))
      },
      {
        path: '/om-sidan',
        component: () => Promise.resolve(import('src/vue/Pages/About'))
      }
    ]
  });

  new Vue({
    render: h => h(App),
    router
  }).$mount('#root');
}).catch(e => logger.error(e.message));
