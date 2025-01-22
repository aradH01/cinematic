'use client'
import {PhoneHomePageHeader} from "@/components/sections/PhoneHomePageHeader";
import React, {useState} from "react";
import {CategoriesButton} from "@/components/elements/CategoriesButton";
import {EpisodeCard} from "@/components/blocks/EpisodeCard";
import Image from "@/public/images/show1.jpg"
import {Typography} from "@/components/elements/Typography";
import {AvatarSlider} from "@/components/elements/AvatarSlider";
import {AvatarSliderMockData} from "@/core/constants/enums";
import {useTranslation} from "react-i18next";
export default function EpisodePage(){

    const [categories, setCategories] = useState<{ value: number, label: string, selected: boolean }[]>([
        {label: "Action", value: 0, selected: true},
        {label: "Anime", value: 0, selected: false},
        {label: "Black stories", value: 0, selected: false},
        {label: "Anime", value: 0, selected: false},
        {label: "Anime", value: 0, selected: false},
        {label: "Black stories", value: 0, selected: false},
        {label: "Anime", value: 0, selected: false},
        {label: "Black stories", value: 0, selected: false},
    ]);
    const { t } = useTranslation();
    const handleActiveChange = (url: string) => {
    };
    return(
        <div>
            <div className="mb-[12px] px-[12px]">
                <PhoneHomePageHeader/>
            </div>
            <div className=" pl-[12px] flex gap-8 items-center sm:max-w-[600px] max-w-[375px] overflow-x-auto no-scrollbar">
                <CategoriesButton className="mt-4" categories={categories} onClick={() => {
                }}/>
            </div>
            <div className="mt-4 px-[12px]">
                <EpisodeCard image={Image} title="And They Lived Happily" description="Seosen 1"/>
            </div>
            <div className="mt-[26px]">
                <Typography.Paragraph color="gray400" weight="semiBold" size="xsm"
                                      className="leading-[24px] font-urbanist px-[12px]">{t('studio')}</Typography.Paragraph>
                <div>
                    <AvatarSlider className="!h-[112px]" studioMode data={AvatarSliderMockData} onActiveSlideChange={handleActiveChange}/>
                </div>
            </div>
        </div>
    )
}
