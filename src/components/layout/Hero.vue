<script setup>
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const handleQuote = () => {
  alert('Quote request form will open soon!')
}

const exploreProducts = () => {
  alert('Navigating to products section...')
}
</script>

<template>
  <section class="hero">

    <div class="hero-text">
      <div class="hero-tag">
        {{ t.heroTag }}
      </div>

      <h1>
        {{ t.heroTitle }}
      </h1>

      <p>
        {{ t.heroDesc }}
      </p>

      <div class="hero-btns">
        <button
            class="btn-explore"
            @click="exploreProducts"
        >
          {{ t.explore }}
        </button>

        <button
            class="btn-outline"
            @click="handleQuote"
        >
          {{ t.quote }}
        </button>
      </div>
    </div>

    <div class="hero-emojis">
      🚛🛢️🔋
    </div>

  </section>
</template>