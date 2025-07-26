import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {useSize} from '../../Utils/useSize';
import {images} from '../../Utils/ImagePath';
import {CustomImage} from './CustomImage';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {RFValue} from 'react-native-responsive-fontsize';
import useTablet from '../../Utils/useTablet';

const MassageOfferComp = () => {
  const navigation = useNavigation();
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getSize} = useSize();
  const {isTablet, isPotrait} = useTablet();
  const styles = StyleSheet.create({
    card: {
      justifyContent: 'center',
      borderRadius: 16,
      overflow: 'hidden',
      marginVertical: 10,
    },
    cardland: {
      justifyContent: 'center',
      borderRadius: 40,
      overflow: 'hidden',
      marginVertical: 20,
      // resizeMode: 'contain',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    content: {
      padding: 16,
      zIndex: 2,
    },
    label: {
      backgroundColor: '#ffffff55',
      paddingHorizontal: isTablet ? 12 : 10,
      paddingVertical: 4,
      borderRadius: wp(10),
      alignSelf: 'flex-start',
      bottom: hp(2),
    },
    labelText: {
      color: '#fff',
      fontFamily: FontsVariant.FuturaLT,
      fontSize: RFValue(textSize.small_2x),
    },
    title: {
      color: '#fff',
      fontFamily: FontsVariant.BodoniMT,
      fontSize: RFValue(textSize.medium_1x),
      marginBottom: 8,
    },
    subtext: {
      color: '#fff',
      fontSize: RFValue(textSize.small_2x),
      fontFamily: FontsVariant.FuturaLT,
      top: hp(2.5),
    },
    badge: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      backgroundColor: '#4A6164',
      borderRadius: wp(50),
      width: wp(20),
      height: wp(20),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: wp(0.6),
      borderStyle: 'dashed',
      borderColor: '#ccc',
      zIndex: 2,
    },
    badgeGet: {
      fontSize: 10,
      color: '#666',
    },
    badgePercent: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    badgeOff: {
      fontSize: 10,
      color: '#666',
    },
  });

  return (
    <TouchableOpacity>
      <ImageBackground
        source={images.headmassage}
        style={
          isTablet && !isPotrait
            ? [styles.cardland, {width: wp(90), height: hp(60)}]
            : [styles.card, {width: wp(90), height: hp(25)}]
        }
        imageStyle={{borderRadius: wp(4)}}>
        <View style={styles.overlay} />
        <View style={styles.content}>
          <View style={styles.label}>
            <Text style={styles.labelText}>Golden Facial</Text>
          </View>
          <Text style={styles.title}>
            Keep your skin{'\n'}pores clean &{'\n'}tight.
          </Text>
          <View
            style={{width: wp(15), height: wp(0.2), backgroundColor: '#fff'}}
          />
          <Text style={styles.subtext}>Get 25% off on golden facial</Text>
        </View>

        <View style={styles.badge}>
          <CustomImage
            source={images.offer}
            resizeMode="contain"
            height={wp(12)}
            width={wp(12)}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MassageOfferComp;
