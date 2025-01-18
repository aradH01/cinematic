'use client'
import {PhoneHomePageHeader} from "@/components/sections/PhoneHomePageHeader";
import {Typography} from "@/components/elements/Typography";
import {CategoriesButton} from "@/components/elements/CategoriesButton";
import React, {useState} from "react";
import {MovieSlider} from "@/components/elements/HomePageSlider/SwiperSlider";
import {AvatarSliderMockData, MoviesCards} from "@/core/constants/enums";
import {MovieCard} from "@/components/blocks/MovieCard";
import {Icon} from "@/components/elements/Icon";
import {AvatarSlider} from "@/components/elements/AvatarSlider";

export default function HomePage(){
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
     const MovieSliderMockData = [
        { id: 1, image: "/images/show1.jpg" },
        { id: 2, image: "/images/show2.jpg" },
        { id: 3, image: "/images/show3.jpg" },
        { id: 4, image: "/images/show4.jpg" },
        { id: 5, image: "/images/show5.jpg" },
        { id: 6, image: "/images/show1.jpg" },
        { id: 7, image: "/images/show2.jpg" },
        { id: 8, image: "/images/show3.jpg" },
        { id: 9, image: "/images/show4.jpg" },
    ];
    const handleActiveChange = (url: string) => {
    };
    return(
        <div className="">
            <div className="mb-[20px] px-[12px]">
                <PhoneHomePageHeader/>
            </div>
            <Typography.Title level="h1" size="xlg" weight="medium" color="white" className="leading-[40px] px-[12px]">Good
                morning Mia 👋</Typography.Title>

            <div className=" pl-[12px] flex gap-8 items-center max-w-[99%] overflow-x-auto">
                <CategoriesButton className="mt-4" categories={categories} onClick={() => {
                }}/>
            </div>
            <div>
                <MovieSlider className="!h-[209px]" data={MovieSliderMockData}
                              onActiveSlideChange={handleActiveChange}/>
            </div>

            <div className="mb-6 px-[12px]">
                <div className="flex items-center justify-between mb-[8px]">
                    <div className="flex flex-col items-start">
                        <Typography.Text color="white100" className="leading-6 font-urbanist" weight="semiBold"
                                         size="sm">Latest Releases</Typography.Text>
                        <Typography.Text color="white500" className="leading-[20px] font-urbanist" weight="normal"
                                         size="xsm">Fresh additions to our collection.</Typography.Text>
                    </div>
                    <Icon name="IconBox" className="w-[28px] h-[28px]"/>
                </div>
                <div className="flex flex-col max-w-[500px] mx-auto items-center gap-[12px]">
                    {
                        MoviesCards.map((card, index) => (
                            <MovieCard key={index} image={card.image} title={card.title}
                                       description={card.description}/>
                        ))
                    }
                </div>
            </div>

            <div className="mb-6 px-[12px]">
                <div className="flex items-center justify-between mb-[8px]">
                    <div className="flex flex-col items-start">
                        <Typography.Text color="white100" className="leading-6 font-urbanist" weight="semiBold"
                                         size="sm">Dubbed Movies</Typography.Text>
                        <Typography.Text color="white500" className="leading-[20px] font-urbanist" weight="normal"
                                         size="xsm">International films with voice-over in Russia</Typography.Text>
                    </div>
                    <Icon name="IconBox" className="w-[28px] h-[28px]"/>
                </div>
                <div className="flex flex-col max-w-[500px] mx-auto items-center gap-[12px]">
                    {
                        MoviesCards.map((card, index) => (
                            <MovieCard key={index} image={card.image} title={card.title}
                                       description={card.description}/>
                        ))
                    }
                </div>
            </div>


            <div className="mb-6 px-[12px]">
                <div className="flex items-center justify-between mb-[8px]">
                    <div className="flex flex-col items-start">
                        <Typography.Text color="white100" className="leading-6 font-urbanist" weight="semiBold"
                                         size="sm">Coming Soon</Typography.Text>
                        <Typography.Text color="white500" className="leading-[20px] font-urbanist" weight="normal"
                                         size="xsm">Upcoming releases you won&apos;t want to miss</Typography.Text>
                    </div>
                    <Icon name="IconBox" className="w-[28px] h-[28px]"/>
                </div>
                <div className="flex flex-col max-w-[500px] mx-auto items-center gap-[12px]">
                    {
                        MoviesCards.map((card, index) => (
                            <MovieCard key={index} image={card.image} title={card.title}
                                       description={card.description}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
