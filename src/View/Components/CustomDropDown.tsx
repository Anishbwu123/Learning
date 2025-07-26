import React, {useState} from 'react';
import {StyleSheet, View, Text, ImageSourcePropType} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useSize} from '../../Utils/useSize';
import {useColor} from '../../Model/Color/useColor';
import {textSize} from '../../Utils/textSize';
import {FontsVariant} from '../../Utils/fontsVariant';
import {CustomText} from './CustomText';
import {BlankSpace} from './BlankSpace';
import {Dropdowndata} from './Const';
import {t} from 'i18next';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';
import useTablet from '../../Utils/useTablet';

type DropDownProp = {
  label?: string;
  placeholder: string;
  data: {label: string; value: string}[];
  isRequired?: boolean;
  leftIcon?: any;
  values?: string | null; // current selected value from outside (Formik)
  onSelect?: (value: string) => void;
  style?: any; // <-- Add this line
};

export const CustomDropdown: React.FC<DropDownProp> = ({
  label,
  placeholder,
  data,
  isRequired,
  leftIcon,
  values,
  onSelect,
  style, // <-- Add this line
}) => {
  const {wp, hp} = useResponsive();
  const {getSize} = useSize();
  const {isTablet, isPotrait} = useTablet();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const Colors = useColor();
  const [value, setValue] = useState(null);

  const styles = StyleSheet.create({
    dropdown: {
      height: isTablet && !isPotrait ? hp(12) : hp(6),
      backgroundColor: '#F3F0EE',
      borderRadius: 15,
      borderColor: '#F3F0EE',
      borderWidth: wp(0.1),
      paddingHorizontal: wp(5),
      width: wp(82),
      // alignSelf: 'center',
    },
    icon: {
      marginRight: wp(1),
    },

    placeholderStyle: {
      fontSize: isTablet
        ? isPotrait
          ? textSize.medium_4x
          : textSize.medium_4x
        : textSize.small_4x,
      color: '#A1A1A1',
      // fontFamily: FontsVariant.FigtreeRegular,
      paddingLeft: wp(2),
    },
    selectedTextStyle: {
      fontSize: isTablet
        ? isPotrait
          ? textSize.medium_4x
          : textSize.medium_4x
        : textSize.small_4x,
      color: Colors.secondary_004,
      fontFamily: FontsVariant.FuturaLT,
      paddingLeft: wp(2),
      borderRadius: wp(10),
    },
    itemtextstyle: {
      // fontFamily: FontsVariant.FigtreeRegular,
      color: Colors.secondary_003,
      fontSize: isTablet && !isPotrait ? wp(2.5) : wp(4),
    },
    // iconStyle: {
    //   width: wp(7),
    //   height: wp(7),
    //   marginRight: wp(-2),
    //   tintColor: Colors.secondary_002,
    // },
    // inputSearchStyle: {
    //   height: 40,
    //   fontSize: 16,
    // },
    // container:{
    //   flex:1
    // }
  });

  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <CustomText
          text={label}
          fontSize={textSize.small_4x}
          color={Colors.secondary_003}
        />
        <BlankSpace width={wp(1)} />
        {isRequired && (
          <CustomText
            text={'*'}
            fontSize={textSize.small_4x}
            fontFamily={FontsVariant.FuturaLT}
            color={Colors.secondary_003}
          />
        )}
      </View>

      <BlankSpace height={hp(1)} />
      <Dropdown
        style={[styles.dropdown, style]} // <-- Merge styles here
        data={data ? data : Dropdowndata}
        value={values}
        itemTextStyle={styles.itemtextstyle}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        placeholder={placeholder}
        labelField="label"
        valueField="value"
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setIsDropdownOpen(false)}
        onChange={item => {
          onSelect?.(item.value); // Fix: should be item.value, not item.values
        }}
        renderLeftIcon={() =>
          leftIcon ? (
            <CustomImage
              source={leftIcon}
              height={isTablet && !isPotrait ? wp(3) : wp(5)}
              width={isTablet && !isPotrait ? wp(3) : wp(5)}
              resizeMode="contain"
              style={{marginRight: wp(2)}}
            />
          ) : null
        }
        renderRightIcon={() => (
          <CustomImage
            source={isDropdownOpen ? images.dropdown : images.dropdown}
            height={wp(5)}
            width={wp(4)}
            resizeMode="contain"
            style={{
              marginRight: wp(0.1),
            }}
          />
        )}
      />
    </>

    // </View>
  );
};

// export default CustomDropdown;
