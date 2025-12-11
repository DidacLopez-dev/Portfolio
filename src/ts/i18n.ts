import { languages } from './languages';
export class I18n {
    translations:any;
    constructor() {
        this.translations = languages;

    }

    updatePage(lang:any){
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach((element:any) => {
            const key = element.dataset.i18n;
            if(this.translations[lang] && this.translations[lang][key]){
                element.textContent = this.translations[lang][key];
            }else{
                element.textContent = this.translations['en'][key || key];
            }
        })
    }
}