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
	// allPolls: state => state.Polls,
	// pollsTrending: state => state.trendingPolls,
	getToken: state => state.token
	// getuserID: state => state.userID,
	// isAuthenticated: state => state.loggedIn,
	// getSinglePoll: state => state.SinglePoll
};

// actions are mostly responsible for performing CRUD operations as allowed on the API endpoints being called
const actions = {
	// // This action is used to get all available polls from the server
	// async getPolls({ commit }) {
	// 	const response = await axios.get(`${apiBaseUrl.baseRoute}/polls/polls/`);
	// 	// We call a mutation to commit our response data
	// 	commit("SUCCESS", response.data);
	// },

	// // This action is used to get individual polls from the server
	editPoll({ commit, getters }, payload) {
		console.log("Editing poll from vuex", payload);
		const { id, question } = { ...payload };
		// config is used to set the authorization by getting the token of the the logged in user
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`
				// "Content-Type": "application/json"
			}
		};
		axios
			.patch(`${apiBaseUrl.baseRoute}/polls/polls/${id}/`, { question }, config)
			.then(response => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("SINGLE_POLL", response.data);
			});
	}

	// // this action is used to make a post request to create a new poll
	// newPoll({ commit, getters }, payload) {
	// 	let config = {
	// 		headers: {
	// 			// "Content-Type": "application/json",
	// 			Authorization: `Token ${getters.getToken}`
	// 		}
	// 	};
	// 	axios
	// 		.post(`${apiBaseUrl.baseRoute}/polls/create-polls/`, payload, config)
	// 		.then(response => {
	// 			console.log("Response from poll request form", response.data);
	// 			axios.defaults.headers.common["Authorization"] = config;
	// 			// We call a mutation to commit our response data
	// 			commit("SUCCESS", response.data);
	// 		});
	// },

	// // this action is used to make a post request to like an existing poll
	// likePoll({ commit, getters }, payload) {
	// 	let config = {
	// 		headers: {
	// 			// "Content-Type": "application/json",
	// 			Authorization: `Token ${getters.getToken}`
	// 		}
	// 	};
	// 	axios
	// 		.post(`${apiBaseUrl.baseRoute}/userprofile/like-poll/`, payload, config)
	// 		.then(response => {
	// 			axios.defaults.headers.common["Authorization"] = config;
	// 			// We call a mutation to commit our response data
	// 			commit("SUCCESS", response.data);
	// 		});
	// },

	// // This action is used to make a post request for voting on a particular choice.
	// voteChoice({ commit, getters }, payload) {
	// 	const { poll, choice } = { ...payload };
	// 	let config = {
	// 		headers: {
	// 			Authorization: `Token ${getters.getToken}`
	// 		}
	// 	};
	// 	axios
	// 		.post(
	// 			`${apiBaseUrl.baseRoute}/polls/vote/${poll}/${choice}/`,
	// 			payload,
	// 			config
	// 		)
	// 		.then(response => {
	// 			axios.defaults.headers.common["Authorization"] = config;
	// 			// We call a mutation to commit our response data
	// 			commit("SUCCESS", response.data);
	// 		});
	// },

	// // This action is used to make a post request to bookmark a poll
	// bookmarkPoll({ commit, getters }, payload) {
	// 	let config = {
	// 		headers: {
	// 			Authorization: `Token ${getters.getToken}`
	// 		}
	// 	};
	// 	axios
	// 		.post(
	// 			`${apiBaseUrl.baseRoute}/userprofile/bookmark-poll/`,
	// 			payload,
	// 			config
	// 		)
	// 		.then(response => {
	// 			axios.defaults.headers.common["Authorization"] = config;
	// 			// We call a mutation to commit our response data
	// 			commit("SUCCESS", response.data);
	// 		});
	// },

	// // This action is used to make a get request to get list of trendingPolls from the server
	// getTrendingPolls({ commit, getters }) {
	// 	let config = {
	// 		headers: {
	// 			Authorization: `Token ${getters.getToken}`
	// 		}
	// 	};
	// 	axios
	// 		.get(`${apiBaseUrl.baseRoute}/trending/polls/`, config)
	// 		.then(response => {
	// 			axios.defaults.headers.common["Authorization"] = config;
	// 			// We call a mutation to commit our response data
	// 			commit("TRENDING_POLLS", response.data);
	// 		});
	// },
	// // getTrendingFeeds({ commit, getters }) {
	// // 	let config = {
	// // 		headers: {
	// // 			Authorization: `Token ${getters.getToken}`
	// // 			// "Content-Type": "application/json"
	// // 		}
	// // 	};
	// // 	axios
	// // 		.get(`${apiBaseUrl.baseRoute}/trending/feed/`, config)
	// // 		.then(response => {
	// // 			console.log(response.data, "FROM TRENDING Feeds");
	// // 			axios.defaults.headers.common["Authorization"] = config;
	// // 			commit("SUCCESS", response.data);
	// // 		});
	// // },

	// // This action is used to make a post request to search for an existing poll
	// searchPolls({ commit, getters }, payload) {
	// 	let config = {
	// 		headers: {
	// 			Authorization: `Token ${getters.getToken}`
	// 		}
	// 	};
	// 	axios
	// 		.get(`${apiBaseUrl.baseRoute}/search/poll/?search=` + payload, config)
	// 		.then(response => {
	// 			console.log(response.data, "SEARCH RESULT");
	// 			axios.defaults.headers.common["Authorization"] = config;
	// 			// We call a mutation to commit our response data
	// 			commit("SEARCH_RESULT", response.data);
	// 		});
	// }
};

// These are used to update our state depending on the response gotten when an action is dispatched
const mutations = {
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
	}
};

export default {
	state,
	getters,
	actions,
	mutations
	// config
};
