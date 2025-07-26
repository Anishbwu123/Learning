import {View, Text, TouchableOpacity, ViewStyle, ActivityIndicator} from 'react-native';
import React from 'react';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {RFValue} from 'react-native-responsive-fontsize';
import useTablet from '../../Utils/useTablet';

interface CenterButtonProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
  borderColor?: string;
  style?: ViewStyle;
  loading?: boolean;
}

const CenterButton: React.FC<CenterButtonProps> = props => {
  const {wp, hp} = useResponsive();
  const {isPotrait, isTablet} = useTablet();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          minWidth: isTablet ? (isPotrait ? wp(26) : wp(24)) : wp(30),
          padding: 20,
          minHeight: isTablet ? (isPotrait ? hp(7) : hp(14)) : hp(6),
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : '#fff',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: props.borderColor ? 1 : 0,
          borderColor: props.borderColor,
        },
        props.style,
      ]}
      disabled={props.loading}>
      {props.loading ? (
        <ActivityIndicator color={props.textColor || '#fff'} />
      ) : (
        <Text
          style={{
            color: props.textColor,
            fontFamily: FontsVariant.BodoniMT,
            fontSize:
              isPotrait && isTablet
                ? textSize.medium_4x
                : RFValue(textSize.small_5x),
          }}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CenterButton;
