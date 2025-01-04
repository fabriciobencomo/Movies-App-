import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/core/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async({page, limit}: Options) => {
  try{

    const {data} = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
      params: {
        page: page
      }
    })
    
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

    return movies

  } catch(error){
    console.log(error)
    throw new Error;

  }

}