'use client'
import {StaticImageData} from 'next/image';
import {SettingButton, SocialShareButton} from "@/components/elements/Button";
import {Typography} from '@/components/elements/Typography';
import {MovieImage} from '../MovieImages';
import {TSocialShare} from "@/core/utils/socialShare";
import styled from "@emotion/styled";
import React from "react";
import {Icon} from "@/components/elements/Icon";
import {useTranslation} from "react-i18next";


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
const SocialsWrapper = styled.div`
    & > :nth-child(1) {
       div{
           border-radius: 20px 8px 8px 20px!important;
       }
    }
    margin: 0 auto;
`
const OtherSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    padding: 1rem;
    width: 84px;
    height: 100px;
    border-radius: 8px 20px 20px 8px;
    background-color: ${({theme}) => theme.components.black500};
   
`
export const ShareModal = ({open, onClose, title, image, link}: ShareModalProps) => {

    const { t } = useTranslation();
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
            <Modal onClick={handleModalClick }>
                <div className="flex flex-col md:items-center items-start gap-4">
                    <div className="flex items-center gap-4">
                        <MovieImage image={image}/>
                        <div className="flex flex-col items-start">
                            <Typography.Text
                                color="white"
                                weight="normal"
                                className="font-urbanist !text-[40px] text-ellipsis leading-[48px]"
                            >
                                {title}
                            </Typography.Text>
                            <Typography.Text
                                color="gray400"
                                weight="semiBold"
                                size="md"
                                className="font-urbanist leading-[28px]"
                            >
                                {t('share_to')}
                            </Typography.Text>
                        </div>
                    </div>

                    <SocialsWrapper className="flex flex-row gap-[2px]">
                        {links?.map((link) => (
                            <SocialShareButton image={link.image} name={link.name} photo={image} id={link.id}
                                               key={link.id}/>
                        ))}
                        <OtherSocials>
                            <div className="w-[44px] h-[44px] rounded-full bg-gray100 flex items-center justify-center">
                                <Icon name="ThreeDots"/>
                            </div>
                            <Typography.Paragraph color="white" weight="medium"
                                                  className="!text-[14px] text-center">Other</Typography.Paragraph>
                        </OtherSocials>
                    </SocialsWrapper>

                    <div className="flex w-full flex-col items-center gap-[2px] max-w-[500px]">
                        <SettingButton title="copy_link" icon="ClipBoard" link={link}/>
                        <SettingButton title="save_video" icon="DownloadV2"/>
                        <SettingButton title="report" icon="Report"/>
                    </div>
                </div>

            </Modal>
        </Container>
    );
};

