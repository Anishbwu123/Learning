import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {CustomText} from '../Components/CustomText';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {images} from '../../Utils/ImagePath';
import useTablet from '../../Utils/useTablet';

interface MembershipCardProps {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  onPress: () => void;
  isPrimary?: boolean;
}

export const MembershipCard: React.FC<MembershipCardProps> = ({
  title,
  price,
  description,
  buttonText,
  onPress,
  isPrimary = false,
}) => {
  const {wp, hp} = useResponsive();
  const {isTablet, isPotrait} = useTablet();

  return (
    <View style={[styles.card, {backgroundColor: '#46595A'}]}>
      <View style={styles.titleContainer}>
        <CustomText
          text={title}
          fontFamily={FontsVariant.MontserratMedium}
          fontSize={
            isTablet && !isPotrait ? textSize.small_3x : textSize.medium_3x
          }
          color="#fff"
        />
        <View style={styles.underline} />
      </View>
      <View style={styles.priceContainer}>
        <CustomText
          text="$"
          fontFamily={FontsVariant.BodoniMT}
          fontSize={
            isTablet && !isPotrait ? textSize.medium_4x : textSize.large_4x
          }
          color="#fff"
          style={{marginRight: wp(1)}}
        />
        <CustomText
          text={price.replace('$', '')}
          fontFamily={FontsVariant.BodoniMT}
          fontSize={
            isTablet && !isPotrait ? textSize.medium_5x : textSize.large_4x
          }
          color="#fff"
        />
      </View>
      <CustomText
        text={description}
        fontFamily={FontsVariant.FuturaLT}
        fontSize={
          isTablet && !isPotrait ? textSize.extraSmall_4x : textSize.small_2xl
        }
        color="#fff"
        style={{marginBottom: hp(2)}}
      />
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          {
            backgroundColor: isPrimary ? '#fff' : '#617E84',
            // borderWidth: 1,
            // borderColor: '#fff'
          },
        ]}>
        <View style={styles.buttonContent}>
          <CustomText
            text={buttonText}
            fontFamily={FontsVariant.BodoniMT}
            fontSize={
              isTablet && !isPotrait ? textSize.small_1x : textSize.small_4x
            }
            color={isPrimary ? '#5C868B' : '#fff'}
          />
          <Image
            source={images.rightarrow}
            style={[
              styles.buttonIcon,
              {tintColor: isPrimary ? '#5C868B' : '#fff'},
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 16,
  },
  underline: {
    height: 1,
    backgroundColor: '#fff',
    opacity: 0.3,
    marginTop: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
