import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularAction } from "@/core/actions/movies/popular.action"
import { topRatedAction } from "@/core/actions/movies/top-rated.action"
import { upcomingAction } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

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

  const topRatedQuery = useInfiniteQuery({ 
    initialPageParam: 1,
    queryKey: ['movies', 'topRated'], 
    queryFn: ({pageParam}) => topRatedAction({page: pageParam}),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1
    }
  }) 

  const upcomingQuery = useQuery({ 
    queryKey: ['movies', 'upcoming'], 
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 horas
  }) 

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery
  }
}