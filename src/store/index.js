import Vuex from "vuex";
import Vue from "vue";
import megaStore from "./modules/vuexStore";
import poll from "./modules/Polls";
import createPersistedState from "vuex-persistedstate";

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		megaStore,
		poll
	}
});
