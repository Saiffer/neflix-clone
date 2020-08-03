import React, { useState, useEffect } from 'react'
import axios from '../api/axios'
import requests from '../api/requests'
import './Banner.css'

function Banner () {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(requests.fetchNetflixOriginals)

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )

      return request
    }

    fetchData()
  }, [])

  console.log(movie)

  function truncate (str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className='banner'
      style={{
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage: `url(http://image.tmdb.org/t/p/original${movie?.backdrop_path})`
      }}
    >
      <div className='banner-contents'>
        <h1 className='banner-title'>
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My list</button>
        </div>
        <h3 className='banner-overview'>{truncate(movie?.overview, 150)}</h3>
      </div>
      <div className='banner-fadeBottom'></div>
    </header>
  )
}

export default Banner
