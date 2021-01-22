import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MyComponent from './components'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/css/style.css'
import './assets/css/utility.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

var eventBus = new Vue();

Vue.prototype.$eventBus = eventBus

Vue.use(BootstrapVue)
Vue.use(MyComponent)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
