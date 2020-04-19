<template>
	<div>
		<div v-if="!isAuthenticated">
			<Login />
		</div>
		<my-header />
		<div v-if="isAuthenticated">
			<div class="page-container container">
				<div class="row">
					<div class="col-sm-3 mt-3 d-none d-sm-block">
						<div class="card rounded">
							<img
								class="card-img img-responsive"
								src="../assets/img/01_UD.png"
								alt="Card image"
							/>
							<div
								class="card-img-overlay card-inverse social-profile-first bg-info"
							>
								<img src="../assets/img/profileimage.png" class="img-circle" />

								<h4 class="card-title text-capitalize">
									<!-- This return the login in users username. It's coming from getters defined
								in the userAuthentication store -->
									{{ getUser.userObj.user.username }}
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
								<h4 class="card-title">Who to follow</h4>
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
										Server #1 overloaded.<span class="text-muted"
											>2 Hours ago</span
										>
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

					<div class="col-md-6">
						<div id="content_area" class="container mt-3">
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
																<span class="sl-date"
																	>{{ poll.pub_date }}
																</span>
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
																	@click="
																		likePoll(poll, getUser.userObj.user.id)
																	"
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
										<!-- <router-link to="/poll/:poll_id" append> </router-link> -->
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

					<div class="col-md-3 mt-3 d-none d-md-block">
						<div class="card rounded">
							<div class="card-body">
								<h4 class="card-title">Top Trending Polls</h4>
								<TrendingPolls />
							</div>
						</div>
						<div class="card rounded">
							<div class="card-body">
								<p class="text-center aboutscroll primary">
									&copy; 2018 youdecide.com
								</p>
								<ul
									class="list-icons d-flex flpolltext-center"
									style="list-style: none; padding: 0;"
								>
									<li class="col">
										<a
											href="javascript:void(0)"
											data-toggle="tooltip"
											title=""
											data-original-title="twitter"
											><i class="fa fa-twitter font-15"></i
										></a>
									</li>

									<li class="col">
										<a
											href="javascript:void(0)"
											data-toggle="tooltip"
											title=""
											data-original-title="Facebook"
											><i class="fa fa-facebook-square font-15"></i
										></a>
									</li>

									<li class="col">
										<a
											href="javascript:void(0)"
											data-toggle="tooltip"
											title=""
											data-original-title="Linkd-in"
											><i class="fa fa-instagram font-15"></i
										></a>
									</li>

									<li class="col">
										<a
											href="javascript:void(0)"
											data-toggle="tooltip"
											title=""
											data-original-title="Linkd-in"
											><i class="fa fa-instagram font-15"></i
										></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- sample modal content -->
			<div
				class="modal fade bs-example-modal-lg"
				id="modal01"
				tabindex="-1"
				role="dialog"
				aria-labelledby="myLargeModalLabel"
				aria-hidden="true"
				style="display: none;"
			>
				<div class="modal-dialog modal-md">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title" id="myLargeModalLabel">Login Form</h4>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-hidden="true"
							>
								×
							</button>
						</div>
						<div class="modal-body">
							<LoginForm></LoginForm>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-danger waves-effect text-left"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>

			<back-to-top bottom="50px" right="50px">
				<button type="button" class="btn btn-info btn-to-top">
					<i class="fa fa-chevron-up"></i>
				</button>
			</back-to-top>
		</div>
	</div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";
import PollMenu from "./../components/PollMenu.vue";
import LoginForm from "./../components/LoginForm.vue";
import Login from "./Login";
import PollForm from "@/views/PollForm.vue";
import TrendingPolls from "./TrendingPolls.vue";
import { mapGetters, mapActions } from "vuex";

const api = "http://hn.algolia.com/api/v1/search_by_date?tags=story";

export default {
	name: "feed",
	components: {
		TrendingPolls,
		PollForm,
		LoginForm,
		Login,
		PollMenu,
		InfiniteLoading
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
