import { apiBaseUrl } from "../baseUrl";
import axios from "axios";

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
		commit("SET_POLLS", response.data);
	},
	async newPoll({ commit }, payload) {
		const response = await axios.post(`${apiBaseUrl.baseRoute}/polls/polls/`, {
			payload
		});
		commit("SET_POLLS", response.data);
	}
};

const mutations = {
	SET_POLLS: (state, payload) => (state.Polls = payload)
	// CREATE_POLL: (state, payload) => (state.Polls = payload)
};

export default {
	state,
	getters,
	actions,
	mutations
};
