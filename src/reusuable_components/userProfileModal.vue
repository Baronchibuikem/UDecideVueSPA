<template>
	<div>
		<!-- Button trigger modal -->
		<div class="linkHover" data-toggle="modal" :data-target="`#${user_id}`">
			{{ title }}
		</div>

		<!-- Modal -->
		<div
			class="modal fade"
			:id="user_id"
			tabindex="-1"
			role="dialog"
			aria-labelledby="modelTitleId"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title text-capitalize">{{ value }}'s Profile</h5>
						<button
							type="button"
							class="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-5 col sm-12">
								<img
									src="../assets/img/profileimage.png"
									alt=""
									class="image-responsive img_style"
									width="100%"
								/>
							</div>
							<div class="col-md-7 col sm-12 mt-1">
								<div v-if="show === true">
									<h6>
										<b>Username</b>
										{{ viewUserProfile.userObj.user.username }}
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
						</div>

						<hr />

						<div v-if="show === true">
							<h6>
								<b>About</b> {{ viewUserProfile.userObj.user.profile.about }}
							</h6>
							<!-- if current loggedIn user's username is equal to the user who's
								 profile he/she is viewing, we will not display the button else, we show
								 the follow button
							 -->
							<div
								v-if="
									viewUserProfile.userObj.user.username ===
										getUser.userObj.user.username
								"
							></div>
							<div
								v-else
								class="d-flex justify-content-center col-md-4 col-sm-6"
							>
								<button
									class="btn-info form-control"
									@click="followUser(id, getUser.userObj.user.id)"
								>
									follow
								</button>
							</div>
						</div>
						<div v-if="show === false" class="d-flex justify-content-center">
							<button
								@click="getCurrentUser(user_id)"
								class="form-control btn-info col-md-6 col-sm-6"
							>
								View user profile
							</button>
						</div>
						{{ getUser }}
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	props: ["title", "value", "id", "body"],
	data() {
		return {
			user_id: this.id,
			show: false
		};
	},
	methods: {
		getCurrentUser(id) {
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
				.then(() => this.$router.push("/profile"));
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
	// mounted() {
	// 	this.$nextTick(() => {
	// 		this.viewUserProfileAction(this.user_id);
	// 	});
	// }
};
</script>

<style scoped>
.linkHover:hover {
	cursor: pointer !important;
	color: #20aee3;
}
.img_style {
	display: block;
	margin: auto auto;
	max-height: 100%;
	padding-top: 30%;
}
</style>
