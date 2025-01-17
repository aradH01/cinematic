'use client';

import React from 'react';
import styled from '@emotion/styled';

interface CalendarProps {
    year: number;
    month: number; // 0-indexed (January = 0)
    currentDate: number; // The specific day to highlight
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

    // Get the number of days in the current month
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();

    // Calculate the range of days to show (3 days before and 3 days after today)
    let daysToShow = Array.from({ length: 7 }, (_, i) => currentDate - 3 + i);

    // Ensure that daysToShow doesn't exceed the current month's range
    daysToShow = daysToShow.map((day) => {
        if (day < 1) {
            // Handle previous month's days
            const prevMonthDays = new Date(year, month, 0).getDate();
            return prevMonthDays + day;
        }
        if (day > daysInCurrentMonth) {
            // Handle next month's days
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
                // Get the day of the week (Monday = 1, Sunday = 7)
                const dayOfWeek = new Date(year, month, day).getDay();

                // Adjust the index if the day is out of the current month's range
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
