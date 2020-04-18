<template>
	<div>
		<!-- Here we are looping through the pollsTrending which we received from our getters -->
		<div class="todo-item" v-for="poll in pollsTrending" v-bind:key="poll.id">
			<div class="sl-item">
				<PollMenu></PollMenu>
				<div class=" mb-1">
					<a href="#" class="link">{{ poll.question }}</a>
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
	// mounted() {
	// 	// Added the called to ensure the element is mounted once it is called.
	// 	this.$nextTick(() => {
	// 		this.getTrendingPolls();
	// 		// this.getTrendingFeeds();
	// 	});
	// }
};
</script>
<style></style>
