'use client'
import Avatar from "@/public/images/FemaleAvatar.svg"
import Image from "next/image";
import {Icon} from "@/components/elements/Icon";
export const PhoneHomePageHeader = ()=>{

    return(
        <div>
            <div className="flex items-center justify-between mt-[45px]">
                <div className="flex items-center gap-[8px]">
                    <Image src={Avatar} alt="avatar" width={48} height={48} className="rounded-full filter grayscale"/>
                    <div
                        className="w-[48px] h-[48px] rounded-full border border-solid border-border100 flex items-center justify-center">
                        <Icon name="Users" className="w-[28px] h-[28px]"/>
                    </div>
                </div>
                <div
                    className="w-[48px] bg-black600 border-t border-b border-solid border-border200 h-[48px] rounded-full flex items-center justify-center">
                    <Icon name="Calender" className="w-[28px] h-[28px]"/>
                </div>
            </div>
        </div>
    )
}
