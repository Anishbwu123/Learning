import {NavigationContainer} from '@react-navigation/native';
import React, { JSX } from 'react';
import {Provider} from 'react-redux';
import {store} from '../Redux/Store/Store';
import {StackNavigation} from './StackNavigation';
import NewLink from '../../View/Screens/NewLink';
import OldLink from '../../View/Screens/OldLink';
// import {MenuProvider} from 'react-native-popup-menu';
// import DrawerWrapper from '../../View/Components/DrawerWrapper';
// import GuestDrawerWrapper from '../../View/Components/GuestDrawerWrapper';
// import {Interceptor} from '../Axios/Interceptor';

export const NavigationContainers = (): JSX.Element => {

  const config={
    screens:{
      NewLink:'NewLink/:sort',
      OldLink:'OldLink'
    }
  };
   const linking={
    prefixes:['deeplink://'],
    config,
   }
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        {/* <Interceptor>
          <MenuProvider> */}
        {/* <DrawerWrapper> */}
          {/* <GuestDrawerWrapper> */}
            <StackNavigation />
          {/* </GuestDrawerWrapper> */}
        {/* </DrawerWrapper> */}
        {/* </MenuProvider>
        </Interceptor> */}
      </NavigationContainer>
    </Provider>
  );
};
