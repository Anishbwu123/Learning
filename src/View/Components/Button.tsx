/* eslint-disable react-native/no-inline-styles */
import React, {type PropsWithChildren} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  View,
  ViewStyle,
} from 'react-native';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {ColorObject} from '../../Model/Color/ColorName';
import {FontsVariant} from '../../Utils/fontsVariant';
import {images} from '../../Utils/ImagePath';
import {useTranslation} from 'react-i18next';
import {useColor} from '../../Model/Color/useColor';
import {RFValue} from 'react-native-responsive-fontsize';
import {BlankSpace} from './BlankSpace';

export enum ButtonVariant {
  defaultBackground = 'defaultBackground',
  skyTransparent = 'skyTransparent',
  grayBackground = 'grayBackground',
  blueTransparent = 'blueTransparent',
  greenTransparent = 'greenTransparent',
}

type ButtonPropType = {
  variant: ButtonVariant;
  onPress?: () => void | undefined;
  title: string;
  width: number | string;
  height?: number;
  titleSize: number;
  titleFont?: string;
  titleSpacing?: number | undefined;
  icon?: JSX.Element | null;
  rightIcon?: JSX.Element | null;
  style?: ViewStyle;
  isButtonDisabled?: boolean;
  isButtonLoading?: boolean;
  isNext?: boolean;
  isReload?: boolean;
  isSearch?: boolean;
  refreshButton?: boolean;
  isLeftArrow?: boolean;
};

export const Button: React.FC<PropsWithChildren<ButtonPropType>> = ({
  titleSize,
  width,
  onPress,
  variant,
  title,
  icon,
  rightIcon,
  style,
  titleSpacing,
  height,
  isButtonDisabled,
  isButtonLoading,
  isNext,
  isReload,
  isSearch,
  refreshButton,
  isLeftArrow = false,
}): JSX.Element => {
  const Colors = useColor();
  const {wp, hp} = useResponsive();
  const {t} = useTranslation();
  const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor:"red",
      justifyContent: 'space-between',
    },
    contentWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      flexShrink: 1,
    },
    leftIconContainer: {
      marginRight: wp(2),
    },
    arrowIcon: {
      height: wp(4),
      width: wp(4),
      resizeMode: 'contain',
      // backgroundColor:"yellow"
    },
  });

  const {backgroundColor, color, fontFamily, borderColor, borderWidth} =
    getButtonVariantProperty(variant, Colors);

  return (
    <TouchableOpacity
      disabled={isButtonDisabled || isButtonLoading}
      style={[
        styles.mainContainer,
        {
          backgroundColor: backgroundColor,
          width: width,
          height: height ?? hp(6.9),
          borderRadius: RFValue(15),
          borderWidth,
          borderColor,
          paddingHorizontal: wp(4),
        },
        style,
      ]}
      onPress={onPress}>
      {isButtonLoading ? (
        <View style={[styles.innerContainer, {justifyContent: 'center'}]}>
          <ActivityIndicator color={'#FFFFFF'} size="large" />
          <BlankSpace width={wp(3)} />
          <Text
            style={[
              styles.title,
              {
                color: color || 'white',
                fontSize: titleSize,
                fontFamily,
                letterSpacing: titleSpacing,
              },
            ]}>
            {title || 'Loading...'}
          </Text>
        </View>
      ) : (
        <View style={styles.innerContainer}>
          {/* Left arrow */}
          {isLeftArrow && (
            <Image
              source={images.leftarrow}
              tintColor={color || '#fff'}
              style={[styles.arrowIcon, {marginRight: wp(2)}]}
            />
          )}

          {/* Main content */}
          <View style={styles.contentWrapper}>
            {icon && !isLeftArrow && (
              <View style={styles.leftIconContainer}>{icon}</View>
            )}

            <Text
              style={[
                styles.title,
                {
                  color: color || 'white',
                  // color:"red",
                  // backgroundColor:"blue",
                  fontSize: titleSize,
                  fontFamily,
                  letterSpacing: titleSpacing,
                  textAlign: isLeftArrow ? 'left' : 'center',
                  left: isLeftArrow ? wp(45) : icon && !isLeftArrow ? wp(2) : 0,
                  marginRight: isLeftArrow ? wp(2) : 0,
                  flex: isLeftArrow ? 1 : undefined,
                },
              ]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {title || 'View Details'}
            </Text>
          </View>

          {/* Right arrow */}
          {(rightIcon || (isNext && !isLeftArrow)) && (
            <Image
              source={images.rightarrow}
              tintColor={color || '#fff'}
              style={styles.arrowIcon}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

function getButtonVariantProperty(
  buttonVariant: ButtonVariant,
  colors: ColorObject,
) {
  switch (buttonVariant) {
    case ButtonVariant.defaultBackground:
      return {
        color: '#fff',
        backgroundColor: colors.secondary_003,
        fontFamily: FontsVariant.BodoniMT,
        borderColor: undefined,
        borderWidth: 0,
      };
    case ButtonVariant.skyTransparent:
      return {
        color: colors.default_001,
        backgroundColor: 'transparent',
        fontFamily: FontsVariant.BodoniMT,
        borderColor: colors.default_001,
        borderWidth: 1,
      };
    case ButtonVariant.blueTransparent:
      return {
        color: '#05A0BF',
        backgroundColor: 'transparent',
        fontFamily: FontsVariant.BodoniMT,
        borderColor: '#05A0BF',
        borderWidth: 1,
      };
    case ButtonVariant.greenTransparent:
      return {
        color: '#4D686E',
        backgroundColor: 'transparent',
        fontFamily: FontsVariant.BodoniMT,
        borderColor: '#4D686E',
        borderWidth: 1,
      };
    case ButtonVariant.grayBackground:
      return {
        color: colors.secondary_001,
        backgroundColor: colors.secondary_003,
        fontFamily: FontsVariant.BodoniMT,
        borderColor: undefined,
        borderWidth: 0,
      };
    default:
      return {
        color: '#fff',
        backgroundColor: colors.secondary_003,
        fontFamily: FontsVariant.BodoniMT,
        borderColor: undefined,
        borderWidth: 0,
      };
  }
}
