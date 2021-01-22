import MyNavbar from "./MyNavbar.vue";
import Cocok from './Cocok.vue'
import FontAwesomeIcon from "../components/fontawesome.js";
import ComeOn from './ComeOn.vue'
import MyFooter from './MyFooter'
import TextInput from './TextInput.vue'
export default {
  install(Vue) {
    Vue.component("fa-icon", FontAwesomeIcon);
    Vue.component("my-navbar", MyNavbar);
    Vue.component('cocok',Cocok)
    Vue.component('come-on',ComeOn)
    Vue.component('my-footer',MyFooter)
    Vue.component('text-input',TextInput)
  },
};
