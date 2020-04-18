import axios from "axios";
import { apiBaseUrl } from "../baseUrl";

const state = {
	// The keys defined below represents the initial state of our data the first time our app loads
	user: {
		userObj: {},
		followers: [],
		followed: [],
		polls: [],
		likes: []
	},
	userID: null,
	error: [],
	status: "",
	token: localStorage.getItem("token") || "",
	loggedIn: false,
	Polls: [],
	SinglePolls: {}
};

// getters pull updated value from our data and they are then called by the components that needs them to
// present data to the user(s)
const getters = {
	allPolls: state => state.Polls,
	isLoggedIn: state => !!state.token,
	authStatus: state => state.status,
	getUser: state => state.user,
	numberOfFollowers: state => state.user.followers.length,
	numberOfFollowed: state => state.user.followed.length,
	numberOfPolls: state => state.user.polls.length,
	getToken: state => state.token,
	getuserID: state => state.userID,
	isAuthenticated: state => state.loggedIn
};

// actions are mostly responsible for performing CRUD operations as allowed on the API endpoints being called
const actions = {
	// This is used to make a post request to the login API, where payload is the data that was passed when the
	// login action was dispatched from the Login component
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
					axios.defaults.headers.common["Authorization"] = token;
					commit("auth_success", { token, user });
					// Here we are dispatching the getUser action since we want to get the loggedIn users profile
					// along with the data being sent back by the login action
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
		// This action is used to logout a user
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

	// This action is used to make a get request to the API endpoint so we can fetch data to update our
	// current loggedIn user profile
	getUser({ commit, getters }, id) {
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`
				// "Content-Type": "application/json"
			}
		};
		axios
			.get(`${apiBaseUrl.baseRoute}/userprofile/${id}/`, config)
			.then(response => {
				axios.defaults.headers.common["Authorization"] = config;
				commit("fetch_users", response.data);
			});
	},

	// This action is used to get all available polls from the server
	async getPolls({ commit }) {
		const response = await axios.get(`${apiBaseUrl.baseRoute}/polls/polls/`);
		console.log(response, "RESPONSESESESESES");
		commit("SUCCESS", response.data);
	},
	// this action is used to make a post request to create a new poll
	newPoll({ commit, getters }, payload) {
		let config = {
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Token ${getters.getToken}`
			}
		};
		axios
			.post(`${apiBaseUrl.baseRoute}/polls/create-polls/`, payload, config)
			.then(response => {
				axios.defaults.headers.common["Authorization"] = config;
				commit("SUCCESS", response.data);
			});
	},
	likePoll({ commit, getters }, payload) {
		let config = {
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Token ${getters.getToken}`
			}
		};
		axios
			.post(`${apiBaseUrl.baseRoute}/userprofile/like-poll/`, payload, config)
			.then(response => {
				axios.defaults.headers.common["Authorization"] = config;
				commit("SUCCESS", response.data);
			});
	},
	bookmarkPoll({ commit, getters }, payload) {
		let config = {
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Token ${getters.getToken}`
			}
		};
		axios
			.post(
				`${apiBaseUrl.baseRoute}/userprofile/bookmark-poll/`,
				payload,
				config
			)
			.then(response => {
				axios.defaults.headers.common["Authorization"] = config;
				commit("SUCCESS", response.data);
			});
	},

	getTrendingPolls({ commit, getters }) {
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`
				// "Content-Type": "application/json"
			}
		};
		axios
			.get(`${apiBaseUrl.baseRoute}/trending/polls/`, config)
			.then(response => {
				console.log(response.data, "FROM TRENDING POLLS");
				axios.defaults.headers.common["Authorization"] = config;
				commit("SUCCESS", response.data);
			});
	},
	getTrendingFeeds({ commit, getters }) {
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`
				// "Content-Type": "application/json"
			}
		};
		axios
			.get(`${apiBaseUrl.baseRoute}/trending/feed/`, config)
			.then(response => {
				console.log(response.data, "FROM TRENDING Feeds");
				axios.defaults.headers.common["Authorization"] = config;
				commit("SUCCESS", response.data);
			});
	}
};

// These are used to update our state depending on the response gotten when an action is dispatched
const mutations = {
	auth_request(state) {
		state.status = "loading";
	},
	auth_success(state, payload) {
		const { token, pk } = payload;
		state.status = "success";
		state.loggedIn = true;
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
	fetch_users(state, payload) {
		const { followed, followers, likes, polls, ...user } = payload;
		state.user.userObj = user;
		state.user.followed = followed;
		state.user.followers = followers;
		state.user.polls = polls;
		state.user.likes = likes;
	},
	SUCCESS: (state, payload) => (state.Polls = payload)
};

// Going forward the config variable can be used as a helper function to avoid repeating same codes whenever
// you want to make a request to an endpoint that is restricted

// const config = {
// 	headers: {
// 		Authorization: `Token ${getters.getToken}`
// 		// "Content-Type": "application/json"
// 	}
// };

export default {
	state,
	getters,
	actions,
	mutations
	// config
};
