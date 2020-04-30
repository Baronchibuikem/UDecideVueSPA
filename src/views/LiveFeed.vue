<template>
	<div>
		<MyHeader />
		<div class="container page-container ">
			<div class="row mt-12">
				<div class="col-md-3">
					<ProfileImageHeader />
				</div>
				<div class="col-md-6">
					<div id="content_area" class="container">
						<PollForm />
						<div class="card rounded">
							<!-- Nav tabs -->
							<ul class="nav nav-tabs profile-tab" role="tablist">
								<li class="nav-item">
									<a
										class="nav-link active"
										data-toggle="tab"
										href="#home"
										role="tab"
										>Timeline</a
									>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										data-toggle="tab"
										href="#profile"
										role="tab"
										>Trending</a
									>
								</li>
							</ul>
							<!-- Tab panes -->
							<div class="tab-content">
								<div class="tab-pane active" id="home" role="tabpanel">
									<div class="card-body" v-if="polllist">
										<div class="profiletimeline">
											<!-- Here we are looping through the allPolls which we received from our getters -->
											<div
												class="todo-item sl-right"
												v-for="poll in allPolls"
												v-bind:key="poll.id"
											>
												<div class="sl-item" @click="singlePoll(poll.id)">
													<PollMenu></PollMenu>
													<div class="sl-left">
														<img
															src="../assets/img/profileimage.png"
															alt="user"
															class="img-circle"
														/>
													</div>

													<div>
														<div class="d-flex justify-content-between">
															<a href="#" class="link">{{
																poll.poller_username
															}}</a>
															<span class="sl-date">{{ poll.pub_date }} </span>
														</div>
														<div class="m-t-20">
															<div class="col-md-12 col-xs-12">
																<p>{{ poll.question }}</p>
																{{ getUser }}
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
																			{{ choice.choice_vote_count }}-{{
																				choice.choice_text
																			}}
																		</p>
																	</div>
																</div>
															</div>
														</div>
														<div class="like-comm m-t-20">
															<!-- Here we call the bookmarkPoll method and pass in the poll object and current user id which we get from our getUser from getters -->
															<span
																class="linkHover m-r-10"
																@click="
																	bookmarkPoll(poll, getUser.userObj.user.id)
																"
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
									</div>
									<div v-if="!polllist">
										<router-view></router-view>
									</div>
								</div>
								<!--second tab-->
								<div class="tab-pane" id="profile" role="tabpanel">
									<TrendingPolls />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<TrendingLayout />
				</div>
			</div>
			<back-to-top bottom="50px" right="50px">
				<button type="button" class="btn btn-info btn-to-top">
					<i class="fa fa-chevron-up"></i>
				</button>
			</back-to-top>
		</div>
		<MyFooter />
	</div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";
import PollMenu from "./../components/PollMenu.vue";
import LoginForm from "./../components/LoginForm.vue";
import Login from "./Login";
import PollForm from "@/views/PollForm.vue";
import ProfileImageHeader from "../layouts/ProfileImageHeaderLayout.vue";
import TrendingLayout from "../layouts/TrendsLayout.vue";
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";

import { mapGetters, mapActions } from "vuex";

const api = "http://hn.algolia.com/api/v1/search_by_date?tags=story";

export default {
	name: "feed",
	components: {
		MyHeader,
		MyFooter,
		PollForm,
		LoginForm,
		Login,
		PollMenu,
		InfiniteLoading,
		ProfileImageHeader,
		TrendingLayout
	},
	data() {
		return {
			list: [],
			selected_poll: null,
			poll_creator: null,
			selected_choice: null,
			current_date: "",
			polllist: true
		};
	},
	methods: {
		infiniteHandler($state) {
			axios
				.get(api, {
					params: {
						page: this.list.length / 20 + 1
					}
				})
				.then(({ data }) => {
					if (data.hits.length) {
						this.list = this.list.concat(data.hits);
						$state.loaded();
						if (this.list.length / 20 === 10) {
							$state.complete();
						}
					} else {
						$state.complete();
					}
				});
		},

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
		singlePoll(param) {
			this.$store.dispatch("getSinglePoll", param).then(() => {
				this.polllist = false;
				this.$router.push(`poll/${param}`);
			});
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
			this.getTrendingPolls();
			// this.getTrendingFeeds();
		});
	}
};
</script>

<style>
.btn-to-top {
	width: 60px;
	height: 60px;
	padding: 10px 16px;
	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
}
.linkHover:hover {
	cursor: pointer !important;
	color: #20aee3;
}
</style>
