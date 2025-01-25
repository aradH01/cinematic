import {MovieImage} from "@/components/blocks/MovieImages";
import {Typography} from "@/components/elements/Typography";
import {StaticImageData} from "next/image";
import styled from "@emotion/styled";


interface SeriesCardProps {
    image: string | StaticImageData
    title?: string
    description?: string
    duration?: string
}

const Wrapper = styled.div`
        background-color: ${({theme}) => theme.components.black900};
        padding: 12px;
        border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`
export const SeriesCard = ({title, image, description, duration}: SeriesCardProps) => {
    return (
        <Wrapper>
            <div className="flex items-center gap-[12px]">
                <div>
                    <MovieImage image={image}/>
                </div>
                <div className="flex flex-col items-start border-b border-solid border-border100 pb-[9px]">
                    <Typography.Text color="white" weight="medium"
                                     className="!text-[20px] font-urbanist leading-[32px]">{title}</Typography.Text>
                    <Typography.Paragraph color="white600" weight="normal"
                                          className="!text-[14px] leading-[20px] font-urbanist text-ellipsis">{duration}</Typography.Paragraph>
                </div>
            </div>
            <Typography.Paragraph color="white700" weight="normal"
                                  className="!text-[12px] line-clamp-2 font-urbanist leading-[16px] text-ellipsis ">{description}</Typography.Paragraph>

        </Wrapper>
    )
}
