<template>
	<div class="card mb-3">
		<div class="card-body">
			<form @click.prevent="submit">
				<div class="form-group">
					<div class="controls">
						<textarea
							style="border-radius: 10px;"
							rows="1"
							@focus="showForm = true"
							v-model="pollData.question"
							class="form-control is-rounded"
							placeholder=" What's your question?"
						></textarea>
					</div>
				</div>
				<div class="mb-3">
					<p v-for="(option, index) in pollData.options" :key="index">
						<input
							:value="option"
							class="form-control form-control-sm w-75 mr-2"
							readonly
						/>
						<span
							@click="removeOption(index)"
							style="cursor: pointer; font-size: 12px;"
							>X</span
						>
					</p>
				</div>

				<div v-if="showForm">
					<div class="row mb-3">
						<div class="col-md-12">
							<div class="input-group">
								<form @submit.prevent="addOption" class="w-100">
									<div class="input-group mb-2 mr-sm-2">
										<input
											v-model="option"
											type="text"
											class="form-control form-control-sm"
											placeholder="Add Option"
											:readonly="!isQuestionAvailable"
										/>
										<div class="input-group-append">
											<button
												type="submit"
												class="btn waves-effect waves-light btn-primary btn-sm"
												:disabled="!submitable"
											>
												add
											</button>
										</div>
									</div>
								</form>
								<p class="mt-3"><small>Duration:</small></p>
								<div class="row ml-1 mt-3">
									<div class="col-3">
										<select class="custom-select">
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
										Days
									</div>
									<div class="col-3">
										<select class="custom-select">
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
										Hours
									</div>
									<div class="col-3">
										<select class="custom-select">
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
										Minutes
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="text-xs-right">
							<button
								type="button"
								class="btn btn-info btn-sm mr-3 py-2 px-3"
								:disabled="!isPollActive"
								@click.prevent="submit"
							>
								Post
							</button>
							<button
								type="reset"
								class="btn btn-link btn-sm"
								@click="cancelForm"
							>
								Discard
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "pollform",
	data() {
		return {
			option: "",
			pollData: {
				question: "",
				options: []
			},
			showForm: false
		};
	},
	methods: {
		addOption() {
			this.pollData.options.push(this.option);
			this.option = "";
		},
		removeOption(index) {
			this.pollData.options.splice(index, 1);
		},
		cancelForm() {
			this.showForm = !this.showForm;
			this.pollData.question = "";
			this.pollData.options = [];
			this.option = "";
		},
		submit: function() {
			if (this.pollData.question && this.pollData.options) {
				let data = {
					question: this.pollData.question,
					choices: this.pollData.options
				};
				this.$store
					.dispatch("newPoll", data)
					.then(() => this.$router.push("/"));
			}
		}
	},
	computed: {
		isQuestionAvailable() {
			return this.pollData.question.trim() != "";
		},
		isOptionAvailable() {
			return this.option.trim() != "";
		},
		submitable() {
			return this.isQuestionAvailable && this.isOptionAvailable;
		},
		isPollActive() {
			return this.pollData.question.trim() != "" && this.pollData.options != [];
		}
	}
};
</script>
