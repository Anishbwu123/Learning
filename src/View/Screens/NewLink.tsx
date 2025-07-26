import { Alert, Button, Share, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BlankSpace } from '../Components/BlankSpace';
import { useResponsive } from '../../Controller/Styles/useResponsive';

const NewLink = () => {
    const{wp,hp}=useResponsive();
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check this out: deeplink://OldLink',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center'}}>NewLink</Text>
        <BlankSpace height={hp(5)}/>
      <View>
        <Button title="Share Deep Link" onPress={handleShare} />
      </View>
    </View>
  );
};

export default NewLink;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
