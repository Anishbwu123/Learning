import React, {ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {useSize} from '../../Utils/useSize';

type AppBackgroundProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const AppBackground = ({children, style}: AppBackgroundProps) => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getSize} = useSize();

  return (
    <LinearGradient
      colors={['#DAD1CD', '#FFFFFF', '#DAD1CD']} // warm beige to white to warm beige
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={[styles.container, style]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 60,
  } as ViewStyle,
});

export default AppBackground;
