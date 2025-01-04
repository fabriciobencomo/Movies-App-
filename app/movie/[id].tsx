import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie';
import MovieHeader from '@/presentation/components/Movie/MovieHeader';

const MovieScreen = () => {

  const {id} = useLocalSearchParams();

  const {movieQuery} = useMovie(+id)

  if(movieQuery.isLoading || !movieQuery.data) {
    return (
      <View>
        <Text className='mb-4'>Loading</Text>
        <ActivityIndicator size={40} />
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader poster={movieQuery.data.poster} title={movieQuery.data.title} originalTitle={movieQuery.data.originalTitle}/>
    </ScrollView>
  )
}

export default MovieScreen