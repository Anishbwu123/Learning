/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {SizeType, useSize} from '../../Utils/useSize';
import {Button, ButtonVariant} from './Button';
import {BlankSpace} from './BlankSpace';
import {CustomText} from './CustomText';
import {textSize} from '../../Utils/textSize';
import {FontsVariant} from '../../Utils/fontsVariant';

type BottomButtonPropType = {
  buttonText: string;
  butonOnPress: () => void;
  firstText: string;
  pressableText: string;
  pressableTextOnPress: () => void;
};
const BottomButton: React.FC<PropsWithChildren<BottomButtonPropType>> = ({
  buttonText,
  butonOnPress,
  firstText,
  pressableText,
  pressableTextOnPress,
}) => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getSize} = useSize();
  return (
    <View>
      <Button
        titleSize={getSize(SizeType.small_5x)}
        height={hp(6.9)}
        width={wp(90)}
        title={buttonText}
        variant={ButtonVariant.defaultBackground}
        onPress={butonOnPress}
      />
      <BlankSpace height={hp(1)} />
      <CustomText
        text={firstText}
        fontSize={textSize.small_4x}
        style={{
          fontFamily: FontsVariant.ArialRegular,
          color: Colors.secondary_003,
          textAlign: 'center',
        }}>
        <CustomText
          onPress={pressableTextOnPress}
          text={pressableText}
          fontSize={textSize.small_4x}
          style={{
            fontFamily: FontsVariant.RalewayBold,
            color: Colors.default_001,
            paddingLeft: wp(3),
          }}
        />
      </CustomText>
    </View>
  );
};

export default BottomButton;
