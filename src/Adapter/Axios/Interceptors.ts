import {ReactNode, useEffect} from 'react';
import {
  AsyncStorageController,
  PersistanceStorageKey,
} from '../AsyncStorage/AsyncStorageController';
import {useAppDispatch} from '../Redux/useAppDispatch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {axiosInstance} from './axiosInstance';
import {ApiKeys} from '../Tanstack/ApiKeys';
import {authAction} from '../Redux/Slices/authSlice';

type Props = {
  children: ReactNode;
};

const Interceptor = ({children}: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Request Interceptor
    const reqInterceptor = axiosInstance.interceptors.request.use(
      async config => {
        const storeToken = await AsyncStorageController.GET_DATA(
          PersistanceStorageKey.TOKEN,
        );
        if (storeToken) {
          config.headers.Authorization = `Bearer ${storeToken}`;
        }
        return config;
      },
    );

    // Response Interceptor
    const resInterceptor = axiosInstance.interceptors.response.use(
      response => response,

      // just log the error to the console

      async error =>{
        console.log('The error', error);
        return Promise.reject(error);
      }


      //   async error => {
      //     const originalConfig = error.config;
      //     if (
      //       error.response &&
      //       error.response.status === 401 &&
      //       !originalConfig._retry &&
      //       originalConfig.url !== ApiKeys.accessTokenGeneration // Prevent infinite loop
      //     ) {
      //       originalConfig._retry = true;
      //       console.log('Trying to fetch new token /..../');
      //       const refreshToken = await AsyncStorageController.GET_DATA(
      //         PersistanceStorageKey.REFRESH_TOKEN,
      //       );
      //       if (refreshToken) {
      //         console.log('The refresh token ', refreshToken);
      //         try {
      //           const res = await axiosInstance.post(
      //             ApiKeys.accessTokenGeneration,
      //             {
      //               refreshToken: refreshToken,
      //             },
      //             {
      //               headers: {
      //                 'Content-Type': 'application/json',
      //               },
      //             },
      //           );
      //           console.log('The token from interceptor ', res.data.data.token);
      //           originalConfig.headers.Authorization = `Bearer ${res.data.token}`;
      //           await AsyncStorageController.SET_DATA(
      //             PersistanceStorageKey.TOKEN,
      //             res.data.data.token,
      //           );
      //           await AsyncStorageController.SET_DATA(
      //             PersistanceStorageKey.REFRESH_TOKEN,
      //             res.data.data.refreshToken,
      //           );
      //           dispatch(authAction.setToken(res.data.data.token));
      //           dispatch(authAction.setRefreshToken(res.data.data.refreshToken));

      //           return axiosInstance(originalConfig); // <--- RETURN the retried request!
      //         } catch (refreshError) {
      //           // Handle refresh failure: logout, redirect, etc.
      //           // dispatch(authAction.removeUserInfo());
      //           // Optionally clear tokens and redirect to login
      //           console.log(
      //             'Error in access token fetch in interceptor ',
      //             refreshError,
      //           );
      //           return Promise.reject(refreshError);
      //         }
      //       } else {
      //         console.log('No refresh token found');
      //       }
      //     }
      //     return Promise.reject(error);
      //   },
    );

    // Cleanup
    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [dispatch]);

  return children;
};

export default Interceptor;
