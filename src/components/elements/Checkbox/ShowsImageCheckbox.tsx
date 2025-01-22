import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import {Icon} from "@/components/elements/Icon";

interface ShowsImageCheckboxProps {
    image: string;
    isChecked: boolean;
    onChange: () => void;
}

const CheckboxWrapper = styled.div`
    position: relative;
    width: 85px;
    height: 140px;
    cursor: pointer;

    input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 2;
        cursor: pointer;
      
        outline: none;
        border: none;

 
        &:focus,
        &:focus-visible {
            outline: none;
            box-shadow: none;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        transition: transform 0.3s ease;
        filter: ${({isChecked}: { isChecked: boolean }) =>
    isChecked ? "brightness(0.5)" : "none"};
    }

    
`;
const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${({isChecked}: { isChecked: boolean }) =>
    isChecked ? 1 : 0};
    transition: opacity 0.3s ease;
    z-index: 1;
    width: 32px;
    height: 32px;
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
export const ShowsImageCheckbox = ({
                                       image,
                                       isChecked,
                                       onChange,
                                   }: ShowsImageCheckboxProps) => {
    return (
        <CheckboxWrapper isChecked={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            <div className="w-full h-[140px] relative">
                <Image src={image} alt="checkbox option" fill className="object-cover"/>
            </div>
            <IconWrapper isChecked={isChecked}>
                <Icon className="icon" name="Tick"/>
            </IconWrapper>
        </CheckboxWrapper>
    );
};
