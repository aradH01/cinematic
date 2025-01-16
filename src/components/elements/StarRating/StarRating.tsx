import React, { useState } from "react";
import styled from "@emotion/styled";

const StarContainer = styled.div`
    display: flex;
    gap: 12px;
    cursor: pointer;
    margin: 0 auto;
    justify-content: center;
`;

const Star = styled.svg<{ filled: boolean; hover: boolean }>`
    fill: ${({ filled, hover }) =>
            filled ? "#FFA940" : hover ? "#FFECB3" : "#595959"};
    transition: fill 0.2s ease-in-out;
    width: 40px;
    height: 40px;
`;

export const StarRating = ({ onSubmit }: { onSubmit: (rating: number) => void }) => {
    const [rating, setRating] = useState(0); // Final selected rating
    const [hoverRating, setHoverRating] = useState(0); // Hovered rating

    const handleMouseEnter = (index: number) => {
        setHoverRating(index + 1);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index: number, isHalf: boolean) => {
        const selectedRating = index + 1;
        if (selectedRating === rating) {
            setRating(0);
            onSubmit(0);
        } else {
            setRating(selectedRating);
            onSubmit(selectedRating);
        }

    };

    const determineHoverValue = (event: React.MouseEvent, index: number) => {
        return index + 1;
    };

    return (
        <StarContainer>
            {[...Array(5)].map((_, index) => {
                const isFilled = index + 1 <= rating;
                const isHovered = hoverRating > index;

                return (
                    <Star
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        filled={isFilled}
                        hover={isHovered}
                        onMouseEnter={(event) =>
                            setHoverRating(determineHoverValue(event, index))
                        }
                        onMouseLeave={handleMouseLeave}
                        onClick={(event) => {
                            const selectedValue = determineHoverValue(event, index);
                            handleClick(index, selectedValue % 1 !== 0);
                        }}
                    >
                        <path d="M15.254 9.01412C17.3651 5.22704 18.4206 3.3335 19.9987 3.3335C21.5768 3.3335 22.6323 5.22704 24.7434 9.01412L25.2896 9.99388C25.8895 11.0701 26.1894 11.6081 26.6571 11.9632C27.1248 12.3182 27.7073 12.45 28.8722 12.7136L29.9328 12.9535C34.0323 13.8811 36.082 14.3449 36.5697 15.913C37.0573 17.4812 35.66 19.1153 32.8652 22.3834L32.1422 23.2289C31.348 24.1576 30.9509 24.6219 30.7723 25.1964C30.5936 25.7708 30.6537 26.3904 30.7737 27.6294L30.883 28.7575C31.3056 33.1178 31.5168 35.298 30.2401 36.2672C28.9634 37.2364 27.0442 36.3527 23.2059 34.5854L22.2129 34.1282C21.1222 33.626 20.5768 33.3749 19.9987 33.3749C19.4206 33.3749 18.8752 33.626 17.7845 34.1282L16.7915 34.5854C12.9532 36.3527 11.034 37.2364 9.75728 36.2672C8.48057 35.298 8.69183 33.1178 9.11436 28.7575L9.22367 27.6294C9.34374 26.3904 9.40378 25.7708 9.22514 25.1964C9.0465 24.6219 8.64941 24.1576 7.85523 23.2289L7.13219 22.3834C4.33745 19.1153 2.94007 17.4812 3.42773 15.913C3.91539 14.3449 5.96513 13.8811 10.0646 12.9535L11.1252 12.7136C12.2901 12.45 12.8726 12.3182 13.3403 11.9632C13.808 11.6081 14.1079 11.0701 14.7078 9.99389L15.254 9.01412Z" />
                    </Star>
                );
            })}
        </StarContainer>
    );
};
