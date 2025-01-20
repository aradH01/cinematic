import React from "react";
import {addClass} from "@/core/utils/classNames";
import {useTranslation} from "react-i18next";

interface Option {
    value: string;
    label: string;
}

interface SearchBoxRadioButtonProps {
    options: Option[];
    checked: string | null;
    onChange: (value: string) => void;
    className?: string;
}

export const SearchBoxRadioButton: React.FC<SearchBoxRadioButtonProps> = ({ options, checked, onChange, className }) => {
    const { t } = useTranslation();
    return (
        <div className={addClass( "flex ")}>
            {options.map((option) => (
                <label
                    key={option.value}
                    className={addClass(className, `w-max cursor-pointer px-[12px] border border-solid border-transparent py-[4px] rounded-full transition-all
            ${
                        checked === option.value
                            ? "bg-white text-center border border-solid borer-border100 transition-all !font-urbanist font-medium text-[16px] text-black900 "
                            : " text-center font-urbanist font-medium text-[16px] text-white500"
                    }`)}
                >
                    <input
                        type="radio"
                        name="radioGroup"
                        value={option.value}
                        className="hidden"
                        onChange={() => onChange(option.value)}
                        checked={checked === option.value}
                    />
                    {t(option.label)}
                </label>
            ))}
        </div>
    );
};

