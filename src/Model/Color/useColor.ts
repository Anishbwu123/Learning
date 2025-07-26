/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { ColorObject } from './ColorName';
import { light } from './light';
import { ThemeType } from '../Theme/themeSlice';
import { dark } from './dark';
import { useTheme } from '../Theme/useTheme';
export const useColor = () => {
    const [allColors, setAllColors] = useState<ColorObject>(light);
    const theme = useTheme();
    // console.log(allColors, 'checking');
    useEffect(() => {
        if (theme.getCurrentTheme() === ThemeType.LIGHT) {
            setAllColors(light);
        } else {
            setAllColors(dark);
        }
    }, [theme.getCurrentTheme()]);
    return allColors;
};
