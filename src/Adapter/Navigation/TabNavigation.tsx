import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {Screens} from './screenTypes';
import {images} from '../../Utils/ImagePath';
import {useColor} from '../../Model/Color/useColor';

import {FontsVariant} from '../../Utils/fontsVariant';
import HomeScreen from '../../View/Screens/Home/Home';
import Bookings from '../../View/Screens/Home/Bookings';
import Purchase from '../../View/Screens/Home/Purchase';
import Health from '../../View/Screens/Home/Health';
import Home from '../../View/Screens/Home/Home';
import useTablet from '../../Utils/useTablet';
import {BlankSpace} from '../../View/Components/BlankSpace';

const Bottom = createBottomTabNavigator();

// Custom TabBar component
const CustomTabBar = ({state, descriptors, navigation}: any) => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {isTablet, isPotrait} = useTablet();

  const styles = StyleSheet.create({
    tabBar: {
      flexDirection: 'row',
      width: '100%',
      paddingBottom: 11,
      elevation: 0,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 0.3,
      height: isTablet && !isPotrait ? 120 : 60,
      backgroundColor: isTablet && !isPotrait ? '#ffffff' : '',
      // elevation:0.1,
      // elevation:2,
      borderTopColor: '#E3E3E3',
    },
    indicatorContainer: {
      height: Platform.OS === 'ios' ? 4 : 4,
      width: 30,
      marginBottom: 1,
    },
    indicator: {
      height: 3,
      borderRadius: 2,
      width: 50,
      alignSelf: 'center',
    },
    label: {
      fontSize: isTablet ? (!isPotrait ? 25 : 18) : 12,
      fontWeight: '500',
      fontFamily: FontsVariant.Inter,
      marginTop: 3,
      bottom: 3,
      // bottom: 0.1,
    },
  });

  return (
    <View
      style={[
        styles.tabBar,
        {
          backgroundColor: '#FFFF',
          // backgroundColor: 'red',
          justifyContent: 'center',
          width: '100%',
          paddingHorizontal: isTablet ? (isPotrait ? '4%' : '4%') : '0%',
          alignItems: 'center',
          height: isTablet ? (isPotrait ? hp(7) : hp(8)) : hp(8),
        },
      ]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isFocused = state.index === index;

        const icons: any = {
          [Screens.Home]: isFocused
            ? images.activetabhome
            : images.inactivetabhome,
          [Screens.Bookings]: isFocused
            ? images.activetabcalender
            : images.inactivecalender,
          [Screens.Purchase]: isFocused
            ? images.activetabtag
            : images.inactivetag,
          [Screens.Health]: isFocused
            ? images.activetabheart
            : images.inactivehealth,
        };

        const source = icons[route.name];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            activeOpacity={1}
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}>
            {/* Indicator above the icon */}
            <View style={styles.indicatorContainer}>
              {isFocused && <View style={[styles.indicator, {}]} />}
            </View>
            {/* Icon */}
            <Image
              source={source}
              style={{
                width: isTablet && !isPotrait ? 18 * wp(0.25) : 24 * wp(0.25), // Adjusted for responsiveness
                height: isTablet && !isPotrait ? 18 * wp(0.25) : 24 * wp(0.25),

                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
            {/* Label */}
            <Text
              style={[
                styles.label,
                {
                  color: isFocused
                    ? Colors.secondary_003
                    : Colors.secondary_005,
                },
              ]}>
              {label}
            </Text>
            {isTablet && !isPotrait ? (
              <BlankSpace height={hp(3)} />
            ) : (
              <BlankSpace height={hp(0)} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigation = () => {
  return (
    <Bottom.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
      }}>
      <Bottom.Screen name={Screens.Home} component={Home} />
      <Bottom.Screen name={Screens.Bookings} component={Bookings} />
      <Bottom.Screen name={Screens.Purchase} component={Purchase} />
      <Bottom.Screen name={Screens.Health} component={Health} />
    </Bottom.Navigator>
  );
};

export default TabNavigation;
