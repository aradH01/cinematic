'use client';

import React, {useEffect, useRef, useState} from "react";
import {MoviesCards} from "@/core/constants/enums";
import {MovieCard} from "@/components/blocks/MovieCard";
import {MovieImage} from "@/components/blocks/MovieImages";
import {Typography} from "@/components/elements/Typography";
import styled from "@emotion/styled";
import videojs from "video.js";
import VideoJSPlayer from "@/components/elements/VideoPlayer/VideoPlayer";
import CustomVideoPlayer from "@/components/elements/VideoPlayer/VideoPlayer";

const Wrapper = styled.div`
        background-color: ${({theme})=>theme.components.black500};
        padding: 12px;
        border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`
export default function HomePage() {


    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;

        const player = videojs(videoRef.current, {
            controls: true,
            autoplay: false,
            preload: 'auto',
            fluid: true,
        });

        return () => {
            player.dispose();
        };
    }, []);

    const videoQualities = [
        { src: '/videos/sample-720p.mp4', label: '720p' },
        { src: '/videos/sample-480p.mp4', label: '480p' },
        { src: '/videos/sample-360p.mp4', label: '360p' },
    ];

    const subtitles = [
        { src: '/subtitles/en.vtt', label: 'English', lang: 'en' },
        { src: '/subtitles/es.vtt', label: 'Spanish', lang: 'es' },
    ];
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
            <h1>Custom Video Player</h1>
            <CustomVideoPlayer
                poster="/images/show4.jpg" src="/videos/downloaded_fiile.mp4"
            />
        </div>
    );
}


