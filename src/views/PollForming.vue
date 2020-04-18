<template>
	<div>
		<my-header />
		<sidebar />
		<div class="page-wrapper">
			<div class="container-fluid">
				<div id="content_area">
					<div class="row">
						<div class="col-md-6">
							<PollForm />
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
import PollForm from "../components/PollForm";
export default {
	name: "PollForming",
	components: {
		PollForm
	},
	data: function() {
		return {
			question: "",
			option: "",
			options: [],
			initialValue: { choice_text: [{}] },
			choice_type: "TEXT"
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
					choice_type: this.choice_type
				};
				console.log(data, "for creating poll");
				this.$store
					.dispatch("newPoll", data)
					.then(() => this.$router.push("/"));
			}
		}
	}
};
</script>
