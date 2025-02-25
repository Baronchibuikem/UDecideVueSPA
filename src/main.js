import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// imports the store for state management
import store from "./store";
import GlobalFunctions from "./GlobalFunctions";
Vue.prototype.$navigate = new GlobalFunctions();

import BackToTop from "vue-backtotop";
Vue.use(BackToTop);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
const accessToken = localStorage.getItem("access_token");

if (accessToken) {
	Vue.prototype.$http.defaults.headers.common["Authorization"] = accessToken;
}

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount("#app");
