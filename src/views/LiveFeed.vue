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
									<div class="card-body">
										<div class="profiletimeline">
											<!-- <div
												class="todo-item sl-right"
												v-for="poll in displayPolls"
												v-bind:key="poll.id"
											>
												<h5>{{ poll.question }}</h5>
											</div>
										</div> -->

											<!-- Here we are looping through the allPolls which we received from our getters -->
											<div
												class="todo-item sl-right"
												v-for="poll in displayPolls"
												v-bind:key="poll.id"
											>
											
												<div class="sl-item">
													<!-- <PollMenu></PollMenu> -->
													<div class="sl-left">
														<div v-if="poll.poller_image !== null">
														<img
															:src="poll.poller_image"
															class="img-circle"
														/>
														</div>
														<div v-else>
															<img :src="image">
														</div>
													</div>

													<div>
														<div class="d-flex justify-content-between">
															<div class="link">
																<h5
																	class="linkHover font-weight-bold"
																	@click="getProfile(poll.poller_username_id)"
																>
																	{{poll.poller_full_name}} @{{ poll.poller_username }}
																</h5>
																
															</div>
															
														</div>
														<div class="m-t-20">
															<div class="col-md-12 col-xs-12 linkHover">
																<h5 class="linkHover" @click="singlePoll(poll.id)">
																	{{ poll.question }}
																</h5>
															</div>
														</div>
													
														<div class="m-t-20">
															<div class="">
																<div v-if="poll.poll_has_expired">
																	<small class="">
																		Sorry voting on this poll has expired
																	</small><br>
																	<small class="text-info">Total votes {{poll.vote_count}} </small>
																</div>
																<!-- Here we are looping through the choice array in our poll -->
																<div v-else>
																<div
																	v-for="choice in poll.choices"
																	v-bind:key="choice.id"
																>
																	<div
																		class="col-md-12 linkHover"
																		v-if="choice.choice_text !== null"
																	>
																		<!-- Here we call the voteChoice method and pass in the poll object and the selected choice id -->
																		<div
																			v-if="
																				getUser.userObj.user.username !==
																					poll.poller_username
																			"
																		>
																			<button
																				class="form-control btn-info  text-white my-1 linkHover"
																				@click="voteChoice(poll, choice.id)"
																				data-toggle="tooltip"
																				title="vote"
																			>
																				{{ choice.choice_vote_count }}-{{
																					choice.choice_text
																				}}
																			</button>
																		</div>
																		<div v-else>
																			<button
																				class="form-control btn-info  text-white my-1 linkHover"
																				data-toggle="tooltip"
																				title="Can't vote on your own poll"
																				:disabled="disable"
																			>
																				{{ choice.choice_vote_count }}-{{
																					choice.choice_text
																				}}
																			</button>
																		</div>
																	</div>
																</div>
																</div>
															</div>
														</div>
														<div class="like-comm m-t-20">
															<!-- Here we call the bookmarkPoll method and pass in the poll object and current user id which we get from our getUser from getters -->
															<span
															class="text-info"
															v-if="getUserBookmarks.indexOf(poll.question) !== -1">
															Bookmarked<i class="fa fa-check text-info"></i>
															</span>
															<span
															v-else
																class="linkHover m-r-10"
																data-toggle="tooltip"
																title="bookmark poll"
																@click="
																	bookmarkPoll(poll, getUser.userObj.user.id)
																"
															>
																<i class="fa fa-book text-danger"></i
																> bookmark</span
															>
															
															<!--  Here we call the likePoll method and pass in the poll object and current user id which we get from our getUser from getters -->
														<!-- <div v-for="like in getUser.likes" :key="like.id"> -->
															
															<span
															class="text-info"
															v-if="UserLikes.indexOf(poll.question) !== -1">
															Liked<i class="fa fa-check text-info"></i>
															</span>
															
															<span
															v-else
																class="linkHover m-r-10"
																data-toggle="tooltip"
																title="Like poll"
																@click="likePoll(poll, getUser.userObj.user.id)"
															>
																<i class="fa fa-heart text-danger"></i>
																{{ poll.total_likes }} Like
															</span>
																
														</div>
													</div>
												</div>
											</div>
										</div>
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
import TrendingPolls from "../views/TrendingPolls";
import defaultImage from "../assets/img/profileimage.png";
import modal from "../reusuable_components/userProfileModal.vue";

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
		TrendingLayout,
		TrendingPolls,
		modal,
	},
	data() {
		return {
			list: [],
			selected_poll: null,
			poll_creator: null,
			selected_choice: null,
			current_date: "",
			disable: true,
			showPolls: true,
			image: defaultImage,
			loading: false,
		};
	},
	methods: {
		infiniteHandler($state) {
			axios
				.get(api, {
					params: {
						page: this.list.length / 20 + 1,
					},
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
			this.loading = true;
			const { id } = { ...value };
			this.selected_poll = id;
			this.poll_creator = userID;
			let data = {
				poll: this.selected_poll,
				user: this.poll_creator,
			};
			this.$store.dispatch("likePoll", data).then(() => this.$router.push("/"));
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
				user: this.poll_creator,
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
				choice: this.selected_choice,
			};
			this.$store
				.dispatch("voteChoice", data)
				.then(() => this.$router.push(`/`));
		},
		singlePoll(param) {
			this.$store.dispatch("getSinglePoll", param).then(() => {
				this.$router.push(`poll/${param}`);
			});
		},
		getProfile(param) {
			this.$store.dispatch("viewUserProfileAction", param).then(() => {
				this.$router.push(`user/${param}`);
			});
		},
		// Here we call our getPolls action
		...mapActions(["getPolls", "getTrendingPolls"]),
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
			"getuserID",
			"searchPollResults",
			"searchPollLength",
			"UserLikes",
			"pollStatus",
			"getUserBookmarks",
		]),
		displayPolls() {
			if (!this.searchPollResults.length) {
				return this.allPolls;
			} else {
				return this.searchPollResults;
			}
		},
	},
	mounted() {
		// Added the called to ensure the element is mounted once it is called.
		this.$nextTick(() => {
			this.getTrendingPolls();
			this.getPolls();
			// this.getBookmarks();
			// this.getTrendingFeeds();
		});
	},
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
