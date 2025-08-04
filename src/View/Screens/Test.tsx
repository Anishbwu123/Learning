import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useResponsive } from '../../Controller/Styles/useResponsive';
import { BlankSpace } from '../Components/BlankSpace';

const Test = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { wp, hp } = useResponsive();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '647137061558-8sak02t7ffjncc621mja5ev2o6tgilu7.apps.googleusercontent.com', 
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
      console.log('✅ User Info:', usrInfo);
    } catch (error) {
      console.log('Full error:', JSON.stringify(error, null, 2));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('❌ User cancelled sign in');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('⌛ Sign in in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('❌ Play services not available');
      } else {
        console.log('❌ Sign in error:', error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null);
      console.log('👋 Signed out successfully');
    } catch (error) {
      console.error('❌ Sign out error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signIn} style={styles.button}>
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <BlankSpace height={hp(5)} />

      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

      {userInfo ? (
        <View style={styles.userInfo}>
          <Text style={styles.userText}>👤 Name: {userInfo.user.name}</Text>
          <Text style={styles.userText}>📧 Email: {userInfo.user.email}</Text>
        </View>
      ) : (
        <View style={styles.userInfo}>
          <Text style={styles.userText}>Not signed in</Text>
        </View>
      )}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  userInfo: {
    marginTop: 30,
    alignItems: 'center',
  },
  userText: {
    fontSize: 16,
    marginBottom: 6,
  },
});
