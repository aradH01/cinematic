'use client';

import React from "react";
import styled from "@emotion/styled";
import {VideoPlayer} from "@/components/elements/VideoPlayer";


const Wrapper = styled.div`
    background-color: ${({theme}) => theme.components.black900};
    padding: 12px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`
export default function HomePage() {
    return (
        /*    <div className=" p-16  flex flex-col gap-8 max-w-[600px]">
                {
                    MoviesCards.map((card ,  index) => (
                        <Wrapper key={index}>
                            <div>
                                <iframe src="/videos/downloaded_fiile.mp4" frameborder="0">test</iframe>
                            </div>
                            <div className="flex flex-col items-start">
                                <Typography.Text color="white" weight="medium" className="!text-[20px] leading-[32px]">{card.title}</Typography.Text>
                                <Typography.Paragraph color="gray400" weight="normal" className="!text-[14px] line-clamp-2 leading-[20px]">{card.description}</Typography.Paragraph>
                            </div>
                        </Wrapper>
                    ))
                }
            </div>*/
        <div>
            <VideoPlayer
                poster="/images/show4.jpg" src="/videos/downloaded_fiile.mp4"
            />
        </div>
    );
}


