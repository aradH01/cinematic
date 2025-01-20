'use client'
import React, {useEffect} from 'react';
import {Button} from "@/components/elements/Button/Button";
import {toast} from "@/core/utils/toast";



const AppleSignInButton = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.AppleID) {
            window.AppleID.auth.init({
                clientId: 'com.example.client',
                scope: 'email name',
                redirectURI: 'https://example.com/auth/callback',
                state: 'state123',
                usePopup: true,
            });
        } else {
            console.error('AppleID SDK is not available.');
        }
    }, []);

    const handleAppleSignIn = async () => {
        try {
            if (typeof window !== 'undefined' && window.AppleID?.auth) {
                const authResponse = await window.AppleID.auth.signIn();
            } else {
                toast.error({message:'AppleID SDK is not initialized or loaded.'});
            }
        } catch (error) {
            toast.error({message:'Error during Apple Sign-In:'});
        }
    };
    return (
        <Button
            className="!w-full"
            height="56px"
            title="Continue with Apple"
            iconClass="w-[20px] h-[20px]"
            icon="Apple"
            onClick={handleAppleSignIn}
        />
    );
};

export default AppleSignInButton;
