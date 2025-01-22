import Image, {StaticImageData} from "next/image";
import styled from "@emotion/styled";
import PlaceHolder from '@/public/images/ovalmenAvatar.svg'
import {Typography} from "@/components/elements/Typography";
import {UserStars} from "@/components/elements/UserStars";

interface CommentCardProps {
    name: string;
    comment: string;
    date: string;
    rating?: number
    avatar?: string | StaticImageData
}

const Wrapper = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 24px;
    max-width: 600px;
    border: 1.5px solid ${({theme}) => theme.components.black500};
    background-color: ${({theme}) => theme.components.black400};
`
export const CommentCard = ({comment, date, avatar, rating, name}: CommentCardProps) => {
    return (
        <Wrapper>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                    <Image src={avatar || PlaceHolder} alt={name} width={32} height={40}/>
                    <div className="flex flex-col items-start">
                        <Typography.Paragraph color="white" size="md" weight="bold"
                                              className="leading-[28px] font-urbanist">{name}</Typography.Paragraph>
                        <UserStars rating={rating} className="text-[16px]"/>
                    </div>
                </div>
                <Typography.Text color="white" size="sm" weight="normal"
                                 className="leading-[24px] font-urbanist">{date}</Typography.Text>
            </div>
            <Typography.Paragraph color="white700" size="md" weight="normal"
                                  className="leading-[28px] font-urbanist">{comment}</Typography.Paragraph>
        </Wrapper>
    )
}
