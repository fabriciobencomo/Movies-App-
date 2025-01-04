import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/core/infrastructure/interfaces/movie-interface'
import MoviePoster from './MoviePoster';

interface Props {
  title?: string,
  movies: Movie[];
}

const MovieHorizontal = ({movies, title}: Props) => {
  return (
    <View>
      <Text className='text-3xl font-bold px-4 mb-4 mt-2'>{title}</Text>
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={movies} renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster/>} />
    </View>
  )
}

export default MovieHorizontal