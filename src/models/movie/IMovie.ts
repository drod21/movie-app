export interface IMovie {
  backdropPath: string,
  genreIds: Array<number>,
  id: number,
  isAdult: boolean,
  overview: string,
  popularity: number,
  posterPath: string,
  releaseDate: Date,
  title: string,
  voteAverage: number,
  voteCount: number,
  video: boolean,
}