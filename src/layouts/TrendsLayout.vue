<template>
	<v-app>
		<div class="mt-3 d-none d-md-block">
			<div class="card rounded">
				<div class="card-body">
					<h4 class="card-title">Top Trending Polls</h4>
					<TrendingPolls />
				</div>
			</div>
			<div class="card rounded">
				<div class="card-body">
					<p class="text-center aboutscroll primary">
						&copy; 2018 youdecide.com
					</p>
					<ul
						class="list-icons d-flex flpolltext-center"
						style="list-style: none; padding: 0;"
					>
						<li class="col">
							<a
								href="javascript:void(0)"
								data-toggle="tooltip"
								title=""
								data-original-title="twitter"
								><i class="fa fa-twitter font-15"></i
							></a>
						</li>

						<li class="col">
							<a
								href="javascript:void(0)"
								data-toggle="tooltip"
								title=""
								data-original-title="Facebook"
								><i class="fa fa-facebook-square font-15"></i
							></a>
						</li>

						<li class="col">
							<a
								href="javascript:void(0)"
								data-toggle="tooltip"
								title=""
								data-original-title="Linkd-in"
								><i class="fa fa-instagram font-15"></i
							></a>
						</li>

						<li class="col">
							<a
								href="javascript:void(0)"
								data-toggle="tooltip"
								title=""
								data-original-title="Linkd-in"
								><i class="fa fa-instagram font-15"></i
							></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import { mapGetters } from "vuex";
import TrendingPolls from "../views/TrendingPolls";

export default {
	name: "TrendsLayout",
	components: {
		TrendingPolls
	},

	computed: {
		// This returns all our updated state
		...mapGetters([
			"getUser",
			"numberOfFollowers",
			"numberOfFollowed",
			"numberOfPolls",
			"isLoggedIn",
			"isAuthenticated",
			"getuserID"
		])
	}
};
</script>

<style></style>
