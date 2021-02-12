import React from 'react'
import Row from './components/Row'
import Header from './components/Header'
import Banner from './components/Banner'
import requests from './api/requests'

function App () {
  return (
    <div>
      <Header />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App
