import http from '../StarWarsAPI'

const getLukeSkywalker = () => {
	return http.get('/people/1')
}

const getStarWarsCharacter = (id: number | string) => {
	return http.get(`/people/${id}`)
}

export default {
	getLukeSkywalker,
	getStarWarsCharacter
}