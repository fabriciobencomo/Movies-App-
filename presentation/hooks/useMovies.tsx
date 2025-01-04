import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularAction } from "@/core/actions/movies/popular.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {
  const nowPlayingQuery = useQuery({ 
    queryKey: ['movies', 'nowPlaying'], 
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 horas
  }) 

  const popularQuery = useQuery({ 
    queryKey: ['movies', 'popular'], 
    queryFn: popularAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 horas
  }) 

  return {
    nowPlayingQuery,
    popularQuery
  }
}