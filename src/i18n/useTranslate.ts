import {useTranslation} from 'react-i18next';
// import { Languagetype } from '../../View/Screens/Login';
// import { LanguageType } from '../Reducers/LaungageSlice';
// import { LanguageType } from '../../Controller/Language/LaungageSlice';

export enum LanguageType {
  ENGLISH = 'en',
}
export const useTranslate = () => {
  const {t, i18n} = useTranslation();
  const changeLanguage = async (lngKey: LanguageType) => {
    await i18n.changeLanguage(lngKey);
  };

  const translate = (text: string) => {
    return t(text);
  };
  return {changeLanguage, translate};
};
