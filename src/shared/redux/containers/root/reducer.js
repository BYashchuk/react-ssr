import {
	SEARCH_FILMS,
	SHOW_DESCRIPTION,
	SHOW_ALL_FILMS
} from './constants';

const rootReducer = (state = null, action) => {
	switch (action.type) {

		case SEARCH_FILMS: {
			const films = action.films
			return Object.assign(state, { films })
		}

		case SHOW_DESCRIPTION: {
			const film = action.film
			const isShowFilmDescription = true


			return Object.assign(state, { film, isShowFilmDescription })
		}

		case SHOW_ALL_FILMS: {
			const isShowFilmDescription = false

			return Object.assign(state, { isShowFilmDescription })
		}

		default:
			return state

	}
}

export default rootReducer;