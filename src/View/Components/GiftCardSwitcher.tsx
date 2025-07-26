import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import GiftCardComponent from './GiftCardComponent';

interface GiftCardSwitcherProps {
  headerText: string;
  selectedAmount: string;
  setSelectedAmount: Dispatch<SetStateAction<string>>;
  customAmount: string;
  setCustomAmount: Dispatch<SetStateAction<string>>;
  selectedQuantity: number;
  setSelectedQuantity: Dispatch<SetStateAction<number>>;
  showQuantityDropdown: boolean;
  setShowQuantityDropdown: Dispatch<SetStateAction<boolean>>;
  onPressGiftCard: () => void;
  wp: (value: number) => number;
  hp: (value: number) => number;
  Colors: any; // Changed from ColorObject to any
}

const GiftCardSwitcher: React.FC<GiftCardSwitcherProps> = ({
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
  return (
    <View style={{paddingBottom: hp(4)}}>
      <GiftCardComponent
        title={headerText}
        selectedAmount={selectedAmount}
        setSelectedAmount={setSelectedAmount}
        customAmount={customAmount}
        setCustomAmount={setCustomAmount}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        showQuantityDropdown={showQuantityDropdown}
        setShowQuantityDropdown={setShowQuantityDropdown}
        onPressGiftCard={onPressGiftCard}
        wp={wp}
        hp={hp}
        Colors={Colors}
      />
    </View>
  );
};

export default GiftCardSwitcher;
