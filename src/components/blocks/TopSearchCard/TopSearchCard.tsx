import { Typography } from "@/components/elements/Typography";
import { Icon } from "@/components/elements/Icon";
import React from "react";

interface TopSearchCardProps {
    title: string;
    onClick?: () => void;
}

export const TopSearchCard = ({ title, onClick }: TopSearchCardProps) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray800 border-b border-solid border-border100 rounded-full flex items-center justify-between p-[12px] w-full"
        >
            <Typography.Text color="white" size="sm" weight="normal" className="font-urbanist leading-6">
                {title}
            </Typography.Text>
            <Icon name="RightUpArrow" className="w-6 h-6" />
        </button>
    );
};
