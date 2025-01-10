'use client'
import { ReactNode } from 'react';

import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { settings } from '@/shared/styles/Settings';
import { AppTheme, FontColor } from '@/shared/styles/themes';
import { TypographySize, typographySizeOptions, typographyWeightOptions } from '@/shared/styles/globals';


type TypographyWeight = keyof typeof typographyWeightOptions;

export const titleLevelOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
type TitleLevelType = (typeof titleLevelOptions)[number];

export type TitleProps = {
  level: TitleLevelType;
  children?: ReactNode;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: FontColor;
  className?: string;
};

export type TextProps = {
  children?: ReactNode;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: FontColor;
  className?: string;
};

type TextType = Omit<TextProps, 'children'>;

const getTextStyles = (
  color: FontColor,
  size: TypographySize,
  weight: TypographyWeight,
  theme: AppTheme
): SerializedStyles => css`
  font-size: ${typographySizeOptions[size]};
  font-weight: ${typographyWeightOptions[weight]};
  color: ${theme.font[color]};
  font-family: ${settings.fontFamily};
`;

const StyledParagraph = styled.p<TextType>`
  ${({ color = 'black', size = 'sm', weight = 'normal', theme }) =>
    getTextStyles(color, size, weight, theme)}
`;

const StyledText = styled.span<TextType>`
  ${({ color = 'black', size = 'sm', weight = 'normal', theme }) =>
    getTextStyles(color, size, weight, theme)}
`;

const Paragraph = (props: TextProps) => {
  return <StyledParagraph {...props} />;
};

const Text = (props: TextProps) => {
  return <StyledText {...props} />;
};

const Title = (props: TitleProps) => {
  // eslint-disable-next-line no-undef
  const HeadingTag = props.level as keyof JSX.IntrinsicElements;

  const StyledHeadingTag = styled(HeadingTag)<TitleProps>`
    ${({ color = 'black', size = 'sm', weight = 'normal', theme }) =>
      getTextStyles(color, size, weight, theme)}
  `;
  return <StyledHeadingTag {...props} />;
};

export const Typography = { Title, Text, Paragraph };
