import React from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {CustomText} from './CustomText';
import {InputField, InputVariant} from './InputField';
import {Button, ButtonVariant} from './Button';
import {CustomImage} from './CustomImage';
import {BlankSpace} from './BlankSpace';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {images} from '../../Utils/ImagePath';
import useTablet from '../../Utils/useTablet';

const quantities = ['1', '2', '3', '4', '5'];

export interface GiftCardComponentProps {
  title?: string;
  headerText?: string;
  selectedAmount: string;
  setSelectedAmount: React.Dispatch<React.SetStateAction<string>>;
  customAmount: string;
  setCustomAmount: React.Dispatch<React.SetStateAction<string>>;
  selectedQuantity: number | string;
  setSelectedQuantity: React.Dispatch<React.SetStateAction<number | string>>;
  showQuantityDropdown: boolean;
  setShowQuantityDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  onPressGiftCard: () => void;
  wp: (val: number) => number;
  hp: (val: number) => number;
  Colors: any;
}

const GiftCardComponent: React.FC<GiftCardComponentProps> = ({
  headerText,
  selectedAmount,
  setSelectedAmount,
  customAmount,
  setCustomAmount,
  selectedQuantity,
  setSelectedQuantity,
  showQuantityDropdown,
  setShowQuantityDropdown,
  onPressGiftCard,
  wp,
  hp,
  Colors,
}) => {
  const {isTablet, isPotrait} = useTablet();

  const styles = StyleSheet.create({
    giftCardSection: {
      marginHorizontal: 16,
      marginTop: 10,
      backgroundColor: 'transparent',
      minHeight: 280, // <-- Add this line
    },
    sectionTitle: {
      marginLeft: 4,
      marginBottom: 10,
    },
    input: {
      marginHorizontal: 20,
      marginLeft: 0,
    },
    dropdownFull: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderRadius: isTablet && !isPotrait ? 15 : 10,
      paddingVertical: 19,
      // paddingHorizontal: 16,
      paddingHorizontal: 28,
      justifyContent: 'space-between',
      width: '100%',
      alignSelf: 'center',
    },
    dropdownIcon: {
      tintColor: '#AFA6A1',
    },
    dropdownWrapper: {
      position: 'relative',
      overflow: 'visible',
      width: '100%',
      zIndex: 999,
    },
    dropdownList: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255,255,255,0.98)',
      borderRadius: 10,
      elevation: 10,
      zIndex: 1000,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      maxHeight: 200,
    },
    dropdownItem: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 0.5,
      borderBottomColor: '#eee',
    },
    giftButtonFull: {
      borderRadius: 12,
      marginTop: 18,
      marginBottom: 10,
      width: '100%',
      alignSelf: 'center',
      backgroundColor: '#5C868B',
    },
  });

  return (
    <View style={styles.giftCardSection}>
      {/* Header text at the top */}
      {headerText && (
        <>
          <CustomText
            text={headerText}
            fontFamily={FontsVariant.BodoniMT}
            fontSize={textSize.large_2x}
            color="#222"
            style={{marginBottom: 8}}
          />
          <BlankSpace height={hp(0.5)} />
        </>
      )}
      <BlankSpace height={hp(1)} />
      <InputField
        variant={InputVariant.SECONDARY}
        placeHolder="Custom amount"
        inputTextFont={FontsVariant.FuturaLT}
        inputTextSize={textSize.small_2xl}
        style={styles.input}
        borderRadius={isTablet ? (isPotrait ? 15 : 15) : 12} //FIXME: Modified
        value={customAmount}
        textColor={Colors.secondary_004}
        width={isTablet ? (isPotrait ? '100%' : '100%') : '101.8%' /*wp(82)*/} //FIXME: Modified
        onChangeText={setCustomAmount}
        keyboardType="default"
        editable={true}
      />
      <BlankSpace height={hp(1.2)} />

      {/* Dropdown wrapper with relative position */}
      <View style={styles.dropdownWrapper}>
        <TouchableOpacity
          style={styles.dropdownFull}
          onPress={() => setShowQuantityDropdown(!showQuantityDropdown)}
          activeOpacity={0.8}>
          <CustomText
            text={
              selectedQuantity ? selectedQuantity.toString() : 'Select quantity'
            }
            fontFamily={FontsVariant.FuturaLT}
            fontSize={textSize.small_2xl}
            color={selectedQuantity ? '#222' : '#AFA6A1'}
          />
          <CustomImage
            source={images.dropdown}
            resizeMode="contain"
            height={wp(4)}
            width={wp(4)}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
        {showQuantityDropdown && (
          <View style={styles.dropdownList}>
            <ScrollView
              style={{maxHeight: 150}}
              contentContainerStyle={{paddingVertical: 4}}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={true}
              onStartShouldSetResponderCapture={() => true}
              keyboardShouldPersistTaps="handled"
              scrollEnabled={true}
              scrollEventThrottle={16}
              overScrollMode="always">
              {quantities.map(qty => (
                <TouchableOpacity
                  key={qty}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedQuantity(qty);
                    setShowQuantityDropdown(false);
                  }}
                  activeOpacity={0.7}>
                  <CustomText
                    text={qty}
                    fontFamily={FontsVariant.FuturaLT}
                    fontSize={textSize.small_2xl}
                    color={'#000'}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>

      <BlankSpace height={hp(1.5)} />
      <Button
        title="Get Gift Card"
        variant={ButtonVariant.defaultBackground}
        titleFont={FontsVariant.BodoniMT}
        titleSize={
          isTablet
            ? isPotrait
              ? textSize.large_1x
              : textSize.large_3x
            : textSize.medium_1x
        }
        height={isTablet && !isPotrait ? hp(11) : hp(6.1)}
        width={'100%'}
        style={styles.giftButtonFull}
        isNext={true}
        onPress={onPressGiftCard}
      />
    </View>
  );
};

export default GiftCardComponent;
