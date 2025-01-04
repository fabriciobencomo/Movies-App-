import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovies'
import  MainSlideShow  from '@/presentation/components/MainSlideShow'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();

  const safeArea = useSafeAreaInsets();

  if(nowPlayingQuery.isLoading) {
    return( 
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size={40}></ActivityIndicator>
      </View>
    )
  }


  return (
    <View className='mt-2' style={{paddingTop: safeArea.top}}>
      <Text className='text-3xl font-bold px-4 mb-2'>HomeScreen</Text>
      {/* Carousel of Movies */}
      <MainSlideShow movies={ nowPlayingQuery.data ?? []} />
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  )
}

export default HomeScreen