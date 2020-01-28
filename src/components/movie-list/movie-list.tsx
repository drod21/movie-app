import React, { FC } from 'react'
import { Movie } from 'models'

export interface MovieListProps {
  movies: Array<Movie>
}

const MovieList: FC<MovieListProps> = ({ movies }: MovieListProps) => {
  return <div />
}

export default MovieList