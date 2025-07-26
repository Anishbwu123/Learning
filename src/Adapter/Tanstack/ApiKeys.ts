export enum ApiKeys {
  // -----------Auth--------
  signup = '/application/v1/signup',
  VerifyOtp = '/application/v1/verify-otp',
  login = '/application/v1/login',
  resendOtp = '/application/v1/resend-otp',

  // profile
  profileUpdate = '/application/v1/update-profile',
  profileImage = '/application/v1/update-profile-photo',
  profileDelte = '/application/v1/delete-profile',
  profilePasswordUpdate = '/application/v1/update-password',
  forgotPassword = '/application/v1/forget-password',
  resetPassword = '/application/v1/reset-password',
  logout = '/application/v1/logout',

  // -----------SupportFAQ-----------
  faq = '/application/v1/faqs',
  privacypolicy = '/application/v1/privacy-policy',
  support = '/application/v1/support-form',

  // ------------membershiplist------------
  membership = '/application/v1/membership-lists',

  // -----------Address-----------
  addAddress = '/application/v1/add-address',

  // health blog
  healthBlog = '/application/v1/health-and-wellness-list',
  healthBlogDetails = '/application/v1/health-and-wellness-details',
}
