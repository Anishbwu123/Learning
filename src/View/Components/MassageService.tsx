import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {images} from '../../Utils/ImagePath';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {CustomImage} from './CustomImage';
import {RFValue} from 'react-native-responsive-fontsize';
import useTablet from '../../Utils/useTablet';
import {BlankSpace} from './BlankSpace';

const data = [
  {
    id: '1',
    title: 'Discover health and wellness with MassageLuXe',
    subtitle: 'Save on Services!\nBecome a Member',
    image: images.greenbg,
  },
  {
    id: '2',
    title: 'Relax. Rejuvenate. Refresh.',
    subtitle: 'Join today for exclusive perks',
    image: images.greenbg,
  },
];

const MassageService = () => {
  const {wp, hp} = useResponsive();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const {isPotrait, isTablet} = useTablet();
  const styles = StyleSheet.create({
    card: {
      borderRadius: 27,
      // marginHorizontal: 1,
      overflow: 'hidden',
      gap: !isTablet ? 1 : 0,
      marginRight: isTablet ? (!isPotrait ? 60 : 6) : 2,
    },

    cardland: {
      borderRadius: 50,
      marginHorizontal: 3,
      overflow: 'hidden',
    },

    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: 16,
    },
    content: {
      padding: 20,
      justifyContent: 'center',
      height: '100%',
    },
    title: {
      color: '#fff',
      fontSize: isTablet ? textSize.large_4x : textSize.large_1x,
      fontFamily: FontsVariant.BodoniMT,
      lineHeight: 35,
      width: wp(50),
    },
    subtitle: {
      color: '#fff',
      fontFamily: FontsVariant.FuturaLT,
      fontSize: isTablet && !isPotrait ? textSize.small_5x : textSize.small_1xl,
      position: 'absolute',
      right: isTablet && !isPotrait ? hp(0) : wp(2),
      top: isTablet && !isPotrait ? hp(30) : hp(18),
      textAlign: 'center',
      width: wp(30),
    },
    iconWrapper: {
      position: 'absolute',
      right: wp(10),
      top: isTablet ? (isPotrait ? hp(7) : hp(14)) : hp(10),
      width: isTablet && !isPotrait ? wp(8) : wp(15),
      height: isTablet && !isPotrait ? wp(8) : wp(15),
      borderRadius: wp(50),
      borderWidth: 1,
      borderColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow: {
      color: '#fff',
      fontSize: 18,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 8,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 4,
    },
  });

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        style={{width: wp(90.5)}}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item}) => (
          <TouchableOpacity>
            <ImageBackground
              source={item.image}
              style={
                isTablet && !isPotrait
                  ? [styles.cardland, {width: wp(90), height: hp(45)}]
                  : [styles.card, {width: wp(90), height: hp(25)}]
              }
              imageStyle={{borderRadius: wp(4)}}>
              <View style={styles.overlay} />

              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <View
                  style={{
                    width: wp(15),
                    height: wp(0.3),
                    backgroundColor: '#fff',
                    top: hp(1),
                  }}
                />
                {/* <View style={{width: wp(15)}} /> */}
                <TouchableOpacity
                  style={[styles.iconWrapper, isTablet ? {} : {}]}>
                  <CustomImage
                    source={images.upsidearrow}
                    resizeMode="contain"
                    height={isTablet && !isPotrait ? wp(4) : wp(6.5)}
                    width={isTablet && !isPotrait ? wp(4) : wp(6.5)}
                  />
                </TouchableOpacity>
                <Text style={[styles.subtitle, isTablet ? {} : {}]}>
                  {item.subtitle}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />

      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#523938' : '#ccc',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default MassageService;
