'use client';
import styled from "@emotion/styled";
import { Icon } from "@/components/elements/Icon";
import { Typography } from "@/components/elements/Typography";
import React, { useEffect, useRef, useState } from "react";
import { addClass } from "@/core/utils/classNames";

interface SearchBoxProps {
    className?: string;
    id?: string;
    error?: string;
    type?: string;
    placeholder?: string;
    label?: string;
    onChange?: (e: any) => void;
    onClick?: () => void;
    value?: string;
    onBlur?: () => void;
    onFocus?: () => void;
}

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.components.black400};
    width: 100%;
    transition: all ease 500ms;
    backdrop-filter: blur(25px);
    border-radius: 24px;

    &.error {
        input {
            border-color: red !important;
        }
    }

    .group {
        position: relative;
        width: 100%;
        text-align: left;

        input {
            text-align: left;
            padding: 12px 16px 12px 44px;
            background-color: transparent;
            display: block;
            transition: all ease 500ms;
            width: 100%;
            height: 48px;
            color: ${({ theme }) => theme.font.white};
            border: none;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-overflow: ellipsis;
            &:focus,
            &:valid {
                outline: none;
                border: none;
            }
        }
    }

    .error {
        color: red;
        margin: 5px 8px;
        font-size: 12px;
    }
`;

const StyledIcon = styled(Icon)`
    pointer-events: none;
    width: 20px;
    height: 20px;
`;

const SearchBox = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 8px;
    bottom: 50%;
    left: 50%;
    transition: all 0.5s ease;

    &.focused {
        left: -20px;
    }

    .search-text {
        transition: opacity 0.5s ease;
    }

    &.focused .search-text {
        opacity: 0;
    }
`;

const ClearIcon = styled.div`
    position: absolute;
    right: 16px;
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

        path {
            fill: ${({ theme }) => theme.font.white};
            opacity: 0.5;
        }
    }
`;

export default function SearchInput({
                                        className,
                                        error,
                                        type = "text",
                                        onChange,
                                        placeholder,
                                        value = "",
                                        label,
                                        ...props
                                    }: SearchBoxProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!value);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value.trim()) {
            setIsFocused(false);
        }
    };

    useEffect(() => {
        setHasValue(!!value);
        if (value) {
            setIsFocused(true);
            setHasValue(true)
        }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    const handleClear = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setHasValue(false);
        onChange?.({ target: { value: "" } }); // Clear the value externally
        if (inputRef.current) {
            inputRef.current.focus();
        }
        setIsFocused(true);
    };

    return (
        <Wrapper className={`search-box ${className ?? ""} ${error ? "error" : ""}`}>
            <div className="group">
                <ClearIcon
                    onClick={handleClear}
                    className={addClass(
                        isFocused && hasValue
                            ? "opacity-100 top-1/2 -translate-y-1/2"
                            : "opacity-0 top-[-25%]",
                        "transition-all"
                    )}
                >
                    <Icon name="Close" />
                </ClearIcon>

                <input
                    ref={inputRef}
                    required
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    {...props}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="font-urbanist"
                />
                <SearchBox
                    className={`translate-y-1/2 -translate-x-1/2 pointer-events-none ${
                        isFocused  ? "focused translate-x-1/2" : ""
                    }`}
                >
                    <StyledIcon
                        name="Search"
                        className={addClass(
                            isFocused
                                ? "[&>g]:opacity-100"
                                : "[&>g]:opacity-50",
                            "transition-all"
                        )}
                    />
                    <Typography.Paragraph
                        color="gray400"
                        size="sm"
                        weight="normal"
                        className="leading-6 font-urbanist text-ellipsis search-text"
                    >
                        Search
                    </Typography.Paragraph>
                </SearchBox>
            </div>
            {error && <span className="error">{error}</span>}
        </Wrapper>
    );
}
