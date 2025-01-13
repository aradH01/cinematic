/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';
import { AvailableIcons, Icon } from "@/components/elements/Icon";
import { Typography } from "@/components/elements/Typography";

const DropdownWrapper = styled.div`
    position: relative;
    width: 200px;
`;

const DropdownButton = styled.button`
    width: 100%;
    height: 38px;
    border: 1px solid ${({ theme }) => theme.components.inputBackground};
    border-radius: 31px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    color: ${({ theme }) => theme.font.black400};
    cursor: pointer;
    font-family: Urbanist, sans-serif;
`;

const DropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.components.inputBackground};
    border-radius: 12px;
    list-style: none;
    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
    backdrop-filter: blur(12px);
`;

const DropdownItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    &:hover {
    }
`;

const ArrowIcon = styled(Icon)`
    width: 16px;
    height: 16px;
    transform: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
`;

interface DropdownProps {
    options: { value: string; id?: string | number; icon?: AvailableIcons; label: string }[];
    icon?: boolean;
    className?: string;
    selectedOption: { value: string; label: string; icon?: AvailableIcons } | null;
    onSelect: (option: { value: string; label: string; icon?: AvailableIcons }) => void;
}

export const Dropdown = ({ options, icon, className, selectedOption, onSelect }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleOptionSelect = (option: { value: string; label: string; icon?: AvailableIcons }) => {
        onSelect(option);
        setIsOpen(false);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <DropdownWrapper className={className} ref={dropdownRef}>
            <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                <span className="flex items-center gap-2">
                    <Icon name={selectedOption?.icon || 'Empty'} className="w-[22px] h-[22px]" />
                    <Typography.Text className="!text-[14px] font-urbanist font-semibold leading-[20px]" color="black400">
                        {selectedOption?.label}
                    </Typography.Text>
                </span>
                <ArrowIcon isOpen={isOpen} name="DropdownArrow" />
            </DropdownButton>
            {isOpen && (
                <DropdownList>
                    {options.map((option) => (
                        <DropdownItem key={option.value} onClick={() => handleOptionSelect(option)}>
                            {icon && <Icon name={option.icon || "Empty"} className="w-[22px] h-[22px]" />}
                            <Typography.Text
                                className="!text-[14px] font-urbanist font-semibold leading-[20px]"
                                color="black400"
                            >
                                {option.label}
                            </Typography.Text>
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </DropdownWrapper>
    );
};
