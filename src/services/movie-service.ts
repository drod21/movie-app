import { axios } from '../config'
import { AxiosRequestConfig } from 'axios'
import { Movie } from 'models'

type ApiResponse = {
  page: number,
  results: Array<any>,
  total_pages: number,
  total_results: number
}

export class MovieService {
  private _API_KEY: string = '5be5ee30'
  private _API_URL: string = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='
  private _reqConfig: AxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDQzM2RiZTRiZDg1ODk5OGNkZTU5M2MzOWNlMzliNSIsInN1YiI6IjVlMmRiMGU3MzI2YzE5MDAxNjFhN2Y1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcu5P8sO6FuJXNaYrj_SnfHPYEVxh-Cxn69mlIQyhQs'
    }
  }
  private _movies: Array<Movie> = []
  private _page: number = null
  private _totalPages: number = null
  private _totalResults: number = null

  async getMovies(): Promise<Array<Movie>> {
    try {
      const apiRes: ApiResponse = await axios.get(this._API_URL, this._reqConfig)
      this._page = apiRes.page
      this._totalResults = apiRes.total_results
      this._totalPages = apiRes.total_pages
      this._movies = apiRes.results.map(m => new Movie(m))

      return this._movies;
    } catch(e) {
      throw new Error(e)
    }
  }

  async getMoreMovies(): Promise<Array<Movie>> {
    try {
      const apiRes: ApiResponse = await axios.get(`${this._API_URL}&page=${++this._page}`, this._reqConfig)
      const movies = apiRes.results.map(m => new Movie(m))
      this._movies.push(...movies)

      return this._movies
    } catch(e) {
      throw new Error(e)
    }
  }

}