/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {CustomText} from './CustomText';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {textSize} from '../../Utils/textSize';
import {FontsVariant} from '../../Utils/fontsVariant';
import {BlankSpace} from './BlankSpace';

type HeaderTextPropType = {
  headerText: string;
  SubHeaderText: string;
};

const HeaderText: React.FC<PropsWithChildren<HeaderTextPropType>> = ({
  headerText,
  SubHeaderText,
}) => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();

  return (
    <>
      <CustomText
        text={headerText}
        fontSize={textSize.large_2x}
        style={{
          fontFamily: FontsVariant.RalewayBold,
          color: Colors.secondary_099,
          textAlign: 'center',
        }}
      />
      <BlankSpace height={hp(1)} />
      <CustomText
        text={SubHeaderText}
        fontSize={textSize.small_4x}
        style={{
          fontFamily: FontsVariant.ArialRegular,
          color: Colors.secondary_003,
          textAlign: 'center',
          paddingHorizontal: wp(2),
        }}
      />
    </>
  );
};

export default HeaderText;
