import styled from "@emotion/styled";
import React, {MouseEventHandler, useState} from 'react';
import {AvailableIcons, Icon} from '@/components/elements/Icon';
import {addClass} from '@/core/utils/classNames';
import {getSize, Size} from '@/shared/styles/globals';
import {SwapButton} from "@/components/elements/SwapButton";
import {useTranslation} from "react-i18next";


export interface SettingButtonProps {
    className?: string,
    title: string,
    disabled?: boolean,
    size?: Size,
    type?: "button" | "submit" | "reset" | undefined,
    width?: string,
    height?: string,
    icon?: AvailableIcons,
    outline?: boolean,
    link?: string
    iconClass?: string,
    redIcon?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
    description?: string
    swapButton?: boolean
    swapButtonChecked?: boolean;
    swapButtonOnCheckedChange?: (checked: boolean) => void;
    swapButtonDisabled?: boolean;
}

export const StyledSettingButton = styled.button<StyledButtonType>`
    border-radius: 500px;
    background: ${({theme}) => theme.components.black900};
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 700ms ease all;
    padding: 12px;
    ${({size, width, height}) => getSize(size, width, height)}
    width: ${({width}) => width || 'fit-content'};
    height: ${({height}) => height || '64px'};



    &.outline {
        border: 1px ${({theme}) => theme.components.outlinedButtonBorder} solid !important;
        color: ${({theme}) => theme.font.black} !important;
        background-color: ${({theme}) => theme.components.opacityButton} !important;

        ${({theme}) => theme.name === 'dark' && `
      background-color: rgb(38,38,38) !important;
      color: #fff !important;
      `}
        &:hover {
            box-shadow: 0px 0px 15px 1px rgba(209, 209, 209, 0.75) inset;
        }
    }

    &:disabled {
        background-color: ${({theme}) => theme.components.nonActive};
        border: none !important;
        cursor: not-allowed !important;
        filter: blur(2px);
        box-shadow: none;

        svg {
            animation: none;
        }

        &:hover {
            box-shadow: none !important;
        }
    }
`

type StyledButtonType = Pick<
    SettingButtonProps,
    | 'size'
    | 'width'
    | 'height'
>;
export const SettingButton: React.FC<SettingButtonProps> = ({
                                                                onClick,
                                                                icon,
                                                                size,
                                                                width = '100%',
                                                                height = '64px',
                                                                disabled,
                                                                className,
                                                                title,
                                                                type,
                                                                link,
                                                                outline,
                                                                redIcon,
                                                                description,
                                                                swapButton,
                                                                swapButtonOnCheckedChange,
                                                                swapButtonDisabled,
                                                                swapButtonChecked,
                                                                iconClass,
                                                                ...props
                                                            }) => {

    const [isCopied, setIsCopied] = useState(false);
    const {t} = useTranslation();
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (link) {

            navigator.clipboard.writeText(link)
                .then(() => {
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                })
                .catch((err) => {
                    console.error('Failed to copy text: ', err);
                });
        }

        if (onClick) {
            onClick(e);
        }
    };

    return (
        <StyledSettingButton
            className={addClass("", `app-button ${className ?? ''}    ${outline ? "outline" : ''}`)}
            disabled={disabled}
            size={size}
            width={width}
            height={height}
            type={type}
            onClick={handleClick}
            {...props}
        >

            <div className="flex items-center gap-[12px]">
                <div
                    className={addClass(redIcon ? 'bg-red200' : 'bg-border100', 'p-2 flex items-center justify-center rounded-full w-[40px] h-[40px]')}>
                    <Icon name={icon || 'Empty'} className={addClass(iconClass, 'w-6 h-6')}/>
                </div>
                <div className="flex flex-col items-start">
                    <span className={addClass("font-urbanist font-normal text-[16px] leading-[24px] text-white")}
                    >{t(title)}</span>
                    {
                        description &&
                        <span className={addClass("font-urbanist font-normal text-[14px] leading-[20px] text-white500")}
                        >{t(description)}</span>
                    }

                </div>
            </div>
            {
                swapButton ?
                    <SwapButton checked={swapButtonChecked} disabled={swapButtonDisabled}
                                onCheckedChange={swapButtonOnCheckedChange}/>
                    :
                    <Icon name="RightUpArrow" className="w-6 h-6"/>
            }
            {isCopied && (
                <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-sm rounded-md">
                    Copied!
                </span>
            )}

        </StyledSettingButton>
    )
}
