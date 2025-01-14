/** @jsxImportSource @emotion/react */
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styled from "@emotion/styled";

interface PhoneNumberInputProps {
    value: string | undefined;
    onChange: (value: string | undefined) => void;
}

const StyledPhoneNumberInput= styled(PhoneInput)`
    input{
        background: ${({theme}) => theme.components.black500};
        width: 309px;
        height: 56px;
        border-radius: 999px;
        backdrop-filter: blur(15px);
        padding: 12px 16px;
        color: ${({theme}) => theme.font.gray400};
        &:focus-visible{
            border: none;
            outline: none;
        }
    }
    .PhoneInputCountry{
        display: flex;
        background: ${({theme}) => theme.components.black500};
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        width: 56px;
        height: 56px;
        .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
            box-shadow: none !important;
        }
        .PhoneInputCountrySelectArrow{
          display: none;
        }
    }
`


export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ value, onChange }) => {
    return (
        <div
            css={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                maxWidth: "300px",
                margin: "0 auto",
            }}
        >
            <StyledPhoneNumberInput
                value={value}
                onChange={onChange}
                defaultCountry="US"
                international
                withCountryCallingCode
                placeholder="Enter phone number"
            />
        </div>
    );
};

