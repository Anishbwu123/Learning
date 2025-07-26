import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {useSize} from '../../Utils/useSize';
import {images} from '../../Utils/ImagePath';
import {CustomText} from './CustomText';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {BlankSpace} from './BlankSpace';
import {CustomImage} from './CustomImage';
import useTablet from '../../Utils/useTablet';

interface BookAppoinmentCompProps {
  onPress?: () => void;
}

const BookAppoinmentComp: React.FC<BookAppoinmentCompProps> = ({onPress}) => {
  const navigation = useNavigation();
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getSize} = useSize();
  const {isTablet, isPotrait} = useTablet();

  const styles = StyleSheet.create({
    imgCard: {
      width: wp(90),
      height: isTablet ? (isPotrait ? wp(29) : wp(28)) : wp(35),
      borderRadius: wp(5),
      overflow: 'hidden',
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    content: {
      paddingHorizontal: wp(5),
      justifyContent: 'space-between',
      flex: 1,
      marginTop: hp(2),
    },
    iconContainer: {
      position: 'absolute',
      right: wp(5),
      top: '50%',
      transform: [{translateY: -wp(5)}],
      height: wp(10),
      width: wp(10),
      borderRadius: wp(5),
      borderWidth: wp(0.3),
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      zIndex: 2,
    },
    line: {
      width: wp(15),
      height: wp(0.2),
      backgroundColor: '#fff',
      marginTop: wp(2),
    },
    description: {
      // paddingHorizontal: wp(1),
      paddingBottom: hp(2),
    },
  });

  return (
    <TouchableOpacity style={styles.imgCard} onPress={onPress}>
      <ImageBackground
        source={images.bodymassage}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={{borderRadius: wp(5)}}>
        <View style={styles.overlay} />

        <TouchableOpacity style={styles.iconContainer}>
          <CustomImage
            source={images.upsidearrow}
            resizeMode="contain"
            height={wp(5)}
            width={wp(5)}
          />
        </TouchableOpacity>

        <View style={styles.content}>
          <View>
            <CustomText
              text={'Book an\nappointment.'}
              fontFamily={FontsVariant.BodoniMT}
              fontSize={textSize.medium_1x}
              color={'#fff'}
            />
            <BlankSpace height={hp(0.5)} />
            <View style={styles.line} />
          </View>

          <BlankSpace height={hp(1.1)} />

          <CustomText
            text={'Lorem ipsum dolor sit amet concestetur.'}
            fontFamily={FontsVariant.FuturaLT}
            fontSize={textSize.small_2x}
            color={'white'}
            style={styles.description}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BookAppoinmentComp;
