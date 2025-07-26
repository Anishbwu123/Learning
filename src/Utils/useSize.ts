import { Dimensions } from 'react-native';
import { useResponsive } from '../Controller/Styles/useResponsive';
// const FIGMASCREEN_WIDTH: number = 414;

export enum SizeType {
    extraSmall_1x = 2,
    extraSmall_2x = 4,
    extraSmall_3x = 6,
    extraSmall_4x = 8,

    small_1x = 10,
    small_1xl = 11,
    small_2x = 12,
    small_3x = 14,
    small_3xl = 15,
    small_4x = 16,
    small_5x = 18,
    small_5xl = 19,

    medium_1x = 20,
    medium_2x = 22,
    medium_3x = 24,
    medium_4x = 26,
    medium_5x = 28,

    large_1x = 30,
    large_2x = 32,
    large_3x = 34,
    large_4x = 36,
    large_5x = 38,

    extraLarge_1x = 40,
    extraLarge_2x = 42,
    extraLarge_3x = 44,
    extraLarge_4x = 46,
    extraLarge_5x = 48,

    doubleExtraLarge_1x = 60,
}

export const useSize = () => {
    // const figmaWIDTH: number =  1122;

    const { hp } = useResponsive();
    const windowHeight = Dimensions.get('screen').height;
    const windowWidth = Dimensions.get('screen').width;

    const getSize = (size: SizeType): number => {
        //here hp(0.3) = 2 px
        // const required_size = (size / FIGMASCREEN_WIDTH) * wp(100);
        return hp((size / 2) * 0.25);
        // return required_size;
    };

    const getHeight = (heightPercentage: number) => {
        return (heightPercentage * windowHeight) / 100;
    };

    const getWidth = (heightPercentage: number) => {
        return (heightPercentage * windowWidth) / 100;
    };

    return { getSize, getHeight, getWidth };
};
