import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import StarWarList from '../components/StarWarList'
import getStarWars from '../services/api.service'

function Search() {
  const [ query, setList ] = useState([])
  const { querySearch } = useParams()

  useEffect(() => {(async () => {
    const result = await getStarWars(querySearch);
    setList(result.data.results)
  })()
}, [querySearch])
  
  return (
    <>
      <Header />
      <StarWarList query={query} search={querySearch} />
    </>
  );
}

export default Search;
