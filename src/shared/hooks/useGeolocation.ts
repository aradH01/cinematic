// hooks/useGeolocation.ts
import { useEffect, useState } from "react";

export const useGeolocation = () => {
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        const fetchGeolocation = async () => {
            try {
                const response = await fetch("http://ip-api.com/json/");
                const data = await response.json();

                if (data && data.countryCode) {
                    switch (data.countryCode) {
                        case "AZ":
                            setLanguage("az");
                            break;
                        case "RU":
                            setLanguage("ru");
                            break;
                        default:
                            setLanguage("en");
                    }
                } else {
                    setLanguage("en");
                }
            } catch (error) {
                console.error("Error fetching IP data:", error);
                setLanguage("en");
            }
        };

        fetchGeolocation();
    }, []);

    return language;
};
