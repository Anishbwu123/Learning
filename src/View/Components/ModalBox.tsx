import {Text, View, StyleSheet} from 'react-native';
import {CustomText} from './CustomText';
import {FontsVariant} from '../../Utils/fontsVariant';
import {useResponsive} from '../../Controller/Styles/useResponsive';
import {Button} from './Button';
import {textSize} from '../../Utils/textSize';
import {ButtonVariant} from './Button';
import {useColor} from '../../Model/Color/useColor';
import CenterButton from './CenterButton';
import {RFValue} from 'react-native-responsive-fontsize';
import useTablet from '../../Utils/useTablet';

interface ModalBoxProps {
  title?: string;
  description: string;
  firstBtnText: string;
  secondBtnText: string;
  onFirstBtnPress?: () => void | undefined;
  onSecondBtnPress?: () => void;
  danger?: boolean;
  //----------------btn customization added----------------------
  fstBtnColor?: string;
  secBtnColor?: string;
  fstBtnBorderColor?: string;
  secBtnBorderColor?: string;
  firstTextColor?: string;
  secTextColor?: string;
  firstBtnLoading?: boolean; // Show loader in first button
}
const ModalBox: React.FC<ModalBoxProps> = ({
  title,
  description,
  firstBtnText,
  secondBtnText,
  onFirstBtnPress,
  onSecondBtnPress,
  danger,
  fstBtnColor,
  fstBtnBorderColor = '#617E84',
  secBtnColor = '#617E84',
  secBtnBorderColor,
  firstTextColor = '#fff',
  secTextColor = '#fff',
  firstBtnLoading = false,
}) => {
  const {hp, wp} = useResponsive();
  const Colors = useColor();
  const {isPotrait, isTablet} = useTablet();

  return (
    <View
      style={
        isTablet && isPotrait
          ? [{width: wp(80)}, styles.container]
          : [{width: wp(80)}, styles.container]
      }>
      <CustomText
        text={title}
        fontSize={textSize.medium_3x}
        fontFamily={FontsVariant.BodoniMT}
        style={{
          textAlign: 'center',
        }}
      />
      <CustomText
        text={description}
        fontSize={
          isTablet
            ? !isPotrait
              ? textSize.small_1x
              : RFValue(textSize.extraSmall_4x)
            : RFValue(textSize.small_5x)
        }
        fontFamily={FontsVariant.FuturaLT}
        style={[
          {color: Colors.secondary_004},
          isTablet
            ? {
                textAlign: 'center',
                marginVertical: 10,
              }
            : {textAlign: 'center'},
        ]}
      />
      <View style={styles.btnContainer}>
        <CenterButton
          title={firstBtnText}
          onPress={onFirstBtnPress}
          borderColor={fstBtnBorderColor}
          backgroundColor={fstBtnColor}
          textColor={firstTextColor}
          loading={firstBtnLoading}
        />
        <CenterButton
          title={secondBtnText}
          onPress={onSecondBtnPress}
          backgroundColor={secBtnColor}
          textColor={secTextColor}
        />

        {/* <Button title={secondBtnText} 
                        onPress={onSecondBtnPress} 
                        variant={ButtonVariant.defaultBackground} 
                        width={"50%"} 
                        titleSize={16}  
                        
                        style={danger ? {backgroundColor:"#FF3E3E"} : {}}/> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    elevation: 1,
    // alignItems:"center",
    // backgroundColor: "red",
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    gap: 10,
  },
  btnContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    // backgroundColor:"blue",
    justifyContent: 'space-around',
  },
});
export default ModalBox;
