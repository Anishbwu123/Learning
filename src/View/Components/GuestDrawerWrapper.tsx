// import React from 'react';
// import {useAppSelector} from '../../Adapter/Redux/useAppSelector';
// import GuestMenuScreen from '../Screens/GuestMenuScreen';
// import NativeDrawer from './NativeDrawer';
// import {Dimensions} from 'react-native';
// import {useDrawer} from '../../Utils/useDrawer';

// type Props = {
//   children: string | JSX.Element | JSX.Element[];
// };

// const GuestDrawerWrapper = ({children}: Props) => {
//   const isOpenDrawer: boolean = useAppSelector(
//     state => state.drawer.isEnableGuestDrawer,
//   );
//   const {closeGuestDrawer} = useDrawer();

//   // Set drawer width to 90% of screen width to match the design
//   const drawerWidth = Dimensions.get('window').width * 1;

//   return (
//     <>
//       {children}
//       <NativeDrawer
//         visible={isOpenDrawer}
//         onClose={closeGuestDrawer}
//         drawerWidth={drawerWidth}
//         ltr={false}>
//         <GuestMenuScreen drawerHandler={closeGuestDrawer} />
//       </NativeDrawer>
//     </>
//   );
// };

// export default GuestDrawerWrapper;
