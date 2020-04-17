// import { apiBaseUrl } from "../baseUrl";
// import axios from "axios";
// import config from "./UserAuthentication";

// const state = {
// 	Polls: [],
// 	SinglePolls: {},
// 	token: localStorage.getItem("token") || ""
// };

// const getters = {
// 	allPolls: state => state.Polls,
// 	getToken: state => state.token
// };

// const actions = {
// 	async getPolls({ commit }) {
// 		const response = await axios.get(`${apiBaseUrl.baseRoute}/polls/polls/`);
// 		commit("SUCCESS", response.data);
// 	},
// 	newPoll({ commit }, payload) {
// 		let config = {
// 			headers: {
// 				Authorization: `Token ${getters.getToken}`,
// 				"Content-Type": "application/json"
// 			}
// 		};
// 		axios
// 			.post(`${apiBaseUrl.baseRoute}/polls/create-polls/`, {
// 				payload,
// 				config
// 			})
// 			.then(response => {
// 				axios.defaults.headers.common["Authorization"] = config;
// 				commit("SUCCESS", response.data);
// 			});
// 	}
// };

// const mutations = {
// 	SUCCESS: (state, payload) => (state.Polls = payload)
// 	// SUCCESS: (state, payload) => (state.Polls = payload)
// };

// export default {
// 	state,
// 	getters,
// 	actions,
// 	mutations
// };
