<script setup>
import { useI18n } from '@/composables/useI18n'

const { currentLang, setLanguage, t } = useI18n()

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' }
]
</script>

<template>
  <nav class="navbar">

    <div class="logo">DELPHIX</div>

    <ul class="nav-links">
      <li>{{ t.home }}</li>
      <li>{{ t.about }}</li>
      <li>{{ t.products }}</li>
    </ul>

    <!-- LANG SWITCH -->
    <div class="lang-switch">
      <button
          v-for="l in languages"
          :key="l.code"
          :class="{ active: currentLang === l.code }"
          @click="setLanguage(l.code)"
      >
        {{ l.label }}
      </button>
    </div>

  </nav>
</template>