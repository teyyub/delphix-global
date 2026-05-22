// composables/navigation/useNavigation.ts
import { ref } from 'vue'

export const useNavigation = () => {
    const navLinks = ref([
        { key: 'home', isActive: true },
        { key: 'about', isActive: false },
        { key: 'products', isActive: false },
        { key: 'oem', isActive: false },
        { key: 'manufacturing', isActive: false },
        { key: 'news', isActive: false },
        { key: 'contact', isActive: false }
    ])

    const setActive = (key: string) => {
        navLinks.value.forEach(link => {
            link.isActive = link.key === key
        })
    }

    return {
        navLinks,
        setActive
    }
}