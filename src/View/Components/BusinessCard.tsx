import {View, Text, ImageSourcePropType} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {BlankSpace} from './BlankSpace';
import {CustomText} from './CustomText';
import {lngKey} from '../../i18n/lngKey';
import {textSize} from '../../Utils/textSize';
import {FontsVariant} from '../../Utils/fontsVariant';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {SizeType, useSize} from '../../Utils/useSize';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';
import {Button, ButtonVariant} from './Button';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

type BusinessCardPropType = {
  topImage: ImageSourcePropType;
  isEnableInfoDetails?: string;
  title: string;
  subTitle: string;
  buttonText: string;
  buttonIcon?: JSX.Element | null;
  smallButton?: boolean;
  onButtonClick?: () => void;
};

const BusinessCard: React.FC<PropsWithChildren<BusinessCardPropType>> = ({
  topImage,
  isEnableInfoDetails,
  title,
  subTitle,
  buttonText,
  buttonIcon,
  smallButton,
  onButtonClick,
}): JSX.Element => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getSize} = useSize();

  const optionsStyles = {
    optionsContainer: {
      backgroundColor: Colors.secondary_001,
      width: wp(70),
      borderRadius: wp(4.8),
      marginTop: wp(4.8),
      padding: wp(2.4),
      shadowColor: 'black',
      elevation: 15,
    },
  };

  return (
    <View
      style={{
        backgroundColor: Colors.secondary_007,
        width: wp(90),
        alignItems: 'center',
        marginTop: wp(18),
        borderRadius: wp(4.8),
        borderColor: Colors.secondary_012,
        borderWidth: wp(0.3),
        alignSelf: 'center',
      }}>
      <View
        style={{
          height: wp(23),
          width: wp(23),
          borderRadius: wp(50),
          backgroundColor: Colors.secondary_001,
          position: 'absolute',
          top: -wp(12),
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: wp(0.3),
          borderColor: Colors.default_001,
        }}>
        <CustomImage
          source={topImage}
          height={wp(10)}
          width={wp(10)}
          resizeMode="contain"
        />
      </View>
      <BlankSpace height={hp(7)} />
      <CustomText
        text={title}
        fontSize={textSize.small_4x}
        style={{
          fontFamily: FontsVariant.ArialBold,
          color: Colors.secondary_005,
        }}
      />
      <BlankSpace height={hp(2)} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CustomText
          text={subTitle}
          fontSize={textSize.small_4x}
          style={{
            fontFamily: FontsVariant.ArialRegular,
            color: Colors.secondary_003,
            paddingHorizontal: wp(10),
            textAlign: 'center',
            lineHeight: wp(5),
          }}>
          <BlankSpace width={wp(2)} />
          {isEnableInfoDetails && (
            <Menu>
              <MenuTrigger>
                <CustomImage
                  source={images.Error}
                  height={wp(6)}
                  width={wp(6)}
                  resizeMode="contain"
                  style={{marginTop: hp(1.2)}}
                />
              </MenuTrigger>
              <MenuOptions customStyles={optionsStyles}>
                <MenuOption>
                  <CustomText
                    text={isEnableInfoDetails}
                    fontSize={textSize.small_4x}
                    fontFamily={FontsVariant.ArialRegular}
                    color={Colors.secondary_003}
                  />
                </MenuOption>
              </MenuOptions>
            </Menu>
          )}
        </CustomText>
      </View>

      <BlankSpace height={hp(1.5)} />
      <Button
        titleSize={getSize(SizeType.small_5x)}
        height={hp(6.9)}
        width={smallButton ? wp(50) : wp(70)}
        title={buttonText}
        variant={ButtonVariant.defaultBackground}
        onPress={() => onButtonClick()}
        icon={buttonIcon}
      />
      <BlankSpace height={hp(2)} />
    </View>
  );
};

export default BusinessCard;
