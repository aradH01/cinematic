'use client'
import Calendar from "@/components/elements/Calender/Calender";
import React, {useState} from "react";
import Link from "next/link";
import {Icon} from "@/components/elements/Icon";
import {Typography} from "@/components/elements/Typography";
import {AlarmCard} from "@/components/blocks/AlarmCard";

export default function CalenderPage(){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const [cards, setCards] = useState([
        {id: 1 , image: "/images/show3.jpg" , title: "Wednesday's Child" , description: 'A sci-fi action adventure and the definitive origin story of Buzz Lightyear, the hero who inspired the toy, “Lightyear” follows the legendary' , duration:'51m'},
        {id: 2 , image: "/images/show2.jpg" , title: "And They Lived Happily Ever After" , description: 'After a delivery room surprise, new dad Joe struggles to connect with his infant child, but he has no trouble at all' , duration:'51m'},
        {id: 3 , image: "/images/show4.jpg" , title: "And They Lived Happily Ever After" , description: 'After a delivery room surprise, new dad Joe struggles to connect with his infant child, but he has no trouble at all' , duration:'51m'},
        {id: 4 , image: "/images/show5.jpg" , title: "And They Lived Happily Ever After" , description: 'After a delivery room surprise, new dad Joe struggles to connect with his infant child, but he has no trouble at all' , duration:'51m'},
    ]);


    return(
        <div className="px-[16px]">
            <div className="mb-[16px] mt-[45px]">
                <Link href={''} className="w-[48px] h-[48px] rounded-full border border-solid border-border100 flex items-center justify-center">
                    <Icon name="BackArrow" className="w-[28px] h-[28px]"/>
                </Link>
            </div>
            <Typography.Title className="font-lecturis-rounded !text-[40px] leading-[40px] mb-[26px]" color="white" weight="normal" level="h1">New & Hot</Typography.Title>
            <Calendar year={currentYear} month={currentMonth} currentDate={currentDay}/>
            <div className="mt-[26px] flex flex-col items-center gap-4">
                {cards.map((card) => (
                    <AlarmCard time="08" image={card.image} title={card.title} description={card.description} key={card.id}/>
                ))}
            </div>
        </div>
    )
}
