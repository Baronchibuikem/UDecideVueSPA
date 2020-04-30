<template>
	<v-app>
		<div v-if="!isAuthenticated">
			<Login />
		</div>
		<div v-if="isAuthenticated">
			<router-view />
		</div>

		<MyFooter />
	</v-app>
</template>

<script>
import MyFooter from "@/components/MyFooter.vue";
import Login from "./views/Login";
import { mapGetters } from "vuex";

export default {
	name: "App",
	components: {
		MyFooter,
		Login
	},
	computed: {
		// This returns all our updated state
		...mapGetters(["isAuthenticated"])
	},
	created: function() {
		this.$http.interceptors.response.use(undefined, function(err) {
			return new Promise(function(resolve, reject) {
				if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
					this.$store.dispatch("logout");
				}
				throw err;
			});
		});
	}
};
</script>
