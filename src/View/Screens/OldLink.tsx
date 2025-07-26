import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OldLink = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'red',fontSize:30}}>deeplinkScreen...</Text>
    </View>
  )
}

export default OldLink

const styles = StyleSheet.create({container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}})