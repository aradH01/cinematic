import Image, {StaticImageData} from "next/image";
import MenAvatar from "@/public/images/MenAvatar.svg";
import FemaleAvatar from "@/public/images/FemaleAvatar.svg";
import {Icon} from "@/components/elements/Icon";
import styled from "@emotion/styled";
import {Typography} from "@/components/elements/Typography";
import {addClass} from "@/core/utils/classNames";
import Link from "next/link";
import {Path} from "@/core/constants/enums";

interface EditProfileProps {
    image: string | StaticImageData
    name:string
    active?:boolean
}
const IconWrapper= styled.div`
    background-color: ${({theme})=>theme.components.white500};
    border-radius: 100%;
    padding: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(25px);
    position: absolute;
    right: 0;
    bottom: 0;
`
export const EditProfile=({image,name , active}: EditProfileProps)=>{

    return(
        <div>
            <div className="flex flex-col items-center gap-[12px]">
                <div className="relative">
                    <Image
                        src={image}
                        alt={name}
                        height="120"
                        width="120"
                        className={addClass(active ? "" : "filter grayscale")}
                    />
                    <Link href={Path.EditProfile}>
                        <IconWrapper>
                            <Icon name="EditPencil" className="w-6 h-6"/>
                        </IconWrapper>
                    </Link>
                </div>
                <Typography.Text color="white" weight="normal" size="sm"
                                 className="leading-[24px] !font-urbanist">{name}</Typography.Text>
            </div>
        </div>
    )
}
