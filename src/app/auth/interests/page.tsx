'use client'
import {Typography} from "@/components/elements/Typography";
import {RadioButton} from "@/components/elements/RadioButton";
import {LabelRadioButton} from "@/components/elements/LabelRadioButton";
import {useState} from "react";
import {InterestsCat, InterestsTypes, ShowImages} from "@/core/constants/enums";
import {InterestsCheckbox, ShowsImageCheckbox} from "@/components/elements/Checkbox";
import dsd from '../../../../public/images/show2.svg'
export default function InterestsPage(){
    const [selectedOption, setSelectedOption] = useState<string | null>('genres');
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const handleTypeChange = (value: string) => {
        setSelectedOption(value);

    };

    const handleCheckboxChange = (title: string, checked: boolean) => {
        setSelectedInterests((prev) =>
            checked ? [...prev, title] : prev.filter((interest) => interest !== title)
        );
    };


    const handleCheckboxToggle = (image: string) => {
        setSelectedImages((prevSelected) =>
            prevSelected.includes(image)
                ? prevSelected.filter((img) => img !== image) // Uncheck
                : [...prevSelected, image]
        );
    };

    return(
        <div className="flex flex-col items-center px-[8px]">
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
                { selectedOption==='genres' ?
                    InterestsTypes.map((interest) => (
                        <InterestsCheckbox
                            title={interest.title} key={interest.id}
                            onChange={(checked) => handleCheckboxChange(interest.title, checked)}
                        />
                    ))
                    :
                    <div className="flex flex-wrap gap-[6px]">
                        {ShowImages.map((image , index) => (
                            <ShowsImageCheckbox
                                key={index}
                                image={image}
                                isChecked={selectedImages.includes(image)}
                                onChange={() => handleCheckboxToggle(image)}
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
