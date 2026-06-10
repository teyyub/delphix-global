import { computed } from 'vue'
import {delphixTranslations} from "@/composables/i18n/delphix";
import {useLanguageStore} from "@/stores/language";
import en from "@/composables/i18n/contact/en"
import az from "@/composables/i18n/contact/az"
import ru from "@/composables/i18n/contact/ru"
import ar from "@/composables/i18n/contact/ar"
import manuEn from "@/composables/i18n/manufacture/en"
import manuAz from "@/composables/i18n/manufacture/az"
import manuRu from "@/composables/i18n/manufacture/ru"
import manuAr from "@/composables/i18n/manufacture/ar"
const contactTranslations = {
    en,
    az,
    ru,
    ar
}

const manufacturingTranslations = {
    en: manuEn,
    az: manuAz,
    ru: manuRu,
    ar: manuAr
}


export const useI18n = () => {
    const langStore = useLanguageStore()

    const t = computed(() => {
         const lang = langStore.currentLang
        return {
            ...delphixTranslations[lang] ?? delphixTranslations.en,
            contact: contactTranslations[lang] ?? contactTranslations.en,
            manufacture : manufacturingTranslations[lang] ?? manufacturingTranslations.en
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