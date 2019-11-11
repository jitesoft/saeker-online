// General imports for code setup.
import onLoad from '@jitesoft/on-load';
import logger from '@jitesoft/yolog/browser';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ShowDown from 'vue-showdown';
// Internal imports.
import App from 'src/vue/App';
import Logger from 'src/js/Plugins/Logger';
import Routes from 'src/routes';

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
  const routerRoutes = [];
  for (const route of Object.keys(Routes)) {
    for (const lang of Object.keys(Routes[route])) {
      routerRoutes.push({
        name: route,
        lang: lang,
        path: Routes[route][lang].path,
        component: () => Promise.resolve(import('src/vue/Pages/Page'))
      });
    }
  }

  const router = new VueRouter({
    mode: 'history',
    routes: routerRoutes
  });

  new Vue({
    render: h => h(App),
    router
  }).$mount('#root');
}).catch(e => logger.error(e.message));
