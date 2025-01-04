import { View, Text } from 'react-native'
import React from 'react'
import { MovieDetails } from '@/core/infrastructure/interfaces/movie-interface'
import { Formatter } from '@/config/helpers/formartter'

interface Props {
  movie: MovieDetails
}

const MovieDescription = ({movie}: Props) => {
  return (
    <View className='mx-5'>
      <View className='flex flex-row'>
        <Text>{movie.rating}</Text>
        <Text>- {movie.genres.join(', ')}</Text>
      </View>
      <Text className='font-bold mt-5'>Description</Text>
      <Text className='mt-2'>{movie.description}</Text>
      <Text className='mt-5 text-2xl font-bold'>Budget</Text>
      <Text className='text-2xl'>{Formatter.currency(movie.budget)}</Text>
    </View>
  )
}

export default MovieDescription