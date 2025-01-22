'use client';
import React, { useEffect, useRef, useState } from "react";
import { Typography } from "../Typography";
import { Button } from "@/components/elements/Button";
import { addClass } from "@/core/utils/classNames";

export interface CatButtonsProps {
    label?: string;
    categories: { label: string; value: number | string; selected: boolean }[];
    className?: string;
    onClick?: (categories: CatButtonsProps["categories"]) => void;
}

export const CategoriesButton: React.FC<CatButtonsProps> = ({
                                                                label,
                                                                className,
                                                                categories,
                                                                onClick,
                                                                ...props
                                                            }) => {
    const [category, setCategory] = useState(categories);
    const containerRef = useRef<HTMLDivElement | null>(null); // Scrollable container

    useEffect(() => {
        setCategory(categories);
    }, [categories]);

    const handleClick = (index: number) => {
        let updatedCategories = [...categories];
        updatedCategories[index].selected = !updatedCategories[index].selected;

        if (index === 0) {
            updatedCategories.forEach((item) => {
                item.selected = false;
            });
            updatedCategories[0].selected = true;
        } else {
            updatedCategories[0].selected = false;
        }

        if (!updatedCategories.find((item) => item.selected)) {
            updatedCategories[0].selected = true;
            setTimeout(() => {
                containerRef.current?.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            }, 100);
        }

        setCategory(updatedCategories);
        onClick?.(updatedCategories.filter((item) => updatedCategories[0].selected || item.selected));
        if (containerRef.current) {
            if (updatedCategories[index].selected) {

                const selectedButton = containerRef.current.children[index] as HTMLElement;
                const offsetLeft = selectedButton.offsetLeft;
                const containerWidth = containerRef.current.clientWidth;
                const scrollPosition = offsetLeft - (containerWidth / 2) + (selectedButton.offsetWidth / 2);

                setTimeout(() => {
                    containerRef.current?.scrollTo({
                        left: scrollPosition,
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    };

    return (
        <div className={className}>
            {label && (
                <Typography.Text color="white" weight="normal" size="sm">
                    {label}
                </Typography.Text>
            )}
            <div
                ref={containerRef}
                className="flex gap-[12px] overflow-x-auto no-scrollbar sm:max-w-[600px] max-w-[375px]"
            >
                {category.map((cat, index) => (
                    <Button
                        className={addClass(
                            "p-[1rem] !w-max [&>div]:w-max [&>div>span]:!text-black",
                            !cat.selected
                                ? "[&>div>span]:!text-white500"
                                : "!bg-white [&>div>span]:!text-black"
                        )}
                        key={cat.label}
                        title={cat.label}
                        ghost={!cat.selected}
                        onClick={() => handleClick(index)}
                        {...props}
                    />
                ))}
            </div>
        </div>
    );
};
