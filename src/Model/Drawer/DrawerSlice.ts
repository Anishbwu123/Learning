import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../../Adapter/Redux/Store/Store';


// Define a type for the slice state
interface ThemeState {
    isEnableProfileDrawer: boolean;
    isEnableGuestDrawer: boolean;
}

// Define the initial state using that type
const initialState: ThemeState = {
    isEnableProfileDrawer: false,
    isEnableGuestDrawer: false
};

export const DrawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        setIsEnableProfileDrawer: (state, action) => {
            state.isEnableProfileDrawer = action.payload;
        },
        setIsEnableGuestDrawer: (state, action) => {
            state.isEnableGuestDrawer = action.payload;
        },
    },
});

export const { setIsEnableProfileDrawer, setIsEnableGuestDrawer } = DrawerSlice.actions;
export default DrawerSlice.reducer;
