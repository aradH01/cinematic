'use client'
import styled from "@emotion/styled";
import React, {forwardRef, useState} from "react";
import {AvailableIcons, Icon} from '@/components/elements/Icon';
import {Typography} from "../Typography";
import {Simulate} from "react-dom/test-utils";


export interface InputProps {
    label: string,
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
    font-size: 16px;
    text-align: left;
    height: 68px;
    margin-top: 8px;
    padding: 32px 16px 8px ${({hasIcon}) => (hasIcon ? "40px" : "16px")};
    background-color: ${({theme}) => theme.components.inputBackground};
    transition: 600ms ease all;
    display: block;
    color: ${({theme}) => theme.font.black};
    border-radius: 24px;
    caret-color: ${({theme}) => theme.components.green300};

    &:hover {

    }

    &:focus, &:valid {
        outline: none;   
        //box-shadow: 0px 0px 10px 0px rgba(64, 64, 64, 0.6);
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
export const Input = forwardRef<HTMLInputElement, InputProps>(({
                                                                   className,
                                                                   placeHolder,
                                                                   label,
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
        e.preventDefault(); // Prevent any unintended behavior
        setValue("");


        const inputElement = e.currentTarget
            .parentElement?.querySelector("input") as HTMLInputElement;
        inputElement?.focus();
    };

        return (
            <Wrapper className={className}>
                <Container>
                    <Label className="font-urbanist">{label}</Label>
                    {value && (
                        <ClearIcon onClick={handleClear}>
                            <Icon name="Close"/>
                        </ClearIcon>
                    )}
                    <StyledInput hasIcon={!!icon}
                                 onChange={handleInputChange} value={value}
                                 placeholder={placeHolder} required ref={ref} type={type} {...rest}/>
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
Input.displayName = "Input"
