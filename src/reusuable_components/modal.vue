<template>
	<div>
		<form @click="eventname">
			<!-- Button trigger modal -->
			<div class="" data-toggle="modal" data-target="#modalId">
				{{ title }}
			</div>

			<!-- Modal -->
			<div
				class="modal fade"
				id="modalId"
				tabindex="-1"
				role="dialog"
				aria-labelledby="modelTitleId"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Edit poll</h5>
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
							<div class="container-fluid">
								<textarea cols="5" rows="5" v-model="body" class="form-control">
								</textarea>
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
	props: ["title", "id", "body", "eventname"]
};
</script>

<style></style>
