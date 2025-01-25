/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {css} from "@emotion/react";
import {Icon} from "@/components/elements/Icon";
import styled from "@emotion/styled";
import {MovieImage} from "@/components/blocks/MovieImages";
import {Typography} from "@/components/elements/Typography";
import {StaticImageData} from "next/image";
import {DeleteModal} from "@/components/blocks/DeleteModal";
import Link from "next/link";

const wrapperStyle = css`
    position: relative;
    width: 99%;
    height: 126px;
    overflow: hidden;
`;

const CardStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 99%;
    height: 100%;
    background-color: ${({theme}) => theme.components.black900};
    border-radius: 24px;
    transition: transform 0.3s ease-in-out;
    will-change: transform;
    z-index: 2;
`;

const DeleteIconStyle = styled.button`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background-color: ${({theme}) => theme.components.border100};
    border-radius: 100%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 3;
`;

const overlayStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1;
`;
const InnerWrapper = styled.div`
    background-color: ${({theme}) => theme.components.black900};
    padding: 12px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`

interface DownloadCardProps {
    id: number
    onDelete: (id: number) => void
    image: string | StaticImageData
    title?: string
    description?: string
}

export const DownloadCard = ({id, onDelete, image, title, description}: DownloadCardProps) => {
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [isSwiped, setIsSwiped] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setDragging(true);
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        document.body.classList.add('no-select');
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!dragging) return;

        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - startX;

        if (deltaX < 0 && deltaX >= -76) {
            setTranslateX(deltaX);
        }
    };

    const handleDragEnd = () => {
        setDragging(false);
        document.body.classList.remove('no-select');
        if (translateX <= -30) {
            setTranslateX(-76);
            setIsSwiped(true);
        } else {
            setTranslateX(0);
            setIsSwiped(false);
        }
    };

    const handleReset = () => {
        setTranslateX(0);
        setIsSwiped(false);
    };

    const handleCardClick = () => {
        if (isSwiped) {
            handleReset();
        }
    };
    return (
        <Link href="/downloads/23">
            <div className="min-w-[343px] w-full flex justify-center">
                <div css={wrapperStyle}>
                    {isSwiped && <div css={overlayStyle} onClick={handleReset}/>}
                    <CardStyle
                        css={[
                            {
                                transform: `translateX(${translateX}px)`,
                            },
                        ]}
                        onMouseDown={handleDragStart}
                        onMouseMove={handleDragMove}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={handleDragStart}
                        onTouchMove={handleDragMove}
                        onTouchEnd={handleDragEnd}
                        onClick={handleCardClick}
                    >

                        <InnerWrapper>
                            <div>
                                <MovieImage image={image}/>
                            </div>
                            <div className="flex flex-col items-start">
                                <Typography.Text color="white" weight="medium"
                                                 className="!text-[20px] leading-[32px]">{title}</Typography.Text>
                                <Typography.Paragraph color="gray400" weight="normal"
                                                      className="!text-[14px] line-clamp-2 leading-[20px]">{description}</Typography.Paragraph>
                            </div>
                        </InnerWrapper>

                    </CardStyle>
                    {isSwiped && (
                        <DeleteIconStyle
                            onClick={() => setDeleteModalOpen(true)}
                            aria-label="Delete Card"
                        >
                            <Icon name="RedDelete" className="w-[28px] h-[28px]"/>
                        </DeleteIconStyle>
                    )}
                </div>
                <DeleteModal id={id} onDelete={() => onDelete(id)} open={deleteModalOpen} onClose={() => {
                    setDeleteModalOpen(false)
                    handleCardClick()
                }}/>
            </div>
        </Link>
    );
};
