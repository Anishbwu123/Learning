import { useState } from 'react';

export type Profile = {
    name: string;
    joinedDate: string;
    image: string;
    email: string;
    phone: string;
    address: string;
};

export const useProfileModel = () => {
    const [profileDetails, setProfileDetails] = useState<Profile | undefined>({
        name: 'React Native',
        joinedDate: '1 jan 2023',
        image: '..',
        email: 'ReactNative@gmail.com',
        phone: '...',
        address: '',
    });

    const getDetails = (): Profile | undefined => {
        return profileDetails;
    };

    const setDetails = (profile: Profile): void => {
        setProfileDetails(profile);
    };

    return { getDetails, setDetails };
};

export type ProfileModel = ReturnType<typeof useProfileModel>;
