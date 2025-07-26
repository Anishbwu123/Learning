import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {useColor} from '../../Model/Color/useColor';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import useTablet from '../../Utils/useTablet';

type CustomSwitch = {
  onToggeleMain?: () => void;
};

const CustomSwitch = ({onToggeleMain}: CustomSwitch) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previous => !previous);
  const Colors = useColor();
  const {wp, hp} = useResponsive();
  const {isPotrait, isTablet} = useTablet();

  const styles = StyleSheet.create({
    switchContainer: {
      width: isTablet && !isPotrait ? wp(9) : wp(12),
      height: isTablet && !isPotrait ? wp(5.3) : wp(7),
      borderRadius: wp(50),
      backgroundColor: Colors.secondary_001,
      justifyContent: 'center',
      paddingHorizontal: isEnabled ? -wp(3) : wp(1),
    },
    thumb: {
      width: isTablet && !isPotrait ? wp(4) : wp(5),
      height: isTablet && !isPotrait ? wp(4) : wp(5),
      borderRadius: wp(50),
      backgroundColor: 'white',
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        toggleSwitch();
        if (onToggeleMain) onToggeleMain();
      }}
      style={[
        styles.switchContainer,
        {
          backgroundColor: isEnabled ? '#523938' : '#AFA6A1',
        },
      ]}>
      <Animated.View
        style={[
          styles.thumb,
          {
            transform: [
              isTablet
                ? isPotrait
                  ? {translateX: isEnabled ? 48 : 0}
                  : {translateX: isEnabled ? 50 : 0}
                : {translateX: isEnabled ? 25 : 0},
            ],
            // transform: [
            //   !isPotrait && isTablet
            //     ? {translateX: isEnabled ? 50 : 0}
            //     : {translateX: isEnabled ? 25 : 0},
            // ],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default CustomSwitch;
