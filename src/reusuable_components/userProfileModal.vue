<template>
	<div>
		<!-- Button trigger modal -->
		<div class="linkHover" data-toggle="modal" :data-target="`#${user_id}`">
			{{ title }}
		</div>

		<!-- Modal -->
		<div
			class="modal fade"
			:id="user_id"
			tabindex="-1"
			role="dialog"
			aria-labelledby="modelTitleId"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title text-capitalize">{{ value }}'s Profile</h5>
						<button
							type="button"
							class="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img
							src="../assets/img/profileimage.png"
							alt=""
							class="image-responsive img_style"
						/>
						number of polls {{ numberOfPolls }}
						<hr />

						{{ user_id }}

						<div v-if="show === false">
							<button
								@click="getCurrentUser(user_id)"
								class="form-control btn-info"
								data-toggle="tooltip"
								title="View Profile"
							>
								View user
							</button>
						</div>
						<div v-if="show === true">
							{{ viewUserProfile }}
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	props: ["title", "value", "id", "body"],
	data() {
		return {
			user_id: this.id,
			show: false
		};
	},
	methods: {
		getCurrentUser(id) {
			this.show = true;
			this.$store.dispatch("viewUserProfileAction", id).then(response => {
				console.log(response.data, "from modal file");
			});
		}
	},
	computed: {
		// This returns all our updated state
		...mapGetters([
			"numberOfFollowers",
			"numberOfFollowed",
			"numberOfPolls",
			"viewUserProfile"
		])
	}
	// mounted() {
	// 	this.$nextTick(() => {
	// 		this.viewUserProfileAction(this.user_id);
	// 	});
	// }
};
</script>

<style>
.linkHover:hover {
	cursor: pointer !important;
	color: #20aee3;
}
.img_style {
	display: block;
	margin: auto auto;
	max-height: 100%;
	border-radius: 50%;
}
</style>
