'use client'

import {Typography} from "@/components/elements/Typography";
import styled from "@emotion/styled";
import {Button} from "@/components/elements/Button";
import {AvailableIcons, Icon} from "@/components/elements/Icon";
import {Dropdown} from "@/components/elements/Dropdown";
import {LanguagesList, Path} from "@/core/constants/enums";
import {useEffect, useState} from "react";
import {useGeolocation} from "@/shared/hooks/useGeolocation";
import {useRouter} from "next/navigation";
import {GoogleLogin} from "@react-oauth/google";
import {verifyGoogleToken} from "@/core/utils/googleAuth";
import {GoogleButton} from "@/components/elements/Button/GoogleButton";
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
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; icon?: AvailableIcons }>({value: 'en', label: 'English', icon: 'UsFlag',});
    const router=useRouter()
    useEffect(() => {
        if (language==='en'){
            setSelectedOption({value: 'en', label: 'English', icon: 'UsFlag'})
        } if (language==='az'){
            setSelectedOption({value: 'az', label: 'Turkish', icon: 'AzarbaijanFlag'})
        }if (language==='ru'){
            setSelectedOption({value: 'ru', label: 'Russian', icon: 'RussianFlag'})
        }
    }, [language]);


    const handleSelect = (option: { value: string; label: string; icon?: AvailableIcons }) => {
        setSelectedOption(option);
    };

    return(
        <div className="flex-col flex items-center">
            <div className="flex flex-col items-center justify-center pt-[160px]">
                <ProjectName className="font-lecturis-rounded">
                    Cinewo
                </ProjectName>
                <Typography.Text className="font-lecturis-rounded leading-[40px] text-center" size="lt" color="white" weight="normal">Get started</Typography.Text>
            </div>
            <div className="flex flex-col gap-[14px] items-center justify-center w-full max-w-[350px]">
                <div className="mt-[91px] w-full">
                    <StyledButton onClick={()=>{
                        router.push(Path.AddPhone)
                    }} height="56px" title="Continue with Phone"/>
                </div>
                <div className="flex items-center justify-center gap-[8px]">
                    <Icon name="ThreeDots" className="w-6 h-6"/>
                    <Typography.Text
                        className="!text-[14px] leading-[20px] font-urbanist font-semibold">OR</Typography.Text>
                    <Icon name="ThreeDots" className="w-6 h-6"/>
                </div>
                <div className="w-full flex flex-col items-center gap-[12px]">
                    <GoogleButton/>
                    <Button className="!w-full" height="56px" title="Continue with Apple" iconClass="w-[20px] h-[20px]" icon="Apple"/>
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
