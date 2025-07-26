import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenParamList } from "../Navigation/screenTypes";


export interface NavigationTypes<
  ParamList = any,
  RouteName extends keyof ParamList = keyof ParamList,
> {
  navigate: (screen: RouteName, params?: ParamList[RouteName]) => void;
  replace: (screen: RouteName, params?: ParamList[RouteName]) => void;
  goBack: () => void;
  reset: (state: any) => void;
}

export interface CategoryItemType {
  id: number;
  name?: string;
  icon: any;
  description?: string;
}
export type NavigationProp = NativeStackNavigationProp<ScreenParamList>;