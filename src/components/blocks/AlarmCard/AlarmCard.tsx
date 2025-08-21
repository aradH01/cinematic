import {MovieImage} from "@/components/blocks/MovieImages";
import {Typography} from "@/components/elements/Typography";
import styled from "@emotion/styled";
import {StaticImageData} from "next/image";
import {Icon} from "@/components/elements/Icon";

interface AlarmCardProps {
    image: string | StaticImageData
    title?: string
    description?: string
    time: string
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.components.black900};
    padding: 12px;
    border-radius: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 12px;
`
const AlarmBox = styled.div`
    background-color: ${({theme}) => theme.components.black900};
    padding: 4px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 96px;
`
const IconWrapper = styled.div`
    background-color: ${({theme}) => theme.components.border100};
    border-radius: 100%;
    display: flex;

    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
`
export const AlarmCard = ({description, image, title, time}: AlarmCardProps) => {
    return (

        <div className="flex items-center w-full gap-[8px]">
            <AlarmBox>
                <Typography.Text color="white" weight="semiBold" size="sm"
                                 className="leading-6 font-urbanist text-center">{time}</Typography.Text>
                <Typography.Text color="white" weight="normal" size="sm"
                                 className="leading-6 font-urbanist text-center">{time}</Typography.Text>
                <IconWrapper>
                    <Icon name="NotificationV2" className="w-6 h-6 mt-[4px]"/>
                </IconWrapper>
            </AlarmBox>
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
        </div>

    )
}
