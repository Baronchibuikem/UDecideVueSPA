<template>
	<div>
			<form>
			<!-- Button trigger modal -->
			<div class="" data-toggle="modal" :data-target="`#${id}`">
				<span data-toggle="tooltip" title="edit">
					<i
					class="fa fa-pencil text-info"></i>Edit
				</span>
			
			</div>

			<!-- Modal -->
			<div
				class="modal fade"
				:id="id"
				tabindex="-1"
				role="dialog"
				aria-labelledby="modelTitleId"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">{{ title }}</h5>
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
							<div v-if="id === 7">
								<div class="container-fluid">
								<input type="password" class="form-control mb-4" v-model="old_password" placeholder="Enter old password here">
								<input type="password" minlength="8" class="form-control" v-model="new_password" placeholder="Enter your new password">
								</div>
							</div>
							<div class="container-fluid" v-else><i class="fas fa-eclipse-alt"></i>
								<textarea
									cols="5"
									rows="5"
									v-model="text"
									class="form-control"
								/>
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
							<button
								type="button"
								class="btn btn-primary"
								data-dismiss="modal"
								@click="execute(id, poll_id, text, old_password, new_password)"
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	props: ["title", "id", "eventProps", "poll_id", "value"],

	/* We needed to add this.value which is a props from our SinglePollPage to our data
	since we plan to modify the props. There with text referencing this.value, we can go ahead and
	make changes to our value props and vue wouldn't complain */
	data() {
		return {
			text: this.value,
			submit: this.eventProps,
			old_password: "",
			new_password: ""
		};
	},
	methods: {
		execute(param, param2, param3, param4, param5) {
			if (this.submit) {
				// let choice_text = this.value;
				this.submit({ param, param2, param3, param4, param5 });
				this.$router.push("/");
			}
		},
	},
};
</script>

<style scoped>
i:hover {
	cursor: pointer !important;
}
</style>
