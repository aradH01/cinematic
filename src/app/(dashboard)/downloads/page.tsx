'use client'
import {PhoneHomePageHeader} from "@/components/sections/PhoneHomePageHeader";
import {Typography} from "@/components/elements/Typography";
import {SpaceUsed} from "@/components/elements/SpaceUsed";
import {DownloadCard} from "@/components/blocks/DownloadCard";
import {useState} from "react";

export default function DownloadsPage(){
    const [cards, setCards] = useState([
        {id: 1 , image: "/images/show3.jpg" , title: "Jojo Rabbit" , description: 'A sci- Ranger after less robots and a mysterious agenda.'},
        {id: 2 , image: "/images/show2.jpg" , title: "Jojo Rabbit" , description: 'A sci- Ranger after less robots and a mysterious agenda.'},
        {id: 3 , image: "/images/show4.jpg" , title: "Jojo Rabbit" , description: 'A sci- Ranger after less robots and a mysterious agenda.'},
        {id: 4 , image: "/images/show5.jpg" , title: "Jojo Rabbit" , description: 'A sci- Ranger after less robots and a mysterious agenda.'},
    ]);
    const handleDelete = (id: number) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };


    return (
        <div className="">
            <div className="px-[16px]">
                <div className="mb-[12px]">
                    <PhoneHomePageHeader icon="ScreenCast"/>
                </div>
                <Typography.Title level="h1" color="white" weight="normal"
                                  className="leading-[48px] !text-[40px] font-urbnanist mb-[14px]">Download</Typography.Title>
                <div>
                    <SpaceUsed used={18} total={60} warningThreshold={80}/>
                </div>
            </div>
            <div className="mt-[28px] mx-auto flex flex-col items-center gap-[12px]">
                {cards.map((card) => (
                    <DownloadCard image={card.image} title={card.title} description={card.description} key={card.id} id={card.id} onDelete={handleDelete}/>
                ))}
            </div>
        </div>
    )
}
