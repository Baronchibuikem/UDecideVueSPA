/* eslint-disable no-console */
<template>
	<div>
		<section id="wrapper">
			<div
				class="login-register"
				style="background-image:url(assets/img/login-register.png); 
        padding-top:30px"
			>
				<center>
					<a href="" class="text-center db">
						<img src="assets/img/01_UD.png" alt="Home"/>
						<br />
						<img src="assets/img/logo-light-text.png" alt="Home"
					/></a>
				</center>
				<p>&nbsp;</p>
				<div class="login-box card">
					<div class="card-body">
						<form
							class="form-horizontal form-material"
							id="loginform"
							action="#"
						>
							<h3 class="box-title m-b-20">Join Anyskillz</h3>

							<div class="form-group">
								<small class="text-danger">{{ error.fieldsError }}</small>
								<div class="col-xs-12">
									<small class="text-danger">{{ error.usernameError }}</small>
									<small class="text-danger">{{ error.usernameExist }}</small>
									<input
										class="form-control"
										type="text"
										required=""
										placeholder="Name"
										v-model="username"
									/>
								</div>
							</div>

							<div class="form-group ">
								<small class="text-danger">{{ error.emailError }}</small>
								<small class="text-danger">{{ error.emailExist }}</small>
								<div class="col-xs-12">
									<input
										class="form-control"
										type="text"
										required=""
										placeholder="Email"
										v-model="email"
									/>
								</div>
							</div>

							<div class="form-group ">
								<div class="col-xs-12">
									<input
										class="form-control"
										type="password"
										required=""
										placeholder="Password"
										v-model="password"
									/>
								</div>
							</div>

							<div class="form-group">
								<div class="col-xs-12">
									<input
										class="form-control"
										type="password"
										required=""
										placeholder="Confirm Password"
										v-model="confirm_password"
									/>
									<small class="text-danger">
										{{ error.passwordMatchError }}
									</small>
								</div>
							</div>

							<div class="form-group row">
								<div class="col-md-12">
									<small class="text-danger">{{ error.termsError }}</small>
									<div class="checkbox checkbox-success p-t-0">
										<input
											id="checkbox-signup"
											type="checkbox"
											class="filled-in chk-col-light-blue"
											v-model="terms"
											@click="termsFunc"
										/>
										<label for="checkbox-signup"
											>&nbsp;I agree to all Terms</label
										>
									</div>
								</div>
							</div>

							<div class="form-group text-center p-b-20">
								<div class="col-xs-12">
									<button
										class="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light"
										type="submit"
										@click.prevent="errorCheck"
									>
										<small v-if="loading === true">{{ authStatus }}</small>
										<small v-else>
											Register
										</small>
									</button>
								</div>
							</div>

							<div class="form-group m-b-0">
								<div class="col-sm-12 text-center">
									Already have an account?
									<router-link to="/login" class="text-info m-l-5"
										><b>Sign In</b></router-link
									>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import axios from "axios";
import { verify } from "crypto";
import { mapGetters } from "vuex";

export default {
	name: "SignupForm",
	data() {
		return {
			username: "",
			email: "",
			password: "",
			confirm_password: "",
			terms: false,
			loading: false,
			profile: {},
			emailExistValidation: "",
			error: {
				passwordMatchError: "",
				fieldsError: "",
				usernameError: "",
				emailError: "",
				termsError: "",
				usernameExist: "",
				emailExist: "",
			},
		};
	},
	methods: {
		checkForm: function() {
			axios
				.post("http://localhost/youdecide/ajax-login", {
					headers: {
						"Content-Type": "application/json",
					},
					email: this.email,
					password: this.password,
				})
				.then(() => this.$router.push("/login"));
			// .catch(function(error) {
			// 	console.log(error);
			// });
		},
		// This function is used to register users into the platform. it's called by the submit function.
		// It passes data which contains values entered by the user to register action from vuex, if successfull
		// the user is redirected to the feeds page else if email entered by user already exist, it throws an error

		register() {
			this.loading = true;
			let data = {
				username: this.username,
				email: this.email,
				password: this.password,
				terms: this.terms,
				profile: this.profile,
			};
			let self = this;
			this.$store
				.dispatch("register", data)
				.then(() => this.$router.push("/"))
				.catch(function(err) {
					console.log(err.response.data.email, "ERROR");
					if (err.response.data !== undefined) {
						self.error.usernameExist = err.response.data.username;
						self.error.emailExist = err.response.data.email;
					}
				});
		},
		// This function is called when a user clicks on the submit button, it checks if the
		// passowrd matches the confirm password and it the terms agreement checkbox was clicked
		// If all that passes, then its calls the register function which is defined above

		errorCheck() {
			var all_passed = [];
			if (!this.username) {
				this.error.usernameError = "Username must not be empty";
				all_passed.push(false);
			}
			if (!this.email) {
				this.error.emailError = "Email must not be empty";
				all_passed.push(false);
			}
			if (this.password !== this.confirm_password) {
				this.error.passwordMatchError = "The two passwords don't match";
				all_passed.push(false);
			}
			if (this.terms !== true) {
				this.error.termsError = "You need to agreed to our terms to proceed";
				all_passed.push(false);
			}
			if (all_passed.length === 0) {
				this.register();
			}
		},

		// This function is used to change the value of terms to true when the checkbok is clicked
		termsFunc: function() {
			this.terms = true;
		},
	},
	computed: {
		...mapGetters(["authStatus"]),
	},
};
</script>
