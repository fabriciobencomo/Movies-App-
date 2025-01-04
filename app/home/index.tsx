import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovies'
import  MainSlideShow  from '@/presentation/components/Movies/MainSlideShow'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MovieHorizontal from '@/presentation/components/Movies/MovieHorizontal'

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  const safeArea = useSafeAreaInsets();

  if(nowPlayingQuery.isLoading) {
    return( 
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size={40}></ActivityIndicator>
      </View>
    )
  }


  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{paddingTop: safeArea.top}}>
        <Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>
        {/* Carousel of Movies */}
        <MainSlideShow movies={ nowPlayingQuery.data ?? []}/>
        {/* Popular Movies */}
        <MovieHorizontal title='Popular' movies={popularQuery.data ?? []} className='mb-5'/>
        {/* Top Rated Movies */}
        <MovieHorizontal title='Top Rated' movies={topRatedQuery.data ?? []} className='mb-5'/>
        {/* Upcoming Movies */}
        <MovieHorizontal title='Upcoming' movies={upcomingQuery.data ?? []} className='mb-5'/>
      </View>
    </ScrollView>
  )
}

export default HomeScreen