import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import axios from '../api/axios'
import './Row.css'
const baseUrl = 'http://image.tmdb.org/t/p/original/'

function Row ({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])
  console.log(movies)

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch(error => console.log(error))
    }
  }

  return (
    <div className='row'>
      <h1 className='row-title'>{title}</h1>
      <div className='row_items'>
        {movies.map(movie => (
          <img
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${baseUrl}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row