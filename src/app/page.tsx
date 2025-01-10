'use client';

import { useTranslation } from 'next-i18next';
import {Button} from "@/components/elements/Button";
import {Input} from "@/components/elements/Input";

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
        </div>
    );
}
