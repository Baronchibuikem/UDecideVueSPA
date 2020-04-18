<template>
	<div>
		<header class="topbar">
			<nav class="navbar top-navbar navbar-expand-md navbar-light">
				<div class="navbar-collapse">
					<div class="navbar-header mr-auto">
						<a class="navbar-brand" href="<%= BASE_URL %>">
							<b>
								<img
									src="./../assets/img/01_UD.png"
									alt="homepage"
									class="dark-logo"
								/>
								<img
									src="./../assets/img/01_UD.png"
									alt="homepage"
									class="light-logo"
								/>
							</b>

							<span>
								<img
									src="./../assets/img/logo-light-text.png"
									alt="homepage"
									class="dark-logo"
								/>
								<img
									src="./../assets/img/logo-light-text.png"
									class="light-logo"
									alt="homepage"
								/>
							</span>
						</a>
					</div>

					<ul class="navbar-nav my-lg-0">
						<li class="nav-item hidden-xs-down search-box">
							<a
								class="nav-link hidden-sm-down waves-effect waves-dark"
								href="javascript:void(0)"
							>
								<i class="icon-Magnifi-Glass2"></i
							></a>
							<form
								class="app-search"
								style="display: none;"
								@click.prevent="search"
							>
								<input
									class="form-control"
									placeholder="Search &amp; enter"
									type="text"
									v-model="searchPolls"
								/>
								<a class="srh-btn"><i class="ti-close"></i></a>
							</form>
						</li>

						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle waves-effect waves-dark"
								href="#"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i class="icon-Bell"></i>
								Notifications
							</a>
							<div
								class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown"
							>
								<ul>
									<li>
										<div class="drop-title">Notifications</div>
									</li>
									<li>
										<div
											class="message-center ps ps--theme_default"
											data-ps-id="c5e92f88-8714-3373-5d6b-4bffa6c54b72"
										>
											<a href="#">
												<div class="btn btn-danger btn-circle">
													<i class="fa fa-link"></i>
												</div>
												<div class="mail-contnet">
													<h5>Luanch Admin</h5>
													<span class="mail-desc"
														>Just see the my new admin!</span
													>
													<span class="time">9:30 AM</span>
												</div>
											</a>

											<a href="#">
												<div class="btn btn-success btn-circle">
													<i class="ti-calendar"></i>
												</div>
												<div class="mail-contnet">
													<h5>Event today</h5>
													<span class="mail-desc"
														>Just a reminder that you have event</span
													>
													<span class="time">9:10 AM</span>
												</div>
											</a>

											<a href="#">
												<div class="btn btn-info btn-circle">
													<i class="ti-settings"></i>
												</div>
												<div class="mail-contnet">
													<h5>Settings</h5>
													<span class="mail-desc"
														>You can customize this template as you want</span
													>
													<span class="time">9:08 AM</span>
												</div>
											</a>

											<a href="#">
												<div class="btn btn-primary btn-circle">
													<i class="ti-user"></i>
												</div>
												<div class="mail-contnet">
													<h5>Pavan kumar</h5>
													<span class="mail-desc">Just see the my admin!</span>
													<span class="time">9:02 AM</span>
												</div>
											</a>
											<div
												class="ps__scrollbar-x-rail"
												style="left: 0px; bottom: 0px;"
											>
												<div
													class="ps__scrollbar-x"
													tabindex="0"
													style="left: 0px; width: 0px;"
												></div>
											</div>
											<div
												class="ps__scrollbar-y-rail"
												style="top: 0px; right: 0px;"
											>
												<div
													class="ps__scrollbar-y"
													tabindex="0"
													style="top: 0px; height: 0px;"
												></div>
											</div>
										</div>
									</li>
									<li>
										<a class="nav-link text-center" href="javascript:void(0);">
											<strong>Check all notifications</strong>
											<i class="fa fa-angle-right"></i>
										</a>
									</li>
								</ul>
							</div>
						</li>

						<li class="nav-item dropdown u-pro">
							<a
								class="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
								href="#"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<img
									src="../assets/img/profileimage.png"
									alt="user"
									class="img-circle"
								/>
								<span class="hidden-md-down"
									>{{ getUser.userObj.user.username }} &nbsp;<i
										class="fa fa-angle-down"
									></i
								></span>
							</a>
							<div class="dropdown-menu dropdown-menu-right animated flipInY">
								<ul class="dropdown-user">
									<li>
										<div class="dw-user-box">
											<div class="u-img">
												<img src="../assets/img/profileimage.png" alt="user" />
											</div>
											<div class="u-text">
												<h4>{{ getUser.userObj.user.username }}</h4>

												<a
													href="pages-profile.html"
													class="btn btn-rounded btn-danger btn-sm"
													>View Profile</a
												>
											</div>
										</div>
									</li>
									<li role="separator" class="divider"></li>
									<li>
										<a href="#"><i class="ti-user"></i> My Profile</a>
									</li>
									<li>
										<a href="#"><i class="ti-wallet"></i> My Balance</a>
									</li>
									<li>
										<a href="#"><i class="ti-email"></i> Inbox</a>
									</li>
									<li role="separator" class="divider"></li>
									<li>
										<a href="#"><i class="ti-settings"></i> Account Setting</a>
									</li>
									<li role="separator" class="divider"></li>
									<li v-if="isLoggedIn">
										<a @click="logout"
											><i class="fa fa-power-off"></i> Logout</a
										>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	</div>
</template>

<script>
import SignupForm from "./../components/SignupForm.vue";

import { mapGetters } from "vuex";
export default {
	name: "myheader",
	components: {
		SignupForm
	},
	data() {
		return {
			searchPolls: ""
		};
	},
	methods: {
		// This method is used to logout a loggedIn user, it dispatches the logout action which is
		// being handled by vuex
		logout: function() {
			this.$store.dispatch("logout").then(() => {
				this.$router.push("/login");
			});
		},
		search: function() {
			if (this.searchPolls.length > 0) {
				const query = this.searchPolls.trim();
				this.$store.dispatch("searchPolls", query).then(() => {
					this.$router.push("/");
				});
			}
		}
	},
	computed: {
		...mapGetters(["getUser", "isLoggedIn"])
	}
};
</script>
