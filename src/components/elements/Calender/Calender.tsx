'use client';

import React from 'react';
import styled from '@emotion/styled';

interface CalendarProps {
    year: number;
    month: number;
    currentDate: number;
}

const CalendarContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    text-align: center;
`;

const DayName = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: ${({theme})=>theme.font.white500};
    line-height: 24px;
`;

const DayNumber = styled.div<{ isToday: boolean }>`
    padding: 8px;
    border-radius: 100%;
    background-color: ${({ isToday, theme }) => (isToday ? theme.components.red300 : 'transparent')};
    color: ${({ isToday ,theme }) => (isToday ? theme.font.black : theme.font.white)};
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: center;
`;

const Calendar: React.FC<CalendarProps> = ({ year, month, currentDate }) => {
    const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];


    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();


    let daysToShow = Array.from({ length: 7 }, (_, i) => currentDate - 3 + i);


    daysToShow = daysToShow.map((day) => {
        if (day < 1) {

            const prevMonthDays = new Date(year, month, 0).getDate();
            return prevMonthDays + day;
        }
        if (day > daysInCurrentMonth) {

            return day - daysInCurrentMonth;
        }
        return day;
    });

    return (
        <CalendarContainer>
            {daysOfWeek.map((day) => (
                <DayName className="font-urbanist" key={day}>{day}</DayName>
            ))}
            {daysToShow.map((day) => {

                const dayOfWeek = new Date(year, month, day).getDay();


                if (day < 1) return null;
                if (day > new Date(year, month + 1, 0).getDate()) return null;

                return (
                    <DayNumber
                        key={day}
                        isToday={day === currentDate}
                        className="font-urbanist"
                    >
                        {day}
                    </DayNumber>
                );
            })}
        </CalendarContainer>
    );
};

export default Calendar;
