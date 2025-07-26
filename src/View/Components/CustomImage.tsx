import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';
export interface CustomImagePropType extends FastImageProps {
  width: number;
  height: number;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  source?:any
}

export const CustomImage: React.FC<CustomImagePropType> = props => {
  //custom style
  const customStyle: StyleProp<ViewStyle> = [
    {
      width: props.width,
      height: props.height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    props.containerStyle,
  ];

  //image
  const imageJSX = (
    <FastImage
      {...props}
      style={[{ width: props.width, height: props.height }, props.style]}
    />
  );

  return props.onPress ? (
    <TouchableOpacity style={customStyle} onPress={props.onPress}>
      {imageJSX}
    </TouchableOpacity>
  ) : (
    <View style={customStyle}>{imageJSX}</View>
  );
};
