/* eslint-disable react-native/no-inline-styles */
import {ImageBackground, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useSafeArea} from '../../Adapter/SafeAreaView/UseSafeArea';
import {images} from '../../Utils/ImagePath';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useColor} from '../../Model/Color/useColor';
type BackgroundProp = {
  styleFrmProp?: StyleProp<ViewStyle>;
  isFullHeightEnabled?: boolean;
  isFullWidthEnabled?: boolean;
  disableFlexMode?: boolean;
  removeBottomGap?: boolean;
  removeTopGap?: boolean;
  backgroundColor?: string;
  backgroundImage?: boolean;
  mapImage?: boolean;
};
const Background: React.FC<PropsWithChildren<BackgroundProp>> = ({
  children,
  styleFrmProp,
  isFullWidthEnabled,
  isFullHeightEnabled,
  removeBottomGap,
  disableFlexMode,
  removeTopGap,
  backgroundColor,
}) => {
  const {wp, hp} = useResponsive();
  const {hasNotch} = useSafeArea();
  const Colors = useColor();
  return (
    <SafeAreaView
      style={[
        styles.safeAreaView,
        {backgroundColor: backgroundColor ?? Colors.secondary_001},
      ]}>
      <ImageBackground
        source={images.Appbackground}
        style={[
          disableFlexMode ? styles.disableMode1 : styles.disableMode2,
          {
            width: wp(100),
            paddingHorizontal: isFullWidthEnabled ? undefined : wp(5),
            paddingTop: isFullHeightEnabled
              ? undefined
              : hasNotch()
              ? hp(1)
              : hp(3),
            paddingBottom: isFullHeightEnabled
              ? undefined
              : hasNotch()
              ? hp(3)
              : hp(3),
          },
          removeBottomGap ? styles.paddingBottom : null,
          removeTopGap ? styles.paddingTop : null,
          {justifyContent: 'flex-start', alignItems: 'flex-start'},
          styleFrmProp,
        ]}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Background;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disableMode1: {
    width: '100%',
    height: '100%',
  },
  disableMode2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paddingBottom: {
    paddingBottom: 0,
  },
  paddingTop: {
    paddingTop: 0,
  },
});
