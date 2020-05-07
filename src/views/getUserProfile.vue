<template>
	<div>
		<MyHeader />
		<div class="container page-container">
			<div class="row">
				<div class="col-md-3">
					<profile-image-header />
				</div>
				<div class="col-md-6">
					<div class="container">
						<div class="shadow card page-container">
							<div class="col-md-12 col-sm-12">
								<!-- <img
									src="../assets/img/profileimage.png"
									alt=""
									class="image-responsive img_style"
									width="50%"
								/> -->
								<div
									v-if="show === false"
									class="d-flex justify-content-center"
								>
									<button
										@click="getCurrentUser(viewUserProfile.userObj.user.id)"
										class="form-control btn-info col-md-6 col-sm-6"
									>
										View {{ viewUserProfile.userObj.user.username }}'s profile
									</button>
								</div>
								<div v-if="show === true">
									<div class="d-flex justify-content-center col-md-6 col-sm-6">
										<div
											class="sl-item container mt-3"
											v-for="follower in viewUserProfile.followers"
											v-bind:key="follower.id"
										>
											<div
												v-if="
													follower.follower_username ===
														getUser.userObj.user.username
												"
											>
												<h1>{{ follower.follower_username }}</h1>
												<h4>
													{{
														!getUser.userObj.user.username ===
															follower.follower_username
													}}
												</h4>
												<button class="form-control btn-info">
													Unfollow
												</button>
											</div>
											<div v-else>
												<button
													class="btn-info form-control"
													@click="
														followUser(
															viewUserProfile.userObj.user.id,
															getUser.userObj.user.id
														)
													"
												>
													Follow
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<ul class="nav nav-tabs profile-tab" role="tablist">
								<li class="nav-item">
									<a
										class="nav-link active"
										data-toggle="tab"
										href="#profile"
										role="tab"
										>Profile</a
									>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#polls" role="tab"
										>Polls</a
									>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										data-toggle="tab"
										href="#followers"
										role="tab"
										>Followers</a
									>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										data-toggle="tab"
										href="#following"
										role="tab"
										>Following</a
									>
								</li>
							</ul>
							<div class="tab-content">
								<div class="tab-pane active" id="profile" role="tabpanel">
									<div class="col-md-12 col sm-12 mt-3">
										<div v-if="show === true">
											<h6>
												<b>Username</b>
												@{{ viewUserProfile.userObj.user.username }}
											</h6>
											<h6 class="mt-4">
												<b>First Name</b>
												{{ viewUserProfile.userObj.user.profile.first_name }}
											</h6>
											<h6 class="mt-4">
												<b>Last Name</b>
												{{ viewUserProfile.userObj.user.profile.last_name }}
											</h6>
											<h6 class="mt-4">
												<b>Place of work</b>
												{{ viewUserProfile.userObj.user.profile.place_of_work }}
											</h6>
											<h6 class="mt-4">
												<b>Position</b>
												{{ viewUserProfile.userObj.user.profile.position }}
											</h6>
											<div
												v-for="(follower, index) in viewUserProfile.followers"
												v-bind:key="index"
											>
												<h6 class="mt-4">
													<b>followers</b> {{ follower.total_followers_no }}
												</h6>
											</div>
											<div
												v-for="(follower, index) in viewUserProfile.followed"
												v-bind:key="index"
											>
												<h6 class="mt-4">
													<b>Following </b> {{ follower.total_followed_no }}
												</h6>
											</div>
										</div>
									</div>
									<hr />
									<div v-if="show === true">
										<h6>
											<b>About</b>
											{{ viewUserProfile.userObj.user.profile.about }}
										</h6>
									</div>
								</div>

								<div class="tab-pane" id="polls" role="tabpanel">
									<div
										class="sl-item container"
										v-for="poll in viewUserProfile.polls"
										v-bind:key="poll.pk"
									>
										<!-- <PollMenu></PollMenu> -->
										<div class="mt-2 link" v-if="show === true">
											<div class="d-flex justify-content-between text-info">
												@{{ viewUserProfile.userObj.user.username }}
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
								<div class="tab-pane" id="followers" role="tabpanel">
									<div v-if="show === true">
										<div
											class="sl-item container mt-3"
											v-for="follower in viewUserProfile.followers"
											v-bind:key="follower.id"
										>
											<h6 class="linkHover">
												@{{ follower.follower_username }}
												<!-- {{ follower.follwer.id }} -->
											</h6>
											<p>This user's Bio will be updated here shortly</p>
											<hr />
										</div>
									</div>
								</div>
								<div class="tab-pane" id="following" role="tabpanel">
									<div v-if="show === true">
										<div
											class="sl-item container mt-3"
											v-for="following in viewUserProfile.followed"
											v-bind:key="following.id"
										>
											<h6 class="linkHover">
												@{{ following.following_username }}
												<!-- {{ follower.follwer.id }} -->
											</h6>
											<p>This user's Bio will be updated here shortly</p>
											<hr />
										</div>
									</div>
								</div>
							</div>
							<span class="d-flex justify-content-end">
								<router-link exact to="/">Back to polls </router-link>
							</span>
						</div>
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
	name: "getUserProfile",
	components: {
		ProfileImageHeader,
		TrendingLayout,
		MyHeader,
		modal
	},
	data() {
		return {
			user_id: this.id,
			show: false
		};
	},
	methods: {
		getCurrentUser(id) {
			console.log(id, "IDENTITY");
			this.show = true;
			this.$store.dispatch("viewUserProfileAction", id).then(() => {});
		},
		followUser(param, param2) {
			let data = {
				follower: param2,
				following: param
			};
			this.$store
				.dispatch("followUser", { ...data })
				.then(() => this.$router.push("/"));
		}
	},
	computed: {
		// This returns all our updated state
		...mapGetters([
			"numberOfFollowers",
			"numberOfFollowed",
			"numberOfPolls",
			"viewUserProfile",
			"getUser"
		])
	}
};
</script>

<style scoped>
.linkHover:hover {
	cursor: pointer !important;
	color: #20aee3;
}
/* .img_style {
	display: block;
	margin: auto auto;
	max-height: 100%;
	padding-top: 30%;
} */
</style>
