'use client'

import styled from "@emotion/styled";
import {MovieImages} from "../MovieImages";
import {Typography} from "@/components/elements/Typography";
import {StaticImageData} from "next/image";
import {PlayLists} from "@/core/constants/enums";
import {PlayCard} from "@/components/blocks/PlayCard";


interface EpisodeCardProps {
    image: string | StaticImageData
    title?: string
    description?: string
}

const Wrapper = styled.div`
padding: 12px;
    background-color: ${({theme})=>theme.components.black500};
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const EpisodeInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
`
const PlayList = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`
export const EpisodeCard = ({description,image,title}:EpisodeCardProps)=>{
    return(
        <Wrapper>
            <EpisodeInfo>
                <div>
                    <MovieImages image={image}/>
                </div>
                <div className="flex flex-col items-start">
                    <Typography.Text color="white" weight="medium" className="!text-[20px] leading-[32px]">{title}</Typography.Text>
                    <Typography.Paragraph color="gray400" weight="normal" size="xsm" className="line-clamp-2 leading-[20px]">{description}</Typography.Paragraph>
                </div>
            </EpisodeInfo>
            <PlayList>
                {
                    PlayLists.map((item , index)=>(
                        <PlayCard index={index} title={item.title} key={index} duration={item.duration}/>
                    ))
                }
            </PlayList>
        </Wrapper>
    )
}
