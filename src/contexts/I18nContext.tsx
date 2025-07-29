import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Import dei file JSON delle traduzioni
import itTranslations from '../i18n/locales/it.json';
import enTranslations from '../i18n/locales/en.json';

// Definizione dei tipi per le lingue supportate
export type Language = 'it' | 'en';

// Interfaccia per il contesto
interface I18nContextType {
    language: Language;
    t: (key: string) => string;
}

// Oggetto contenente tutte le traduzioni
const translations = {
    it: itTranslations,
    en: enTranslations
};

// Funzione per rilevare la lingua del browser
const detectBrowserLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';

    const browserLang = navigator.language.toLowerCase();

    // Se la lingua del browser inizia con 'it', usa italiano
    if (browserLang.startsWith('it')) {
        return 'it';
    }

    // Altrimenti usa inglese come default
    return 'en';
};

// Creazione del contesto
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Provider del contesto
interface I18nProviderProps {
    children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    // Rileva la lingua del browser al mount del componente
    useEffect(() => {
        const detectedLanguage = detectBrowserLanguage();
        setLanguage(detectedLanguage);
    }, []);

    // Funzione di traduzione
    const t = (key: string): string => {
        const keys = key.split('.');
        let translation: any = translations[language];

        for (const k of keys) {
            if (translation && typeof translation === 'object' && k in translation) {
                translation = translation[k];
            } else {
                // Se la chiave non esiste, prova con la lingua di fallback (inglese)
                if (language !== 'en') {
                    let fallbackTranslation: any = translations.en;
                    for (const fallbackKey of keys) {
                        if (fallbackTranslation && typeof fallbackTranslation === 'object' && fallbackKey in fallbackTranslation) {
                            fallbackTranslation = fallbackTranslation[fallbackKey];
                        } else {
                            console.warn(`Translation key "${key}" not found for language "${language}" and fallback "en"`);
                            return key;
                        }
                    }
                    return typeof fallbackTranslation === 'string' ? fallbackTranslation : key;
                }

                console.warn(`Translation key "${key}" not found for language "${language}"`);
                return key;
            }
        }

        return typeof translation === 'string' ? translation : key;
    };

    const value: I18nContextType = {
        language,
        t
    };

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
};

// Hook personalizzato per usare il contesto
export const useI18n = (): I18nContextType => {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};