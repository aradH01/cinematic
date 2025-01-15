import React, { useState } from "react";
import styled from "@emotion/styled";

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px; /* Adjust this based on your layout */
    height: 209px; /* Match the height of the slide */
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SlidesWrapper = styled.div<{ currentIndex: number }>`
    display: flex;
    transition: transform 0.6s ease-in-out;
    transform: ${({ currentIndex }) => `translateX(calc(-${currentIndex} * 122px))`}; /* Adjusted for margins */
    position: relative;
    width: auto;
`;

const Slide = styled.div<{ isCenter: boolean; isAdjacent: boolean; isPrevAdjacent: boolean }>`
    width: 102px;
    height: 161px;
    margin: 0 10px;
    background: white;
    border-radius: 12px;
    box-shadow: ${({ isCenter, isAdjacent, isPrevAdjacent }) =>
            isCenter
                    ? "0 8px 16px rgba(0, 0, 0, 0.3)"
                    : isAdjacent
                            ? "0 4px 12px rgba(0, 0, 0, 0.2)"
                            : isPrevAdjacent
                                    ? "0 2px 8px rgba(0, 0, 0, 0.1)"
                                    : "0 2px 8px rgba(0, 0, 0, 0.1)"};
    transform: ${({ isCenter, isAdjacent, isPrevAdjacent }) =>
            isCenter
                    ? "scale(1.2)"
                    : isAdjacent
                            ? "scale(1)"
                            : isPrevAdjacent
                                    ? "scale(0.8)"
                                    : "scale(0.8)"};
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    z-index: ${({ isCenter }) => (isCenter ? 3 : 2)};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
`;

const Arrow = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 10;

    &:hover {
        background: rgba(0, 0, 0, 0.8);
    }

    &:nth-of-type(1) {
        left: 10px;
    }

    &:nth-of-type(2) {
        right: 10px;
    }
`;

const PaginationWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    display: flex;
    gap: 5px;
`;

const PaginationDot = styled.div<{ isActive: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ isActive }) => (isActive ? "#FF6600" : "#999")};
    transition: background 0.3s;
`;

const CarouselSlider = () => {
    const slides = [1, 2, 3, 4, 5];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const getSlideProps = (index: number) => {
        if (index === currentIndex) return { isCenter: true, isAdjacent: false, isPrevAdjacent: false };
        if (index === (currentIndex - 1 + slides.length) % slides.length)
            return { isCenter: false, isAdjacent: true, isPrevAdjacent: false };
        if (index === (currentIndex + 1) % slides.length)
            return { isCenter: false, isAdjacent: true, isPrevAdjacent: false };
        if (index === (currentIndex - 2 + slides.length) % slides.length)
            return { isCenter: false, isAdjacent: false, isPrevAdjacent: true };
        return { isCenter: false, isAdjacent: false, isPrevAdjacent: false };
    };

    return (
        <CarouselContainer>
            <Arrow onClick={handlePrev}>❮</Arrow>
            <SlidesWrapper currentIndex={currentIndex}>
                {slides.map((slide, index) => {
                    const props = getSlideProps(index);
                    return (
                        <Slide key={index} {...props}>
                            {`Slide ${slide}`}
                        </Slide>
                    );
                })}
            </SlidesWrapper>
            <Arrow onClick={handleNext}>❯</Arrow>
        </CarouselContainer>
    );
};

export default CarouselSlider;
