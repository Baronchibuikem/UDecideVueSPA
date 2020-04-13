import router from './router.js'

class GlobalFunction{
	to(page) {
		router.push(page);
	}
}
export default GlobalFunction;
