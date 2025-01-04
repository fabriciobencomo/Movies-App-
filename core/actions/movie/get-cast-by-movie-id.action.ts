import { movieApi } from "@/core/api/movie-api"
import { CastByIDMovieResponse, Cast as CastFromMovieDb } from "@/core/infrastructure/interfaces/cast-by-movie-response"
import { MovieDBMovieResponse } from "@/core/infrastructure/interfaces/movie-detail-response"
import { Cast } from "@/core/infrastructure/interfaces/movie-interface"
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper"

export const getCastByIdAction = async (movieId: number | string) => {
    try{

      const {data} = await movieApi.get<CastFromMovieDb>(`/${movieId}/credits`)
      
      return data.cast.map(MovieMapper.fromTheMovieDBToCastByMovie)
  
    } catch(error){
      console.log(error)
      throw new Error;
  
    }
}