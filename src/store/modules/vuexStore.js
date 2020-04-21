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
	trendingPolls: [],
	SinglePoll: {
		id: "",
		pub_date: "",
		question: "",
		choices: [{}],
		poller_username: "",
		choice_type: "",
		expire_date: "",
		slug_field: "",
		poll_has_been_bookmarked: "",
		poll_has_been_liked: "",
		total_likes: "",
		vote_count: ""
	}
};

/* getters pull updated value from our state data's and they are then called by the components that needs them to
present data to the user(s) */
const getters = {
	allPolls: state => state.Polls,
	pollsTrending: state => state.trendingPolls,
	isLoggedIn: state => !!state.token,
	authStatus: state => state.status,
	getUser: state => state.user,
	numberOfFollowers: state => state.user.followers.length,
	numberOfFollowed: state => state.user.followed.length,
	numberOfPolls: state => state.user.polls.length,
	getToken: state => state.token,
	getuserID: state => state.userID,
	isAuthenticated: state => state.loggedIn,
	getSinglePoll: state => state.SinglePoll
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
					// we call a mutation to commit our data
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
		// We call a mutation to commit our reponse data
		commit("registration_success", response);
	},

	// register({ commit, dispatch }, payload){
	// 	return new Promise((resolve, reject) => {
	// 		commit("auth_request");
	// 		axios({
	// 			url: `${apiBaseUrl.baseRoute}/users/signup/`,
	// 			data: payload,
	// 			method: "POST"
	// 		})
	// 			.then(response => {
	// 				// const token = response.data.token;
	// 				const username = response.data.username;
	// 				localStorage.setItem("token", token);
	// 				axios.defaults.headers.common["Authorization"] = token;
	// 				// we call a mutation to commit our data
	// 				commit("auth_success", { token, user });
	// 				// Here we are dispatching the getUser action since we want to get the loggedIn users profile
	// 				// along with the data being sent back by the login action
	// 				dispatch("getUser", user);
	// 				resolve(response);
	// 			})
	// 			.catch(err => {
	// 				commit("auth_error");
	// 				// localStorage.removeItem("token");
	// 				reject(err);
	// 			});
	// 	});
	// },

	// This action is used to make a get request to the API endpoint so we can fetch data to update our
	// current loggedIn user profile
	getUser({ commit, getters }, id) {
		// config is used to set the authorization by getting the token of the the logged in user
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
				// We call a mutation to commit our response data
				commit("fetch_users", response.data);
			});
	},

	// This action is used to get all available polls from the server
	async getPolls({ commit }) {
		const response = await axios.get(`${apiBaseUrl.baseRoute}/polls/polls/`);
		// We call a mutation to commit our response data
		commit("SUCCESS", response.data);
	},

	// This action is used to get individual polls from the server
	async getSinglePoll({ commit, getters }, id) {
		// config is used to set the authorization by getting the token of the the logged in user
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`
				// "Content-Type": "application/json"
			}
		};
		axios
			.get(`${apiBaseUrl.baseRoute}/polls/polls/${id}/`, config)
			.then(response => {
				axios.defaults.headers.common["Authorization"] = config;
				console.log(response.data, "SINGLE POLL");
				// We call a mutation to commit our response data
				commit("SINGLE_POLL", response.data);
			});
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
				// We call a mutation to commit our response data
				commit("SUCCESS", response.data);
			});
	},

	// this action is used to make a post request to like an existing poll
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
				// We call a mutation to commit our response data
				commit("SUCCESS", response.data);
			});
	},

	// This action is used to make a post request for voting on a particular choice.
	voteChoice({ commit, getters }, payload) {
		const { poll, choice } = { ...payload };
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`
			}
		};
		axios
			.post(
				`${apiBaseUrl.baseRoute}/polls/vote/${poll}/${choice}/`,
				payload,
				config
			)
			.then(response => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("SUCCESS", response.data);
			});
	},

	// This action is used to make a post request to bookmark a poll
	bookmarkPoll({ commit, getters }, payload) {
		let config = {
			headers: {
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
				// We call a mutation to commit our response data
				commit("SUCCESS", response.data);
			});
	},

	// This action is used to make a get request to get list of trendingPolls from the server
	getTrendingPolls({ commit, getters }) {
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`
			}
		};
		axios
			.get(`${apiBaseUrl.baseRoute}/trending/polls/`, config)
			.then(response => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("TRENDING_POLLS", response.data);
			});
	},
	// getTrendingFeeds({ commit, getters }) {
	// 	let config = {
	// 		headers: {
	// 			Authorization: `Token ${getters.getToken}`
	// 			// "Content-Type": "application/json"
	// 		}
	// 	};
	// 	axios
	// 		.get(`${apiBaseUrl.baseRoute}/trending/feed/`, config)
	// 		.then(response => {
	// 			console.log(response.data, "FROM TRENDING Feeds");
	// 			axios.defaults.headers.common["Authorization"] = config;
	// 			commit("SUCCESS", response.data);
	// 		});
	// },

	// This action is used to make a post request to search for an existing poll
	searchPolls({ commit, getters }, payload) {
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`
			}
		};
		axios
			.get(`${apiBaseUrl.baseRoute}/search/poll/?search=` + payload, config)
			.then(response => {
				console.log(response.data, "SEARCH RESULT");
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("SEARCH_RESULT", response.data);
			});
	}
};

