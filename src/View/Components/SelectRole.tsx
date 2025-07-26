import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {CustomText} from './CustomText';
import {CustomImage} from './CustomImage';
import {BlankSpace} from './BlankSpace';
import {lngKey} from '../../i18n/lngKey';
import {images} from '../../Utils/ImagePath';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

const SelectRole = ({roleData}) => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const [selectedCategory, setSelectedCategory] = useState({
    id: 0,
    text: lngKey.Farmer,
    isSelected: true,
    image: images.Farmer,
    infoEnable: false,
  });

  const SelectRoleData = [
    {
      id: 0,
      text: lngKey.Farmer,
      isSelected: true,
      image: images.Farmer,
      infoEnable: false,
    },
    {
      id: 1,
      text: lngKey.Agriculturist,
      isSelected: false,
      image: images.Group,
      infoEnable: true,
      textinfo:
        'Help and guide farmers, increase your followers and earn cash by encasing your earned points',
    },
    {
      id: 2,
      text: lngKey.WantToPromoteyourBuisness,
      isSelected: false,
      image: images.Buisness,
      infoEnable: true,
      textinfo:
        // 'You can promote your business and reach out to endless no. of customers with us',
        `You can promote your business and reach out to 'n' no. of customers with us`,
    },
    {
      id: 3,
      text: lngKey.GovtEdu,
      isSelected: false,
      image: images.GovtEdu,
      infoEnable: true,
      textinfo: lngKey.GovtEdu,
    },
  ];

  const styles = StyleSheet.create({
    choose1: {
      width: wp(90),
      height: wp(21),
      borderRadius: wp(5),
      flexDirection: 'row',
      // alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: wp(3),
      borderWidth: wp(0.2),
      borderColor: Colors.default_001,
      marginBottom: hp(2),
    },
    radioCircle: {
      height: wp(7),
      width: wp(7),
      borderRadius: wp(10),
      borderWidth: wp(0.5),
      borderColor: Colors.default_001,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: hp(1),
    },
    selectedRadioCircle: {
      height: wp(7),
      width: wp(7),
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryImage: {
      borderRadius: wp(2),
    },
    textWithErrorIcon: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  const optionsStyles = {
    optionsContainer: {
      backgroundColor: Colors.secondary_001,
      width: wp(55),
      borderRadius: wp(3.6),
      marginTop: wp(4.8),
      padding: wp(2.4),
      shadowColor: 'black',
      elevation: 15,
    },
  };

  const SetOption = ({option, index}: {option: any; index: number}) => {
    return (
      <Pressable
        style={styles.choose1}
        onPress={() => {
          setSelectedCategory(option);
          roleData(option);
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CustomImage
            source={option.image}
            height={wp(16)}
            width={wp(16)}
            style={styles.categoryImage}
            resizeMode="contain"
          />
          <BlankSpace width={wp(3)} />
          <View style={styles.textWithErrorIcon}>
            <CustomText
              text={option.text}
              fontFamily={FontsVariant.ArialBold}
              color={Colors.secondary_005}
              fontSize={textSize.small_4x}
              style={{
                maxWidth: wp(50),
                lineHeight: wp(5),
              }}>
              <BlankSpace width={wp(2)} />
              <Menu>
                <MenuTrigger>
                  {option.infoEnable && (
                    <CustomImage
                      source={images.Error}
                      height={wp(5)}
                      width={wp(5)}
                      resizeMode="contain"
                      style={{marginTop: hp(1.2)}}
                    />
                  )}
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles}>
                  <MenuOption>
                    <CustomText
                      text={option.textinfo}
                      fontSize={textSize.small_4x}
                      style={{
                        fontFamily: FontsVariant.ArialRegular,
                        color: Colors.secondary_003,
                      }}
                    />
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </CustomText>
          </View>
        </View>

        <View style={styles.radioCircle}>
          <View
            style={[
              styles.selectedRadioCircle,
              option.id === selectedCategory.id && {
                backgroundColor: Colors.default_001,
              },
            ]}>
            <CustomImage
              source={
                option.id === selectedCategory.id ? images.Right : option.icon
              }
              height={wp(3)}
              width={wp(3)}
              resizeMode="contain"
            />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{height: hp(50)}}>
      <FlatList
        data={SelectRoleData}
        renderItem={({item, index}) => {
          return <SetOption option={item} index={index} />;
        }}
      />
    </View>
  );
};

export default SelectRole;
