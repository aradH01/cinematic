import styled from "@emotion/styled";
import React, { useState } from "react";
import { Typography } from "@/components/elements/Typography";

export interface InterestsCheckboxProps {
    title: string;
    onChange?: (checked: boolean) => void; // Optional callback for parent components
}

const Content = styled.div`
    position: relative;
    width: fit-content;
    height: 72px;
    border-radius: 61px;
    box-sizing: border-box;
    transition: all ease-in 250ms;
    background: ${({ theme }) => theme.components.black400};
    &:hover {
        filter: brightness(1.2);
    }

    span {
      
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 25px;
        transition: all ease-in 250ms;
        border-radius: 61px;
        border: none;
        outline: none;
        padding: 0 20px;
    }

    input {
        position: absolute;
        top: 0;
        left: 0;
        width: 140px;
        max-width: 99%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
        outline: none !important;
        border: none !important;
    }

    input[type="checkbox"]:checked ~ div {
        border: 3px solid ${({ theme }) => theme.components.checkboxActiveBorder};
        outline: none;
        transition: all ease-in 250ms;
    }

    input[type="checkbox"]:checked ~ span {
        color: #000;
    }
`;

export const InterestsCheckbox = ({ title, onChange }: InterestsCheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        setIsChecked(checked);
        if (onChange) onChange(checked);
    };

    return (
        <Content>
            <input type="checkbox" checked={isChecked} onChange={handleChange} />
            <div>
                <Typography.Text
                    weight="medium"
                    size="sm"
                    className="!font-urbanist"
                    color="white"
                >
                    {title}
                </Typography.Text>
            </div>
        </Content>
    );
};
