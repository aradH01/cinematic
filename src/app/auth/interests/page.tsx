'use client'
import {Typography} from "@/components/elements/Typography";
import {RadioButton} from "@/components/elements/RadioButton";
import {LabelRadioButton} from "@/components/elements/LabelRadioButton";
import {useState} from "react";
import {InterestsCat, InterestsTypes} from "@/core/constants/enums";
import {InterestsCheckbox} from "@/components/elements/Checkbox";

export default function InterestsPage(){
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const handleTypeChange = (value: string) => {
        setSelectedOption(value);

    };
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const handleCheckboxChange = (title: string, checked: boolean) => {
        setSelectedInterests((prev) =>
            checked ? [...prev, title] : prev.filter((interest) => interest !== title)
        );
    };

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <Typography.Title size="lt" className="leading-[40px] !font-lecturis-rounded text-center" color="white"
                                  weight="normal" level="h1">
                    Choose your interests
                </Typography.Title>
                <Typography.Text size="md"
                                 className="leading-[28px] mt-[2px] !font-lecturis-rounded text-center"
                                 color="gray400" weight="normal">
                    Get better video recommendations
                </Typography.Text>
            </div>
                <div className="mt-4 mb-[35px]">
                    <LabelRadioButton className="max-w-[78px] h-[32px] rounded-[12px] flex items-center justify-center" options={InterestsCat} checked={selectedOption} onChange={handleTypeChange} />
                </div>
            <div className="flex flex-wrap gap-[6px]">
                {
                    InterestsTypes.map((interest) => (
                        <InterestsCheckbox
                            title={interest.title} key={interest.id}
                            onChange={(checked) => handleCheckboxChange(interest.title, checked)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
