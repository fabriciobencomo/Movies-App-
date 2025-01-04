import { getCastByIdAction } from '@/core/actions/movie/get-cast-by-movie-id.action'
import { getMovieByIdAction,  } from '@/core/actions/movie/get-movie-by-id.action'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useMovie = (id: number) => {
  
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  })

  const castQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getCastByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  })

  return {
    movieQuery,
    castQuery
  }
}
