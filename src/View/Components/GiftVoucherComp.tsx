import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {useSize} from '../../Utils/useSize';
import {images} from '../../Utils/ImagePath';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import { RFValue } from 'react-native-responsive-fontsize';
import useTablet from '../../Utils/useTablet';

const GiftVoucherComp = ({onPress}) => {
  const navigation = useNavigation();
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getSize} = useSize();
  const {isTablet,isPotrait} = useTablet()
  const styles = StyleSheet.create({
    card: {
      borderRadius: 16,
      overflow: 'hidden',
      marginVertical: 10,
      justifyContent: 'center',
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: isTablet ? 25: 16,
    },
    textContainer: {
      //   flex: 1,
    },
    title: {
      color: '#fff',
      fontSize: RFValue(textSize.medium_1x),
      bottom: hp(2),
      //   marginBottom: 6,
      fontFamily: FontsVariant.BodoniMT,
    },
    subtitle: {
      color: '#fff',
      fontFamily: FontsVariant.FuturaLT,
      fontSize: RFValue(textSize.small_2x),
      top: hp(2),
      textAlign:"left"
    },
    icon: {
      width: isTablet ? 120: 80,
      height: isTablet ? 120: 80,
      marginRight: 15,
      top: hp(3.5),
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={images.flowerbg}
        style={isTablet && !isPotrait ? [styles.card, {width: wp(90), height: hp(45)}] : [styles.card, {width: wp(90), height: hp(20)}]}
        imageStyle={{borderRadius: wp(4)}}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Get gift vouchers{'\n'}on every service!
            </Text>
            <View
              style={{
                width: wp(15),
                height: wp(0.4),
                backgroundColor: '#fff',
                bottom: hp(1),
              }}
            />
            <Text style={styles.subtitle}>
              Get gift vouchers to get special{'\n'}discount. {/*removed the space before discount*/ }
            </Text>
          </View>
          <Image
            source={images.giftwrap}
            style={styles.icon}
            resizeMode="contain"
          />
          {/*  */}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GiftVoucherComp;