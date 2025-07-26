// import React from 'react';
// import {useAppSelector} from '../../Adapter/Redux/useAppSelector';
// // import MenuScreen from '../Screens/MenuScreen';
// import NativeDrawer from './NativeDrawer';
// import {Dimensions} from 'react-native';
// import {useDrawer} from '../../Utils/useDrawer';


// type Props = {
//   children: string | JSX.Element | JSX.Element[];
// };

// const DrawerWrapper = ({children}: Props) => {
//   const isOpenDrawer: boolean = useAppSelector(
//     state => state.drawer.isEnableProfileDrawer,
//   );
//   const {closeDrawer} = useDrawer();

//   // Set drawer width to 90% of screen width to match the design in the image
//   //   const drawerWidth = Dimensions.get('window').width;
//   const drawerWidth = Dimensions.get('window').width * 1;

//   return (
//     <>
//       {children}
//       <NativeDrawer
//         visible={isOpenDrawer}
//         onClose={closeDrawer}
//         drawerWidth={drawerWidth}
//         ltr={false}>
//         {/* <MenuScreen drawerHandler={closeDrawer} /> */}
//       </NativeDrawer>
//     </>
//   );
// };

// export default DrawerWrapper;
