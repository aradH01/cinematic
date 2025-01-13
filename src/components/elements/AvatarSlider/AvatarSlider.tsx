/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useRef } from "react";

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

const Slide = (isActive: boolean, isOverlap: boolean) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out, margin 0.3s ease-in-out;
    width: ${isActive ? "140px" : "88px"};
    height: ${isActive ? "140px" : "88px"};
    overflow: hidden;
    position: relative;
    z-index: ${isActive ? "10" : "1"};
    margin-left: ${isOverlap ? "-24px" : "0"};
`;

const AvatarImage = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
}

export const AvatarSlider = ({ onActiveSlideChange }: SliderProps) => {
    const data = [
        { id: 1, image: "/images/MenAvatar.svg" },
        { id: 2, image: "/images/FemaleAvatar.svg" },
        { id: 3, image: "/images/MenAvatar.svg" },
        { id: 4, image: "/images/FemaleAvatar.svg" },
        { id: 5, image: "/images/MenAvatar.svg" },
        { id: 6, image: "/images/FemaleAvatar.svg" },
        { id: 7, image: "/images/MenAvatar.svg" },
        { id: 8, image: "/images/FemaleAvatar.svg" },
        { id: 9, image: "/images/MenAvatar.svg" },
    ];

    const [activeIndex, setActiveIndex] = useState(Math.floor(data.length / 2));
    const SLIDE_WIDTH = 140;
    const SLIDE_GAP = 24;
    const offset = -((activeIndex - Math.floor(data.length / 2)) * (SLIDE_WIDTH - SLIDE_GAP));

    // Dragging state
    const [dragStart, setDragStart] = useState(0);
    const [dragging, setDragging] = useState(false);
    const dragOffset = useRef(0);

    // Notify parent of active slide change
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
                    const isOverlap =
                        ![activeIndex + 1].includes(index) &&
                        !(index > activeIndex + 2) &&
                        !(index < activeIndex - 1) &&
                        index !== activeIndex;

                    return (
                        <div key={item.id} css={Slide(isActive, isOverlap)}>
                            <img src={item.image} alt={`Avatar ${item.id}`} css={AvatarImage} />
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
