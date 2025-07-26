import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// import { userDetailsType } from '../../../Model/Types/AuthTypes';

interface UserSliceType {
  userType: UserType;
}

export enum UserType {
  Farmer = 'Farmer',
  Agriculturist = 'Agriculturist',
  Business = 'Business',
  GovernmentInstitute = 'GovernmentInstitute',
}

const initialState: UserSliceType = {
  userType: UserType.Farmer,
};

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    SET_USER_TYPE: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
    },
  },
});

export const {SET_USER_TYPE} = UserSlice.actions;

export default UserSlice.reducer;
