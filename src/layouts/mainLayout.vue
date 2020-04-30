<template>
	<v-app>
		<MyHeader />
		<div class="container page-container ">
			<div class="row mt-12">
				<div class="col-md-3">
					<ProfileImageHeader />
				</div>
				<div class="col-md-6">
					<router-view />
				</div>
				<div class="col-md-3">
					<TrendingLayout />
				</div>
			</div>
		</div>

		<MyFooter />
	</v-app>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
// import Sidebar from '@/components/Sidebar.vue'
import RightNav from "@/components/RightNav.vue";
import MyFooter from "@/components/MyFooter.vue";
import ProfileImageHeader from "./ProfileImageHeaderLayout.vue";
import TrendingLayout from "./TrendsLayout.vue";
import Login from "../views/Login.vue";
import { mapGetters } from "vuex";

export default {
	name: "App",
	components: {
		MyHeader,
		RightNav,
		MyFooter,
		ProfileImageHeader,
		TrendingLayout,
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
