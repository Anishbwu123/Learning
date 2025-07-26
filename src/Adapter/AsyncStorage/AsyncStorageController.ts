import AsyncStorage from '@react-native-async-storage/async-storage';

export enum PersistanceStorageKey {
  TOKEN = 'massageluxe@token_authorization2025',
  USER_INFO = 'massageluxe@user_authorization2025',

  LOGIN_INFO = 'massageluxe@logininfo_authorization2025',
}

class PersistanceStorage {
  private setData = async (
    key: PersistanceStorageKey,
    value: object | string | number,
  ): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err: unknown) {
      throw err;
    }
  };

  private getData = async (key: PersistanceStorageKey) => {
    try {
      const value: string | null = await AsyncStorage.getItem(key);
      if (value) {
        return JSON.parse(value) as JSON;
      } else {
        return null;
      }
    } catch (err) {
      throw err;
    }
  };

  private removeData = async (key: PersistanceStorageKey) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      throw err;
    }
  };
  SET_DATA = async (
    key: PersistanceStorageKey,
    value: object | string | number,
  ) => {
    try {
      await this.setData(key, value);
    } catch (err) {
      console.log(err);
    }
  };
  GET_DATA = async (key: PersistanceStorageKey) => {
    try {
      const fetch_data = await this.getData(key);
      let required_data;
      if (fetch_data) {
        required_data = fetch_data;
      }
      return required_data;
    } catch (err) {
      console.log(err);
    }
  };
  CLEAR_ALL = async () => {
    try {
      await AsyncStorage.clear();
      console.log('All data clear from async storage');
    } catch (err) {
      console.log(err);
    }
  };
}

export const AsyncStorageController = new PersistanceStorage();
