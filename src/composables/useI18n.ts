import { computed } from 'vue'
import {delphixTranslations} from "@/composables/i18n/delphix";
import {useLanguageStore} from "@/stores/language";
import en from "@/composables/i18n/contact/en"
import az from "@/composables/i18n/contact/az"
import ru from "@/composables/i18n/contact/ru"
import ar from "@/composables/i18n/contact/ar"
const contactTranslations = {
    en,
    az,
    ru,
    ar
}
export const useI18n = () => {
    const langStore = useLanguageStore()

    const t = computed(() => {
         const lang = langStore.currentLang
        return {
            ...delphixTranslations[lang] ?? delphixTranslations.en,
            contact: contactTranslations[lang] ?? contactTranslations.en
        }

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