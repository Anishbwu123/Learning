import { en } from './en';

const keys: { [key: string]: string } = {};

Object.keys(en.translation).forEach(key => (keys[key] = key));

export const lngKey = keys as {
    [key in keyof typeof en.translation]: keyof typeof en.translation;
};
