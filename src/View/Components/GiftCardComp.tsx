import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {useSize} from '../../Utils/useSize';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';
import {CustomText} from './CustomText';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {BlankSpace} from './BlankSpace';
import { Screens } from '../../Adapter/Navigation/screenTypes';

type GiftCardProps = {
  title: string;
  image: ImageSourcePropType;
};

const GiftCardComp = ({image, title}: GiftCardProps) => {
  const navigation = useNavigation();
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getSize} = useSize();
  const styles = StyleSheet.create({
    Imgcard: {
      width: wp(40),
      height: wp(30),
      borderRadius: wp(3),
      overflow: 'hidden',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: wp(2), // Add padding to prevent image from touching edges
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      borderRadius: wp(2),
      resizeMode: 'cover', // Use cover for better fill
      backgroundColor: '#f0f0f0', // fallback background
    },
    titleBox: {
      alignItems: 'center',
      marginTop: hp(1),
      width: wp(40),
    },
  });
  return (
    <View style={{alignItems: 'center', marginBottom: hp(1)}}>
      <TouchableOpacity 
        style={styles.Imgcard} 
        activeOpacity={0.8} 
        onPress={()=> navigation.navigate(Screens.GiftCardSection)}>
        <CustomImage
          source={image}
          width={wp(40)}      // slightly less than card width to allow for padding
          height={wp(30)}     // slightly less than card height to allow for padding
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.titleBox}>
        <CustomText
          text={title}
          fontFamily={FontsVariant.BodoniMT}
          fontSize={textSize.medium_1x}
          color={Colors.secondary_001}
          style={{textAlign: 'center'}}
        />
      </View>
    </View>
  );
};

export default GiftCardComp;
