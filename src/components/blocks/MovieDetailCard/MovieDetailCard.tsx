import {Typography} from "@/components/elements/Typography";
import {useTranslation} from "react-i18next";


interface MovieDetailCardProps{
    title?:string
    detail?:string
}

export function MovieDetailCard({detail,title}:MovieDetailCardProps){
    const { t } = useTranslation();

    return(
        <div className="bg-gray900 p-[12px] flex items-center justify-between rounded-[24px] w-full">
                <Typography.Text color="white" weight="medium" size="sm" className="leading-6 font-urbanist">{t(title || '')}</Typography.Text>
                <Typography.Text color="white" weight="normal" size="sm" className="leading-6 font-urbanist">{t(detail || '')}</Typography.Text>
        </div>
    )
}
