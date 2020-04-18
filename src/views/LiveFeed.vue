<template>
	<div>
		<my-header />
		<!-- <div v-if="!isAuthenticated">
			<Login />
		</div> -->
		<div>
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
											<span v-else>{{ numberOfFollowers }}k</span>
										</h3>
										<h4 class="font-11">Followers</h4>
									</div>

									<div class="col">
										<h3 class="m-b-0 font-12">
											<!-- This returns the number of followers. It's being recieved
										from the getters in userAuthentication store -->
											<span v-if="!numberOfFollowed">O</span>
											<span v-else>{{ numberOfFollowed }}k</span>
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
										<div class="card-body">
											<div class="profiletimeline">
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
															<div class="like-comm m-t-20">
																<span
																	class="linkHover m-r-10"
																	@click="
																		bookmarkPoll(poll, getUser.userObj.user.id)
																	"
																>
																	<i class="fa fa-thumb text-danger"></i
																	>{{ poll.vote_count }} Vote</span
																>
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
									</div>
									<!--second tab-->
									<div class="tab-pane" id="profile" role="tabpanel">
										<div class="card-body">
											<div class="row">
												<div class="col-md-3 col-xs-6 b-r">
													<strong>Full Name</strong>
													<br />
													<p class="text-muted">Johnathan Deo</p>
												</div>
												<div class="col-md-3 col-xs-6 b-r">
													<strong>Mobile</strong>
													<br />
													<p class="text-muted">(123) 456 7890</p>
												</div>
												<div class="col-md-3 col-xs-6 b-r">
													<strong>Email</strong>
													<br />
													<p class="text-muted">johnathan@admin.com</p>
												</div>
												<div class="col-md-3 col-xs-6">
													<strong>Location</strong>
													<br />
													<p class="text-muted">London</p>
												</div>
											</div>
											<hr />
											<p class="m-t-30">
												Donec pede justo, fringilla vel, aliquet nec, vulputate
												eget, arcu. In enim justo, rhoncus ut, imperdiet a,
												venenatis vitae, justo. Nullam dictum felis eu pede
												mollis pretium. Integer tincidunt.Cras dapibus. Vivamus
												elementum semper nisi. Aenean vulputate eleifend tellus.
												Aenean leo ligula, porttitor eu, consequat vitae,
												eleifend ac, enim.
											</p>
											<p>
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries
											</p>
											<p>
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</p>
											<h4 class="font-medium m-t-30">Skill Set</h4>
											<hr />
											<h5 class="m-t-30">
												Wordpress <span class="pull-right">80%</span>
											</h5>
											<div class="progress">
												<div
													class="progress-bar bg-success"
													role="progressbar"
													aria-valuenow="80"
													aria-valuemin="0"
													aria-valuemax="100"
													style="width:80%; height:6px;"
												>
													<span class="sr-only">50% Complete</span>
												</div>
											</div>
											<h5 class="m-t-30">
												HTML 5 <span class="pull-right">90%</span>
											</h5>
											<div class="progress">
												<div
													class="progress-bar bg-info"
													role="progressbar"
													aria-valuenow="90"
													aria-valuemin="0"
													aria-valuemax="100"
													style="width:90%; height:6px;"
												>
													<span class="sr-only">50% Complete</span>
												</div>
											</div>
											<h5 class="m-t-30">
												jQuery <span class="pull-right">50%</span>
											</h5>
											<div class="progress">
												<div
													class="progress-bar bg-danger"
													role="progressbar"
													aria-valuenow="50"
													aria-valuemin="0"
													aria-valuemax="100"
													style="width:50%; height:6px;"
												>
													<span class="sr-only">50% Complete</span>
												</div>
											</div>
											<h5 class="m-t-30">
												Photoshop <span class="pull-right">70%</span>
											</h5>
											<div class="progress">
												<div
													class="progress-bar bg-warning"
													role="progressbar"
													aria-valuenow="70"
													aria-valuemin="0"
													aria-valuemax="100"
													style="width:70%; height:6px;"
												>
													<span class="sr-only">50% Complete</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-3 mt-3 d-none d-md-block">
						<div class="card rounded">
							<div class="card-body">
								<h4 class="card-title">Top Trending</h4>
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
import PollForm from "@/components/PollForm.vue";
import { mapGetters, mapActions } from "vuex";

const api = "http://hn.algolia.com/api/v1/search_by_date?tags=story";

export default {
	name: "feed",
	data() {
		return {
			list: [],
			selected_poll: null,
			poll_creator: null
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
		...mapActions(["getPolls"])
	},
	components: {
		PollForm,
		LoginForm,
		Login,
		PollMenu,
		InfiniteLoading
	},
	computed: {
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
}
</style>
