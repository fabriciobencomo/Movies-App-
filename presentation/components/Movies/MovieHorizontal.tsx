import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/core/infrastructure/interfaces/movie-interface'
import MoviePoster from './MoviePoster';

interface Props {
  title?: string,
  movies: Movie[];
  className?: string;
  loadNextPage?: () => void
}

const MovieHorizontal = ({movies, title, className, loadNextPage}: Props) => {

  const isLoading = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isLoading.current) return

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent

    const isEndReach = (contentOffset.x + layoutMeasurement.width + 600) >=  contentSize.width

    if(!isEndReach) return

    isLoading.current = true;

    // TODO: 
    console.log('cargar Nuevas Peliculas')
  }

  return (
    <View className={`{${className}`}>
      <Text className='text-3xl font-bold px-4 mb-4 mt-2'>{title}</Text>
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={movies} renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster/>} onScroll={onScroll}/>

    </View>
  )
}

export default MovieHorizontal