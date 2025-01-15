import {Icon} from "@/components/elements/Icon";
import {Typography} from "@/components/elements/Typography";

interface PlayCardProps {
    title:string
    duration?:string |number
    index: number;
}
export function PlayCard({duration,title , index}:PlayCardProps){
    return (
        <div className="flex items-start justify-between w-full p-[12px] border-b border-border100 border-solid last:border-b-0 last:pb-0">
            <div className="flex items-center gap-[12px]">
                    <Icon name="PlayIcon" className="w-6 h-6"/>
                    <Typography.Text className="font-urbanist leading-6" color="white" weight="medium" size="sm">  {`${index + 1}. ${title}`}</Typography.Text>
            </div>
            <Typography.Text className="font-urbanist leading-[20px]" color="white500" weight="normal" size="xsm">{duration}</Typography.Text>
        </div>
    )
}
