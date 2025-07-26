import {View, Text} from 'react-native';
import React from 'react';
import {useResponsive} from '../../Controller/Styles/useResponsive';

interface ErrorProps {
  msg: string;
}

const ErrorText: React.FC<ErrorProps> = props => {
  const {wp, hp} = useResponsive();
  return (
    <View style={{marginVertical: 2}}>
      <Text style={{color: 'red', paddingHorizontal: wp(3)}}>{props.msg}</Text>
    </View>
  );
};

export default ErrorText;
