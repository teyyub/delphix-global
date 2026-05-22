import { computed } from 'vue'
import {delphixTranslations} from "@/composables/i18n/delphix";
import {useLanguageStore} from "@/stores/language";

export const useI18n = () => {
    const langStore = useLanguageStore()

    const t = computed(() => {
        return delphixTranslations[langStore.currentLang] ?? delphixTranslations.en
    })
    const currentLang = computed({
        get: () => langStore.currentLang,
        set: (val) => langStore.setLanguage(val)
    })
    return {
        t,
        currentLang,
        setLanguage: langStore.setLanguage
    }
}