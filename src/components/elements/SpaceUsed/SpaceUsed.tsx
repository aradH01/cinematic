import React from "react";
import styled from "@emotion/styled";
import {Typography} from "@/components/elements/Typography";

const CircleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const ProgressRing = styled.svg`
    width: 56px;
    height: 56px;
    transform: rotate(-85deg);
`;

const PercentageText = styled.div<{ isRed: boolean }>`
    font-size: 24px;
    font-weight: 600;
    color: ${({ isRed }) => (isRed ? "#FF4D4F" : "#fff")};
    text-align: left;
    line-height: 32px;
    
`;

interface SpaceUsedProps {
    used: number; // Used space in GB
    total: number; // Total space in GB
    warningThreshold?: number; // Percentage at which the background turns red
}

export const SpaceUsed: React.FC<SpaceUsedProps> = ({
                                                        used,
                                                        total,
                                                        warningThreshold = 80,
                                                    }) => {
    const percentage = Math.min((used / total) * 100, 100);
    const isRed = percentage >= warningThreshold;

    const radius = 20; // Adjusted for larger stroke width while maintaining size
    const circumference = 2 * Math.PI * radius;

    const strokeDashoffset =
        circumference - (percentage / 100) * circumference;

    return (
        <CircleContainer>
            <ProgressRing width={56} height={56}>
                <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    stroke="#FFFFFF1A"
                    strokeWidth="8"
                />
                <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    stroke={isRed ? "#FF0000" : "#FF4D4F"}
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </ProgressRing>
           <div className="flex items-stert flex-col">
               <Typography.Text color="white500" className="leading-[24px] font-urbanist" weight="medium" size="sm">Space used</Typography.Text>
               <PercentageText isRed={isRed} className="font-urbanist">
                   {Math.round(percentage)}% Of {total} Gb
               </PercentageText>
           </div>
        </CircleContainer>
    );
};
