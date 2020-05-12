// const apiBaseUrl = {
// 	// Server where our api are being called from
// 	baseRoute:
// 		process.env.NODE_ENV === "development"
// 			? "http://127.0.0.1:8000"
// 			: "http://youdecideio.herokuapp.com/api/v1/"
// };

const apiBaseUrl = {
	// Server where our api are being called from
	baseRoute: "https://youdecideio.herokuapp.com/api/v1"
	// process.env.NODE_ENV === "development"
	// 	? "http://127.0.0.1:8000/api/v1"
	// 	: "https://youdecideio.herokuapp.com/api/v1"
};

export { apiBaseUrl };
