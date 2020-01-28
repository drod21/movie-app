import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { MovieService } from 'services'
import { Movie } from 'models';

import logo from 'assets/images/logo.svg';
import 'assets/styles/css/home.css'

export interface Props extends RouteComponentProps {
  movieService: MovieService
}

interface MovieResponse {
  page: number,
  results: Array<Movie>
  total_pages: number,
  total_results: number,
}

const Home: React.FC<Props> = (props: Props) => {
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [currPage, setCurrPage] = useState(1)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    props.movieService.getMovies().then((res: MovieResponse) => {
      setCurrPage(res.page)
      setTotalResults(res.total_results)
      setTotalPages(res.total_pages)
      setMovies(res.results.map(m => new Movie(m)))
    })
  }, [props.movieService])

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