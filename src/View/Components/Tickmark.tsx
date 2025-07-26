import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../../Utils/ImagePath'
import { useResponsive } from '../../Controller/Styles/useResponsive';

const {wp, hp} = useResponsive();

const Tickmark = () => {
  return (
    <View>
     <Image source={images.Right} style={{height:hp(5),width:wp(5)}}/>
    </View>
  )
}

export default Tickmark

const styles = StyleSheet.create({})