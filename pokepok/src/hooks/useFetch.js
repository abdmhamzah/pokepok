import { useState, useEffect } from 'react'

export default (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data.cards))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return [data, loading, error, (searchedPokemon) => {
      setLoading(true)
      fetch(`${url}?name=${searchedPokemon}`)
        .then(res => res.json())
        .then(data => setData(data.cards))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
  }]
}