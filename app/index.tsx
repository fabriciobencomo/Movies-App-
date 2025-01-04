import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const MovieApp = () => {
  return (
    <Redirect href='/home' />
  )
}

export default MovieApp