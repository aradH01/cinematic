'use client'

import {Typography} from "@/components/elements/Typography";
import styled from "@emotion/styled";
import {Button , GoogleButton} from "@/components/elements/Button";
import {AvailableIcons, Icon} from "@/components/elements/Icon";
import {Dropdown} from "@/components/elements/Dropdown";
import {LanguagesList, Path} from "@/core/constants/enums";
import {useEffect, useState} from "react";
import {useGeolocation} from "@/shared/hooks/useGeolocation";
import {useRouter} from "next/navigation";
import {useTranslation} from "react-i18next";
import AppleSignInButton from "@/components/elements/Button/AppleButton";
const ProjectName= styled.h1`
    color: ${({theme})=> theme.font.white};
    text-align: center;
    text-shadow: 4px 4px 0px #000;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #000;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const StyledButton = styled(Button)`
    background: transparent;
    border-radius: 999px;
    border: 2px solid ${({theme})=> theme.font.white};
    backdrop-filter: blur(15px);
    width: 100%;
    span{
        font-family: Urbanist;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; 
    }
`

export default function GetStartPage() {
    const language = useGeolocation();
    const { t, i18n } = useTranslation();
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; icon?: AvailableIcons } | null>(null);
    const router=useRouter()
    i18n.on('languageChanged', (lng) => {
        console.log(`Global language changed to: ${lng}`);
    });
   /* useEffect(() => {
        if (language==='en'){
            setSelectedOption({value: 'en', label: 'English', icon: 'UsFlag'})
        } if (language==='az'){
            setSelectedOption({value: 'az', label: 'Turkish', icon: 'AzarbaijanFlag'})
        }if (language==='ru'){
            setSelectedOption({value: 'ru', label: 'Russian', icon: 'RussianFlag'})
        }
    }, [language]);*/

    useEffect(() => {
        const currentLanguage = i18n.language || 'en';
        const languageOption = LanguagesList.find(
            (lang) => lang.value === currentLanguage
        );
        if (languageOption) {
            setSelectedOption(languageOption);
        }
    }, [i18n.language]);

    const handleLanguageChange = (lang: string) => {

        if (i18n?.changeLanguage) {
            i18n.changeLanguage(lang)
                .then(() => console.log(`Language changed to: ${lang}`))
                .catch((err) => console.error('Error changing language:', err));
        } else {
            console.error('i18n.changeLanguage is not a function');
        }
    };

    const handleSelect = (option: { value: string; label: string; icon?: AvailableIcons }) => {
        handleLanguageChange(option.value)
        setSelectedOption(option);
    };


    return(
        <div className="flex-col flex items-center">
            <div className="flex flex-col items-center justify-center pt-[160px]">
                <ProjectName className="font-lecturis-rounded">
                    Cinewo
                </ProjectName>
                <Typography.Text className="font-lecturis-rounded leading-[40px] text-center" size="lt" color="white" weight="normal">{t('get_started')}</Typography.Text>
            </div>
            <div className="flex flex-col gap-[14px] items-center justify-center w-full max-w-[350px]">
                <div className="mt-[91px] w-full">
                    <StyledButton onClick={()=>{
                        router.push(Path.OTPCode)
                    }} height="56px" title="continue_with_phone"/>
                </div>
                <div className="flex items-center justify-center gap-[8px]">
                    <Icon name="ThreeDots" className="w-6 h-6"/>
                    <Typography.Text
                        className="!text-[14px] leading-[20px] font-urbanist font-semibold">{t('or')}</Typography.Text>
                    <Icon name="ThreeDots" className="w-6 h-6"/>
                </div>
                <div className="w-full flex flex-col items-center gap-[12px]">
                    <GoogleButton/>
                    <AppleSignInButton/>
                </div>
            </div>
            <div className="mt-[51px]">
                <Dropdown selectedOption={selectedOption} onSelect={handleSelect} icon options={LanguagesList} className="max-w-[146px]"/>
            </div>
            <Typography.Paragraph className="mt-[18px] w-[240px] text-center !text-[14px] !font-lecturis-rounded leading-[20px]" color="black" weight="normal">
                By tapping Continue, you agree to our {" "}
                <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>
            </Typography.Paragraph>
        </div>
    )
}
