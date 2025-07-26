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
import {useColor} from '../../Model/Color/useColor';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type NativeDrawerProps = {
  visible: boolean;
  onClose?: () => void;
  children: ReactNode;
  drawerWidth?: number;
  ltr?: boolean;
};

const NativeDrawer = ({
  visible,
  onClose,
  children,
  drawerWidth = Dimensions.get('screen').width / 2,
  ltr = false,
}: NativeDrawerProps) => {
  const height = Dimensions.get('screen').height;
  const Colors = useColor();
  const navigation = useNavigation();

  // Listen for navigation changes and close drawer
  useEffect(() => {
    // Add event listener for navigation state changes
    const unsubscribe = navigation.addListener('state', () => {
      if (visible && onClose) {
        onClose();
      }
    });

    // Clean up the event listener
    return unsubscribe;
  }, [navigation, visible, onClose]);

  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: ltr ? 'flex-start' : 'flex-end',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: height,
      zIndex: 1,
    },
    backdrop: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      opacity: 0.5,
    },
    modal: {
      width: drawerWidth, // Use the width passed from DrawerWrapper
      backgroundColor: 'white',
      height: '92%', // Not taking full height to match design
      marginTop: '8%', // Adding some top margin
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20, // Adding right corner radius to match left
      borderBottomLeftRadius: 20,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: -2,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });

  const translateX = useSharedValue(ltr ? -drawerWidth : drawerWidth);
  useEffect(() => {
    if (visible) {
      translateX.value = withSpring(0, {
        damping: 20,
        stiffness: 90,
      });
    } else {
      translateX.value = withTiming(ltr ? -drawerWidth : drawerWidth, {
        duration: 300,
      });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
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

export default NativeDrawer;
