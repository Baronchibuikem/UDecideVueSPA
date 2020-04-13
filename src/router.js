import Vue from "vue";
import Router from "vue-router";
import SurveyLanding from "./views/SurveyLanding.vue";
import Dashboard from "./views/Dashboard.vue";
import LiveFeed from "./views/LiveFeed.vue";
import PollForm from "./views/PollForming.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import store from "./store";

Vue.use(Router);

let router = new Router({
	mode: "history",
	// this.use(function(req, res, next){
	//   res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//   next();
	// }),

	routes: [
		{
			path: "/",
			name: "livefeed",
			component: LiveFeed,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: "/feeds",
			name: "feeds",
			component: LiveFeed,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: Dashboard,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: "/survey-landing",
			name: "survey-landing",
			component: SurveyLanding,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: "/pollform",
			name: "pollform",
			component: PollForm,
			meta: {
				requiresAuth: true
			}
		},

		{
			path: "/login",
			name: "login",
			component: Login
		},
		{
			path: "/signup",
			name: "singup",
			component: Signup
		}
	]
});

// Used to check if a route is projected, if it is then you are required to
// be authenticated before you can access it
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters.isLoggedIn) {
			next();
			return;
		}
		next("/login");
	} else {
		next();
	}
});
export default router;
