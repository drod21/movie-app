export interface IMovie {
  actors: string,
  genre: string,
  imdbId: string,
  metascore: number,
  plot: string,
  poster: URL,
  ratings: Array<IRating>,
  released: Date,
  title: string,
  type: string,
  year: string,
  writer: string
}

export interface IRating {
  Source: string,
  Value: string
}