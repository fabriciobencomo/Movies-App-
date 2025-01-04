import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Cast } from '@/core/infrastructure/interfaces/movie-interface'
import { ActorCard } from './ActorCard'

interface Props {
  cast: Cast[]
}

const MovieCast = ({cast}: Props) => {

  return (
    <View className='mt-5'>
      
      <FlatList keyExtractor={(item) => item.id.toString()} data={cast} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) =>  
        <ActorCard actor={item}/> 
        } />
    </View>
  )
}

export default MovieCast