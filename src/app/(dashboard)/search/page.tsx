'use client'

import React, {useState} from "react";
import {CastsAvatar, MoviesCards, SearchBoxTypes, ShowImages, TopSearches} from "@/core/constants/enums";
import {TopSearchCard} from "@/components/blocks/TopSearchCard";
import {Typography} from "@/components/elements/Typography";
import Image from "next/image";
import {FactorAvatar} from "@/components/elements/FactorAvatar";
import {SearchBoxRadioButton} from "@/components/elements/LabelRadioButton";
import {ShowsImageCheckbox} from "@/components/elements/Checkbox";
import styled from "@emotion/styled";
import {EpisodeCard} from "@/components/blocks/EpisodeCard";
import EpisodeImage from "@/public/images/show1.jpg"
import {MovieCard} from "@/components/blocks/MovieCard";
import {SearchInput} from "@/components/elements/Input";
import {useTranslation} from "react-i18next";


const FranchisesWrapper = styled.div<{ length: number }>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 6px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(8, 1fr));


    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
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

    & > :nth-child(${({length}) => length - 3}) {
        div {
            img {
                @media (max-width: 768px) {
                    border-radius: 8px 8px 8px 24px;
                }
            }
        }
    }
`;


export default function SearchPage() {

    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string | null>('top-result');
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const {t} = useTranslation();

    const handleSearchCardClick = (title: string) => {
        setSearchValue(title);
    };
    const handleTypeChange = (value: string) => {
        setSelectedOption(value);

    };
    const handleCheckboxToggle = (image: string) => {
        setSelectedImages((prevSelected) =>
            prevSelected.includes(image)
                ? prevSelected.filter((img) => img !== image)
                : [...prevSelected, image]
        );
    };
    return (
        <div className="max-w-[600px] mx-auto">
            <div className="mt-[30px] px-4">
                <SearchInput
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value)

                    }}
                />
            </div>
            <div className="flex px-4 gap-8 items-center mt-4 max-w-[99%]">
                <SearchBoxRadioButton className="max-w-[156px] h-[32px] rounded-[12px] flex items-center justify-center"
                                      options={SearchBoxTypes} checked={selectedOption} onChange={handleTypeChange}/>
            </div>
            {selectedOption === 'top-result' &&
                <>
                    <Typography.Paragraph color="gray400" weight="semiBold" size="sm"
                                          className="px-4 font-urbanist leading-[24px] mt-4 mb-2">{t('top_searches')}</Typography.Paragraph>
                    <div className="w-full px-4 flex items-center flex-col gap-[2px]">
                        {TopSearches.map((word) => (
                            <TopSearchCard key={word.title} title={word.title}
                                           onClick={() => handleSearchCardClick(word.title)}/>
                        ))}
                    </div>
                    <Typography.Paragraph color="gray400" weight="semiBold" size="sm"
                                          className="font-urbanist px-4 leading-[24px] mt-4 mb-2">{t('suggested')}</Typography.Paragraph>
                    <div className="pl-4">
                        <div
                            className="bg-gray900 rounded-bl-[24px] rounded-tl-[24px] p-[12px] flex items-center gap-[6px] overflow-x-auto">
                            {
                                ShowImages.map((image, index) => (
                                    <div key={index} className="w-full min-w-[78px] h-[140px] relative rounded-lg">
                                        <Image src={image} alt="checkbox option" fill
                                               className="object-cover rounded-lg"/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Typography.Paragraph color="gray400" weight="semiBold" size="sm"
                                          className="font-urbanist px-4 leading-[24px] mt-4 mb-2">{t('cast_crew')}</Typography.Paragraph>
                    <div className="pl-4">
                        <div className="flex items-center overflow-x-auto">
                            {
                                CastsAvatar.map((avatar, index) => (
                                    <FactorAvatar name={avatar.name} image={avatar.image} key={index}/>
                                ))
                            }
                        </div>
                    </div>

                </>
            }
            {
                selectedOption === 'franchises' &&
                <div className="mt-4 px-[8px]">
                    <FranchisesWrapper length={ShowImages.length} className="max-w-full md:max-w-[1340px]">
                        {ShowImages.map((image, index) => (
                            <ShowsImageCheckbox
                                key={index}
                                image={image}
                                isChecked={selectedImages.includes(image)}
                                onChange={() => handleCheckboxToggle(image)}
                            />
                        ))}
                    </FranchisesWrapper>

                </div>
            }
            {
                (selectedOption === 'episodes' || selectedOption === 'series') &&
                <div className="px-4 flex flex-col items-stretch gap-[12px] mt-2">
                    {
                        MoviesCards.slice(0, 1).map((card, index) => (
                            <MovieCard key={index} image={card.image} title={card.title}
                                       description={card.description}/>
                        ))
                    }
                    <EpisodeCard image={EpisodeImage} title="And They Lived Happily" description="Seosen 1"/>
                    {
                        MoviesCards.slice(0, 1).map((card, index) => (
                            <MovieCard key={index} image={card.image} title={card.title}
                                       description={card.description}/>
                        ))
                    }
                </div>
            }

        </div>
    )
}
