<template>
	<div class="mt-12">
		<MyHeader />
		<div class="container page-container">
			<div class="row">
				<div class="col-md-3">
					<profile-image-header />
				</div>
				<div class="col-md-6 card-body">
					<div class="profiletimeline">
						<div class="todo-item sl-right">
							<div class="sl-item">
								<div class="sl-left">
									<img
										src="../assets/img/profileimage.png"
										alt="user"
										class="img-circle"
									/>
								</div>

								<div>
									<div class="d-flex justify-content-between">
										<router-link to="/" class="link text-uppercase">{{
											getSinglePoll.poller_username
										}}</router-link>
										<span
											v-if="
												getUser.userObj.user.username ===
													getSinglePoll.poller_username
											"
										>
											<!-- this modal is responsible for editing a single poll -->
											<modal
												title="Edit poll"
												:id="getSinglePoll.id"
												:value="getSinglePoll.question"
												class="edit"
												data-toggle="tooltip"
												:eventProps="editPoll"
											/>
											<!-- end of modal for editing a single for -->
										</span>
										<span class="sl-date">{{ getSinglePoll.pub_date }} </span>
									</div>
									<div class="m-t-20">
										<div class="col-md-12 col-xs-12 my-12">
											<h5 class="text-dark text-justified">
												{{ getSinglePoll.question }}
											</h5>
										</div>
										<hr />
									</div>
									<div>
										<div class="">
											<!-- Here we are looping through the choice array in our poll -->
											<div
												class="my-3"
												v-for="choice in getSinglePoll.choices.choices"
												v-bind:key="choice.id"
											>
												<div
													class="col-md-12 "
													v-if="choice.choice_text !== null"
												>
													<!-- <p>Choice{{ index + 1 }}: {{ choice.choice_text }}</p> -->
													<button
														class="form-control btn-info linkHover"
														data-toggle="tooltip"
														:title="choice.choice_vote_count + ' votes'"
													>
														{{ choice.choice_text }}
													</button>
													<!-- For deleting a choice -->
													<div
														class="d-flex justify-content-between"
														v-if="
															getUser.userObj.user.username ===
																getSinglePoll.poller_username
														"
													>
														<span
															class="linkHover"
															@click="
																deletePollChoice(choice.id, getSinglePoll.id)
															"
														>
															<i class="fa fa-trash text-danger"></i>Delete
														</span>
														<span class=" d-flex linkHover">
															<i class="fa fa-pencil mr-6 text-success"></i>
															<!-- this modal is responsible for editing a single choice -->
															<modal
																title="Edit"
																:poll_id="getSinglePoll.id"
																:id="choice.id"
																:value="choice.choice_text"
																class="edit"
																data-toggle="tooltip"
																:eventProps="editChoice"
															/>
															<!-- end of modal for editing a single choice -->
														</span>
													</div>
													<!-- Here we call the voteChoice method and pass in the poll object and the selected choice id -->

													<!-- <small> {{ choice.choice_vote_count }} Votes</small><br />
											<small
												>Registered voters <br />{{
													choice.registered_voter
												}}</small
											><br />
											<small
												>Anonymous_voter {{ choice.anonymous_voter }}</small
											> -->
												</div>
											</div>
										</div>
										<div>
											<span class="text-danger"
												>Expire on {{ getSinglePoll.expire_date }}</span
											>
										</div>
									</div>
									<div class="like-comm m-t-20">
										<span class=" m-r-10">
											<i class="fa fa-heart text-danger"></i>
											{{ getSinglePoll.total_likes }} total Like
										</span>
										<span class=" m-r-10">
											<i class="fa fa-heart text-danger"></i>
											{{ getSinglePoll.vote_count }} total Vote
										</span>
										<h6 class="d-flex justify-content-end">
											<router-link exact to="/">Back to polls </router-link>
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<trending-layout />
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
import modal from "../reusuable_components/modal.vue";

export default {
	components: {
		ProfileImageHeader,
		TrendingLayout,
		MyHeader,
		modal
	},
	data() {
		return {
			question: "",
			choice_text: ""
		};
	},
	methods: {
		/* FOR EDITING A POLL
		This function is being passed into the modal component defined in the template above
		as a props, the modal upon executing a function inside it returns an object for us which we are calling payload
		and passing it into our editPoll function. 
		Next we go ahead and destructure the object using spread operator and pick the items we want, pass the items into
		variable names that our backend expects and dispatch them to our editPoll action, if successful, we return to our 
		homepage		
		*/
		editPoll(payload) {
			const { param, param3 } = { ...payload };
			let question = param3;
			let id = param;
			this.$store
				.dispatch("editPoll", { id, question })
				.then(() => this.$router.push("/"));
		},

		// for deleting a choice in a poll
		deletePollChoice(id, poll_id) {
			this.$store
				.dispatch("deleteChoice", { id, poll_id })
				.then(() => this.$router.push("/"));
		},

		/* FOR EDITING A CHOICE IN A POLL
		This function is being passed into the modal component defined in the template above
		as a props, the modal upon executing a function inside it returns an object for us which we are calling payload
		and passing it into our editChoice function. 
		Next we go ahead and destructure the object using spread operator and pick the items we want, pass the items into
		variable names that our backend expects and dispatch them to our editChoice action, if successful, we return to our 
		homepage		
		*/
		editChoice(payload) {
			const { param, param2, param3 } = { ...payload };
			let id = param;
			let poll_id = param2;
			let choice_text = param3;
			this.$store
				.dispatch("editChoice", { id, poll_id, choice_text })
				.then(() => this.$router.push("/"));
		}
	},
	computed: {
		...mapGetters(["getSinglePoll", "getUserID", "getUser"])
	}
};
</script>

<style scoped>
.linkHover:hover {
	cursor: pointer !important;
	background-color: #eeeeee !important;
}
.edit:hover {
	cursor: pointer !important;
	color: blue !important;
}
</style>
