import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({poster, originalTitle, title}: Props) => {

  const {height} = useWindowDimensions()

  return (
    <>
      <View style={{
        position: 'absolute',
        zIndex: 99,
        elevation: 9,
        top: 45,
        left: 10
      }}>
        <Pressable>
          <Ionicons name='arrow-back' size={30} color='white' className='shadow' />
        </Pressable>
      </View>
      <View style={{height: height * 0.7}} className='shadow-xl shadow-black/20'>
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
          <Image className='flex-1' source={{ uri:poster }} resizeMode='cover'/>
        </View>
      </View>
      <View className='px-5 mt-5'>
        <Text className='font-normal'>{originalTitle}</Text>
        <Text className='font-bold text-2xl'>{title}</Text>
      </View>
    </>
  )
}

export default MovieHeader