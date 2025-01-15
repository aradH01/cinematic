'use client'
import React from "react";
import {BackHeader} from "@/components/sections/BackHeader";
import {Typography} from "@/components/elements/Typography";
import {MovieCard} from "@/components/blocks/MovieCard";
import Image from "@/public/images/show4.jpg"
import {MovieImage} from "@/components/blocks/MovieImages";
import {Icon} from "@/components/elements/Icon";
import {Button, DownloadButton} from "@/components/elements/Button";
import {MoviesCards} from "@/core/constants/enums";
import Link from "next/link";

export default function InfoPage(){
    return(
        <div className="px-[16px]">
            <div className="mb-[12px]">
                <BackHeader/>
            </div>
            <Typography.Title level="h1" color="white" weight="normal"
                              className="!text-[40px] font-urbanist leading-[48px] text-ellipsis">Spider-man</Typography.Title>
            <div className="mt-4 flex items-center gap-4">
                <MovieImage image={Image} className="w-[118px] h-[177px]"/>
                <div className="flex flex-col w-full items-start gap-[8px] ">
                    <div className="flex w-full items-center justify-between">
                        <Typography.Text color="white" weight="medium" size="sm"
                                         className="leading-6 font-urbanist">Info</Typography.Text>
                        <Link href="/info/23">
                            <Icon name="BackArrow" className="w-6 h-6 rotate-180"/>
                        </Link>
                    </div>
                    <Typography.Paragraph color="white" size="xsm" weight="normal"
                                          className="line-clamp-6 leading-[20px] font-urbanist text-ellipsis opacity-[0.75]">
                        The Targaryen dynasty is at the absolute apex of its power, with more than 10 dragons under
                        their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow
                        fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra
                        heir to the Iron Throne.
                    </Typography.Paragraph>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between mt-6">
                    <button className="bg-gray900 w-[72px] h-[72px] rounded-full flex items-center justify-center">
                        <Icon name="Heart" className="w-6 h-6"/>
                    </button>
                    <button className="bg-gray900 w-[72px] h-[72px] rounded-full flex items-center justify-center">
                        <Icon name="Notification" className="w-6 h-6"/>
                    </button>
                    <DownloadButton name="file 1"
                                    link="https://caspian14.asset.aparat.com/aparat-video/ffb01996f7f2d2a9af79a002f0a2d31d57043824-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ijk2NGUzM2JjZmU1ZDUwMTFhMjliN2JhZWRmZjMyNDg2IiwiZXhwIjoxNzM2OTY5Nzg0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.UbWHYUEg-4HSRv67u96O9d-fNCdEqjmR-SYyXoneBjo"/>
                    <button className="bg-white w-[72px] h-[72px] rounded-full flex items-center justify-center">
                        <Icon name="PlayIconV2" className="w-6 h-6"/>
                    </button>
                </div>
            </div>
            <Button opacity title="More Like This" icon="DownArrow" className="mx-auto mt-[20px] mb-4"/>
            <div className="flex flex-col items-center gap-[12px]">
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
