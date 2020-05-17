<template>
	<div>
		<div class="mt-3 d-none d-sm-block">
			<div class="card rounded">
				<img
					class="card-img img-responsive"
					src="../assets/img/01_UD.png"
					alt="My profile image"
					width="50%"
				/>
				<div class="card-img-overlay card-inverse social-profile-first bg-info">
					<div @click.prevent="updateImageProfile" data-toggle="modal" data-target="#modelId">
						<img
						:src="getUser.userObj.user.profile.photo"
						class="header-image"
						alt="My profile image"
						width="70%"
						title="Clic to edit picture"
						data-toggle="tooltip"
					/>
					</div>
					<div v-if="showmodal === true">
						<form>
						<!-- Modal -->
						<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
										<div class="modal-header">
												<h5 class="modal-title">Edit your image</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
											</div>
									<div class="modal-body">
										<div class="container-fluid">	
											<div class="mb-3">											
												<img
													:src="getUser.userObj.user.profile.photo"
													class="header-image"
													alt="My profile image"
													width="50%"
												/>
											</div>
												<input
													type="file"
													accept="image/*"
													@change="imageSelected"
													class="form-control"
												/>
																				
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary"  data-dismiss="modal" @click.prevent="updateImage">Save</button>
									</div>
								</div>
							</div>
						</div>
						</form>
						
					</div>

					<!-- <img
						:src="getImage(this.getUser.userObj.user.profile.image)"
						class="header-image"
						alt="My profile image"
						width="100%"
					/> -->

					<h4 class="card-title text-capitalize">
						<!-- This return the login in users username. It's coming from getters defined
								in the userAuthentication store -->
						<router-link exact to="/profile" class="text-white">{{
							getUser.userObj.user.username
						}}</router-link>
						<i
							class="fa fa-eye text-white"
							data-toggle="tooltip"
							title="view profile"
						></i>
					</h4>

					<br />
				</div>

				<div class="card-body text-center">
					<div class="row">
						<div class="col">
							<h3 class="m-b-0 font-12">
								<!-- This returns the number of followers. It's being recieved
										from the getters in userAuthentication store -->
								<span v-if="!numberOfFollowers">O</span>
								<span v-else>{{ numberOfFollowers }}</span>
							</h3>
							<h4 class="font-11">Followers</h4>
						</div>

						<div class="col">
							<h3 class="m-b-0 font-12">
								<!-- This returns the number of followers. It's being recieved
										from the getters in userAuthentication store -->
								<span v-if="!numberOfFollowed">O</span>
								<span v-else>{{ numberOfFollowed }}</span>
							</h3>
							<h4 class="font-11">Following</h4>
						</div>

						<div class="col">
							<h3 class="m-b-0 font-12">
								<!-- This returns the number of followers. It's being recieved
										from the getters in userAuthentication store -->
								<span v-if="!numberOfPolls">O</span>
								<span v-else>{{ numberOfPolls }}</span>
							</h3>
							<h4 class="font-11">Polls</h4>
						</div>
					</div>
				</div>
			</div>
			<div class="card rounded">
				<div class="card-body">
					<h4 class="card-title">Top Trending Feeds</h4>
					<ul class="feeds">
						<li>
							<div class="bg-light-info">
								<i class="fa fa-bell-o"></i>
							</div>
							You have 4 pending tasks.
							<span class="text-muted">Just Now</span>
						</li>
						<li>
							<div class="bg-light-success">
								<i class="ti-server"></i>
							</div>
							Server #1 overloaded.<span class="text-muted">2 Hours ago</span>
						</li>
						<li>
							<div class="bg-light-warning">
								<i class="ti-shopping-cart"></i>
							</div>
							New order received.<span class="text-muted">31 May</span>
						</li>
						<li>
							<div class="bg-light-danger"><i class="ti-user"></i></div>
							New user registered.<span class="text-muted">30 May</span>
						</li>
					</ul>
				
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "ProfileImageHeader",
	data() {
		return {
			showmodal: false,
			image: null,
		};
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
			"getuserID",
		]),
		image: {
			get: function(newValue) {
				const self = this;
				const photo = newValue;
				return (self.image = photo);
			},
		},
	},
	methods: {
		getImage(pic) {
			return `https://res.cloudinary.com/dwzk9ckul/${pic}`;
		},
		updateImageProfile() {
			this.showmodal = true;
		},
		imageSelected(event) {
			this.image = event.target.files[0];
		},
		updateImage() {
			let form = new FormData();
			let image = this.image;
			form.append("image", image);
			this.$store
				.dispatch("updateProfileImage", {
					image: form,
				})
				.then(() => this.$router.push("/"))
				.catch((err) => console.error(err));
		},
	},
};
</script>

<style scoped>
i:hover {
	cursor: pointer !important;
}
.header-image {
	display: block !important;
	margin: auto auto !important;

	border-radius: 30% !important;
}
</style>
