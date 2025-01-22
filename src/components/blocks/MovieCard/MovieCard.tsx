import styled from "@emotion/styled";

import {Typography} from "@/components/elements/Typography";
import {StaticImageData} from "next/image";
import {MovieImage} from "@/components/blocks/MovieImages";
import Link from "next/link";
import {Path} from "@/core/constants/enums";

interface MovieCardProps {
    image: string | StaticImageData
    title?: string
    description?: string
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.components.black500};
    padding: 12px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    gap: 12px;
`

export function MovieCard({description, image, title}: MovieCardProps) {
    return (
        <Link href={Path.Info}>
            <Wrapper>
                <div>
                    <MovieImage image={image}/>
                </div>
                <div className="flex flex-col items-start">
                    <Typography.Text color="white" weight="medium"
                                     className="!text-[20px] leading-[32px]">{title}</Typography.Text>
                    <Typography.Paragraph color="gray400" weight="normal"
                                          className="!text-[14px] line-clamp-2 leading-[20px]">{description}</Typography.Paragraph>
                </div>
            </Wrapper>
        </Link>
    )
}
