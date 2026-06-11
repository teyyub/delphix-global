<script setup>
import oem from "@/composables/i18n/oem/oem.js"
import { useLanguageStore } from "@/stores/language"
import {computed} from "vue";

const langStore = useLanguageStore()
const currentLang = computed(() => langStore.currentLang)

const t = computed(() => oem[currentLang.value] ?? oem.en)
</script>
<template>
  <div class="oem-page">

    <!-- HERO -->
    <section class="hero">
      <h1>{{  t.hero.title }}</h1>
      <p class="tagline"> {{ t.hero.tagline }}</p>

      <p class="hero-text">
        {{ t.hero.text }}
      </p>
    </section>

    <!-- INTRO -->
    <section class="block">
      <p v-for="(p, i) in t.intro" :key="i">
        {{ p }}
      </p>
    </section>

    <!-- SERVICES -->
    <section class="card-section">
      <h2> {{ t.servicesTitle }}</h2>

      <div class="card">
        <div v-for="(item, i) in t.services" :key="i">
          {{ item }}
        </div>
      </div>
    </section>

    <!-- PRODUCT CATEGORIES -->
    <section class="card-section">
      <h2> {{ t.categoriesTitle }}</h2>

      <div class="card">
        <div v-for="(item, i) in t.categories" :key="i">
          {{ item }}
        </div>
      </div>
    </section>

    <!-- WHY US -->
    <section class="grid-section">
      <h2>{{  t.whyTitle }}</h2>

      <div class="grid">
        <div v-for="(item, i) in t.why" :key="i">
          {{ item }}
        </div>
      </div>
    </section>

    <!-- QUALITY -->
    <section class="block center">
      <h2> {{ t.quality.title }}</h2>
      <p>
        {{ t.quality.text }}
      </p>
    </section>

    <!-- PARTNERSHIP -->
    <section class="block center">
      <h2> {{ t.partnership.title }}</h2>
      <p>
         {{ t.partnership.text }}
      </p>
    </section>

    <!-- CLOSING -->
    <section class="footer">
      <h2> {{ t.footer.title }}</h2>

      <p>
         {{ t.footer.text }}
      </p>

      <div class="slogans">
        <div v-for="(s, i) in t.footer.slogans" :key="i">
          {{ s }}
        </div>
      </div>
    </section>

  </div>
</template>


<style scoped>
.oem-page {
  background: #f6f7f9;
  color: #1c1c1c;
  font-family: Arial, sans-serif;
}

/* HERO */
.hero {
  background: linear-gradient(90deg, #0a192f, #132a4e);
  color: white;
  padding: 90px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 44px;
  font-weight: 900;
  letter-spacing: 2px;
}

.tagline {
  margin-top: 10px;
  font-size: 16px;
  color: #cbd5e0;
  font-weight: bold;
  letter-spacing: 2px;
}

.hero-text {
  max-width: 900px;
  margin: 20px auto 0;
  line-height: 1.7;
  color: #d6e0f0;
}

/* BLOCK */
.block {
  max-width: 1000px;
  margin: auto;
  padding: 50px 20px;
}

.block p {
  line-height: 1.8;
  margin-bottom: 15px;
  color: #444;
}

.center {
  text-align: center;
}

/* CARD */
.card-section {
  max-width: 1000px;
  margin: auto;
  padding: 40px 20px;
}

.card-section h2 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #0a192f;
  letter-spacing: 1px;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.06);
  line-height: 1.9;
  color: #555;
}

/* GRID */
.grid-section {
  max-width: 1000px;
  margin: auto;
  padding: 40px 20px;
}

.grid-section h2 {
  margin-bottom: 20px;
  color: #0a192f;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
}

.item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: 0.2s;
}

.item:hover {
  transform: translateY(-3px);
}

/* FOOTER */
.footer {
  background: #0a192f;
  color: white;
  text-align: center;
  padding: 70px 20px;
}

.footer p {
  max-width: 900px;
  margin: auto;
  color: #cbd5e0;
  line-height: 1.8;
}

.slogans {
  margin-top: 30px;
  font-weight: bold;
  line-height: 2;
  letter-spacing: 1px;
}
</style>