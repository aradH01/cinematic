'use client'
import {BackHeader} from "@/components/sections/BackHeader";
import React from "react";
import {Typography} from "@/components/elements/Typography";
import {Icon} from "@/components/elements/Icon";
import {CommentCard} from "@/components/blocks/CommentCard";
import {Comments} from "@/core/constants/enums";
import styled from "@emotion/styled";

const AICommentWrapper = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 24px;
    border: 2px solid ${({theme}) => theme.components.red300};
    background-color: ${({theme}) => theme.components.black400};
`

export default function RatingPage() {
    return (
        <div className="px-[16px]">
            <div className="mb-[12px]">
                <BackHeader/>
            </div>
            <Typography.Title level="h1" className="!text-[40px] font-urbanist leading-[48px]" weight="normal"
                              color="white">Rating</Typography.Title>
            <div className="flex items-center justify-between mt-[22px] mb-[20px] pr-8">
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

            <div className="flex flex-col gap-[14px] items-center">
                <AICommentWrapper>
                    <Typography.Paragraph color="white" size="md" weight="bold"
                                          className="leading-[28px] font-urbanist">Review summary</Typography.Paragraph>
                    <Typography.Paragraph color="white" size="sm" weight="normal"
                                          className="leading-[24px] font-urbanist">Recent reviews of Lands End Trail in
                        San Francisco, California, highlight the great views of the Golden Gate Bridge and the Bay,
                        making it a fun and enjoyable hike.</Typography.Paragraph>
                    <Typography.Paragraph color="white700" size="sm" weight="normal"
                                          className="leading-[24px] font-urbanist">This summary is Al-generated.</Typography.Paragraph>
                </AICommentWrapper>
                {
                    Comments.map((comment) => (
                        <CommentCard key={comment.name} comment={comment.comment} name={comment.name}
                                     date={comment.date} rating={comment.rating} avatar={comment.image}/>
                    ))
                }
            </div>
        </div>
    )
}
