/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,

} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FontsVariant} from '../../Utils/fontsVariant';
import {useColor} from '../../Model/Color/useColor';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {ColorObject} from '../../Model/Color/ColorName';
import {textSize} from '../../Utils/textSize';
import {CustomText} from './CustomText';
import {BlankSpace} from './BlankSpace';
import {images} from '../../Utils/ImagePath';
import {CustomImage} from './CustomImage';
import {lngKey} from '../../i18n/lngKey';
import {RFValue} from 'react-native-responsive-fontsize';
import useTablet from '../../Utils/useTablet';

export enum InputVariant {
  SECONDARY = 'SECONDARY',
}

type InputProp = {
  width?: number;
  isSearchField?: boolean;
  height?: number;
  variant: InputVariant;
  inputTextSize?: textSize;
  onChangeText?: (inputType: string) => void;
  placeHolder: string;
  inputTextFont?: string;
  value?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  editable?: boolean;
  onFocus?: () => void;
  onBlur?: (e: string) => void;
  maxLength?: number;
  style?: ViewStyle;
  isSideDishSearch?: boolean;
  textAlign?: 'left' | 'center' | 'right' | undefined;
  onPress?: () => void;
  multiline?: boolean;
  numberOfLines?: number;
  borderRadius?: number | undefined;
  textAlignVertical?: 'center' | 'auto' | 'top' | 'bottom' | undefined;
  alignSelf?: 'flex-start';
  showPasswordEye?: boolean;
  paddingVertical?: number;
  onEndEditing?: () => void;
  passMargin?: number;
  label?: string;
  chooseLocation?: boolean;
  isRequired?: boolean;
  isInfo?: boolean;
  leftImage?: ImageSourcePropType;
  textColor?: string;
  sigin?: boolean;
  textContentType?: string
};

export const InputField: React.FC<InputProp> = ({
  leftIcon,
  isSearchField,
  rightIcon,
  width,
  height,
  value,
  variant,
  onChangeText,
  secureTextEntry,
  placeHolder,
  keyboardType,
  inputTextFont,
  editable,
  maxLength,
  onFocus,
  // onBlur,
  style,
  multiline,
  numberOfLines,
  borderRadius,
  textAlignVertical,
  showPasswordEye,
  paddingVertical,
  onEndEditing,
  passMargin,
  chooseLocation,
  label,
  isRequired,
  isInfo,
  leftImage,
  // adding textcolor props
  textColor,
  sigin = false,
  textContentType = "username"
}) => {
  const Colors = useColor();
  const {wp, hp} = useResponsive();
  const {t} = useTranslation();
  const {isPotrait, isTablet} = useTablet();

  const [isSecureTextEntryEnable, setIsSecureTextEntryEnable] =
    useState<boolean>(false);

  useEffect(() => {
    setIsSecureTextEntryEnable(secureTextEntry ?? false);
  }, [secureTextEntry]);

  const {backgroundColor, placeholderTextColor} = getInputVariantProperty(
    variant,
    Colors,
    isSearchField,
  );
  return (
    <>
      <BlankSpace height={hp(1)} />
      <View
        style={
          {
            // paddingHorizontal: 5,
          }
        }>
        <View
          style={[
            inputStyles.inputsContainer,
            {
              backgroundColor: backgroundColor,
              paddingRight: wp(8),
              paddingVertical: isTablet && !isPotrait ? wp(4) : wp(5),
              borderRadius: borderRadius ?? wp(4),
              width: width ? width : '100%',
              height: height ? height : hp(6.5),
              justifyContent: 'center',
              paddingLeft: sigin ? (showPasswordEye ? wp(6) : wp(4)) : wp(8),
              // width: '100%',
              position: 'relative',
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              height: height ? height : hp(6.5),
              alignItems: 'center',
              // backgroundColor: 'pink',
              // width:"100%"
            }}>
            {leftIcon && <View style={{marginRight: wp(2)}}>{leftIcon}</View>}
            <TextInput
              style={[
                {
                  color: textColor ? textColor : '#fff',
                  height: height ? height : hp(6.5),
                  fontSize: RFValue(textSize.small_3x),
                  width: '100%',
                  fontFamily: inputTextFont ?? FontsVariant.FuturaLT,
                  paddingVertical: paddingVertical ? paddingVertical : hp(0),
                  marginVertical: wp(5),
                  marginLeft: leftIcon ? wp(2) : 0,
                },
                style,
              ]}
              placeholder={placeHolder}
              autoCapitalize="none"
              placeholderTextColor={placeholderTextColor}
              value={value}
              keyboardType={keyboardType}
              secureTextEntry={isSecureTextEntryEnable}
              onFocus={onFocus}
              // onBlur={onBlur}
              editable={editable ?? true}
              maxLength={maxLength}
              multiline={multiline}
              numberOfLines={numberOfLines}
              textAlignVertical={textAlignVertical}
              onEndEditing={onEndEditing}
              onChangeText={onChangeText}
              textContentType = {textContentType}
              
            />
          </View>
          {rightIcon ? rightIcon : null}
          {showPasswordEye ? (
            <TouchableOpacity
              style={{
                maxWidth: '7%',
              }}
              onPress={() => {
                setIsSecureTextEntryEnable(!isSecureTextEntryEnable);
              }}>
              <Image
                source={
                  isSecureTextEntryEnable ? images.showeye : images.unhide
                }
                style={{
                  width: wp(5),
                  // width: "100%",
                  // height:"100%",
                  // backgroundColor:"red",
                  height: wp(5),

                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
};

const inputStyles = StyleSheet.create({
  inputsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

function getInputVariantProperty(
  inputVariant: InputVariant,
  Colors: ColorObject,
  isSearchField?: boolean,
) {
  switch (inputVariant) {
    case InputVariant.SECONDARY:
      return {
        backgroundColor: isSearchField ? '#b0a6a1' : Colors.secondary_002,
        color: Colors.secondary_002,
        fontFamily: FontsVariant.FuturaLTCondensedRegular,
        placeholderTextColor: isSearchField ? '#FFFFFF' : '#AFA6A1',
      };
  }
}
