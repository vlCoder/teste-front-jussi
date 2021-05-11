import axios from 'axios'

const getStarWars = async (query) => {
  const urlBase = `https://swapi.dev/api/people/?search=${query}`

  const result = await axios.get(urlBase);

  return result
}

export default getStarWars