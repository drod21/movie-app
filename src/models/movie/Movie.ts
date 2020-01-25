import { IMovie, IRating } from "./IMovie";

export default class Movie implements IMovie {
  actors: string = ''
  genre: string = ''
  imdbId: string = ''
  metascore: number = null
  plot: string = ''
  poster: URL
  ratings: Array<IRating> = []
  released: Date
  title: string = ''
  type: string = ''
  year: string = ''
  writer: string = ''

  constructor(data) {
    this.actors = data.Actors
    this.genre = data.Genre
    this.imdbId = data.imdbID
    this.metascore = +data.Metascore
    this.plot = data.Plot
    this.poster = data.Poster
    this.ratings = data.Ratings
    this.released = new Date(data.Released)
    this.title = data.Title
    this.type = data.Type
    this.year = data.Year
  }
}