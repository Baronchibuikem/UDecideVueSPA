<template>
	<div class="mt-4">
		<!-- Here we are looping through the pollsTrending which we received from our getters -->
		<div class="todo-item" v-for="poll in pollsTrending" v-bind:key="poll.pk">
			<div class="sl-item">
				<div class=" mb-1 ml-3">
					<a href="#" class="link">{{ poll }}</a>
				</div>
				<hr />
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "TrendingPolls",
	methods: {
		...mapActions(["getTrendingPolls"])
	},
	computed: {
		// This returns all our updated state
		...mapGetters(["pollsTrending"])
	}
};
</script>
<style></style>
