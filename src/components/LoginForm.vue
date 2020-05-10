<template>
	<div>
		<form class="#" @submit.prevent="checkForm">
			<h3 class="box-title m-b-20 text-center">Welcome back</h3>
			<div class="mb-3">
				<button class="btn btn-block btn-facebook">Facebook</button>
				<button class="btn btn-block btn-twitter">Twitter</button>
			</div>
			<h6 class="fb-black">OR</h6>
			<div class="form-group">
				<span class="text-danger">{{ errors.validation }}</span>
				<!-- <span>{{ errorStatus }}</span> -->
				<div class="col-xs-12">
					<input
						v-model="username"
						class="form-control"
						type="username"
						placeholder="Username"
						required
					/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-xs-12">
					<input
						v-model="password"
						class="form-control"
						type="password"
						placeholder="Password"
						required
					/>
				</div>
			</div>
			<div class="form-group row">
				<div class="col-md-12">
					<div class="checkbox checkbox-info pull-left p-t-0">
						<input
							id="checkbox-signup"
							type="checkbox"
							class="filled-in chk-col-light-blue"
						/>
						<label for="checkbox-signup">&nbsp; Remember me</label>
					</div>
					<a
						href="javascript:void(0)"
						id="to-recover"
						class="text-dark pull-right"
					>
						<i class="fa fa-lock m-r-5"></i> Forgot password?</a
					>
				</div>
			</div>
			<div class="form-group text-center">
				<div class="mb-3">
					<button
						class="btn btn-block btn-info btn-rounded"
						type="submit"
						@click="login"
					>
						<span v-if="loading === true">{{ authStatus }}</span>
						<span v-else>
							Log In
						</span>
					</button>
				</div>
			</div>
			<div class="form-group m-b-0">
				<div class="col-sm-12 text-center">
					Don't have an account?<a href="/signup" class="text-info m-l-5"
						><b>Sign Up</b></a
					>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import axios from "axios";
export default {
	name: "LoginForm",
	data() {
		return {
			errors: {
				validation: ""
			},
			username: "",
			password: "",
			loading: false
		};
	},

	methods: {
		checkForm: function() {
			axios
				.post("http://localhost/youdecide/ajax-login", {
					headers: {
						"Content-Type": "application/json"
					},
					username: this.username,
					password: this.password
				})
				.then(response => this.$router.push("/"))
				.catch(function(error) {
					console.log(error);
				});
		},
		// This function is used to dispatch a vuex action which in turn submits
		//  data entered by the user to the backend
		login() {
			this.loading = true;
			let username = this.username;
			let password = this.password;
			let self = this;
			this.$store
				.dispatch("login", { username, password })
				.then(() => this.$router.push("/"))
				.catch(function(err) {
					if (err.response.data !== undefined) {
						self.errors.validation = err.response.data.error;
					}
				});
		}
	},
	computed: {
		...mapGetters(["authStatus", "errorStatus"])
	}
};
</script>
