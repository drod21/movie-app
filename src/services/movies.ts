import { axios } from '../config'
import { IMovie } from '../models/movie/IMovie'

export class MovieService {
  private _API_KEY: string = '5be5ee30'
  private _API_URL: string = `http://www.omdbapi.com/?apikey=${this._API_KEY}`

  public async getMovies(): Promise<Array<IMovie>> {
    return axios.get(this._API_URL)
  }
}