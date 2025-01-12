import styled from "@emotion/styled";
import React, { MouseEventHandler } from 'react';
import { AvailableIcons, Icon } from '@/components/elements/Icon';
import { addClass } from '@/core/utils/classNames';
import { Typography } from "../Typography";
import { Themes } from '@/shared/styles/themes';
import { LoadingCircle } from '@/components/elements/LoadingCircle';
import { getSize, Size } from '@/shared/styles/globals';


export interface ButtonProps {
  loading?: boolean,
  outlined?: boolean,
  opacity?: boolean,
  className?: string,
  title: string,
  disabled?: boolean,
  size?: Size,
  type?: "button" | "submit" | "reset" | undefined,
  width?: string,
  height?:string,
  ghost?: boolean,
  icon?: AvailableIcons,
    iconClass?:string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const StyledButton = styled.button<StyledButtonType>`
  border-radius: 500px;
  background: ${({theme}) => theme.components.fillButton};
  
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 700ms ease all;
  padding: 4px 12px;
  border-width: 1px 0 0 0;
    ${({ theme }) =>theme.name==='dark' && `
    border-width: 1px;
      border-color: rgba(0, 0, 0, 0.20) !important;
      border-style: solid;
    `}
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.20);
    ${({size, width , height}) => getSize(size, width , height)}
  width: ${({width}) => width || 'fit-content'};
  height: ${({height}) => height || '40px'};
  &:hover {
    box-shadow: 0px 0px 15px 1px rgba(217, 217, 217, 0.75) inset;
  }


  &.ghost {
    background: none;
    padding: 0;
    color: ${({theme}) => theme.font.black};
    border: none;
    &:hover {
      box-shadow: none;
    }
  }

  &.opacity {
    background: ${({theme}) => theme.components.opacityButton};

    span {
      color: ${({theme}) => theme.font.black} !important;
      font-size: 16px;
      font-weight: 500;
    }
    &:hover {
      box-shadow: none;
    }
  }

  &.loading {
    border: none !important;
    cursor: not-allowed !important;

    &:hover {
      box-shadow: none !important;
    }

    span {
      border-color: #B1ADA9 !important;
      border-bottom-color: #fff !important;
    }
  }

  &.outlined {
    border: 1px ${({theme}) => theme.components.outlinedButtonBorder} solid !important;
    color: ${({theme}) => theme.font.black} !important;
    background-color: ${({theme}) => theme.components.opacityButton} !important;
      ${({theme})=>theme.name==='dark' && `
      background-color: rgb(38,38,38) !important;
      color: #fff !important;
      `}
    &:hover {
      box-shadow: 0px 0px 15px 1px rgba(209, 209, 209, 0.75) inset;
    }
  }

  &:disabled {
      background-color: ${({ theme }) => theme.components.nonActive};
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
  ButtonProps,
  | 'size'
  | 'width'
  | 'height'
>;
export const Button: React.FC<ButtonProps> = ({
                                                loading,
                                                onClick,
                                                icon,
                                                ghost,
                                                size,
                                                width,
                                                height='40px',
                                                outlined,
                                                disabled,
                                                className,
                                                title,
                                                type,
                                                  opacity,
    iconClass,
                                                ...props
                                              }) => {
  return (
    <StyledButton
      className={addClass("" , `app-button ${className ?? ''} ${loading ? "loading" : ''} ${ghost ? "ghost" : ''} ${opacity ? "opacity" : ''} ${outlined ? "outlined" : ''}`)}
      disabled={disabled}
      size={size}
      width={width}
      height={height}
      type={type}
      onClick={onClick}
      {...props}
    >
      {loading ?
        <LoadingCircle
          opacity={1}
          color={Themes.dark.components.nonActive}
          size="md"
        /> : ''}
      <div className="flex items-center gap-[10px]">
        <Icon name={icon || 'Empty'} className={iconClass}/>
        <span className={addClass((outlined || ghost) ? "text-black dark:text-white font-urbanist" : "text-white dark:text-black font-urbanist" , "font-medium text-[16px] font-urbanist")}
                         >{loading ? "Loading" : title}</span>

      </div>
    </StyledButton>
  )
}
