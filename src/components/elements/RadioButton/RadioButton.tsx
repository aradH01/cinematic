'use client';

import styled from '@emotion/styled';
import React from 'react';

export interface RadioButtonProps {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Wrapper = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const HiddenRadio = styled.input`
    display: none;
`;

const StyledRadio = styled.span<{ checked: boolean }>`
    display: inline-block;
    width: 24px;
    height: 24px;
    border:2px solid ${({ checked, theme }) =>
            checked ? 'none' : theme.components.inputBackground};
    border-radius: 50%;
    position: relative;
    transition: background 0.3s ease, border-color 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12px;
        height: 12px;
        background-color: ${({ checked, theme }) =>
                checked ? theme.components.blue100 : 'transparent'};
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }

    background-color: ${({ checked, theme }) =>
            checked ? theme.components.green300 : 'transparent'};
`;

const Label = styled.span`
    margin-left: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.font.black};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
                                                            label,
                                                            name,
                                                            value,
                                                            checked = false,
                                                            onChange,
                                                        }) => {
    return (
        <Wrapper>
            <HiddenRadio
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <StyledRadio checked={checked} />
            <Label>{label}</Label>
        </Wrapper>
    );
};
