import { ColorValue, Text, TextProps } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { textSize } from '../../Utils/textSize';
import { useResponsive } from '../../Controller/Styles/useResponsive';
import { useColor } from '../../Model/Color/useColor';
import { FontsVariant } from '../../Utils/fontsVariant';
import { lngKey } from '../../i18n/lngKey';

const FIGMASCREEN_WIDTH = 414;

export interface CustomTextProps extends TextProps {
  text?: keyof typeof lngKey | string;
  fontSize?: textSize;
  color?: ColorValue;
  fontFamily?: string | undefined;
  disabled?: boolean;
  underline?: boolean;
}

export const CustomText: React.FC<CustomTextProps> = props => {
  const Colors = useColor();
  const { wp } = useResponsive();
  const { t } = useTranslation();

  const getFontSize = (size: textSize): number => {
    const required_size = (size / FIGMASCREEN_WIDTH) * wp(100);
    return required_size;
  };

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: props.fontFamily ?? FontsVariant.ArialRegular,
          color: props.color ? props.color : Colors.secondary_100,
          textDecorationLine: props.underline ? 'underline' : 'none',
          textAlign: 'left',
        },
        props.fontSize
          ? { fontSize: getFontSize(props.fontSize) }
          : { fontSize: getFontSize(textSize.small_5x) },
        props.style,
      ]}>
      {props.disabled ? props.text : t(props.text)}
      {props.children}
    </Text>
  );
};
