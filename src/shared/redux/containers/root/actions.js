import {
	SEARCH_FILMS,
	SHOW_DESCRIPTION,
	SHOW_ALL_FILMS
} from './constants'

export const searchFilms = films => ({
	type: SEARCH_FILMS,
	films
})

export const showDescription = film => ({
	type: SHOW_DESCRIPTION,
	film
})

export const showAllFilms = () => ({
	type: SHOW_ALL_FILMS
})