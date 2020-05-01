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
						<!-- Here we are looping through the allPolls which we received from our getters -->
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

										<!-- Modal for editing logged in users poll -->
										<form @click="editPoll(getSinglePoll.id)">
											<span
												v-if="
													getUser.userObj.user.username ===
														getSinglePoll.poller_username
												"
											>
												<!-- <modal
												title="Edit Poll"
												id="first"
												:body="getSinglePoll.question"
												class="edit"
												data-toggle="tooltip"
												:eventname="editPoll(getSinglePoll.id)"
											/> -->
												<v-text
													class="edit"
													data-toggle="modal"
													data-target="#modalId"
												>
													Edit Poll
												</v-text>

												<div
													class="modal fade"
													id="modalId"
													tabindex="-1"
													role="dialog"
													aria-labelledby="modelTitleId"
													aria-hidden="true"
												>
													<div class="modal-dialog" role="document">
														<div class="modal-content">
															<div class="modal-header">
																<h5 class="modal-title">Edit poll</h5>
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
																<div class="container-fluid">
																	<textarea
																		cols="5"
																		rows="5"
																		v-model="getSinglePoll.question"
																		class="form-control"
																	>
																	</textarea>
																</div>
															</div>
															<div class="modal-footer">
																<button
																	type="button"
																	class="btn btn-secondary"
																	data-dismiss="modal"
																>
																	Close
																</button>
																<button
																	class="btn btn-primary"
																	data-dismiss="modal"
																>
																	Save
																</button>
															</div>
														</div>
													</div>
												</div>
											</span>
										</form>
										<!-- End of modal -->
										<span class="sl-date">{{ getSinglePoll.pub_date }} </span>
									</div>
									<div class="m-t-20">
										<div class="col-md-12 col-xs-12 my-12" @click="homepage">
											<h5 class="text-dark text-justified">
												{{ getSinglePoll.question }}
											</h5>
											{{ getSinglePoll.id }}
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
															@click="deletePollChoice(choice.id)"
														>
															<i class="fa fa-trash text-danger"></i>Delete
														</span>
														<span class=" d-flex linkHover">
															<i class="fa fa-pencil mr-6 text-success"></i>
															<modal
																title="Edit"
																:id="choice.id"
																class="edit"
																data-toggle="tooltip"
																:eventProps="editChoice"
															>
																<textarea
																	cols="5"
																	rows="5"
																	v-model="choice.choice_text"
																	class="form-control"
																>
																</textarea>
															</modal>
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
										<!--  Here we call the likePoll method and pass in the poll object and current user id which we get from our getUser from getters -->
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
		// for editing a poll
		editPoll(id) {
			let question = this.getSinglePoll.question;
			this.$store
				.dispatch("editPoll", { id, question })
				.then(() => this.$router.push("/"));
		},
		// for deleting a choice in a poll
		deletePollChoice(id) {
			this.$store
				.dispatch("deleteChoice", id)
				.then(() => this.$router.push("/"));
		},
		// For editing a choice in a poll
		editChoice(id) {
			let choice_text = this.getSinglePoll.choice_text;
			this.$store
				.dispatch("editChoice", { id, choice_text })
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
