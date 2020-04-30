<template>
	<div class="mt-12">
		<div class="card-body">
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
								<span class="sl-date">{{ getSinglePoll.pub_date }} </span>
							</div>
							<div class="m-t-20">
								<div class="col-md-12 col-xs-12 my-12" @click="homepage">
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
										v-for="(choice, index) in getSinglePoll.choices.choices"
										v-bind:key="choice.id"
									>
										<div class="col-md-12 " v-if="choice.choice_text !== null">
											<!-- <p>Choice{{ index + 1 }}: {{ choice.choice_text }}</p> -->
											<button
												class="form-control btn-info linkHover"
												data-toggle="tooltip"
												:title="choice.choice_vote_count + ' votes'"
											>
												{{ choice.choice_text }}
											</button>
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
								<span class="d-flex justify-content-end">
									<router-link exact to="/">Back to polls </router-link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			polllist: false
		};
	},
	computed: {
		...mapGetters(["getSinglePoll", "getUserID"])
	}
};
</script>

<style scoped>
.linkHover:hover {
	cursor: pointer !important;
	background-color: #eeeeee !important;
}
</style>
