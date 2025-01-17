'use client';

import { useTranslation } from 'next-i18next';
import {Button} from "@/components/elements/Button";
import {Input} from "@/components/elements/Input";
import {SendBox} from "@/components/elements/Sendbox";
import {useState} from "react";
import {CategoriesButton} from "@/components/elements/CategoriesButton/CategoriesButton";
import {RadioButton} from "@/components/elements/RadioButton";
import {SwapButton} from "@/components/elements/SwapButton";
import {toast} from "@/core/utils/toast";
import {DownloadCard} from "@/components/blocks/DownloadCard";

export default function HomePage() {
    const { t, i18n } = useTranslation(); // Use default namespace or specify if required

    const handleLanguageChange = (lang: string) => {
        if (i18n?.changeLanguage) {
            i18n.changeLanguage(lang)
                .then(() => {})
                .catch((err) => toast.error(err));
        } else {
            console.error('i18n.changeLanguage is not a function');
        }
    };
    const [categories, setCategories] = useState<{ value: number, label: string, selected: boolean }[]>([
        {label: "Action", value: 0, selected: true},
        {label: "Anime", value: 0, selected: false},
        {label: "Black stories", value: 0, selected: false},
    ]);
    const [selected, setSelected] = useState('');
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleChange = (newState: boolean) => {
        setIsToggled(newState); // Update local state
    };

    const [cards, setCards] = useState([1, 2, 3, 4, 5]); // Array of card IDs

    const handleDelete = (id: number) => {
        setCards((prevCards) => prevCards.filter((card) => card !== id));
    };


    return (
        <div className=" p-16 max-w-[600px]">
            <h1 className="text-black">{t('welcome')}</h1>
            <p className="text-black">{t('description')}</p>
            <p className="text-black">{t('test')}</p>

            <div className="flex gap-8 items-center">
                <Button height="24px" onClick={() => handleLanguageChange('en')} title="English"/>
                <Button height="28px" onClick={() => handleLanguageChange('az')} title="Azerbaijani"/>
                <Button ghost onClick={() => handleLanguageChange('ru')} title="Russian"/>
                <Button opacity title="Opacity test"/>
                <Button outlined title="Outlined Test"/>
                <Button height="55px" width="200px" title="border Test"/>
            </div>
            <div className="flex gap-8 items-center">
                <Input icon="Loading" label="Label" placeHolder="Type something"/>
                <Input label="Label" placeHolder="Type something"/>
                <Input error="Assistive text" label="Label" placeHolder="Type something"/>
            </div>
            <div className="flex gap-8 items-center">
                <SendBox/>
                <SendBox/>
                <SendBox/>
            </div>
            <div className="flex gap-8 items-center">
                <CategoriesButton label="Category" className="mt-[40.5px]" categories={categories} onClick={() => {
                }}/>
            </div>
            <div>
                <RadioButton
                    label="Option 1"
                    name="example"
                    value="option1"
                    checked={selected === 'option1'}
                    onChange={(e) => setSelected(e.target.value)}
                />
                <RadioButton
                    label="Option 2"
                    name="example"
                    value="option2"
                    checked={selected === 'option2'}
                    onChange={(e) => setSelected(e.target.value)}
                />
            </div>
            <div>
                <SwapButton checked={isToggled} onCheckedChange={handleToggleChange}/>
                <SwapButton disabled checked={false} onCheckedChange={handleToggleChange}/>
                <SwapButton disabled checked={true} onCheckedChange={handleToggleChange}/>
                <SwapButton checked={isToggled} onCheckedChange={handleToggleChange}/>
            </div>
            <div className="max-w-[400px]">
                {cards.map((id) => (
                    <DownloadCard image="" key={id} id={id} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}
