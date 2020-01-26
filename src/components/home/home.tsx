import React, { useEffect, useState } from 'react'
import MovieService from '../../services'
import { Movie } from '../../models';

import logo from '../../assets/images/logo.svg';
import '../../assets/styles/components/home/home.css'

const Home: React.FC = () => {
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [currPage, setCurrPage] = useState(1)
  const movieService = new MovieService()

  useEffect(() => {
    const movies: Promise<Array<Movie>> = movieService.getMovies().then((res: any) => {
      setCurrPage(res.page)
      setTotalResults(res.total_results)
      setTotalPages(res.total_pages)

      return res.results.map(m => new Movie(m))
    })
  }, [movieService])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
            </a>
      </header>
    </div>
  )
}

export default Home