// import PaymentBooking from '../../View/Screens/Bookings/PaymentBooking';

// -----------------------SCREENS-------------------------------
export enum Screens {
  //--------------Auth Screen --------------------
  Test = 'Test',
  NewLink='NewLink',
  OldLink='OldLink',
  MapScreen='MapScreen',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  ForgotPassword = 'ForgotPassword',
  Verification = 'Verification',
  OtpVerificationScreen = 'OtpVerificationScreen',
  ResetPassword = 'ResetPassword',
  UpdatePassword = "UpdatePassword",
  // ----------------Member----------------
  MemberVerification = 'MemberVerification',

  MembershipScreen = 'MembershipScreen',

  // ------------------Booking-----------------------
  PaymentBooking = 'PaymentBooking',

  BookingServices = 'BookingServices',

  // -----------------------Guest---------------------------
  GuestBookingSuccess = 'GuestBookingSuccess',

  // -----------------------ModalScreen---------------------------
  ModalScreen = 'ModalScreen',

  // -----------------------Profile---------------------------
  EditProfileScreen = 'EditProfileScreen',

  // -----------------------Menu---------------------------
  Menu = 'Menu',

  // -----------------------HomeLocation---------------------------
  HomeLocation = 'HomeLocation',

  // -----------------------ManagePaymentsScreen---------------------------
  ManagePaymentsScreen = 'ManagePaymentsScreen',
  BecomeAMemberScreen = 'BecomeAMemberScreen',

  // -----------------------AddNewPaymentScreen---------------------------
  AddNewPaymentScreen = 'AddNewPaymentScreen',

  // -----------------------GiftCardSection---------------------------
  GiftCardSection = 'GiftCardSection',

  // -----------------------Summary---------------------------
  Summary = 'Summary',

  // -----------------------CheckoutScreen---------------------------
  CheckoutScreen = 'CheckoutScreen',

  CheckoutSuccessScreen = 'CheckoutSuccessScreen',

  // -----------------------DetailsScreen---------------------------
  DetailsScreen = 'DetailsScreen',

  // -----------------------BookingDetails---------------------------
  BookingDetails = 'BookingDetails',
  BookingApointment = 'BookingApointment',

  // -----------------------Support---------------------------
  Support = 'Support',
  Faqs = 'Faqs',

  // -----------------------Terms and Conditions---------------------------
  TermsandConditions = 'TermsandConditions',
  PrivacyPolicy = 'PrivacyPolicy',

  // ---------------------------TabScreen---------------------------
  Home = 'Home',
  Bookings = 'Bookings',
  Purchase = 'Purchase',
  Health = 'Health',
  TabScreen = 'TabScreen',

  // -----------------------Guest Screens---------------------------
  FindLocationScreen = 'FindLocationScreen',
  GuestUserHome = 'GuestUserHome',
  GuestCheckoutScreen = 'GuestCheckoutScreen',
  GuestMenuScreen = 'GuestMenuScreen',

  // Geo location
  GeoLocation = "GeoLocation"
}

export type ScreenParamList = {
  // ---------Auth Screen---------
  [Screens.Test]: undefined;
  [Screens.NewLink]:undefined;
  [Screens.OldLink]:undefined;
  [Screens.MapScreen]:undefined;
  [Screens.SignIn]: undefined;
  [Screens.ForgotPassword]: undefined;
  [Screens.SignUp]: undefined;
  [Screens.Verification]: undefined;
  [Screens.OtpVerificationScreen]: undefined;
  [Screens.ResetPassword]: undefined;
  [Screens.UpdatePassword]: undefined;
  // ----------------Member---------------
  [Screens.MemberVerification]: undefined;
  // ---------------------Booking-----------------------
  [Screens.PaymentBooking]: undefined;
  // --------------------------------Guest----------------------------
  [Screens.GuestBookingSuccess]: undefined;
  // ------------------------------TabScreen--------------------------
  [Screens.TabScreen]: undefined;
  [Screens.Home]: undefined;
  [Screens.Bookings]: undefined;
  [Screens.Purchase]: undefined;
  [Screens.Health]: undefined;

  // -----------------------Profile---------------------------
  [Screens.EditProfileScreen]: undefined;

  // -----------------------HomeLocation---------------------------
  [Screens.HomeLocation]: undefined;

  // -----------------------AddNewPaymentScreen---------------------------
  [Screens.AddNewPaymentScreen]: undefined;

  // -----------------------Support---------------------------
  [Screens.Support]: undefined;

  // -----------------------Support---------------------------
  [Screens.Faqs]: undefined;

  // -----------------------Terms and Conditions---------------------------
  [Screens.TermsandConditions]: undefined;

  // -----------------------Privacy Policy---------------------------
  [Screens.PrivacyPolicy]: undefined;

  // -----------------------Summary---------------------------
  [Screens.Summary]: undefined;

  // -----------------------CheckoutScreen---------------------------
  [Screens.CheckoutScreen]: undefined;

  [Screens.CheckoutSuccessScreen]: undefined;

  // -----------------------DetailsScreen---------------------------
  [Screens.DetailsScreen]: undefined;

  // -----------------------GiftCardSection---------------------------
  [Screens.GiftCardSection]: undefined;

  // -----------------------Menu---------------------------
  [Screens.Menu]: undefined;

  // -----------------------BookingDetails---------------------------
  [Screens.BookingDetails]: undefined;

  [Screens.BookingApointment]: undefined;

  [Screens.BookingServices]: undefined;

  // -----------------------MembershipScreen---------------------------

  [Screens.MembershipScreen]: undefined;
  [Screens.BecomeAMemberScreen]: undefined;

  // -----------------------ModalScreen---------------------------

  [Screens.ModalScreen]: undefined;

  // -----------------------Guest Screens---------------------------
  [Screens.FindLocationScreen]: undefined;
  [Screens.GuestUserHome]: undefined;
  [Screens.GuestMenuScreen]: undefined;

  [Screens.GeoLocation]: undefined
};
