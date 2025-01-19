/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import {addClass} from "@/core/utils/classNames";
import Image from "next/image";

const SliderWrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 200px;
`;

const SlidesContainer = (offset: number) => css`
    display: flex;
    align-items: center;
    position: relative;
    transform: translateX(${offset}px);
    transition: transform 0.5s ease-in-out;
    will-change: transform;
`;

const Slide = (isActive: boolean, isOverlap: boolean , index:number , activeIn: number ) => css`
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out, margin 0.3s ease-in-out;
    position: relative;
    z-index: ${isActive ? "10" :index > activeIn ? "1" :index < activeIn ? `-${activeIn - index}` : '1'};
    margin-left: ${isOverlap ? '-24px' : "0"};
`;
const ImageWrapper = (index:number ,activeIn: number , isActive: boolean ) => css`
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out, margin 0.3s ease-in-out;
    width: ${isActive ? "118px" : index===activeIn -2  ? "94px" :
            index===activeIn -1  ? "106px" :index===activeIn +2 ? "94px" :index===activeIn +1 ? "106px" : "94px"} !important;
    
    height: ${isActive ? "177px" : (index===activeIn -2)  ? "142px" :
            index===activeIn -1  ? "159px" :index===activeIn +2 ? "142px" : index===activeIn +1 ? "159px" : '142px'} !important;
`;



const Arrow = css`
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    @media (max-width: 768px) {
        display: none;
    }
`;

const ArrowLeft = css`
    ${Arrow};
    left: 16px;
`;

const ArrowRight = css`
    ${Arrow};
    right: 16px;
`;

interface SliderProps {
    onActiveSlideChange?: (url: string) => void;
    data:  { id: number, image: string }[];
    studioMode?:boolean
    className?:string
}

export const MovieSlider = ({ onActiveSlideChange , data  , className }: SliderProps) => {


    const [activeIndex, setActiveIndex] = useState(Math.floor(data.length / 2));
    const SLIDE_WIDTH = 140;
    const SLIDE_GAP = 24;
    const offset = -((activeIndex - Math.floor(data.length / 2)) * (SLIDE_WIDTH - SLIDE_GAP));

    const [dragStart, setDragStart] = useState(0);
    const [dragging, setDragging] = useState(false);
    const dragOffset = useRef(0);

    useEffect(() => {
        if (onActiveSlideChange) {
            onActiveSlideChange(data[activeIndex].image);
        }
    }, [activeIndex, onActiveSlideChange]);

    const handleDragStart = (clientX: number) => {
        setDragging(true);
        setDragStart(clientX);
        dragOffset.current = 0;
    };

    const handleDragMove = (clientX: number) => {
        if (!dragging) return;
        dragOffset.current = clientX - dragStart;
    };

    const handleDragEnd = () => {
        setDragging(false);

        if (dragOffset.current > 50) {
            handlePrev();
        } else if (dragOffset.current < -50) {
            handleNext();
        }
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % data.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    return (
        <div
            css={SliderWrapper}
            className={className}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
        >
            <div css={ArrowLeft} onClick={handlePrev}>
                &#8592;
            </div>
            <div css={SlidesContainer(offset)}>
                {data.map((item, index) => {
                    const isActive = index === activeIndex;
                    const isOverlap = true
                    const itemIndex=index
                    const activeIn=activeIndex
                    return (
                        <div key={item.id} css={Slide(isActive, isOverlap ,activeIn, itemIndex )}>
                            <div className="relative rounded-[16px]">
                                <div css={ImageWrapper(itemIndex , activeIn ,  isActive)}
                                    className={addClass(className, "max-w-[99.9%] max-h-[99.9%] relative rounded-[16px]")}>
                                    <Image fill src={item.image} alt="Movie Card" className="object-cover rounded-2xl"/>
                                </div>
                                <div
                                    className="w-full h-full rounded-[16px] bg-border100 absolute z-[5] right-1/2 translate-x-1/2 translate-y-1/2 bottom-1/2 backdrop-blur-xl "></div>
                                <Image width={56} height={86} src={item.image} alt="Movie Card"
                                       className="!w-full p-2 !h-full border-black100 object-cover absolute right-1/2 translate-x-1/2 translate-y-1/2 bottom-1/2 z-[10] rounded-[16px] "/>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div css={ArrowRight} onClick={handleNext}>
                &#8594;
            </div>
        </div>
    );
};
