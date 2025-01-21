'use client'
import {Icon} from "@/components/elements/Icon";
import React, {useState} from "react";
import {addClass} from "@/core/utils/classNames";
import Image from "next/image";
import Avatar from '@/public/images/MenAvatar.svg'
import {PhoneInput} from "@/components/elements/Input";
import {Button, SettingButton} from "@/components/elements/Button";
import styled from "@emotion/styled";
import {Path} from "@/core/constants/enums";
import {useRouter} from "next/navigation";

const StyledButton=styled(Button)`
    background: transparent;
    border: 1px solid ${({theme})=>theme.components.border100};
    padding: 8px 24px;
    margin: 1rem auto 0;
`

export default function EditProfilePage() {
    const router = useRouter();
    const [autoPlay, setAutoPlay] = useState(false)
    const [repeatAutoPlay, setRepeatAutoPlay] = useState(false)
    const handleAutoPlayChange = (newState: boolean) => {
        setAutoPlay(newState);
    };
    const handleRepeatPlayChange = (newState: boolean) => {
        setRepeatAutoPlay(newState);
    };
    return (
        <div className="pt-[60px] px-[12px]">
            <div className="mb-[32px] flex items-center justify-between">
                <div
                    className="border-border100  border-solid border w-[48px] h-[48px] p-[10px] flex items-center justify-center rounded-full bg-transparent">
                    <Icon name="SignInBackArrow" className="w-[28px] h-[28px]"/>
                </div>
                <div
                    className="border-border100  border-solid border w-[48px] h-[48px] p-[10px] flex items-center justify-center rounded-full bg-transparent">
                    <Icon name="Delete" className="w-[28px] h-[28px]"/>
                </div>

            </div>
            <Image
                src={Avatar}
                alt="avatar-image"
                height="120"
                width="120"
                className="mx-auto"
            />
            <div className="flex flex-col gap-[12px] items-center mt-4 mb-[36px] w-full">
                <PhoneInput placeHolder="id_name" className="w-full max-w-[309px]"/>
                <PhoneInput placeHolder="email_address" className="w-full max-w-[309px]"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-[2px] w-full">
                <SettingButton icon="Global" title="display_language" description="english"/>
                <SettingButton icon="Subtitle" title="audio_subtitles" description="english_uk"/>
                <SettingButton swapButtonChecked={autoPlay} swapButtonOnCheckedChange={handleAutoPlayChange} swapButton icon="Clock" title="autoplay_next"/>
                <SettingButton swapButtonChecked={repeatAutoPlay} swapButtonOnCheckedChange={handleRepeatPlayChange} swapButton icon="Repeat" title="autoplay_previews"/>
            </div>
            <StyledButton onClick={()=>router.push(Path.SignIn)} title="log_out" className="[&>div>span]:!font-lecturis-rounded"/>
        </div>
    )
}
