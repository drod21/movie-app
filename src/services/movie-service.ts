import { axios } from '../config'
import { AxiosRequestConfig } from 'axios'

export class MovieService {
  private _API_KEY: string = '5be5ee30'
  private _API_URL: string = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='
  private _reqConfig: AxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDQzM2RiZTRiZDg1ODk5OGNkZTU5M2MzOWNlMzliNSIsInN1YiI6IjVlMmRiMGU3MzI2YzE5MDAxNjFhN2Y1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcu5P8sO6FuJXNaYrj_SnfHPYEVxh-Cxn69mlIQyhQs'
    }
  }
  public async getMovies(): Promise<any> {
    return await axios.get(this._API_URL, this._reqConfig)
  }
}