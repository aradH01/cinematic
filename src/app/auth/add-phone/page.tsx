'use client'
import {Typography} from "@/components/elements/Typography";
import {PhoneNumberInput} from "@/components/elements/Input";
import React, {useState} from "react";
import {Icon} from "@/components/elements/Icon";
import {useRouter} from "next/navigation";
import {Path} from "@/core/constants/enums";

export default function AddPhonePage() {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
    const router = useRouter();
    const handlePhoneChange = (value: string | undefined) => {
        setPhoneNumber(value);
    };
    const handleNext=()=>{
        router.push(Path.OTPCode);
    }
    return(
        <div>
            <div className="flex flex-col items-center">
                <Typography.Title size="lt" className="leading-[40px] !font-lecturis-rounded text-center" color="white"
                                  weight="bold" level="h1">
                    Add your phone
                </Typography.Title>
                <Typography.Text size="md"
                                 className="leading-[28px] mt-[2px] w-[70%] !font-lecturis-rounded text-center"
                                 color="gray400" weight="normal">
                    We need your number to send verification code.
                </Typography.Text>
            </div>
            <div className="mt-[54px]">
                <PhoneNumberInput value={phoneNumber} onChange={handlePhoneChange}/>
            </div>
            <button onClick={handleNext}
                className="fixed bottom-[3rem] left-1/2 transform -translate-x-1/2 mx-auto border-border100 shadow-signInNext  border-solid border p-[20px] w-[72px] h-[72px] flex items-center justify-center rounded-full bg-white800">
                <Icon name="SignInNextArrow" className="w-[24x] h-[24px]"/>
            </button>
        </div>
    )
}
