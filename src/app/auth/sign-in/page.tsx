'use client'
import {Typography} from "@/components/elements/Typography";
import OTPInput from "@/components/elements/OTP-input/OtppInput";
import {useState} from "react";

export default function SignInPage() {
    const [code, setCode] = useState('');
    return(
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
              <Typography.Title size="lt" className="leading-[40px] !font-lecturis-rounded text-center" color="white" weight="normal" level="h1">
                  Check your email
              </Typography.Title>
              <Typography.Text size="md" className="leading-[28px] mt-[2px] w-[70%] !font-lecturis-rounded text-center" color="gray400" weight="normal">
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
                <Typography.Paragraph className="text-center !font-lecturis-rounded leading-[24px] !text-[13px]" color="gray400" weight="normal">
                    Didn&apos;t receive the email? Try checking your
                    junk or spam folders. <span className="cursor-pointer !font-lecturis-rounded leading-[24px] !text-[13px] text-white font-normal">Resend</span>
                </Typography.Paragraph>
            </div>
        </div>
    )
}
