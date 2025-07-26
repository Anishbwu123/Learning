import React, {ReactNode, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useResponsive} from '../../Controller/Styles/useResponsive';

const {height} = Dimensions.get('window');

type CustomModal = {
  visible: boolean;
  onClose?: () => void;
  children: ReactNode;
};

const CustomModal = ({visible, onClose, children}: CustomModal) => {
  const {wp} = useResponsive();
  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    backdrop: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
      width: wp(85),
      backgroundColor: 'white',
      borderRadius: wp(7.2),
      alignItems: 'center',
    },
  });

  const translateY = useSharedValue(height);
  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0, {
        damping: 20,
        stiffness: 90,
      });
    } else {
      translateY.value = withTiming(height, {duration: 300});
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.modal, animatedStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};

export default CustomModal;
