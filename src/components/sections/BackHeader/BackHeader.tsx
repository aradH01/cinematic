import {Icon} from "@/components/elements/Icon";
import Link from "next/link";

interface BackHeaderProps {
    href?: string;
}

export const BackHeader = ({href} : BackHeaderProps) =>{
    return(
        <div className="flex items-center justify-between w-full mt-[45px]">
            <Link href={href || ''}>
                <Icon name="BackArrow" className="w-[28px] h-[28px]"/>
            </Link>
            <div className="w-[48px] h-[48px] rounded-full border border-solid border-border100 flex items-center justify-center">
                <Icon name="ThreeDots" className="w-[28px] h-[28px]"/>
            </div>
        </div>
    )
}
