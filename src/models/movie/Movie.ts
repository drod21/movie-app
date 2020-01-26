import { IMovie } from "./IMovie";

export default class Movie implements IMovie {
  backdropPath: string = ''
  genreIds: Array<number> = []
  id: number = null
  isAdult: boolean = null
  overview: string = ''
  popularity: number = null
  posterPath: string = ''
  releaseDate: Date = null
  title: string = ''
  voteAverage: number = null
  voteCount: number = null
  video: boolean = null

  constructor(data) {
    this.backdropPath = data.backdrop_path
    this.genreIds = data.genre_ids
    this.id = data.id
    this.isAdult = data.adult
    this.overview = data.overview
    this.popularity = data.popularity
    this.posterPath = data.poster_path
    this.releaseDate = new Date(data.release_date)
    this.title = data.title
    this.voteAverage = data.vote_average
    this.voteCount = data.vote_count
    this.video = data.video
  }
}