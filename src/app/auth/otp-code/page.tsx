'use client'
import {Typography} from "@/components/elements/Typography";
import OTPInput from "@/components/elements/OTP-input/OtppInput";
import React, {useState} from "react";
import {Icon} from "@/components/elements/Icon";
import {Path} from "@/core/constants/enums";
import {useRouter} from "next/navigation";

export default function SignInPage() {
    const [code, setCode] = useState('');
    const router = useRouter();
    const handleNext=()=>{
        router.push(Path.CreateProfile);
    }
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <Typography.Title size="lt" className="leading-[40px] !font-lecturis-rounded text-center" color="white"
                                  weight="normal" level="h1">
                    Check your email
                </Typography.Title>
                <Typography.Text size="md"
                                 className="leading-[28px] mt-[2px] w-[70%] !font-lecturis-rounded text-center"
                                 color="gray400" weight="normal">
                    We need you to verity your
                    email address.
                </Typography.Text>
            </div>
            <div className="my-[56px]">
                <OTPInput
                    autoFocus
                    isNumberInput
                    length={5}
                    className="otpContainer flex items-center justify-center gap-[8px]"
                    inputClassName="otpInput"
                    onChangeOTP={(otp) => setCode(otp)}
                />
            </div>
            <div className="w-[255px] mb-[194px]">
                <Typography.Paragraph className="text-center !font-lecturis-rounded leading-[24px] !text-[13px]"
                                      color="gray400" weight="normal">
                    Didn&apos;t receive the email? Try checking your
                    junk or spam folders. <span
                    className="cursor-pointer !font-lecturis-rounded leading-[24px] !text-[13px] text-white font-normal">Resend</span>
                </Typography.Paragraph>
            </div>
            <button onClick={handleNext}
                    className="fixed bottom-[3rem] left-1/2 transform -translate-x-1/2 mx-auto border-border100 shadow-signInNext  border-solid border p-[20px] w-[72px] h-[72px] flex items-center justify-center rounded-full bg-white800">
                <Icon name="SignInNextArrow" className="w-[24x] h-[24px]"/>
            </button>
        </div>
    )
}
