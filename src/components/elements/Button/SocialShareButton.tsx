import styled from "@emotion/styled";
import {useMemo} from "react";
import { Typography } from "../Typography";
import Image, {StaticImageData} from "next/image";
import {SocialShare, TSocialShare} from "@/core/utils/socialShare";


export interface ShareButtonProps {
    id: number | string
    image: string | StaticImageData
    name: TSocialShare
    photo?: string | StaticImageData
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    padding: 1rem;
    width: 84px;
    height: 100px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.components.black500};
   
`

export function SocialShareButton({name,  photo, id , image}: ShareButtonProps) {
    const links = useMemo(() => Object.fromEntries(Object.entries(SocialShare).map(([name, fn]) => [name, fn("url", "text")])), [photo])
    return (
        <a href={links[name]}>
            <Wrapper>
                <Image src={image} alt={name} width={44} height={44} className="rounded-full" />
                <Typography.Paragraph color="white" weight="medium"
                                      className="!text-[14px] text-center">{name}</Typography.Paragraph>
            </Wrapper>
        </a>
    )
}
