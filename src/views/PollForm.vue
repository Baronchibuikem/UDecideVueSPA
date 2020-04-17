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
									<form novalidate="" id="poll_form">
										<div class="form-group">
											<h5>Question <span class="text-danger">*</span></h5>
											<div class="controls">
												<textarea
													name="textarea"
													id="textarea"
													class="form-control"
													required=""
													placeholder="Enter your question here.."
													rows="1"
													v-model="question"
												></textarea>
												<div class="help-block"></div>
											</div>
										</div>

										<div class="form-group" id="options_div">
											<h5>Options</h5>
										</div>

										<div class="input-group">
											<input
												type="text"
												class="form-control"
												placeholder="Enter Options"
												name="option_text"
												id="option_text"
												autofocus=""
												v-model="option"
											/>
											<div class="input-group-append">
												<button
													type="button"
													id="add_more"
													class="btn waves-effect waves-light btn-primary addCF"
												>
													Add
												</button>
											</div>
										</div>
										<br />

										<!-- <div class="form-group">
											<div class="text-xs-right">
												<button
													type="button"
													onclick="return create_request_json();"
													@click.prevent="submit"
													class="btn btn-info mr-3"
												>
													Save
												</button>
												<button type="reset" class="btn btn-inverse">
													Cancel
												</button>
											</div>
										</div> -->
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
				<rightNav />
				<my-footer />
			</div>
		</div>
	</div>
</template>
<script>
import $ from "jquery";
export default {
	name: "pollform",
	data() {
		return {
			question: "",
			option: ""
		};
	},
	mounted() {
		let num = 0;

		$("#add_more").click(function() {
			let option_text = $("#option_text").val();
			let question = $("#textarea").val();

			if (option_text !== "" && question !== "") {
				let add_new = $(
					'<div class="col-sm-4"><fieldset class="controls"><div class="custom-control custom-radio"><input type="radio" value="' +
						option_text +
						'" name="options[]" id="' +
						num +
						'options" class="custom-control-input"><label class="custom-control-label" for="' +
						num +
						'options">' +
						option_text +
						'</label></div><div class="help-block"></div></fieldset></div>'
				);
				num++;
				$("#options_div").append(add_new);
				$("#option_text").val("");
			} else {
				$("#option_text").focus();
			}
		});

		$("#options_div").on("click", ".remCF", function() {
			$(this)
				.parent()
				.parent()
				.parent()
				.remove();
		});

		this.create_request_json();
	},

	methods: {
		create_request_json() {
			let question = $("#textarea").val();
			let surveyarray = { question: question, q_options: [] };

			$("input[name*='options[]']").each(function(index, element) {
				surveyarray.q_options.push({ option: $(element).val() });
				sessionStorage.setItem("user_survey", JSON.stringify(surveyarray));
			});

			let savedSurveys = JSON.parse(sessionStorage.getItem("user_survey"));
			// Loop through the object and print the count for each fruit
			for (let i in savedSurveys) {
				//let squestion = '';
				if (i === "question") {
					//squestion = i;
					let value = savedSurveys[i];
					alert(value);
				} else {
					$.each(savedSurveys[i], function() {
						let temopt = this.option;
						alert(temopt);
					});
				}
			}
		},
		submit: function() {
			if (this.question && this.option) {
				let data = {
					question: this.question,
					choices: this.option
				};
				this.$store
					.dispatch("newPoll", data)
					.then(() => this.$router.push("/"));
			}
		}
	}
};
</script>
