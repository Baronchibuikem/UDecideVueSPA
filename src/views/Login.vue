<template>
	<div>
		<section id="wrapper">
			<div
				class="login-register"
				style="background-image:url(assets/img/login-register.png); padding-top:30px"
			>
				<center>
					<a href="" class="text-center db">
						<img src="assets/img/01_UD.png" alt="Home" /><br />
						<img src="assets/img/logo-light-text.png" alt="Home" />
					</a>
				</center>
				<p>&nbsp;</p>
				<div class="login-box card">
					<div class="card-body">
						<LoginForm />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import LoginForm from "./../components/LoginForm.vue";
export default {
	name: "LoginVue",
	components: {
		LoginForm
	}
};
</script>
