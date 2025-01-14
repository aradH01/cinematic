'use client'
import {Typography} from "@/components/elements/Typography";
import {PhoneInput} from "@/components/elements/Input";
import React from "react";
import {AvatarSlider} from "@/components/elements/AvatarSlider";


export default function createProfilePage() {

    const handleActiveChange = (url: string) => {
    };
    return(
        <div>
            <div className="flex flex-col items-center mb-[40px]">
                <Typography.Title size="lt" className="leading-[40px] !font-lecturis-rounded text-center" color="white"
                                  weight="bold" level="h1">
                    Create Profile
                </Typography.Title>
                <Typography.Text size="md"
                                 className="w-[70%] leading-[28px] mt-[2px] !font-lecturis-rounded text-center"
                                 color="gray400" weight="normal">
                    We&apos;ll send a code to this email
                    to verify your sign in
                </Typography.Text>
            </div>
            <div>
                <AvatarSlider onActiveSlideChange={handleActiveChange} />
            </div>
            <div className="flex flex-col gap-[12px] items-center mt-4 mb-[36px] w-full">
                <PhoneInput placeHolder="ID name" className="w-full max-w-[309px]"/>
                <PhoneInput placeHolder="Email address" className="w-full max-w-[309px]"/>
            </div>
        </div>
    )
}
