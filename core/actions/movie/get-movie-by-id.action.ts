import { movieApi } from "@/core/api/movie-api"
import { MovieDBMovieResponse } from "@/core/infrastructure/interfaces/movie-detail-response"
import { MovieDetails } from "@/core/infrastructure/interfaces/movie-interface"
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper"

export const getMovieByIdAction = async (id: number | string): Promise<MovieDetails> => {
    try{

      const {data} = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
      
      const movie = MovieMapper.fromTheMovieDBToMovieDetails(data);
  
      return movie
  
    } catch(error){
      console.log(error)
      throw new Error;
  
    }
}