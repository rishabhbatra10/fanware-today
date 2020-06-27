import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import vuetify from '@/plugins/vuetify';
import VueSuperagent from 'vue-superagent'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueSuperagent, {
  baseUrl: 'https://www.fanwaretoday.in/v1'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
