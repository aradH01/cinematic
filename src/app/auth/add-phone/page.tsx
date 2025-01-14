'use client'
import {Typography} from "@/components/elements/Typography";
import {PhoneNumberInput} from "@/components/elements/Input";
import {useState} from "react";

export default function AddPhonePage() {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");

    const handlePhoneChange = (value: string | undefined) => {
        setPhoneNumber(value);
    };
    return(
        <div>
            <div className="flex flex-col items-center">
                <Typography.Title size="lt" className="leading-[40px] !font-lecturis-rounded text-center" color="white"
                                  weight="normal" level="h1">
                    Add your phone
                </Typography.Title>
                <Typography.Text size="md"
                                 className="leading-[28px] mt-[2px] w-[70%] !font-lecturis-rounded text-center"
                                 color="gray400" weight="normal">
                    We need your number to send verification code.
                </Typography.Text>
            </div>
            <div className="mt-[54px]">
                <PhoneNumberInput value={phoneNumber} onChange={handlePhoneChange} />
            </div>
        </div>
    )
}
