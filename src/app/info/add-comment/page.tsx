'use client'

import {BackHeader} from "@/components/sections/BackHeader";
import {Typography} from "@/components/elements/Typography";
import {Icon} from "@/components/elements/Icon";
import React from "react";
import {StarRating} from "@/components/elements/StarRating";
import {CommentTextArea} from "@/components/elements/Input";
import {Path} from "@/core/constants/enums";
import {router} from "next/client";
import {toast} from "@/core/utils/toast";

export default function AddCommentPage() {
    const handleReviewSubmit = (rating: number) => {
        console.log(`User selected a rating of: ${rating}`);
    };
    const handleNext=()=>{
        toast.success({message:"comment sended"})
    }
    return(
        <div className="px-[16px]">
            <div className="mb-[12px]">
                <BackHeader/>
            </div>
            <Typography.Title level="h1" className="!text-[40px] font-lecturis-rounded leading-[48px]" weight="normal"
                              color="white">Write a Review</Typography.Title>
            <div className="flex items-center justify-between mt-[22px] mb-[27px] pr-8">
                <div className="flex items-center gap-2">
                    <Icon name="LeftWheat" className="w-6 h-12"/>
                    <div className="flex flex-col items-center">
                        <Typography.Text color="white" weight="semiBold"
                                         className="!text-[20px] leading-8 font-urbanist">4.8</Typography.Text>
                        <Typography.Text color="gray400" weight="normal" size="xsm"
                                         className="leading-[20px] font-urbanist">Rating</Typography.Text>
                    </div>
                    <Icon name="RightWheat" className="w-6 h-12"/>
                </div>
                <div className="flex flex-col items-center">
                    <Typography.Text color="white" weight="semiBold"
                                     className="!text-[20px] leading-8 font-urbanist">9,383</Typography.Text>
                    <Typography.Text color="gray400" weight="normal" size="xsm"
                                     className="leading-[20px] font-urbanist">Review</Typography.Text>
                </div>
                <div className="flex flex-col items-center">
                    <Typography.Text color="white" weight="semiBold"
                                     className="!text-[20px] leading-8 font-urbanist">13,400</Typography.Text>
                    <Typography.Text color="gray400" weight="normal" size="xsm"
                                     className="leading-[20px] font-urbanist">Watched</Typography.Text>
                </div>
            </div>
            <div className="flex flex-col gap-[12px] items-center">
                <StarRating onSubmit={handleReviewSubmit}/>
                <Typography.Text color="white" weight="normal" size="sm"
                                 className="leading-[24px] font-urbanist">Tap a star to rate</Typography.Text>
            </div>
            <div>
                <CommentTextArea/>
            </div>
            <button onClick={handleNext}
                    className="fixed z-[15] bottom-[3rem] left-1/2 transform -translate-x-1/2 mx-auto border-border100 shadow-signInNext  border-solid border p-[20px] w-[72px] h-[72px] flex items-center justify-center rounded-full bg-white800">
                <Icon name="SignInNextArrow" className="w-[24x] h-[24px]"/>
            </button>
        </div>
    )
}
