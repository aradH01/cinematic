import React from "react";
import {addClass} from "@/core/utils/classNames";

interface Option {
    value: string;
    label: string;
}

interface RadioButtonProps {
    options: Option[];
    checked: string | null;
    onChange: (value: string) => void;
    className?: string;
}

export const LabelRadioButton: React.FC<RadioButtonProps> = ({ options, checked, onChange, className }) => {
    return (
        <div className={addClass( "flex space-x-4")}>
            {options.map((option) => (
                <label
                    key={option.value}
                    className={addClass(className , `cursor-pointer px-[12px] border border-solid border-transparent py-[4px] rounded-[12px] transition-all
            ${
                        checked === option.value
                            ? "bg-white text-center border border-solid borer-border100 transition-all !font-lecturis-rounded font-normal text-[16px] text-black900 "
                            : "bg-black300 text-center !font-lecturis-rounded font-normal text-[16px] text-white500"
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
                    {option.label}
                </label>
            ))}
        </div>
    );
};

