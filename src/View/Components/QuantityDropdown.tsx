import React from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {CustomText} from './CustomText';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';

const screenHeight = Dimensions.get('window').height;

interface QuantityDropdownProps {
  isVisible: boolean;
  onClose: () => void;
  options: string[];
  onSelect: (value: string) => void;
  selectedValue: string | number;
  wp: (val: number) => number;
}

const QuantityDropdown: React.FC<QuantityDropdownProps> = ({
  isVisible,
  onClose,
  options,
  onSelect,
  selectedValue,
  wp,
}) => {
  const renderItem = ({item}: {item: string}) => {
    const isSelected = selectedValue && selectedValue.toString() === item;

    return (
      <TouchableOpacity
        style={[styles.option, isSelected && styles.selectedOption]}
        onPress={() => {
          onSelect(item);
          onClose();
        }}
        activeOpacity={0.7}>
        <CustomText
          text={item}
          fontFamily={FontsVariant.FuturaLT}
          fontSize={textSize.small_2xl}
          color={isSelected ? '#fff' : '#000'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <CustomText
                  text="Select Quantity"
                  fontFamily={FontsVariant.BodoniMT}
                  fontSize={textSize.medium_1x}
                  color="#333"
                />
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                  <CustomImage
                    source={images.close}
                    width={wp(5)}
                    height={wp(5)}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                data={options}
                renderItem={renderItem}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={styles.listContent}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    maxHeight: screenHeight * 0.6,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  closeButton: {
    padding: 5,
  },
  listContent: {
    paddingVertical: 8,
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  selectedOption: {
    backgroundColor: '#617E84',
  },
});

export default QuantityDropdown;
