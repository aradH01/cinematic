'use client'
import {BackHeader} from "@/components/sections/BackHeader";
import React from "react";
import {Typography} from "@/components/elements/Typography";
import {Icon} from "@/components/elements/Icon";
import {CastsAvatar, Factors, Path} from "@/core/constants/enums";
import {MovieDetailCard} from "@/components/blocks/MovieDetailCard";
import {FactorAvatar} from "@/components/elements/FactorAvatar";
import {useTranslation} from "react-i18next";

export default function DetailPage() {
    const { t } = useTranslation();
    return (
        <div className="px-[16px]">
            <div className="mb-[12px]">
                <BackHeader isLinked={Path.Comments} href={Path.Info} icon="Comments"/>
            </div>
            <Typography.Title level="h1" color="white" weight="normal"
                              className="!text-[40px] font-urbanist leading-[48px] text-ellipsis">{t('info')}</Typography.Title>
            <Typography.Paragraph color="white" size="xsm" weight="normal"
                                  className="leading-[20px] mt-[9px] text-ellipsis font-urbanist opacity-[0.75]">
                The Targaryen dynasty is at the absolute apex of its power, with more than 10 dragons under their yoke.
                Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King
                Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne.
            </Typography.Paragraph>
            <div className="flex items-center justify-between my-[23px] pr-8">
                    <div className="flex items-center gap-2">
                        <Icon name="LeftWheat" className="w-6 h-12"/>
                        <div className="flex flex-col items-center">
                            <Typography.Text color="white" weight="semiBold" className="!text-[20px] leading-8 font-urbanist">4.8</Typography.Text>
                            <Typography.Text color="gray400" weight="normal" size="xsm" className="leading-[20px] font-urbanist">{t('rating')}</Typography.Text>
                        </div>
                        <Icon name="RightWheat" className="w-6 h-12"/>
                    </div>
                <div className="flex flex-col items-center">
                    <Typography.Text color="white" weight="semiBold"
                                     className="!text-[20px] leading-8 font-urbanist">9,383</Typography.Text>
                    <Typography.Text color="gray400" weight="normal" size="xsm"
                                     className="leading-[20px] font-urbanist">{t('review')}</Typography.Text>
                </div>
                <div className="flex flex-col items-center">
                    <Typography.Text color="white" weight="semiBold"
                                     className="!text-[20px] leading-8 font-urbanist">13,400</Typography.Text>
                    <Typography.Text color="gray400" weight="normal" size="xsm"
                                     className="leading-[20px] font-urbanist">{t('watched')}</Typography.Text>
                </div>
            </div>
            <div className="flex w-full items-center gap-[2px] flex-col">
                {
                    Factors.map((factor , index)=>(
                        <MovieDetailCard key={index} detail={factor.detail} title={factor.title}/>
                    ))
                }
            </div>
            <Typography.Paragraph color="gray400" weight="semiBold" size="xsm"
                             className="leading-[24px] font-urbanist mt-[13px] ">{t('cast_crew')}</Typography.Paragraph>
            <div className="flex items-center overflow-x-auto">
                {
                    CastsAvatar.map((avatar , index)=>(
                        <FactorAvatar name={avatar.name} image={avatar.image} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}
