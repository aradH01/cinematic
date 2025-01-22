'use client'
import styled from "@emotion/styled";
import React, {forwardRef, useState} from "react";
import {AvailableIcons, Icon} from '@/components/elements/Icon';
import {Typography} from "../Typography";
import {useTranslation} from "react-i18next";


export interface PhoneInputProps {
    type?: string,
    icon?: AvailableIcons,
    error?: string,
    className?: string,
    placeHolder?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
}

const Wrapper = styled.div`
`
const Container = styled.div`
    width: 100%;
    text-align: left;
    position: relative;
    backdrop-filter: blur(25px);

`


const StyledInput = styled.input<{ hasIcon: boolean }>`
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    height: 56px;
    padding: 12px 16px 12px ${({hasIcon}) => (hasIcon ? "20px" : "16px")};
    background-color: ${({theme}) => theme.components.black500};
    transition: 600ms ease all;
    display: block;
    color: ${({theme}) => theme.components.white500};
    border-radius: 999px;
    backdrop-filter: blur(15px);
    text-overflow: ellipsis;
    &:hover {

    }

    &:focus, &:valid {
        outline: none;
       
    }
`
const PassIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-15px, -50%);

`
const StyledIcon = styled.div`
    position: absolute;
    top: 65%;
    left: 0;
    transform: translate(15px, -50%);

`
const Label = styled.label`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    pointer-events: none;
    position: absolute;
    top: 8px;
    left: 16px;
    color: ${({theme}) => theme.font.red300};
`
const ErrorText = styled.div`
    span {
        color: ${({theme}) => theme.font.errorText};
        margin-top: 6px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        font-family: Urbanist;
    }
`
const ClearIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;

    svg {
        transition: 0.3s ease all;
        width: 24px;
        height: 24px;

        &:hover {
            fill: ${({theme}) => theme.font.black};
        }
    }
`;
export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(({
                                                                             className,
                                                                             placeHolder,
                                                                             type,
                                                                             icon,
                                                                             error,
                                                                             ...rest
                                                                         }, ref) => {
        const [value, setValue] = useState("");
        const [focus, setFocus] = useState(false);

        const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            setValue(e.target.value);
            if (rest.onChange) rest.onChange(e);
        };
        const handleClear = (e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            setValue("");


            const inputElement = e.currentTarget
                .parentElement?.querySelector("input") as HTMLInputElement;
            inputElement?.focus();
        };
        const {t} = useTranslation();

        return (
            <Wrapper className={className}>
                <Container>
                    {value && (
                        <ClearIcon onClick={handleClear}>
                            <Icon name="Close"/>
                        </ClearIcon>
                    )}
                    <StyledInput hasIcon={!!icon}
                                 onChange={handleInputChange} value={value}
                                 placeholder={`${t(placeHolder || '')}`} required ref={ref} type={type} {...rest}/>
                    {icon ? <StyledIcon>
                        <Icon name={icon || "Empty"}/>
                    </StyledIcon> : ''}
                </Container>
                <ErrorText>
                    {error &&
                        <Typography.Text color="errorText">
                            {error}
                        </Typography.Text>
                    }
                </ErrorText>
            </Wrapper>
        )
    }
)
PhoneInput.displayName = "PhoneInput"
