import {AvailableIcons, Icon} from "@/components/elements/Icon";
import Link from "next/link";

interface BackHeaderProps {
    href?: string;
    onClick?: () => void;
    icon?:AvailableIcons
    isLinked?: string
}

export const BackHeader = ({href , onClick , icon , isLinked} : BackHeaderProps) =>{
    return(
        <div className="flex items-center justify-between w-full mt-[45px]">
            <Link href={href || ''}>
                <Icon name="BackArrow" className="w-[28px] h-[28px]"/>
            </Link>
            {
                isLinked ?
                    <Link href={isLinked}
                            className="w-[48px] h-[48px] rounded-full border border-solid border-border100 flex items-center justify-center">
                        <Icon name={icon ? icon : "ThreeDots"} className="w-[28px] h-[28px]"/>
                    </Link>
                    :
                    <button onClick={onClick}
                            className="w-[48px] h-[48px] rounded-full border border-solid border-border100 flex items-center justify-center">
                        <Icon name={icon ? icon : "ThreeDots"} className="w-[28px] h-[28px]"/>
                    </button>
            }
        </div>
    )
}
