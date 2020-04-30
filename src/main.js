import GlobalFunctions from "./GlobalFunctions";
import axios from "axios";

import Vue from "vue";

// imports the store for state management
import store from "./store";

Vue.prototype.$navigate = new GlobalFunctions();

import App from "./App.vue";
import router from "./router";

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
