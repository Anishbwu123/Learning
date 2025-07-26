import {
  View,
  FlatList,
  ImageRequireSource,
  Pressable,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {lngKey} from '../../i18n/lngKey';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {useSize} from '../../Utils/useSize';
import NativeDrawer from './NativeDrawer';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';
import {BlankSpace} from './BlankSpace';
import {CustomText} from './CustomText';
import {textSize} from '../../Utils/textSize';
import {FontsVariant} from '../../Utils/fontsVariant';
import LinearGradient from 'react-native-linear-gradient';
import {Screens} from '../../Adapter/Navigation/screenTypes';
import {useNavigation} from '@react-navigation/native';
import CommonModal from './CommonModal';
import {useAppSelector} from '../../Adapter/Redux/useAppSelector';
import {UserType} from '../../Adapter/Redux/Reset/User/UserSlice';

interface ProfileDrawer {
  isOpenDrawer: boolean;
  drawerHandler: () => void;
}
type DATAtYPE = {
  itemName: string;
  itemIcon: ImageRequireSource | string;
  pageName: string;
}[];

const DATA: DATAtYPE = [
  {
    itemName: lngKey.MyPost,
    itemIcon: images.InactiveHome,
    pageName: Screens.MyPost,
  },
  {
    itemName: lngKey.Favorite,
    itemIcon: images.Heart,
    pageName: Screens.FavoritePost,
  },
  {
    itemName: lngKey.Settings,
    itemIcon: images.Settings,
    pageName: Screens.Settings,
  },
  {
    itemName: lngKey.Suggestion,
    itemIcon: images.Suggestion,
    pageName: Screens.Suggetion,
  },
  {
    itemName: lngKey.SupportChat,
    itemIcon: images.Support,
    pageName: '',
  },
  {
    itemName: lngKey.LogOut,
    itemIcon: images.Logout,
    pageName: '',
  },
  {
    itemName: lngKey.DeleteAccount,
    itemIcon: images.Delete,
    pageName: '',
  },
];

const ProfileDrawer = ({isOpenDrawer, drawerHandler}: ProfileDrawer) => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const {getWidth} = useSize();
  let navigation = useNavigation();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const currentUserRole = useAppSelector(state => state.UserSlice.userType);
  // console.log('----------------------', currentUserRole);
  console.log('isOpenDrawer',isOpenDrawer);

  return (
    <>
      <NativeDrawer
        visible={isOpenDrawer}
        onClose={drawerHandler}
        drawerWidth={getWidth(90)}
        ltr={false}>
        <LinearGradient
          colors={[Colors.secondary_011, Colors.secondary_018]}
          style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              //   backgroundColor: Colors.default_001,
              paddingHorizontal: wp(5),
              paddingTop: hp(3),
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  // borderWidth: wp(1),
                  // borderColor: Colors.default_001,
                  borderRadius: wp(50),
                  height: getWidth(33.8),
                  width: getWidth(33.8),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomImage
                  source={images.User3}
                  resizeMode="contain"
                  width={getWidth(32)}
                  height={getWidth(32)}
                  style={{
                    borderWidth: wp(1),
                    borderColor: Colors.secondary_001,
                    borderRadius: wp(50),
                  }}
                />
              </View>
              <Pressable onPress={drawerHandler}>
                <CustomImage
                  source={images.Close}
                  resizeMode="contain"
                  width={wp(9.7)}
                  height={wp(9.7)}
                />
              </Pressable>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <CustomText
                  text="Prakash Mehta"
                  fontSize={textSize.medium_3x}
                  fontFamily={FontsVariant.RalewayBold}
                  color={Colors.secondary_001}
                />
                <BlankSpace height={hp(0.5)} />
                <CustomText
                  text={currentUserRole}
                  // text={
                  //   currentUserRole === UserType.Farmer
                  //     ? 'Farmer'
                  //     : UserType.Agriculturist
                  //     ? 'Agriculturist'
                  //     : 'Business'
                  // }
                  fontSize={textSize.small_3x}
                  fontFamily={FontsVariant.ArialRegular}
                  color={Colors.secondary_001}
                />
              </View>
              {/* <View
                style={{
                  height: wp(8),
                  width: wp(8),
                  backgroundColor: Colors.secondary_001,
                  borderRadius: wp(50),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomImage
                  source={images.RightArrow}
                  resizeMode="contain"
                  width={wp(5)}
                  height={wp(5)}
                />
              </View> */}
            </View>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.secondary_001 + 35,
                height: wp(0.4),
                borderRadius: 5,
                marginVertical: hp(2),
              }}
            />
            <CustomText
              text={lngKey.More}
              fontSize={textSize.small_5x}
              fontFamily={FontsVariant.ArialBold}
              color={Colors.secondary_001}
            />

            <FlatList
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    drawerHandler();
                    if (item.itemName === lngKey.DeleteAccount) {
                      setDeleteModalVisible(true);
                    } else if (item.itemName === lngKey.LogOut) {
                      setLogoutModalVisible(true);
                    } else {
                      navigation.navigate(item.pageName);
                    }
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: hp(0.8),
                  }}>
                  <CustomImage
                    source={item.itemIcon}
                    width={wp(4.3)}
                    height={wp(4.3)}
                    resizeMode="contain"
                    tintColor={Colors.secondary_001}
                  />
                  <BlankSpace width={wp(2)} />
                  <CustomText
                    text={item.itemName}
                    color={Colors.secondary_001}
                    fontSize={textSize.small_4x}
                    fontFamily={FontsVariant.ArialRegular}
                  />
                </Pressable>
              )}
            />
          </View>
        </LinearGradient>
      </NativeDrawer>
      <CommonModal
        visible={logoutModalVisible}
        modalOnpress={() => setLogoutModalVisible(false)}
        modalImage={images.Logout1}
        title={lngKey.LogOut}
        subTitle={lngKey.AreYouSureYouWanttoLogOut}
        profileDrawerPage={true}
        CancleButtonOnpress={() => setLogoutModalVisible(false)}
        smallDefaultButtonText={lngKey.LogOut}
        smallDefaultButtonOnpress={() => navigation.replace(Screens.Login)}
      />
      <CommonModal
        visible={deleteModalVisible}
        modalOnpress={() => setDeleteModalVisible(false)}
        modalImage={images.Delete1}
        title={lngKey.DeleteAccount}
        subTitle={lngKey.AreYouSureYouWanttoDeleteYourAccount}
        profileDrawerPage={true}
        CancleButtonOnpress={() => setDeleteModalVisible(false)}
        smallDefaultButtonText={lngKey.Delete}
        smallDefaultButtonOnpress={() => navigation.replace(Screens.Login)}
      />
    </>
  );
};

export default ProfileDrawer;
