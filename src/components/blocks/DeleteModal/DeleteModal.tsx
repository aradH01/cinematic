'use client';

import styled from "@emotion/styled";
import React from "react";
import {Icon} from "@/components/elements/Icon";
import {Typography} from "@/components/elements/Typography";

interface DeleteModalProps {
    open: boolean;
    onClose: () => void;
    onDelete: (id: number) => void
    id:number
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
  width: 330px;
  height: 220px;
  background-color: ${({ theme }) => theme.components.black400};
  border-radius: 28px;
    backdrop-filter: blur(50px);
    border: 1px solid ${({ theme }) => theme.components.black500};
  padding: 16px;
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

const StyledButton= styled.button`
    background-color: ${({ theme }) => theme.components.black400};
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`

export const DeleteModal= ({ open, onClose  , onDelete , id}:DeleteModalProps) => {
    if (!open) return null;

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={handleModalClick}>
                <Icon name="RedDelete" className="w-8 h-8" />
               <div className="flex flex-col items-center">
                   <Typography.Text color="white" weight="bold" size="md" className="font-urbanist leading-[28px]">Delete movie?</Typography.Text>
                   <Typography.Paragraph color="white700" weight="normal" size="sm" className="text-center font-urbanist leading-[28px]">Are you sure you want to delete movie?
                       This action cannot be undone</Typography.Paragraph>
               </div>
                <div className="flex w-full items-center justify-center gap-[1px]">
                    <StyledButton className="font-urbanist text-white rounded-tl-[16px] rounded-bl-[16px]" onClick={onClose}>Cancel</StyledButton>
                    <StyledButton className="font-urbanist text-red300 rounded-br-[16px] rounded-tr-[16px]" onClick={() => onDelete(id)}>Delete</StyledButton>
                </div>
            </ModalContainer>
        </Overlay>
    );
};
