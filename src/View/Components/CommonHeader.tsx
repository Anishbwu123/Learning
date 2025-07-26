/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {CustomText} from './CustomText';
import {textSize} from '../../Utils/textSize';
import {FontsVariant} from '../../Utils/fontsVariant';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';
import {useNavigation} from '@react-navigation/native';
import useTablet from '../../Utils/useTablet';


type CommonHeaderPropType = {
  title: string;
  colorHeader?: boolean;
  isBorder?: boolean;
  rightTitle?: string;
  onRightTitlePress?: () => void;
  isBack?: boolean;
  isNav?: boolean;
  ishamburger?: boolean;
  onPress?: () => void;
  isThreedot?: boolean;
  isProfilePage?: boolean;
  isSearch?: boolean;
  mainContainerStyle?: ViewStyle;
  // font color addition
  fontColor?:string
};

const CommonHeader: React.FC<PropsWithChildren<CommonHeaderPropType>> = ({
  title,
  isBack,
  isSearch,
  ishamburger,
  isThreedot,
  isProfilePage,
  onPress,
  mainContainerStyle,
  fontColor
}) => {
  const {hp, wp} = useResponsive();
  const Colors = useColor();
  const [searchText, setSearchText] = useState('');
  const [titleWidth, setTitleWidth] = useState(0);
  const navigation = useNavigation();
  const {isTablet, isPotrait} = useTablet();

  // Calculate the left position based on title width
  const calculateLeftPosition = () => {
    const containerWidth = wp(80); // Available space for title
    const minLeft = isTablet ? (isPotrait ? wp(14) : wp(13)) : wp(18); // Minimum left position (width of left icon container)

    if (titleWidth < containerWidth * 0.6) {
      // If title is relatively small
      return minLeft + wp(2); // Shift a bit more left than center
    }
    return minLeft; // Otherwise keep at minimum left position
  };

  return (
    <View
      style={[
        {
          bottom: hp(5),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: wp(5),
          paddingTop: hp(4),
          width: wp(100),
          right: wp(5),
          // marginRight:wp(6)
        },
        mainContainerStyle,
      ]}>
      {/* Left Section */}
      <View style={{width: wp(10), alignItems: 'flex-start'}}>
        {isBack ? (
          <CustomImage
            source={images.back}
            resizeMode="contain"
            height={ isTablet ? (isPotrait ? wp(6) : wp(4)) : wp(8)}
            width={ isTablet ? (isPotrait ? wp(6) : wp(4)) : wp(8)}
            onPress={() => navigation.goBack()}
          />
        ) : null} 
      </View>

      {/* Center Title - Updated positioning logic */}
      <View
        style={{
          position: 'absolute',
          left: calculateLeftPosition(),
          right: wp(10),
          alignItems: 'flex-start', // Align left for shorter text
        }}>
        <CustomText
          text={title}
          numberOfLines={1}
          ellipsizeMode="tail"
          fontSize={isTablet ? (isPotrait ? textSize.medium_4x : '') : textSize.large_4x}
          fontFamily={FontsVariant.BodoniMT}
          onLayout={event => {
            const {width} = event.nativeEvent.layout;
            setTitleWidth(width);
          }}
          style={{
            color:fontColor ? fontColor : Colors.secondary_001,
            // maxWidth: wp(80),
            textAlign: 'left', // Left align text
            marginTop: hp(3.5),
          }}
        />
      </View>

      {/* Right Section */}
      <View
        style={{
          width: wp(10),
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        {ishamburger ? (
          <TouchableOpacity>
            <CustomImage
              source={images.hamburger}
              resizeMode="contain"
              height={wp(8)}
              width={wp(8)}
            />
          </TouchableOpacity>
        ) : null}

        {isThreedot ? (
          <TouchableOpacity
            style={{
              height: wp(10),
              width: wp(10),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: wp(50),
            }}>
            <CustomImage
              source={images.add}
              resizeMode="contain"
              height={wp(5)}
              width={wp(5)}
              tintColor={'#5C5F67'}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Search Section */}
      {isSearch ? (
        <View
          style={{
            position: 'absolute',
            bottom: -hp(3),
            width: wp(90),
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: wp(0.3),
            borderColor: Colors.secondary_001,
            borderRadius: 30,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}>
          <Image
            source={images.search}
            style={{width: 20, height: 20, margin: 10}}
          />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              color: '#FFFFFF',
              fontWeight: '500',
              fontFamily: FontsVariant.BodoniMT,
            }}
            placeholder="Search"
            placeholderTextColor="#7C7C7C"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      ) : null}
    </View>
  );
};

export default CommonHeader;
