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
								<div class="col-xs-12">
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
									<!-- <div v-if="this.errors.passwordMatchError">
										{{ errors.passwordMatchError }}
									</div>
									<div v-else></div> -->
								</div>
							</div>

							<div class="form-group row">
								<div class="col-md-12">
									<div class="checkbox checkbox-success p-t-0">
										<input
											id="checkbox-signup"
											type="checkbox"
											class="filled-in chk-col-light-blue"
											v-model="terms"
											@click="termsFunc"
										/>
										<label for="checkbox-signup"
											>&nbsp;I agree to all
											<a href="javascript:void(0)">Terms</a></label
										>
									</div>
								</div>
							</div>

							<div class="form-group text-center p-b-20">
								<div class="col-xs-12">
									<button
										class="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light"
										type="submit"
										@click.prevent="submit"
									>
										Sign Up
									</button>
								</div>
							</div>

							<div class="form-group m-b-0">
								<div class="col-sm-12 text-center">
									Already have an account?
									<a href="/login" class="text-info m-l-5"><b>Sign In</b></a>
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
export default {
	name: "SignupForm",
	data() {
		return {
			errors: [],
			username: "",
			email: "",
			password: "",
			confirm_password: "",
			terms: false,
			loading: false,
			profile: {},
			emailExistValidation: "",
			error: {
				passwordMatchError: ""
			}
		};
	},
	methods: {
		checkForm: function() {
			axios
				.post("http://localhost/youdecide/ajax-login", {
					headers: {
						"Content-Type": "application/json"
					},
					email: this.email,
					password: this.password
				})
				.then(response => this.$router.push("/"))
				.catch(function(error) {
					console.log(error);
				});
		},
		// This function is used to register users into the platform. it's called by the submit function.
		// It passes data which contains values entered by the user to register action from vuex, if successful
		// the user is redirected to the feeds page else if email entered by user already exist, it throws an error

		register: function() {
			let self = this;
			if (this.username && this.email && this.password && this.terms) {
				let data = {
					username: this.username,
					email: this.email,
					password: this.password,
					terms: this.terms,
					profile: this.profile
				};
				this.$store
					.dispatch("register", data)
					.then(() => this.$router.push("/"))
					.catch(function(err) {
						if (err.response.data["email"] != undefined) {
							self.emailExistValidation = err.response.data["email"][0];
						}
					});
			}
		},
		// This function is called when a user clicks on the submit button, it checks if the
		// passowrd matches the confirm password and it the terms agreement checkbox was clicked
		// If all that passes, then its calls the register function which is defined above
		submit: function() {
			if (this.password === this.confirm_password && this.terms === true) {
				this.register();
			} else {
				this.errors.passwordMatchError = "The two passwords don't match";
				this.errors.terms = "You need to agreed to our terms to proceed";
			}
		},

		// This function is used to change the value of terms to true when the checkbok is clicked
		termsFunc: function() {
			this.terms = true;
		}
	}
};
</script>
