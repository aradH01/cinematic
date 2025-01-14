'use client'
import {Typography} from "@/components/elements/Typography";
import Image from "next/image";
import MenAvatar from '@/public/images/MenAvatar.svg'
import FemaleAvatar from '@/public/images/FemaleAvatar.svg'
import {Button} from "@/components/elements/Button";
import {SettingButton} from "@/components/elements/Button";
import {useRouter} from "next/navigation";
import {Path} from "@/core/constants/enums";
export default function SettingPage() {
    const router= useRouter()
    return (
        <div>
            <div>
                <Typography.Title className="!text-[40px] leading-[48px] !font-lecturis-rounded text-left" color="white"
                                  weight="bold" level="h1">
                    Settings
                </Typography.Title>
            </div>
            <div className="relative w-full flex justify-center mt-[24px]">
                <div className="relative w-[168px] h-[96px]">
                    <Image
                        src={MenAvatar}
                        alt="avatar-men"
                        height="96"
                        width="96"
                        className="absolute left-0 z-10"
                    />
                    <Image
                        src={FemaleAvatar}
                        alt="avatar-women"
                        height="96"
                        width="96"
                        className="absolute left-[72px] z-0 filter grayscale"
                    />
                </div>
            </div>
            <Button onClick={()=>router.push(Path.ManageProfile)} title="Manage Profiles" className="!bg-transparent !border !border-solid !border-border100 [&>div>span]:!font-lecturis-rounded [&>div>span]:!font-normal !px-4 mt-[12px] mb-8 mx-auto"/>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <div className="flex flex-col items-center justify-center gap-[2px] w-full">
                  <SettingButton redIcon icon="Setting" title="App Setting"/>
                  <SettingButton redIcon icon="Phone" title="Devices"/>
                  <SettingButton redIcon icon="Global" title="App Language"/>
              </div>
                <div className="flex flex-col items-center justify-center gap-[2px] w-full">
                    <SettingButton icon="Question" title="Support Center"/>
                    <SettingButton icon="Notes" title="Privacy & Terms"/>
                </div>
            </div>
        </div>
    )
}
