'use client'
import PlaceHolder from '@/public/images/MenAvatar.svg'
import Image, {StaticImageData} from "next/image";
import {Typography} from "@/components/elements/Typography";

interface FactorAvatarProps {
    image?: string | StaticImageData
    name: string
}

export const FactorAvatar = ({name, image}: FactorAvatarProps) => {
    return (
        <div className="flex flex-col gap-[8px] items-center p-[12px]">
            <div className="w-[75px] h-[92px] relative">
                <Image src={image || PlaceHolder} alt={name} fill className="object-cover"/>
            </div>
            <Typography.Paragraph color="white" size="sm" weight="semiBold"
                                  className="leading-6 font-urbanist text-center">{name}</Typography.Paragraph>
        </div>
    )
}
