<template>
	<div>
		<!-- Button trigger modal -->
		<div class="linkHover" data-toggle="modal" :data-target="`#${id}`">
			{{ title }}
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
						<hr />
						{{ body }}
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
						<button type="button" class="btn btn-primary">Save</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["title", "value", "id", "body"]
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
