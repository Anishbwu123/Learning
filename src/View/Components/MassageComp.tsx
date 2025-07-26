// changed the card width and image width latest --accpet

import {
  ImageSourcePropType,
  StyleSheet,
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
import useTablet from '../../Utils/useTablet';
import {Screens} from '../../Adapter/Navigation/screenTypes';

type MassageCompProps = {
  title: string;
  image: ImageSourcePropType;
  isDatehave?: boolean;
  isTimehave?: boolean;
};

const MassageComp: React.FC<MassageCompProps> = ({
  title,
  image,
  isDatehave = true,
  isTimehave = true,
}) => {
  const navigation = useNavigation();
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getSize} = useSize();
  const {isPotrait, isTablet} = useTablet();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(Screens.BookingDetails)}
      style={{
        // width: "45%",
        width: wp(42),
        // backgroundColor: 'red',
        padding: isTablet && !isPotrait ? 18 : 6,
        backgroundColor: '#AFA6A1',
        borderRadius: wp(5),
        justifyContent: 'space-between',
        overflow: 'hidden',
        marginRight: wp(2),
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <CustomImage
          source={image}
          style={{borderRadius: isTablet ? 25 : 20}}
          resizeMode="cover"
          // width={'100%'}
          width={wp(40)}
          height={wp(28)}
          // width={wp(48)}
          // height={wp(28)}
        />
      </View>
      <BlankSpace height={hp(1.5)} />

      <View style={{paddingHorizontal: wp(4)}}>
        {isDatehave && (
          <>
            <CustomText
              text={'20.02.2025'}
              fontFamily={FontsVariant.FuturaLT}
              fontSize={textSize.small_1xl}
              color={'#fff'}
            />
            <BlankSpace height={hp(1)} />
          </>
        )}

        <CustomText
          numberOfLines={1}
          text={title}
          fontFamily={FontsVariant.MontserratSemiBold}
          fontSize={textSize.small_4x}
          color={'#523938'}
        />
        <BlankSpace height={hp(1)} />

        <CustomText
          text={'Lorem ipsum dolor sit amet concestetur.'}
          fontFamily={FontsVariant.FuturaLT}
          fontSize={textSize.small_2x}
          color={'#fff'}
        />
      </View>

      <BlankSpace height={hp(2)} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: wp(4),
        }}>
        {isTimehave ? (
          <CustomText
            text={'10:30 am'}
            fontFamily={FontsVariant.FuturaLT}
            fontSize={textSize.small_1xl}
            color={'#fff'}
          />
        ) : (
          <View style={{width: wp(10)}} />
        )}

        <View
          style={{
            borderRadius: wp(50),
            borderWidth: wp(0.2),
            borderColor: '#fff',
            height: wp(8),
            width: wp(8),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomImage
            source={images.upsidearrow}
            resizeMode="contain"
            width={wp(5)}
            height={wp(5)}
          />
        </View>
      </View>
      <BlankSpace height={hp(1)} />
    </TouchableOpacity>
  );
};

export default MassageComp;
