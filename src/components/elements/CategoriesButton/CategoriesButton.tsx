'use client'
import React, {useEffect, useState} from "react";
import { Typography } from "../Typography";
import {Button} from "@/components/elements/Button";



export interface CatButtonsProps {
    label?: string,
    categories: { label: string, value: number | string, selected: boolean }[]
    className?: string,
    onClick?: (categories: CatButtonsProps["categories"]) => void
}

export const CategoriesButton: React.FC<CatButtonsProps> = ({label, className, categories, onClick, ...props}) => {

    const [category, setCategory] = useState(categories);

    useEffect(() => {
        setCategory(categories)
    }, [categories]);


    function handleClick(index: number) {
        let updatedCategories = [...categories];
        updatedCategories[index].selected = !updatedCategories[index].selected;
        if (index === 0) {
            updatedCategories.forEach((item) => {
                item.selected = false
            })
            categories[0].selected = true
        } else {
            categories[0].selected = false
        }
        if (!updatedCategories.find((item) => item.selected)) {
            categories[0].selected = true
        }
        // Update the state with the new categories array
        setCategory(updatedCategories);
        onClick?.(updatedCategories.filter((item) => categories[0].selected || item.selected))
    }

    return (
        <div className={className}>
            <Typography.Text color="white" weight="normal" size="sm"> {label}</Typography.Text>
            <div className="flex mt-4 mb-[60px] gap-[12px]">
                {category.map((cat, index) => {
                    return <Button className="p-[1rem] !w-max" key={cat.label} title={cat.label}
                                   ghost={!cat.selected} onClick={() => {
                        handleClick(index)

                    }}
                                   {...props}
                    />
                })}
            </div>
        </div>
    )
}

