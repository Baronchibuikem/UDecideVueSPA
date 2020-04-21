<template>
	<div id="content_area">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-body">
						<form>
							<div class="form-group">
								<div class="controls">
									<textarea
										style="border-radius: 10px;"
										@focus="showForm = true"
										v-model="question"
										class="form-control is-rounded"
										placeholder="What is your question"
									></textarea>
								</div>
							</div>

							<div class="mb-3">
								<p v-for="(option, index) in options" :key="index">
									<span class="fa fa-check"></span>
									{{ option }}
									<span @click="removeOption(index)" style="cursor: pointer;"
										>Remove</span
									>
								</p>
							</div>
							<div v-if="showForm">
								<div class="input-group">
									<input
										v-model="option"
										type="text"
										class="form-control"
										placeholder="Add Option"
										:readonly="!isQuestionAvailable"
									/>
									<div class="input-group-append">
										<button
											type="button"
											@click="addOption"
											:disabled="!isOptionAvaliable"
											:class="{
												disabledButton: !isOptionAvaliable,
												enableButton: isOptionAvaliable
											}"
											class="btn waves-effect waves-light"
										>
											Add
										</button>
									</div>
								</div>

								<br />

								<p><small>Expiration Date:</small></p>
								<input type="date" class="form-control" v-model="date" />
								<div class="form-group mt-2">
									<div class="text-xs-right">
										<!-- here we call the submit function to submit our data's -->
										<button
											type="submit"
											class="btn px-6 mr-3 ml-1"
											@click.prevent="submit"
											:disabled="!submitable"
											:class="{
												disabledButton: !submitable,
												enableButton: submitable
											}"
										>
											Save
										</button>
										<button type="reset" class="btn btn-inverse">
											Cancel
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PollForm",
	data: function() {
		return {
			question: "",
			option: "",
			options: [],
			initialValue: { choice_text: [{}] },
			choice_type: "TEXT",
			showForm: false,
			date: ""
		};
	},
	methods: {
		// var that = this;
		addOption() {
			this.options.push(this.option);
			this.initialValue.choice_text.push({ choice_text: this.option });
			this.option = "";
		},
		removeOption(opt) {
			this.options.splice(opt, 1);
		},
		// This function is used to submit the data to the vuex newPoll action which makes a post request to the
		// required endpoint. Here we ensure that the question input is not empty  and that the length of options
		// is greater than 0, if all checks out, we pass in the question data and the initialValue which is our
		// options list converted to an array of object and dispatch the newPoll action along with our data
		submit() {
			if (this.question && this.options.length > 0) {
				let data = {
					question: this.question,
					choices: this.initialValue.choice_text,
					choice_type: this.choice_type,
					expire_date: this.date
				};
				console.log(
					"This is the data being sent to the as a post request in Poll",
					data
				);
				this.$store
					.dispatch("newPoll", data)
					.then(() => this.$router.push("/feeds"));
			}
		}
	},
	computed: {
		isQuestionAvailable() {
			return this.question.trim() != "";
		},
		isOptionAvaliable() {
			return this.option.trim() != "";
		},
		isOptionsAvailable() {
			return this.options.length > 0;
		},
		submitable() {
			return this.isQuestionAvailable && this.isOptionsAvailable;
		}
	}
};
</script>
<style scoped>
.disabledButton {
	background-color: #d8d8d8;
	/* padding: 8px 8px;
	margin-right: 5px; */
}
.enableButton {
	background-color: #20aee3;
	/* padding: 8px 8px;
	margin-right: 5px; */
}
</style>
