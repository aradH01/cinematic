'use client';

import { useTranslation } from 'next-i18next';

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
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>
            <p>{t('test')}</p>

            <button onClick={() => handleLanguageChange('en')}>English</button>
            <button onClick={() => handleLanguageChange('az')}>Azerbaijani</button>
            <button onClick={() => handleLanguageChange('ru')}>Russian</button>
        </div>
    );
}
