'use client'
import {Typography} from "@/components/elements/Typography";
import {RadioButton} from "@/components/elements/RadioButton";
import {LabelRadioButton} from "@/components/elements/LabelRadioButton";
import {useState} from "react";
import {InterestsCat, InterestsTypes, Path, ShowImages} from "@/core/constants/enums";
import {InterestsCheckbox, ShowsImageCheckbox} from "@/components/elements/Checkbox";
import styled from "@emotion/styled";
import {Icon} from "@/components/elements/Icon";
import {useRouter} from "next/navigation";


const Wrapper = styled.div<{ length: number }>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 6px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(8, 1fr)); /* Responsive grid for larger screens */

    /* Apply 4 columns for screens smaller than 768px */
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* 4 columns layout */
    }
    
    & > :nth-child(1) {
        div {
            img {
                @media (max-width: 768px) {
                    border-radius: 24px 8px 8px 8px;
                }
            }
        }
    }

    & > :nth-child(4) {
        div {
            img {
                @media (max-width: 768px) {
                    border-radius: 8px 24px 8px 8px;
                }
            }
        }
    }

    & > :nth-last-child(1) {
        div {
            img {
                @media (max-width: 768px) {
                    border-radius: 8px 8px 24px 8px;
                }
            }
        }
    }

    & > :nth-child(${({ length }) => length - 3}) {
        div {
            img {
                @media (max-width: 768px) {
                    border-radius: 8px 8px 8px 24px;
                }
            }
        }
    }
`;


export default function InterestsPage(){
    const [selectedOption, setSelectedOption] = useState<string | null>('genres');
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const router = useRouter();
    const handleNext=()=>{
        router.push(Path.Settings);
    }
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
                                  weight="bold" level="h1">
                    Choose your interests
                </Typography.Title>
                <Typography.Text size="md"
                                 className="leading-[28px] mt-[2px] !font-lecturis-rounded text-center"
                                 color="gray400" weight="normal">
                    Get better video recommendations
                </Typography.Text>
            </div>
            <div className="mt-4 mb-[35px]">
                <LabelRadioButton className="max-w-[78px] h-[32px] rounded-[12px] flex items-center justify-center"
                                  options={InterestsCat} checked={selectedOption} onChange={handleTypeChange}/>
            </div>
            <div className="flex flex-wrap gap-[6px]">
                {selectedOption === 'genres' ?
                    InterestsTypes.map((interest) => (
                        <InterestsCheckbox
                            title={interest.title} key={interest.id}
                            onChange={(checked) => handleCheckboxChange(interest.title, checked)}
                        />
                    ))
                    :
                    <Wrapper length={ShowImages.length} className="max-w-full md:max-w-[1340px]">
                        {ShowImages.map((image, index) => (
                            <ShowsImageCheckbox
                                key={index}
                                image={image}
                                isChecked={selectedImages.includes(image)}
                                onChange={() => handleCheckboxToggle(image)}
                            />
                        ))}
                    </Wrapper>
                }
            </div>
            <button onClick={handleNext}
                    className="fixed z-[15] bottom-[3rem] left-1/2 transform -translate-x-1/2 mx-auto border-border100 shadow-signInNext  border-solid border p-[20px] w-[72px] h-[72px] flex items-center justify-center rounded-full bg-white800">
                <Icon name="SignInNextArrow" className="w-[24x] h-[24px]"/>
            </button>
        </div>
    )
}
