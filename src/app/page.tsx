'use client';

import { useTranslation } from 'next-i18next';
import {Button} from "@/components/elements/Button";
import {Input} from "@/components/elements/Input";
import {SendBox} from "@/components/elements/Sendbox";
import {useState} from "react";
import {CategoriesButton} from "@/components/elements/CategoriesButton/CategoriesButton";
import {RadioButton} from "@/components/elements/RadioButton";
import {SwapButton} from "@/components/elements/SwapButton";

export default function HomePage() {
    const { t, i18n } = useTranslation(); // Use default namespace or specify if required

    const handleLanguageChange = (lang: string) => {
        console.log(`Changing language to: ${lang}`);
        if (i18n?.changeLanguage) {
            i18n.changeLanguage(lang)
                .then(() => console.log(`Language changed to: ${lang}`))
                .catch((err) => console.error('Error changing language:', err));
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
        console.log('Toggle State:', newState);
        setIsToggled(newState); // Update local state
    };
    return (
        <div className="mx-auto p-16">
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
                <SwapButton checked={isToggled} onCheckedChange={handleToggleChange} />
                <SwapButton disabled checked={false} onCheckedChange={handleToggleChange} />
                <SwapButton disabled checked={true} onCheckedChange={handleToggleChange} />
                <SwapButton checked={isToggled} onCheckedChange={handleToggleChange} />

            </div>
        </div>
    );
}
