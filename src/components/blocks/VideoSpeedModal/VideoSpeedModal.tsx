'use client';

import styled from "@emotion/styled";
import React from "react";
import {useTranslation} from "react-i18next";
import {addClass} from "@/core/utils/classNames";
import {Icon} from "@/components/elements/Icon";

interface VideoSpeedModalProps {
    open: boolean;
    onClose: () => void;
    options: Option[];
    checked: string | null;
    onChange: (value: string) => void;
    className?: string;
}
interface Option {
    value: string;
}


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 222px;
  height: 200px;
    bottom: -250px;
    overflow-y: auto;
  background-color: ${({theme})=> theme.components.gray900};
  border-radius: 24px;
  backdrop-filter: blur(25px);
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  animation: fadeIn 0.3s ease-out;
    gap: 1rem;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    width: 100%;
`
const IconWrapper = styled.div`
    opacity: ${({isChecked}: { isChecked: boolean }) =>
    isChecked ? 1 : 0};
    transition: opacity 0.3s ease;
    z-index: 1;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color: ${({theme}) => theme.components.red300};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({theme}) => theme.font.white};
    .icon {
        width: 24px;
        height: 24px;
    }
`
export const VideoSpeedModal = ({open, onClose,  checked , onChange , className , options}: VideoSpeedModalProps) => {
    const {t} = useTranslation();

    if (!open) return null;
    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };


    return (
        <Overlay onClick={onClose}>
            <ModalContainer className="no-scrollbar" onClick={handleModalClick}>
                <Card className="no-scrollbar">
                    {options.map((option) => (
                        <label
                            key={option.value}
                            className={addClass(className, `w-full cursor-pointer p-[12px]  transition-all rounded-full flex items-center justify-between text-[16px] font-urbanist font-medium leading-6 text-white bg-gray900
            ${
                                checked === option.value
                                    ? "border-[2px] border-solid border-red300"
                                    : "border-[2px] border-solid border-transparent min-w-max gap-[1px]"
                            }`)}
                        >
                            <input
                                type="radio"
                                name="radioGroup"
                                value={option.value}
                                className="hidden"
                                onChange={() => onChange(option.value)}
                                checked={checked === option.value}
                            />
                            {t(option.value)}
                            <IconWrapper isChecked={ checked === option.value}>
                                <Icon className="icon" name="Tick"/>
                            </IconWrapper>
                        </label>
                    ))}
                </Card>
            </ModalContainer>
        </Overlay>
    );
};
