import axios from "axios";
import { apiBaseUrl } from "../baseUrl";

const state = {
	user: {},
	userID: null,
	error: [],
	status: "",
	token: localStorage.getItem("token") || ""
};

function buildUrl(url) {
	return `${apiBaseUrl.baseRoute}${url}.json?token=${state.token}`;
}

const getters = {
	isLoggedIn: state => !!state.token,
	authStatus: state => state.status,
	getUser: state => state.user,
	getuserID: state => state.userID
};

const actions = {
	login({ commit, dispatch }, payload) {
		return new Promise((resolve, reject) => {
			commit("auth_request");
			axios({
				url: `${apiBaseUrl.baseRoute}/users/login/`,
				data: payload,
				method: "POST"
			})
				.then(response => {
					const token = response.data.token;
					const user = response.data.pk;
					localStorage.setItem("token", token);
					console.log("TOKEN FROM LOGIN", token);
					axios.defaults.headers.common["Authorization"] = token;
					commit("auth_success", { token, user });
					dispatch("getUser", user);
					resolve(response);
				})
				.catch(err => {
					commit("auth_error");
					// localStorage.removeItem("token");
					reject(err);
				});
		});
	},

	logout({ commit }) {
		return new Promise(resolve => {
			commit("logout");
			localStorage.removeItem("token");
			delete axios.defaults.headers.common["Authorization"];
			resolve();
		});
	},

	// This action is used to send a post request to the backend API to register a new user
	register: async ({ commit }, payload) => {
		let { response } = await axios({
			url: `${apiBaseUrl.baseRoute}/users/signup/`,
			data: payload,
			method: "POST"
		});
		commit("auth_success", response);
	},
	getUser({ commit }, id) {
		const { token } = state.token;

		console.log("TOKENNNNN", token);
		axios.get(`${apiBaseUrl.baseRoute}/userprofile/${id}/`).then(response => {
			localStorage.setItem("token", token);
			axios.defaults.headers.common["Authorization"] = token;
			commit("fetch_users", response.data, token);
		});
	}

	// async getUser({ commit }, id) {
	// 	const response = await axios.get(
	// 		`${apiBaseUrl.baseRoute}/userprofile/${id}/`
	// 	);
	// 	commit("fetch_users", response.data);
	// }
};

const mutations = {
	auth_request(state) {
		state.status = "loading";
	},
	auth_success(state, payload) {
		const { token, pk } = payload;
		state.status = "success";
		state.token = token;
		state.userID = pk;
	},
	auth_error(state, payload) {
		const { data } = payload;
		state.status = "error";
		state.isLoading = false;
		state.error = data;
	},
	logout(state) {
		state.status = "";
		state.token = "";
	},
	fetch_users(state, user) {
		console.log("USERPROFILE", user);
		// state.user = user;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
