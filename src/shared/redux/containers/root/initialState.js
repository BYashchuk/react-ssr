import { createBrowserHistory } from 'history';
let history = createBrowserHistory();

const initialRootState = {
	films: [],
	film:{},
	isShowFilmDescription: false,
	browserHistory: history
}

export default initialRootState