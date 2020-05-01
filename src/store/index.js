import Vuex from "vuex";
import Vue from "vue";
import userAuth from "./modules/UserAuth";
import poll from "./modules/Polls";
import createPersistedState from "vuex-persistedstate";

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		userAuth,
		poll
	}
});
