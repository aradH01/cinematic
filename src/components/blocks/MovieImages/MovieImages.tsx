import Image, {StaticImageData} from "next/image";
import {addClass} from "@/core/utils/classNames";

interface MovieImageProps {
    image: string | StaticImageData
    className?: string
}

export function MovieImage({image, className}: MovieImageProps) {
    return (
        <div>
            <div className="relative rounded-[16px]">
                <div
                    className={addClass(className, "max-w-[98%] w-[72px] h-[102px] max-h-[98%] relative rounded-[16px]")}>
                    <Image fill src={image} alt="Movie Card" className="object-cover rounded-2xl"/>
                </div>
                <div
                    className="w-full h-full rounded-[16px] bg-border100 absolute z-[5] right-1/2 translate-x-1/2 translate-y-1/2 bottom-1/2 backdrop-blur-xl"></div>
                <Image width={56} height={86} src={image} alt="Movie Card"
                       className="!w-full p-2 !h-full border-black100 object-cover absolute right-1/2 translate-x-1/2 translate-y-1/2 bottom-1/2 z-[10] rounded-[16px] shadow-boxShadow1"/>
            </div>

        </div>
    )
}
