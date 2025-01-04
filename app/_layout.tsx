import { View, Text } from 'react-native'
import React from 'react'
import "../global.css";
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';

const RootLayout = () => {

  nowPlayingAction();
  
  return (
    <View>
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout
