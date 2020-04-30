<template>
	<v-app>
		<MyHeader />
		<div class="container page-container">
			<div class="row">
				<div class="col-md-3">
					<profile-image-header />
				</div>
				<div class="col-md-6">
					<div class="container mt-3">
						<div class="shadow card page-container">
							<ul class="nav nav-tabs profile-tab" role="tablist">
								<li class="nav-item">
									<a
										class="nav-link active"
										data-toggle="tab"
										href="#profile"
										role="tab"
										>My profile</a
									>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#polls" role="tab"
										>My Polls</a
									>
								</li>
							</ul>
							<div class="tab-content">
								<div class="tab-pane active" id="profile" role="tabpanel">
									<div class="mx-3 row mb-7">
										<span class="py-6 col-md-3">
											Username
										</span>
										<span class="py-6 col-md-6 text-left">
											{{ getUser.userObj.user.username }}
											<i
												class="fa fa-pencil text-info"
												data-toggle="tooltip"
												title="edit"
											></i>
										</span>
									</div>
									<div class="row mx-3">
										<span class="py-6 col-md-3">
											Email
										</span>
										<span class="py-6 col-md-6 text-left">
											.....
											<i
												class="fa fa-pencil text-info"
												data-toggle="tooltip"
												title="edit"
											></i>
										</span>
									</div>
									<div class="row mx-3">
										<span class="py-6 col-md-3">
											Firstname
										</span>
										<span class="py-6 col-md-6 text-left">
											....
											<i
												class="fa fa-pencil text-info"
												data-toggle="tooltip"
												title="edit"
											></i>
										</span>
									</div>
									<div class="row mx-3">
										<span class="py-6 col-md-3">
											Lastname
										</span>
										<span class="py-6 col-md-6 text-left">
											....
											<i
												class="fa fa-pencil text-info"
												data-toggle="tooltip"
												title="edit"
											></i>
										</span>
									</div>
									<span class="d-flex justify-content-end">
										<router-link exact to="/">Back to polls </router-link>
									</span>
								</div>
								<div class="tab-pane" id="polls" role="tabpanel">
									<div v-if="polllist">
										<div
											class="sl-item container"
											v-for="poll in getUser.polls"
											v-bind:key="poll.pk"
										>
											<!-- <PollMenu></PollMenu> -->
											<div class="mt-5">
												<div class="d-flex justify-content-between">
													<router-link to="#" class="text-uppercase">{{
														getUser.userObj.user.username
													}}</router-link>
													<span class="sl-date">{{ poll.pub_date }} </span>
												</div>
												<div class="m-t-20">
													<div class="col-md-12 col-xs-12">
														<p>{{ poll.question }}</p>
													</div>
												</div>
												<hr />
												<div class="m-t-20">
													<div class="row">
														<!-- Here we are looping through the choice array in our poll -->
													</div>
												</div>
												<span class="d-flex justify-content-end">
													<router-link exact to="/">Back to polls </router-link>
												</span>
											</div>
										</div>
									</div>
									<div v-if="!polllist">
										<router-view></router-view>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<TrendingLayout />
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import { mapGetters } from "vuex";

import ProfileImageHeader from "../layouts/ProfileImageHeaderLayout.vue";
import TrendingLayout from "../layouts/TrendsLayout.vue";
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";

export default {
	name: "ViewProfilePage",
	components: {
		ProfileImageHeader,
		TrendingLayout,
		MyHeader,
		MyFooter
	},
	data() {
		return {
			polllist: true
		};
	},
	computed: {
		...mapGetters(["getUser"])
	}
};
</script>

<style scoped>
span {
	padding: 12px 0px !important;
}
i:hover {
	cursor: pointer !important;
}
</style>
