import axios from "axios";
import { apiBaseUrl } from "../baseUrl";

const state = {
	// The keys defined below represents the initial state of our data the first time our app loads
	user: {
		userObj: {
			user: {
				id: "",
				username: "",
				follow_status: {
					is_following: "",
					is_followed: "",
				},
				profile: {
					first_name: "",
					last_name: "",
					place_of_work: "",
					position: "",
					about: "",
					user_image: "",
					photo: "",
				},
			},
		},
		followers: [],
		followed: [],
		polls: [
			{
				question: "",
				pub_date: "",
				pk: "",
			},
		],
		likes: [
			{
				like_date: "",
				question: "",
				pk: "",
				pub_date: "",
			},
		],
		bookmarks: [
			{
				question: "",
				pk: "",
				created: "",
			},
		],
	},
	viewuser: {
		userObj: {
			user: {
				id: "",
				username: "",
				follow_status: {
					is_following: "",
					is_followed: "",
				},
				profile: {
					first_name: "",
					last_name: "",
					place_of_work: "",
					position: "",
					about: "",
					user_image: "",
					photo: "",
				},
			},
		},
		followers: [],
		followed: [],
		polls: [],
		likes: [],
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
		vote_count: "",
	},
};

/* getters pull updated value from our state data's and they are then called by the components that needs them to
present data to the user(s) */
const getters = {
	isLoggedIn: (state) => !!state.token,
	authStatus: (state) => state.status,
	getUser: (state) => state.user,
	numberOfFollowers: (state) => state.user.followers.length,
	numberOfFollowed: (state) => state.user.followed.length,
	numberOfPolls: (state) => state.user.polls.length,
	getToken: (state) => state.token,
	getuserID: (state) => state.userID,
	isAuthenticated: (state) => state.loggedIn,
	viewUserProfile: (state) => state.viewuser,
	errorStatus: (state) => state.error,
	userprofile: (state) => state.user.userObj.user.profile,
	UserLikes: (state) =>
		state.user.likes.map((like) => {
			return like.question;
		}),
	getUserBookmarks: (state) =>
		state.user.bookmarks.map((bookmark) => {
			return bookmark.question;
		}),
	getUserBookmarksObject: (state) =>
		state.user.bookmarks.map((bookmark) => {
			return bookmark;
		}),
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
				method: "POST",
			})
				.then((response) => {
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
				.catch((err) => {
					commit("auth_error", err);
					// localStorage.removeItem("token");
					reject(err);
				});
		});
	},

	logout({ commit }) {
		// This action is used to logout a user
		return new Promise((resolve) => {
			commit("logout");
			localStorage.removeItem("token");
			delete axios.defaults.headers.common["Authorization"];
			resolve();
		});
	},

	register({ commit }, payload) {
		return new Promise((resolve, reject) => {
			commit("auth_request");
			axios
				.post(`${apiBaseUrl.baseRoute}/users/signup/`, payload)
				.then((response) => {
					// We call a mutation to commit our response data
					commit("auth_success", response);
					resolve(response);
				})
				.catch((err) => {
					commit("auth_error", err);
					// localStorage.removeItem("token");
					reject(err);
				});
		});
	},

	getUser({ commit, getters }, id) {
		// config is used to set the authorization by getting the token of the the logged in user
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`,
				// "Content-Type": "application/json"
			},
		};
		axios
			.get(`${apiBaseUrl.baseRoute}/userprofile/${id}/`, config)
			.then((response) => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("FETCHUSER", response.data);
			});
	},

	viewUserProfileAction({ commit, getters }, id) {
		// config is used to set the authorization by getting the token of the the logged in user
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`,
				// "Content-Type": "application/json"
			},
		};
		axios
			.get(`${apiBaseUrl.baseRoute}/userprofile/${id}/`, config)
			.then((response) => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("VIEWUSER", response.data);
			});
	},

	// This action allows a user update his profile data
	updateProfile({ commit, getters }, payload) {
		// config is used to set the authorization by getting the token of the the logged in user
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`,
				// "Content-Type": "application/json"
			},
		};
		axios
			.patch(
				`${apiBaseUrl.baseRoute}/userprofile/update-profile/`,
				payload,
				config
			)
			.then((response) => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("UPDATEUSER", response.data);
			});
	},

	followUser({ commit, getters }, payload) {
		// config is used to set the authorization by getting the token of the the logged in user
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`,
				// "Content-Type": "application/json"
			},
		};
		axios
			.post(`${apiBaseUrl.baseRoute}/social/follow-user/`, payload, config)
			.then((response) => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("view_user", response.data);
			});
	},

	unfollowUser({ commit, getters }, payload) {
		let { param, param2 } = { ...payload };

		let id = param;
		let Id = param2;

		// config is used to set the authorization by getting the token of the the logged in user
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`,
				// "Content-Type": "application/json"
			},
		};
		axios
			.delete(`${apiBaseUrl.baseRoute}/social/unfollow-user/${Id}/`, {
				headers: {
					Authorization: `Token ${getters.getToken}`,
				},
				data: Id,
			})
			.then((response) => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("view_user", response.data);
			});
	},
	updateProfileImage({ commit, getters }, payload) {
		// config is used to set the authorization by getting the token of the the logged in user
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`,
				// "Content-Type": "application/json"
			},
		};
		axios
			.patch(
				`${apiBaseUrl.baseRoute}/userprofile/update-profile/`,
				payload.image,
				config
			)
			.then((response) => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("update_user", response.data);
			});
	},
	// this action is used to make a post request to like an existing poll
	likePoll({ commit, getters }, payload) {
		let config = {
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Token ${getters.getToken}`,
			},
		};
		axios
			.post(`${apiBaseUrl.baseRoute}/userprofile/like-poll/`, payload, config)
			.then((response) => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("POLL_LIKED", response.data);
			});
	},
	// This action is used to make a post request to bookmark a poll
	bookmarkPoll({ commit, getters }, payload) {
		let config = {
			headers: {
				Authorization: `Token ${getters.getToken}`,
			},
		};
		axios
			.post(
				`${apiBaseUrl.baseRoute}/userprofile/bookmark-poll/`,
				payload,
				config
			)
			.then((response) => {
				axios.defaults.headers.common["Authorization"] = config;
				// We call a mutation to commit our response data
				commit("BOOKMARK_SUCCESS", response.data);
			});
	},
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
		state.status = "Try Again";
		state.isLoading = false;
		state.error = data;
	},
	logout(state) {
		state.status = "";
		state.token = "";
	},

	UPDATEUSER(state, payload) {
		const { ...user } = payload;
		state.user.userObj.user.profile = user;
	},
	/* Used to update the states which are perculiar for display data specific to a user or userprofile
	Since the the payload contains a user object, while destructing the payload, we use spread operator
	to get the keys in the user object */
	FETCHUSER(state, payload) {
		const { followed, followers, likes, polls, bookmarks, ...user } = payload;
		state.user.userObj = user;
		state.user.followed = followed;
		state.user.followers = followers;
		state.user.polls = polls;
		state.user.likes = likes;
		state.user.bookmarks = bookmarks;
	},

	VIEWUSER(state, payload) {
		const { followed, followers, likes, bookmarks, polls, ...user } = payload;
		state.viewuser.userObj = user;
		state.viewuser.followed = followed;
		state.viewuser.followers = followers;
		state.viewuser.polls = polls;
		state.viewuser.likes = likes;
		state.viewuser.bookmarks = bookmarks;
	},
	POLL_LIKED(state, payload) {
		const { id, like_date, poll, poll_question_text, user } = { ...payload };
		state.user.userObj.user.id = user;
		state.user.polls.pk = poll;
		// state.user.likes.like_date = like_date;
		// state.user.likes.question = poll_question_text;
		// state.user.likes.pk = id;
		state.user.likes.push({
			like_date,
			pk: id,
			question: poll_question_text,
		});
	},

	BOOKMARK_SUCCESS(state, payload) {
		console.log(payload, "PAYLOAD");
		const { id, poll, user, created, poll_question_text } = { ...payload };
		state.user.polls.pk = poll;
		state.user.userObj.user.id = user;
		state.user.bookmarks.push({
			pk: poll,
			created,
			question: poll_question_text,
		});
	},
	// this simply updates the Polls data in the state with the data coming from the payload
	SUCCESS: (state, payload) => (state.Polls = payload),
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
	mutations,
	// config
};
