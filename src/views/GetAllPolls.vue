<template>
	<div>
		<div
			class="todo-item sl-right"
			v-for="poll in allPolls"
			v-bind:key="poll.id"
		>
			<div class="sl-item">
				<PollMenu></PollMenu>
				<div class="sl-left">
					<img
						src="http://wrappixel.com/demos/admin-templates/admin-wrap/assets/images/users/2.jpg"
						alt="user"
						class="img-circle"
					/>
				</div>

				<div>
					<div class="d-flex justify-content-between">
						<a href="#" class="link">{{ poll.poller_username }}</a>
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
							<div
								class=""
								v-for="choice in poll.choices"
								v-bind:key="choice.id"
							>
								<div
									class="col-md-12 linkHover"
									data-toggle="tooltip"
									title="vote"
									v-if="choice.choice_text !== null"
								>
									<!-- Here we call the voteChoice method and pass in the poll object and the selected choice id -->
									<p @click="voteChoice(poll, choice.id)">
										{{ choice.choice_vote_count }}-{{ choice.choice_text }}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="like-comm m-t-20">
						<!-- Here we call the bookmarkPoll method and pass in the poll object and current user id which we get from our getUser from getters -->
						<span
							class="linkHover m-r-10"
							@click="bookmarkPoll(poll, getUser.userObj.user.id)"
						>
							<i class="fa fa-thumb text-danger"></i
							>{{ poll.vote_count }} bookmark</span
						>
						<!--  Here we call the likePoll method and pass in the poll object and current user id which we get from our getUser from getters -->
						<span
							class="linkHover m-r-10"
							@click="likePoll(poll, getUser.userObj.user.id)"
						>
							<i class="fa fa-heart text-danger"></i>
							{{ poll.total_likes }} Love
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "GetAllPolls",
	data() {
		return {
			list: [],
			selected_poll: null,
			poll_creator: null,
			selected_choice: null,
			current_date: ""
		};
	},
	methods: {
		/* 	This function is used to bookmark a poll,
			value is an object data from the poll where we destructure and get the id of that particular poll
			UserID is the id of the particular loggedIn user which we received from our getters
			we use these values to update the selected_poll and poll_creator which are keys in our data
			After the update we dispatch the likePoll action passing in the data as parameter
		*/
		likePoll(value, userID) {
			const { id } = { ...value };
			this.selected_poll = id;
			this.poll_creator = userID;
			let data = {
				poll: this.selected_poll,
				user: this.poll_creator
			};
			this.$store
				.dispatch("likePoll", data)
				.then(() => this.$router.push("/feeds"));
		},

		/* 	This function is used to bookmark a poll,
			value is an object data from the poll where we destructure and get the id of that particular poll
			UserID is the id of the particular loggedIn user which we received from our getters
			we use these values to update the selected_poll and poll_creator which are keys in our data
			After the update we dispatch the bookmarkPoll action passing in the data as parameter
		*/
		bookmarkPoll(value, userID) {
			const { id } = { ...value };

			this.selected_poll = id;
			this.poll_creator = userID;
			let data = {
				poll: this.selected_poll,
				user: this.poll_creator
			};
			this.$store
				.dispatch("bookmarkPoll", data)
				.then(() => this.$router.push("/"));
		},

		/* 	This function is used to vote on a choice attached to a poll,
			value is an object data from the poll where we destructure and get the id of that particular poll
			UserID is the id of the particular choice which we received when we looped over the choices
			we use these values to update the selected_poll and selected_choice which are keys in our data
			After the update we dispatch the voteChoice action passing in the data as parameter
		*/
		voteChoice(value, userID) {
			const { id } = { ...value };
			this.selected_poll = id;
			this.selected_choice = userID;
			let data = {
				poll: this.selected_poll,
				choice: this.selected_choice
			};
			this.$store
				.dispatch("voteChoice", data)
				.then(() => this.$router.push("/"));
		},
		// Here we call our getPolls action
		...mapActions(["getPolls", "getTrendingPolls"])
	},
	computed: {
		// This returns all our updated state
		...mapGetters([
			"allPolls",
			"getUser",
			"numberOfFollowers",
			"numberOfFollowed",
			"numberOfPolls",
			"isLoggedIn",
			"isAuthenticated",
			"getuserID"
		])
	},
	mounted() {
		// Added the called to ensure the element is mounted once it is called.
		this.$nextTick(() => {
			this.getPolls();
		});
	}
};
</script>

<style></style>
