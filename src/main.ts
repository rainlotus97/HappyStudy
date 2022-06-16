import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Button,Card,Avatar,Icon,Upload,message } from "ant-design-vue";

Vue.use(Button)
Vue.use(Card)
Vue.use(Avatar)
Vue.use(Icon)
Vue.use(Upload)
Vue.config.productionTip = false;
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
