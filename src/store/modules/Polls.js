import { apiBaseUrl } from "../baseUrl";
import axios from "axios";
import config from "./UserAuthentication";

const state = {
	Polls: [],
	SinglePolls: {}
};

const getters = {
	allPolls: state => state.Polls
};

const actions = {
	async getPolls({ commit }) {
		const response = await axios.get(`${apiBaseUrl.baseRoute}/polls/polls/`);
		commit("SUCCESS", response.data);
	},
	async newPoll({ commit }, payload) {
		const response = await axios.post(`${apiBaseUrl.baseRoute}/polls/polls/`, {
			payload,
			config
		});
		commit("SUCCESS", response.data);
	}
};

const mutations = {
	SUCCESS: (state, payload) => (state.Polls = payload)
	// SUCCESS: (state, payload) => (state.Polls = payload)
};

export default {
	state,
	getters,
	actions,
	mutations
};
