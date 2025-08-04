import React, { JSX } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenParamList, Screens} from './screenTypes';
import Test from '../../View/Screens/Test';
import NewLink from '../../View/Screens/NewLink';
import OldLink from '../../View/Screens/OldLink';
import MapScreen from '../../View/Screens/MapScreen';
const Stack = createNativeStackNavigator<ScreenParamList>();

export const StackNavigation = (): JSX.Element => {
  // const isAuth: boolean = useAppSelector(state => selectAuthentication(state));
  return (
    <Stack.Navigator
      initialRouteName={Screens.MapScreen}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={Screens.Test} component={Test} />
      <Stack.Screen name={Screens.NewLink} component={NewLink} />
      <Stack.Screen name={Screens.OldLink} component={OldLink} />
      <Stack.Screen name ={Screens.MapScreen} component={MapScreen}/>
      
    </Stack.Navigator>
  );
};
