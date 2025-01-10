import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "Welcome",
                description: "This is an example description.",
                test : "test"
            },
        },
        az: {
            translation: {
                welcome: "Xoş gəlmisiniz",
                description: "Bu bir nümunə təsviridir.",
                test : "misal"
            },
        },
        ru: {
            translation: {
                welcome: "Добро пожаловать",
                description: "Это пример описания.",
                test : "обПри"
            },
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
