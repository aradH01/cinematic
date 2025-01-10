'use client';

import { Notification } from '@mantine/core';
import {Typography} from "@/components/elements/Typography";
import {FontColor} from "@/shared/styles/themes";
import {TypographySize} from "@/shared/styles/globals";

export interface ToastOptions {
  color?: string;
  title?: string;
  loading?:boolean;
  withCloseButton?: boolean;
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  text?: string;
  textColor?: FontColor;
  textSize?: TypographySize;
}

export const Toast = ({radius,text,textColor,color,withCloseButton,loading, title, textSize}:ToastOptions) => {
  return <Notification title={title} color={color} loading={loading} withCloseButton={withCloseButton} radius={radius}>
    <Typography.Text color={textColor} size={textSize} weight="medium">
      {text}
    </Typography.Text>
  </Notification>
};
