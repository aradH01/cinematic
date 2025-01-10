import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { Icon } from "@/components/elements/Icon"; // Replace with your icon component

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
`;

const InputContainer = styled.div`
    flex-grow: 1; /* Allow input to take available space */
    display: flex;
    flex-direction: column;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    border-radius: 24px;
    outline: none;
    background-color: ${({ theme }) => theme.components.inputBackground};
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.font.black};
    min-height: 40px;
    max-height: 120px; 
    overflow-y: auto; 
    caret-color: ${({theme}) => theme.components.green300};
    padding: 8px 16px;
`;

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.components.fillButton};
  color: white;
    border-width: 1px 0 0 0;
    ${({ theme }) =>theme.name==='dark' && `
    border-width: 1px;
      border-color: rgba(0, 0, 0, 0.20) !important;
      border-style: solid;
    `}
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.20);
  border-radius: 100%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
    width: 40px;
    height: 40px;
  &:hover {
      box-shadow: 0px 0px 15px 1px rgba(217, 217, 217, 0.75) inset;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.nonActive};
    cursor: not-allowed;
      box-shadow: none;
  }
`;

export const SendBox = () => {
    const [message, setMessage] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);


        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // Reset height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleSend = () => {
        if (message.trim()) {
            console.log("Message sent:", message);
            setMessage("");
            if (textareaRef.current) {
                textareaRef.current.style.height = "40px"; // Reset to initial height
            }
        }
    };

    return (
        <Wrapper>
            <InputContainer>
                <StyledTextarea
                    ref={textareaRef}
                    placeholder="Type your message..."
                    value={message}
                    onChange={handleInputChange}
                    rows={1}
                />
            </InputContainer>
            <SendButton onClick={handleSend} disabled={!message.trim()}>
                <Icon name="UpArrow" className="w-6 h-6"/>
            </SendButton>
        </Wrapper>
    );
};
