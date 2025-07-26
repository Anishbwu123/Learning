import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useResponsive } from './useResponsive';
import { useColor } from '../../Model/Color/useColor';
import { ColorObject } from '../../Model/Color/ColorName';

type CreateStyleArgs = {
    wp: (width: number) => number;
    hp: (height: number) => number;
    colors: ColorObject | undefined;
};

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const createStyle = <T extends NamedStyles<T>>(fn: (args: CreateStyleArgs) => NamedStyles<T>) => {
    return fn;
};

export const useStylesheet = <T extends NamedStyles<T>>(registeredFn: (args: CreateStyleArgs) => NamedStyles<T>) => {
    const { wp, hp } = useResponsive();
    const colors = useColor();
    return StyleSheet.create(registeredFn({ wp, hp, colors }));
};