// These are used to update our state depending on the response gotten when an action is dispatched
const mutations = {
	auth_request(state) {
		state.status = "loading";
	},
	registration_success(state, payload) {
		// const { username, email, ...profile} = payload
		// state.user
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

	/* Used to update the states which are perculiar for display data specific to a user or userprofile
	Since the the payload contains a user object, while destructing the payload, we use spread operator
	to get the keys in the user object */
	fetch_users(state, payload) {
		const { followed, followers, likes, polls, ...user } = payload;
		state.user.userObj = user;
		state.user.followed = followed;
		state.user.followers = followers;
		state.user.polls = polls;
		state.user.likes = likes;
	},

	// this simply updates the Polls data in the state with the data coming from the payload
	SUCCESS: (state, payload) => (state.Polls = payload),
	SINGLE_POLL: (state, payload) => {
		const {
			id,
			pub_date,
			question,
			poller_username,
			choice_type,
			expire_date,
			slug_field,
			poll_has_been_bookmarked,
			poll_has_been_liked,
			total_likes,
			vote_count,
			...choices
		} = payload;
		state.SinglePoll.id = id;
		state.SinglePoll.pub_date = pub_date;
		state.SinglePoll.question = question;
		state.SinglePoll.poller_username = poller_username;
		state.SinglePoll.choice_type = choice_type;
		state.SinglePoll.expire_date = expire_date;
		state.SinglePoll.slug_field = slug_field;
		state.SinglePoll.poll_has_been_bookmarked = poll_has_been_bookmarked;
		state.SinglePoll.poll_has_been_liked = poll_has_been_liked;
		state.SinglePoll.total_likes = total_likes;
		state.SinglePoll.vote_count = vote_count;
		state.SinglePoll.choices = { ...choices };
	},

	TRENDING_POLLS: (state, payload) => {
		/* Since we are getting a list of items from the API which contains repeated questions, we filter out
		this repeated question using javascript Set method and loop over the incoming date to fetch only the
		questions which we then store in the filteredList variable. Next we use the spread operator on our set of questions,
		converting it into a list and pass it to the state.trendingPolls to be updated in the state */
		let filteredList = new Set(payload.map(poll => poll.question));
		state.trendingPolls = [...filteredList];
	}
};

/* 
	Going forward the config variable can be used as a helper function to avoid repeating same codes whenever
	you want to make a request to an endpoint that is restricted

	const config = {
		headers: {
			: `Token ${getters.getToken}`
		 	"Content-Type": "application/json"
		}
	}; 
*/

export default {
	state,
	getters,
	actions,
	mutations
	// config
};
