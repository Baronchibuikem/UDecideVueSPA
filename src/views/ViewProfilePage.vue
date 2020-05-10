<template>
	<div>
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
								<li class="nav-item">
									<a
										class="nav-link"
										data-toggle="tab"
										href="#followers"
										role="tab"
										>Follower</a
									>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										data-toggle="tab"
										href="#followings"
										role="tab"
										>Following</a
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
										</span>
									</div>

									<div class="row mx-3">
										<span class="py-6 col-md-3">
											Firstname
										</span>
										<span class="py-6 col-md-6 text-left">
											{{ getUser.userObj.user.profile.first_name }}
											<modal
												:id="1"
												:value="getUser.userObj.user.profile.first_name"
												class="edit"
												data-toggle="tooltip"
												:eventProps="updateProfile"
											/>
										</span>
									</div>
									<div class="row mx-3">
										<span class="py-6 col-md-3">
											Lastname
										</span>
										<span class="py-6 col-md-6 text-left">
											{{ getUser.userObj.user.profile.last_name }}

											<modal
												:id="2"
												:value="getUser.userObj.user.profile.last_name"
												class="edit"
												data-toggle="tooltip"
												:eventProps="updateProfile"
											/>
										</span>
									</div>
									<div class="row mx-3">
										<span class="py-6 col-md-3">
											Place of work
										</span>
										<span class="py-6 col-md-6 text-left">
											{{ getUser.userObj.user.profile.place_of_work }}
											<modal
												:id="3"
												:value="getUser.userObj.user.profile.place_of_work"
												class="edit"
												data-toggle="tooltip"
												:eventProps="updateProfile"
											/>
										</span>
									</div>
									<div class="row mx-3">
										<span class="py-6 col-md-3">
											Position
										</span>
										<span class="py-6 col-md-6 text-left">
											{{ getUser.userObj.user.profile.position }}
											<modal
												:id="4"
												:value="getUser.userObj.user.profile.position"
												class="edit"
												data-toggle="tooltip"
												:eventProps="updateProfile"
											/>
										</span>
									</div>
									<div class="row mx-3">
										<span class="py-6 col-md-3">
											Number of followers
										</span>
										<span
											class="py-6 col-md-6 text-left"
											v-for="(follower, index) in getUser.followers"
											v-bind:key="index"
										>
											{{ follower.total_followers_no }}
										</span>
									</div>
									<div class="row mx-3">
										<span class="py-6 col-md-3">
											Number of followed users
										</span>
										<span
											class="py-6 col-md-6 text-left"
											v-for="(follower, index) in getUser.followed"
											v-bind:key="index"
										>
											{{ follower.total_followed_no }}
										</span>
									</div>
									<div class="row mx-3">
										<span class="py-6 col-md-3">
											About me
										</span>
										<span class="py-6 col-md-6 text-left">
											{{ getUser.userObj.user.profile.about }}
											<modal
												:id="5"
												:value="getUser.userObj.user.profile.about"
												class="edit"
												data-toggle="tooltip"
												:eventProps="updateProfile"
											/>
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
											<div class="mt-5 link">
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
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane" id="followers" role="tabpanel">
									<span
										class="py-6 col-md-6 text-left"
										v-for="(follower, index) in getUser.followers"
										v-bind:key="index"
									>
										<h6 class="linkHover">
											@{{ follower.following_username }}
											<!-- {{ follower.follwer.id }} -->
										</h6>
										<p>This user's Bio will be updated here shortly</p>
										<hr />
									</span>
								</div>
								<div class="tab-pane" id="followings" role="tabpanel">
									<span
										class="py-6 col-md-6 text-left mt-2"
										v-for="(follower, index) in getUser.followed"
										v-bind:key="index"
									>
										<h6 class="linkHover">
											@{{ follower.following_username }}
											<!-- {{ follower.follwer.id }} -->
										</h6>
										<p>This user's Bio will be updated here shortly</p>
										<hr />
									</span>
								</div>
							</div>
							<span class="d-flex justify-content-end">
								<router-link exact to="/">Back to polls </router-link>
							</span>
						</div>
						{{ getUser }}
					</div>
				</div>
				<div class="col-md-3">
					<TrendingLayout />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import ProfileImageHeader from "../layouts/ProfileImageHeaderLayout.vue";
import TrendingLayout from "../layouts/TrendsLayout.vue";
import MyHeader from "../components/MyHeader.vue";
import modal from "../reusuable_components/modal";

export default {
	name: "ViewProfilePage",
	components: {
		ProfileImageHeader,
		TrendingLayout,
		MyHeader,
		modal
	},
	data() {
		return {
			polllist: true
		};
	},
	methods: {
		updateProfile(payload) {
			console.log(payload, "Profile update");
			const { param, param3 } = { ...payload };
			let id = param;
			if (id === 1) {
				const data = {
					first_name: param3
				};
				console.log(data, "text from id 1");
				this.$store
					.dispatch("updateProfile", { ...data })
					.then(() => this.$router.push("/profile"));
			} else if (id === 2) {
				const data = {
					last_name: param3
				};
				console.log(data, "text from id 2");
				this.$store
					.dispatch("updateProfile", { ...data })
					.then(() => this.$router.push("/profile"));
			} else if (id === 3) {
				const data = {
					place_of_work: param3
				};
				console.log(data, "text from id 3");
				this.$store
					.dispatch("updateProfile", { ...data })
					.then(() => this.$router.push("/profile"));
			} else if (id === 4) {
				const data = {
					position: param3
				};
				console.log(data, "text from id 4");
				this.$store
					.dispatch("updateProfile", { ...data })
					.then(() => this.$router.push("/profile"));
			} else if (id === 5) {
				const data = {
					about: param3
				};
				console.log(data, "text from id 5");
				this.$store
					.dispatch("updateProfile", { ...data })
					.then(() => this.$router.push("/profile"));
			}
		}
	},
	computed: {
		...mapGetters(["getUser", "getSinglePoll"])
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
