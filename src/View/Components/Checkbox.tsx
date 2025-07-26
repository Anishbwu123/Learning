/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';

import {images} from '../../Utils/ImagePath';
import {CustomImage} from './CustomImage';
import useTablet from '../../Utils/useTablet';

// import {useResponsive} from '../../../Controller/Styles/useResponsive';
// import {useColor} from '../../../Model/Color/useColor';
// import {CustomImage} from '../../Components/CustomImage';
// import {images} from '../../../Utils/ImagePath';

const Checkbox = () => {
  const {wp} = useResponsive();
  const [isChecked, setIsChecked] = useState(false);
  const Colors = useColor();
  const {isTablet, isPotrait} = useTablet();
  const styles = StyleSheet.create({
    checkbox: {
      width: isTablet && !isPotrait ? wp(4.5) : wp(6),
      height: isTablet && !isPotrait ? wp(4.5) : wp(6),
      backgroundColor: isChecked ? 'transparent' : 'transparent',
      borderRadius: isTablet && !isPotrait ? wp(1) : wp(1.5),
      borderWidth: wp(0.3),
      borderColor: isChecked ? '#DAD1CD' : '#DAD1CD',
    },
  });
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginLeft: wp(2)}}>
      <Pressable
        style={styles.checkbox}
        onPress={() => setIsChecked(!isChecked)}>
        {isChecked && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: isTablet && !isPotrait ? wp(4) : wp(5.6),
              height: wp(5.6),
              flex: 1,
            }}>
            <CustomImage
              source={images.check}
              height={ isTablet && !isPotrait ? wp(3) : wp(4)}
              width={ isTablet && !isPotrait ? wp(3) : wp(4)}
              resizeMode="contain"
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default Checkbox;
