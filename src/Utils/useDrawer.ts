import { useAppDispatch } from '../Adapter/Redux/useAppDispatch';
import { setIsEnableProfileDrawer, setIsEnableGuestDrawer } from '../Model/Drawer/DrawerSlice';

/**
 * Custom hook to control the app's drawer
 * @returns Object with functions to open and close the drawer
 */
export const useDrawer = () => {
  const dispatch = useAppDispatch();
  
  /**
   * Open the app's regular drawer menu
   */
  const openDrawer = () => {
    dispatch(setIsEnableProfileDrawer(true));
  };
  
  /**
   * Close the app's regular drawer menu
   */
  const closeDrawer = () => {
    dispatch(setIsEnableProfileDrawer(false));
  };
  
  /**
   * Open the guest drawer menu
   */
  const openGuestDrawer = () => {
    dispatch(setIsEnableGuestDrawer(true));
  };
  
  /**
   * Close the guest drawer menu
   */
  const closeGuestDrawer = () => {
    dispatch(setIsEnableGuestDrawer(false));
  };
  
  return {
    openDrawer,
    closeDrawer,
    openGuestDrawer,
    closeGuestDrawer,
  };
};
