'use client'
import {BackHeader} from "@/components/sections/BackHeader";
import React, {useState} from "react";
import {MovieImage} from "@/components/blocks/MovieImages";
import Cover from '@/public/images/show5.jpg'
import {Typography} from "@/components/elements/Typography";
import {SeriesCard} from "@/components/blocks/SeriesCard";

export default function TurningRedPage() {

    const [cards, setCards] = useState([
        {
            id: 1,
            image: "/images/show3.jpg",
            title: "And They Lived Happily Ever After",
            description: 'After a delivery room surprise, new dad Joe struggles to connect with his infant child, but he has no trouble at all',
            duration: '51m'
        },
        {
            id: 2,
            image: "/images/show2.jpg",
            title: "And They Lived Happily Ever After",
            description: 'After a delivery room surprise, new dad Joe struggles to connect with his infant child, but he has no trouble at all',
            duration: '51m'
        },
        {
            id: 3,
            image: "/images/show4.jpg",
            title: "And They Lived Happily Ever After",
            description: 'After a delivery room surprise, new dad Joe struggles to connect with his infant child, but he has no trouble at all',
            duration: '51m'
        },
        {
            id: 4,
            image: "/images/show5.jpg",
            title: "And They Lived Happily Ever After",
            description: 'After a delivery room surprise, new dad Joe struggles to connect with his infant child, but he has no trouble at all',
            duration: '51m'
        },
    ]);

    return (
        <div className="px-[16px]">
            <div className="mb-[12px]">
                <BackHeader/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <MovieImage image={Cover} className="!w-[118px] h-[177px]"/>
                <Typography.Title level="h1" color="white" weight="normal"
                                  className="!text-[40px] font-urbanist leading-[48px] text-center text-ellipsis">Turning
                    Red</Typography.Title>
            </div>
            <div className="mt-[28px] mx-auto flex flex-col items-center gap-[12px]">
                {cards.map((card) => (
                    <SeriesCard image={card.image} title={card.title} duration={card.duration}
                                description={card.description} key={card.id}/>
                ))}
            </div>
        </div>
    );
}
