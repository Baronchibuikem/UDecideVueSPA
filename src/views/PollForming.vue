<template>
	<div>
		<my-header />
		<sidebar />
		<div class="page-wrapper">
			<div class="container-fluid">
				<div id="content_area">
					<div class="row">
						<div class="col-md-6">
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">New poll creation form</h4>
									<form>
										<div class="form-group">
											<div class="controls">
												<textarea
													v-model="question"
													class="form-control"
													placeholder="Question"
												></textarea>
											</div>
										</div>

										<div class="mb-3">
											<p v-for="(option, index) in options" :key="index">
												<span class="fa fa-check"></span>
												{{ option }}
												<span
													@click="removeOption(option)"
													style="cursor: pointer;"
													>Remove</span
												>
											</p>
										</div>

										<div class="input-group">
											<input
												v-model="option"
												type="text"
												class="form-control"
												placeholder="Add Option"
											/>
											<div class="input-group-append">
												<button
													type="button"
													@click="addOption"
													class="btn waves-effect waves-light btn-primary"
												>
													Add
												</button>
											</div>
										</div>

										<br />

										<div class="form-group">
											<div class="text-xs-right">
												<!-- here we call the submit function to submit our data's -->
												<button
													type="submit"
													class="btn btn-info mr-3"
													@click.prevent="submit"
												>
													Save
												</button>
												<button type="reset" class="btn btn-inverse">
													Cancel
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Polls</h4>
									<table
										id="example"
										class="table table-striped table-bordered table-responsive"
										style="width:100%"
									>
										<thead>
											<tr>
												<th>Name</th>
												<th>Position</th>
												<th>Office</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Tiger Nixon</td>
												<td>System Architect</td>
												<td>Edinburgh</td>
											</tr>
											<tr>
												<td>Garrett Winters</td>
												<td>Accountant</td>
												<td>Tokyo</td>
											</tr>
											<tr>
												<td>Ashton Cox</td>
												<td>Junior Technical Author</td>
												<td>San Francisco</td>
											</tr>
											<tr>
												<td>Cedric Kelly</td>
												<td>Senior Javascript Developer</td>
												<td>Edinburgh</td>
											</tr>
											<tr>
												<td>Airi Satou</td>
												<td>Accountant</td>
												<td>Tokyo</td>
											</tr>
											<tr>
												<td>Brielle Williamson</td>
												<td>Integration Specialist</td>
												<td>New York</td>
											</tr>

											<tr>
												<td>Jenette Caldwell</td>
												<td>Development Lead</td>
												<td>New York</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<th>Name</th>
												<th>Position</th>
												<th>Office</th>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<rightnav />
				<my-footer />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "pollform",
	data: function() {
		return {
			question: "",
			option: "",
			options: [],
			initialValue: [{}]
		};
	},
	methods: {
		// var that = this;
		addOption() {
			this.options.push(this.option);
			this.option = "";
		},
		removeOption(opt) {
			this.options.splice(opt);
		},
		// This function is used to submit the data to the vuex newPoll action which makes a post request to the
		// required endpoint. Here we ensure that the question input is not empty  and that the length of options
		// is greater than 0, if all checks out, we pass in the question data and the initialValue which is our
		// options list converted to an array of object and dispatch the newPoll action along with our data
		submit() {
			if (this.question && this.options.length > 0) {
				let data = {
					question: this.question,
					choices: this.initialValue
				};
				this.$store
					.dispatch("newPoll", data)
					.then(() => this.$router.push("/"));
			}
		},
		// Since the API endpoint for creating polls requires a list of objects, We get the
		// available list/array in the options data and call this function to convert them to a list of objects
		convertListToObject(array, key) {
			return array.reduce((obj, item) => {
				return {
					...obj,
					[item[key]]: item
				};
			}, this.initialValue);
		}
	}
};
</script>
