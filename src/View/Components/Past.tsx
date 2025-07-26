import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {useSize} from '../../Utils/useSize';
import {BlankSpace} from './BlankSpace';
import MassageComp from './MassageComp';
import {images} from '../../Utils/ImagePath';

const Past = () => {
  const navigation = useNavigation();
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getSize} = useSize();
  const styles = StyleSheet.create({
    container: {flex: 1, paddingHorizontal: wp(1)},
    columnWrapper: {
      justifyContent: 'space-between',
      marginBottom: hp(1.5),
    },
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4]}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(5)}}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({item}) => (
          <MassageComp
            image={images.massage}
            title="Body Massage"
            imageHeight={wp(20)}
            imageWidth={wp(38)}
            cardWidth={wp(42)}
            imageRadius={wp(2)}
            imageResizeMode="cover"
          />
        )}
      />
    </View>
  );
};

export default Past;
