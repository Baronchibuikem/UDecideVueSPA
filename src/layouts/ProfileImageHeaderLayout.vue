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
					<div @click="updateImageProfile" data-toggle="modal" data-target="#modelId">
						<div v-if="userprofile.user_image !== null" width="50%">
							<img
								:src="getImage(userprofile.user_image)"
								class="header-image"
								alt="My profile image"
								width="70%"
								title="Click to edit picture"
								data-toggle="tooltip"
							/>
						</div>
						<div v-else>
							<img :src="image" width="50%"/>
						</div>
						<!-- <img
						:src="getImage(userprofile.image)"
						class="header-image"
						alt="My profile image"
						width="70%"
						title="Click to edit picture"
						data-toggle="tooltip"
					/> -->
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
												
										<div v-if="userprofile.user_image !== null" width="50%">
									<img
										:src="getImage(userprofile.user_image)"
										class="header-image"
										alt="My profile image"
										width="50%"
									/>
									</div>
									<div v-else>
										<img :src="image" width="50%"/>
									</div>
											</div>
												<input
													id="file-input"
													type="file"
													accept="image/*"
													@change="imageSelected($event)"
													class="form-control"
												/>
																				
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										<button type="submit" class="btn btn-primary"  data-dismiss="modal" @click="updateImage">Save</button>
									</div>
								</div>
							</div>
						</div>
						</form>
						
					</div>

			

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
			
		</div>
	</div>
</template>

<script>
import defaultImage from "../assets/img/profileimage.png";
import { mapGetters } from "vuex";
export default {
	name: "ProfileImageHeader",
	data() {
		return {
			showmodal: false,
			image: defaultImage,
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
			"userprofile",
		]),
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
			this.imageSelected;
		},
		updateImage() {
			let form = new FormData();
			let user_image = this.image;
			form.append("user_image", user_image);
			this.$store.dispatch("updateProfileImage", {
				user_image: form,
			});
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
