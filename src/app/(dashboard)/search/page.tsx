'use client'

import SearchInput from "@/components/elements/Input/SearchInput";
import React, {useState} from "react";
import {CategoriesButton} from "@/components/elements/CategoriesButton";
import {CastsAvatar, ShowImages, TopSearches} from "@/core/constants/enums";
import {TopSearchCard} from "@/components/blocks/TopSearchCard";
import {Typography} from "@/components/elements/Typography";
import Image from "next/image";
import {FactorAvatar} from "@/components/elements/FactorAvatar";

export default function SearchPage(){

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

    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearchCardClick = (title: string) => {
        setSearchValue(title); // Set the clicked title as the input value
    };

    return(
        <div className="">
            <div className="mt-[30px] px-4">
                <SearchInput
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value)

                    }}
                />
            </div>
            <div className="flex px-4 gap-8 items-center max-w-[99%] overflow-x-auto">
                <CategoriesButton className="my-2" categories={categories} onClick={() => {
                }}/>
            </div>
            <Typography.Paragraph color="gray400" weight="semiBold" size="sm" className="px-4 font-urbanist leading-[24px] mt-4 mb-2">Top searches</Typography.Paragraph>
           <div className="w-full px-4 flex items-center flex-col gap-[2px]">
               {TopSearches.map((word) => (
                   <TopSearchCard key={word.title} title={word.title} onClick={() => handleSearchCardClick(word.title)} />
               ))}
           </div>
            <Typography.Paragraph color="gray400" weight="semiBold" size="sm" className="font-urbanist px-4 leading-[24px] mt-4 mb-2">Suggested</Typography.Paragraph>
            <div className="pl-4">
                <div
                    className="bg-gray900 rounded-bl-[24px] rounded-tl-[24px] p-[12px] flex items-center gap-[6px] overflow-x-auto">
                    {
                        ShowImages.map((image, index) => (
                            <div key={index} className="w-full min-w-[78px] h-[140px] relative rounded-lg">
                                <Image src={image} alt="checkbox option" fill className="object-cover rounded-lg"/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Typography.Paragraph color="gray400" weight="semiBold" size="sm" className="font-urbanist px-4 leading-[24px] mt-4 mb-2">Cast & Crew</Typography.Paragraph>
            <div className="pl-4">
                <div className="flex items-center overflow-x-auto">
                    {
                        CastsAvatar.map((avatar, index) => (
                            <FactorAvatar name={avatar.name} image={avatar.image} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
