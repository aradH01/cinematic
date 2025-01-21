'use client'
import {BackHeader} from "@/components/sections/BackHeader";
import React from "react";
import Image from "next/image";
import PixarImage from '@/public/images/pixar.jpg'
import {Typography} from "@/components/elements/Typography";
import {MoviesCards, ShowImages} from "@/core/constants/enums";
import styled from "@emotion/styled";
import {MovieCard} from "@/components/blocks/MovieCard";
import {useTranslation} from "react-i18next";

const ImageWrapper = styled.div<{ length: number }>`
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
    
    & > :nth-child(1) {
            img {
                    border-radius: 24px 8px 8px 24px !important;
            }
    }

    & > :nth-child(4) {
            img {
               
                    border-radius: 8px 24px 24px 8px !important;
                
            }
    }
`;

export default function StudioPage(){
    const { t } = useTranslation();
    return (
        <div className="px-[16px]">
            <div className="mb-[30px]">
                <BackHeader/>
            </div>
            <div className="flex items-center gap-4">
                <Image src={PixarImage} alt="pixar" width={96} height={96} className="rounded-full"/>
                <div className="flex flex-col items-start">
                    <Typography.Title level="h1" color="white" weight="normal"
                                      className="!text-[40px] leading-[48px] font-urbanist text-ellipsis">Pixar</Typography.Title>
                    <Typography.Text color="gray400" className="leading-[28px] font-urbanist" weight="normal"
                                     size="md">{t('studio')}</Typography.Text>
                </div>
            </div>
            <ImageWrapper length={4} className="mt-4">
                {
                    ShowImages.slice(0, 4).map((image, index) => (
                        <div key={index} className="w-full h-[140px] relative rounded-lg">
                            <Image src={image} alt="checkbox option" fill className="object-cover rounded-lg"/>
                        </div>
                    ))
                }
            </ImageWrapper>
            <div className="flex flex-col items-center mt-[12px] gap-[12px]">
                {
                    MoviesCards.map((card, index) => (
                        <MovieCard key={index} image={card.image} title={card.title}
                                   description={card.description}/>
                    ))
                }
            </div>
        </div>
    )
}
