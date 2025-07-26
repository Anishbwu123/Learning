import React, {JSX, useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import DeviceInfo from 'react-native-device-info';
import Orientation from 'react-native-orientation-locker';
import {Provider} from 'react-redux';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './src/Adapter/Redux/Store/Store';
import Interceptor from './src/Adapter/Axios/Interceptors';
import { NavigationContainers } from './src/Adapter/Navigation/NavigationContainers';

const queryClient = new QueryClient()

function App(): JSX.Element {
  useEffect(() => {
    const lockOrientation = async () => {
      const isTablet = DeviceInfo.isTablet();
      if (!isTablet) {
        Orientation.lockToPortrait(); // Lock portrait for mobile
      } else {
        Orientation.unlockAllOrientations(); // Allow all for tablet
      }
    };
    lockOrientation();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Interceptor>
            <NavigationContainers />
          </Interceptor>
        </QueryClientProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
