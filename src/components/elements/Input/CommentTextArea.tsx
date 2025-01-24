/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import styled from "@emotion/styled";
import {addClass} from "@/core/utils/classNames";
import {Icon} from "@/components/elements/Icon";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: 16px 0;
`;

const StyledTextarea = styled.textarea<{ hasError?: boolean }>`
    width: 100%;
    height: 236px;
    padding: 16px 16px 35px 16px;
    border: 1px solid ${({theme}) => theme.components.black900};
    background-color: ${({theme}) => theme.components.black400};
    border-radius: 24px;
    resize: none;
    font-size: 16px;
    color: ${({theme}) => theme.font.white};
    font-weight: 400;
    line-height: 24px;
    box-shadow: none;
    outline: none;

`;

const Counter = styled.div`
    position: absolute;
    bottom: 16px;
    left: 16px;
    font-size: 12px;
    color: #595959;
`;


const ClearIcon = styled.div`
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    right: 16px;

    svg {
        transition: 0.3s ease all;
        width: 24px;
        height: 24px;

        path {
            fill: ${({theme}) => theme.font.white};
            opacity: 0.5;
        }
    }
`;
export const CommentTextArea = () => {
    const [text, setText] = useState("");
    const maxChars = 500;

    const handleClear = () => {
        setText("");
    };

    return (
        <Container className="no-scrollbar">
            <StyledTextarea
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, maxChars))}
                placeholder="Write your review..."
                className="font-urbanist no-scrollbar"
            />
            <Counter>{`${maxChars - text.length}/${maxChars}`}</Counter>
            <ClearIcon
                onClick={handleClear}
                className={addClass(
                    text.length > 0
                        ? "opacity-100 bottom-[16px]"
                        : "opacity-0 bottom-[-25%]",
                    "transition-all"
                )}
            >
                <Icon name="Close"/>
            </ClearIcon>
        </Container>
    );
};
