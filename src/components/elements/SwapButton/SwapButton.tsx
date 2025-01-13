'use client';

import styled from '@emotion/styled';

interface SwapButtonProps {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
}

const ToggleWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

const ToggleButton = styled.button<{ checked?: boolean; disabled?: boolean }>`
    width: 44px; 
    height: 24px; 
    border-radius: 9999px;
    position: relative;
    border: none;
    outline: none;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    background-color: ${({ checked, theme }) =>
            checked
                            ? theme.components.green300
                            : theme.components.gray700};
    transition: background-color 0.3s ease-in-out;
    opacity: ${({  disabled }) =>
            disabled
                    ? 0.3
                    : 1};
   
`;

const ToggleCircle = styled.span<{ checked?: boolean; disabled?: boolean }>`
    width: 16px; 
    height: 16px;
    background-color: ${({ checked, theme }) =>
       checked
                            ? theme.components.green100
                            : theme.components.gray500};
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: ${({ checked }) => (checked ? 'calc(100% - 16px - 4px)' : '4px')};
    transform: translateY(-50%);
    transition: left 0.3s ease-in-out, background-color 0.3s ease-in-out;
    filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.15));
`;

export const SwapButton = ({
                               checked,
                               onCheckedChange,
                               disabled = false,
                           }: SwapButtonProps) => {
    const handleClick = () => {
        if (!disabled) {
            if (onCheckedChange) {
                onCheckedChange(!checked);
            } // Call the parent callback with the new state
        }
    };

    return (
        <ToggleWrapper>
            <ToggleButton
                checked={checked}
                onClick={handleClick}
                aria-pressed={checked}
                disabled={disabled}
            >
                <ToggleCircle checked={checked} disabled={disabled} />
            </ToggleButton>
        </ToggleWrapper>
    );
};
