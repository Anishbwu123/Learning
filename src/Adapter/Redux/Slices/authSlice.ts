import { createSlice } from '@reduxjs/toolkit';

export interface ProfileDetails {
  accessToken: string;
  userID: number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  nickName: string;
  phone: string;
  profileImageUrl: string;
  profileImageID: string;
  loginType: 'manual' | 'social' | string;
  address: string;
  zipcode: string;
  landmark: string;
  state: string;
  city: string;
  phoneCountryCode: string;
  countryName: string;
  accountActivationStatus: boolean;
  altPhoneCountryCode: string;
  altPhoneNo: string;
}

interface AddressData {
  address: string;
  addressID: number;
  city: string;
  country: string; // Consider if this should be a specific enum or literal type if options are limited
  email: string;
  fullName: string;
  isDefault: "true" | "false"; // Using literal types as the provided value is a string "false"
  latitude: string; // Or number, if you'll parse it
  longitude: string; // Or number, if you'll parse it
  phoneCountryCode: string; // E.g., "+91"
  phoneNumber: string;
  postcode: string;
  state: string; // Consider if this should be a specific enum or literal type if options are limited
}
interface ProfileState {
  profileDetails: ProfileDetails | null;
  adressDetails: AddressData | null;
}

const initialState: ProfileState = {
  profileDetails: null,
  adressDetails: null

};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialState,
  reducers: {
    setData(state, action) {
      state.profileDetails = action.payload;
    },
    removeData(state) {
      state.profileDetails = null;
    },
    setAddressData(state, action) {
      state.adressDetails = action.payload;
    },
    removeAddress(state) {
      state.adressDetails = null;
    }
  },
});
export const authAction = authSlice.actions;
export default authSlice;
