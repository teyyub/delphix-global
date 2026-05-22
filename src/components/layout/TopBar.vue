<script setup>
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <div class="top-bar">
    <div>{{ t.topTitle }}</div>
  </div>
</template>