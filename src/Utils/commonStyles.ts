import { createStyle } from '../Controller/Styles/useStylesheet';

export const commonStyle = createStyle(({ colors }) => ({
    mainContainer: {
        flex: 1,
        backgroundColor: colors?.default_001,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMe: {
        color: colors?.default_002,
        // fontSize:h
    },
}));
