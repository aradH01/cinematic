'use client'
import {StaticImageData} from 'next/image';
import {SettingButton, SocialShareButton} from "@/components/elements/Button";
import {Typography} from '@/components/elements/Typography';
import {MovieImage} from '../MovieImages';
import styled from "@emotion/styled";
import React from "react";
import {Icon} from "@/components/elements/Icon";
import {useTranslation} from "react-i18next";
import {Comments} from "@/core/constants/enums";
import {CommentCard} from "@/components/blocks/CommentCard";


interface ShareModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    image: string | StaticImageData;
    link?: string;
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.01);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 16px;
    max-width: 600px !important;
    margin: 0 auto;
`
const Modal = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({theme}) => theme.components.gray900};
    border-radius: 32px 32px 0 0;
    backdrop-filter: blur(20px);

    height: 60%;
    max-height: 60%;
    overflow: hidden;
    padding: 16px;
    max-width: 600px !important;
    margin: 0 auto;
    z-index: 999;
    animation: slideUp 0.5s ease-out forwards;

    @keyframes slideUp {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }
`
const AICommentWrapper = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    max-width: 600px;
    border-radius: 24px;
    border: 2px solid ${({theme}) => theme.components.red300};
    background-color: ${({theme}) => theme.components.black400};
`
export const CommentModal = ({open, onClose, title, image, link}: ShareModalProps) => {

    const {t} = useTranslation();
    const links = [
        {id: 1, image: '/images/facebook.jpg', name: "Facebook"},
        {id: 2, image: '/images/tiktok.jpg', name: "Tiktok"},
        {id: 3, image: '/images/snapchat.jpg', name: "Snapchat"},
    ] as const

    if (!open) return null;
    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    return (
        <Container onClick={onClose}>
            <Modal onClick={handleModalClick}>
                <div className="flex flex-col gap-[14px] items-stretch">
                    <AICommentWrapper>
                        <Typography.Paragraph color="white" size="md" weight="bold"
                                              className="leading-[28px] font-urbanist">{t('review_summary')}</Typography.Paragraph>
                        <Typography.Paragraph color="white" size="sm" weight="normal"
                                              className="leading-[24px] font-urbanist">Recent reviews of Lands End Trail
                            in
                            San Francisco, California, highlight the great views of the Golden Gate Bridge and the Bay,
                            making it a fun and enjoyable hike.</Typography.Paragraph>
                        <Typography.Paragraph color="white700" size="sm" weight="normal"
                                              className="leading-[24px] font-urbanist">{t('ai_summary')}</Typography.Paragraph>
                    </AICommentWrapper>
                    {
                        Comments.map((comment) => (
                            <CommentCard key={comment.name} comment={comment.comment} name={comment.name}
                                         date={comment.date} rating={comment.rating} avatar={comment.image}/>
                        ))
                    }
                </div>

            </Modal>
        </Container>
    );
};

