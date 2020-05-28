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
								
								<div v-if="show === true">
								
									<div v-if="viewUserProfile.userObj.user.profile.image !== null" width="50%">
									<img :src="viewUserProfile.userObj.user.profile.image" width="50%"/>
									</div>
									<div v-else>
										<img :src="image" width="50%"/>
									</div>
									
									<div class="col-md-6 col-sm-6 mt-4">
										<div v-if="viewUserProfile.userObj.user.username === getUser.userObj.user.username">

										</div>
										<div v-else>
											<div v-if="followingUser.length > 0">
												
												<button
													class="form-control btn-info"
													data-toggle="tooltip"
													title="click to unfollow"
													@click="
														unfollowUser(
															viewUserProfile.userObj.user.id,
															followingUser[1]
														)
													"
												>
													Following
												</button>
											</div>
											<div v-if="!followingUser.length > 0">
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
									
							<span class="d-flex justify-content-end">
								<router-link exact to="/">Back to polls </router-link>
							</span>
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
								<li class="nav-item">
									<a
										class="nav-link"
										data-toggle="tab"
										href="#likes"
										role="tab"
										>Likes</a
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
											<h6 class="mt-4">
											<b>About</b>
											{{ viewUserProfile.userObj.user.profile.about }}
											</h6>
											<!-- <div
												v-for="(follower, index) in viewUserProfile.followers"
												v-bind:key="index"
											>
												<h6 class="mt-4">
													<b>followers</b> {{ follower.total_followers_no }}
												</h6>
											</div> -->
											<!-- <div
												v-for="(follower, index) in viewUserProfile.followed"
												v-bind:key="index"
											>
												<h6 class="mt-4">
													<b>Following </b> {{ follower.total_followed_no }}
												</h6>
											</div> -->
										</div>
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
										
											<div class="m-t-20">
												<div class="col-md-12 col-xs-12">
													<p @click="singlePoll(poll.pk)" class="linkHover">{{ poll.question }}</p>
												
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
											<h6 class="linkHover" @click="getProfile(follower.follwer_id)">
												{{ follower.follower_username }}{{ follower.follwer_id}}
											</h6>
										
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
											<h6 class="linkHover" @click="getProfile(following.following_id)">
												{{ following.following_username }}
											</h6>
											<hr />
										</div>
									</div>
								</div>
								<div class="tab-pane" id="likes" role="tabpanel">
									<div v-if="show === true">
										<div
											class="sl-item container mt-3"
											v-for="like in viewUserProfile.likes"
											v-bind:key="like.id"
										>
											<h6 class="linkHover" @click="singlePoll(like.pk)">
												{{ like.question }}
											</h6>
											
											<hr />
										</div>
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
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import ProfileImageHeader from "../layouts/ProfileImageHeaderLayout.vue";
import TrendingLayout from "../layouts/TrendsLayout.vue";
import MyHeader from "../components/MyHeader.vue";
import modal from "../reusuable_components/modal";
import defaultImage from "../assets/img/profileimage.png";

export default {
	name: "getUserProfile",
	components: {
		ProfileImageHeader,
		TrendingLayout,
		MyHeader,
		modal,
	},
	data() {
		return {
			user_id: this.id,
			show: true,
			image: defaultImage,
		};
	},
	methods: {
		getCurrentUser(id) {
			this.show = true;
			this.$store.dispatch("viewUserProfileAction", id).then(() => {});
		},
		// This function is used to follow a user
		followUser(param, param2) {
			let data = {
				follower: param2,
				following: param,
			};
			this.$store
				.dispatch("followUser", { ...data })
				.then(() => this.$router.push("/"));
		},
		// this function is used to unfollow a user
		unfollowUser(param, param2) {
			this.$store
				.dispatch("unfollowUser", { param, param2 })
				.then(() => this.$router.push("/"));
		},
		singlePoll(param) {
			this.$store.dispatch("getSinglePoll", param).then(() => {
				this.$router.push(`/poll/${param}`);
			});
		},
		getProfile(param) {
			this.$store.dispatch("viewUserProfileAction", param).then(() => {
				this.$router.push(`/user/${param}`);
			});
		},
	},
	computed: {
		// This returns all our updated state
		...mapGetters([
			"numberOfFollowers",
			"numberOfFollowed",
			"numberOfPolls",
			"viewUserProfile",
			"getUser",
		]),

		/* this function is being used to loop over the profile of the user being clicked on
		we are looping through the list of the users followers, and we check if the name of the
		current logged in user is in the list of our followers being looped over, if it is we
		push the name and id to the following varible which is a list, if no, we push the name to the
		unfollowing variable and finally return the list of following.
		so in our template, we check if the length of following is greater than zero, if it is we
		know our current logged in user is following the user being viewed else we know he/she is not
 		*/
		followingUser() {
			let following = [];
			let unfollowing = [];
			let currentUser = this.getUser.userObj.user.username;
			this.viewUserProfile.followers.map((follower) => {
				if (follower.follower_username === currentUser) {
					following.push(follower.follower_username, follower.id);
				} else {
					unfollowing.push(follower.follower_username);
				}
			});
			return following;
		},
	},
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
