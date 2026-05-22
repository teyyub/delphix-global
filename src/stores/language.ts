import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
    state: () => ({
        currentLang: 'en'
    }),

    actions: {
        setLanguage(lang: string) {
            this.currentLang = lang
        }
    }
})