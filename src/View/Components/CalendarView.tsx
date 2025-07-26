/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {Pressable, View} from 'react-native';
import {CustomText} from './CustomText';
import {lngKey} from '../../i18n/lngKey';
import {textSize} from '../../Utils/textSize';
import {FontsVariant} from '../../Utils/fontsVariant';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';
import moment from 'moment';

type CalendarViewPropType = {
  onPress: () => void;
  DobValue?: string;
};

const CalendarView: React.FC<PropsWithChildren<CalendarViewPropType>> = ({
  onPress,
  DobValue,
}) => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();

  return (
    <Pressable
      onPress={onPress}
      style={{
        zIndex: 0,
        backgroundColor: Colors.secondary_001,
        borderRadius: wp(7.2),
        width: wp(90),
        height: hp(6.5),
        justifyContent: 'space-between',
        borderWidth: hp(0.1),
        borderColor: Colors.default_001,
        flexDirection: 'row',
      }}>
      <CustomText
        text={
          DobValue
            ? moment(String(DobValue), 'YYYY-MM-DD').format('DD/MM/YYYY')
            : lngKey.SelectyourDOB
        }
        fontSize={textSize.small_4x}
        style={{
          fontFamily: FontsVariant.ArialRegular,
          color: DobValue ? Colors.secondary_003 : Colors.secondary_002,
          paddingLeft: wp(5),
          width: wp(60),
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          backgroundColor: Colors.secondary_004,
          borderTopRightRadius: wp(7.2),
          borderBottomRightRadius: wp(7.2),
          width: wp(15),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomImage
          source={images.Calendar}
          height={hp(4.8)}
          width={wp(4.8)}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
};

export default CalendarView;
