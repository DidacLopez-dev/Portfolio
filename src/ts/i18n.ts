import { languages } from './languages';

export class I18n {
    translations: any;
    
    constructor() {
        this.translations = languages;
    }

    updatePage(lang: string) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach((element: any) => {
            const key = element.dataset.i18n;
            
            // Verificar si el idioma y la clave existen
            if (this.translations[lang] && this.translations[lang][key]) {
                // Usar innerHTML para permitir HTML en las traducciones
                element.innerHTML = this.translations[lang][key];
            } else {
                // Fallback a español si no existe la traducción
                if (this.translations['Spanish'] && this.translations['Spanish'][key]) {
                    element.innerHTML = this.translations['Spanish'][key];
                } else {
                    console.warn(`Translation not found for key: ${key} in language: ${lang}`);
                }
            }
        });
    }
    
    // Método para obtener una traducción específica
    getTranslation(lang: string, key: string): string {
        if (this.translations[lang] && this.translations[lang][key]) {
            return this.translations[lang][key];
        }
        // Fallback a español
        return this.translations['Spanish'][key] || key;
    }
}