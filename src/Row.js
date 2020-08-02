import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
const baseUrl = 'http://image.tmdb.org/t/p/original/'

function Row ({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])
  console.log(movies)

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_items'>
        {movies.map(movie => (
          <img
            className='row_poster'
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
