import React, {PropsWithChildren, useState} from 'react';
import {ActivityIndicator, ImageSourcePropType, View} from 'react-native';
import {lngKey} from '../../i18n/lngKey';
import {useColor} from '../../Model/Color/useColor';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import CustomModal from './CustomModal';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';
import {FontsVariant} from '../../Utils/fontsVariant';
import {BlankSpace} from './BlankSpace';
import {textSize} from '../../Utils/textSize';
import {CustomText} from './CustomText';
import {Button, ButtonVariant} from './Button';
import {SizeType, useSize} from '../../Utils/useSize';

type CommonModalPropType = {
  visible: boolean;
  modalOnpress: () => void;
  modalImage: string | ImageSourcePropType;
  title: string;
  subTitle?: string;
  defaultButtonText?: string;
  defaultButtonOnpress?: () => void;
  defaultBorderButtonText?: string;
  defaultBorderButtonOnpress?: () => void;
  profileDrawerPage?: boolean;
  CancleButtonOnpress?: () => void;
  smallDefaultButtonText?: string;
  smallDefaultButtonOnpress?: () => void;
};

const CommonModal: React.FC<PropsWithChildren<CommonModalPropType>> = ({
  visible,
  modalOnpress,
  modalImage,
  title,
  subTitle,
  defaultButtonText,
  defaultButtonOnpress,
  defaultBorderButtonText,
  defaultBorderButtonOnpress,
  profileDrawerPage,
  CancleButtonOnpress,
  smallDefaultButtonText,
  smallDefaultButtonOnpress,
}): JSX.Element => {
  const Colors = useColor();
  const {wp, hp} = useResponsive();
  const {getSize} = useSize();
  // const [isSelected, setisSelected] = useState(true);
  const [isCheckBoxEnable, setIsCheckBoxEnable] = useState(false);
  const checkboxToggleHandler = () => {
    setIsCheckBoxEnable(!isCheckBoxEnable);
  };

  return (
    <CustomModal visible={visible} onClose={modalOnpress}>
      <View
        style={{
          paddingVertical: hp(5),
          alignItems: 'center',
          borderRadius: wp(7.2),
        }}>
        <CustomImage
          source={modalImage}
          height={wp(50)}
          width={wp(50)}
          resizeMode="contain"
        />
        <CustomText
          text={title}
          style={{
            color: Colors.default_001,
            fontFamily: FontsVariant.RalewayBold,
            fontSize: textSize.medium_3x,
          }}
        />
        <BlankSpace height={hp(1.5)} />
        {subTitle && (
          <>
            <CustomText
              text={subTitle}
              style={{
                color: Colors.secondary_013,
                fontFamily: FontsVariant.ArialRegular,
                fontSize: textSize.small_4x,
                textAlign: 'center',
                paddingHorizontal: wp(5),
              }}
            />
            <BlankSpace height={hp(2)} />
          </>
        )}

        {defaultBorderButtonText && defaultBorderButtonOnpress && (
          <>
            <BlankSpace height={hp(1)} />
            <Button
              titleSize={getSize(SizeType.small_4x)}
              height={hp(6.9)}
              width={wp(75)}
              title={defaultBorderButtonText}
              variant={ButtonVariant.secondaryBackground}
              onPress={defaultBorderButtonOnpress}
            />
            <BlankSpace height={hp(2)} />
          </>
        )}
        {profileDrawerPage ? (
          <View
            style={{
              width: wp(76),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {CancleButtonOnpress && (
              <Button
                titleSize={getSize(SizeType.small_4x)}
                height={hp(6.9)}
                width={wp(36)}
                title={lngKey.Cancel}
                variant={ButtonVariant.grayBackground}
                onPress={CancleButtonOnpress}
              />
            )}
            {smallDefaultButtonText && smallDefaultButtonOnpress && (
              <Button
                titleSize={getSize(SizeType.small_4x)}
                height={hp(6.9)}
                width={wp(36)}
                title={smallDefaultButtonText}
                variant={ButtonVariant.defaultBackground}
                onPress={smallDefaultButtonOnpress}
              />
            )}
          </View>
        ) : (
          defaultButtonText &&
          defaultButtonOnpress && (
            <Button
              titleSize={getSize(SizeType.small_4x)}
              height={hp(6.9)}
              width={wp(75)}
              title={defaultButtonText}
              variant={ButtonVariant.defaultBackground}
              onPress={defaultButtonOnpress}
            />
          )
        )}
      </View>
    </CustomModal>
  );
};

export default CommonModal;
