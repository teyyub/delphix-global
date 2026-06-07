<script setup>
import {computed, reactive} from 'vue'
import {useRoute} from "vue-router";

import {highlights} from "@/data/highlights.js";
import { products } from "@/data/products.js"
import {brands} from "@/data/brands.js";
const route = useRoute()
const { brandId, id } = route.params
const brand = computed(() => {
  if (!product.value) return null

  return brands[product.value.brandId]
})
const product = computed(() => {
  const result =  products.find(
      p =>
          p.brandId ===brandId && p.id === id
  )
  console.log('id: ',id)
  console.log('brandId: ',brand)
  console.log(result)
  return result;
})

const currentHighlights = computed(() => {
  if (!product.value) return null
  const bId = product.value.brandId;
  const cId = product.value.categoryId;
  console.log('id: ',bId);
  console.log('cId: ',cId);
  const res = highlights[cId];
  console.log('res: ',res);
  return res[bId];
})


// Kimlər üçündür
const idealFor = reactive([
  { text: 'Passenger Cars', icon: 'fa-solid fa-car' },
  { text: 'Compact SUVs', icon: 'fa-solid fa-car-side' },
  { text: 'Start-Stop Vehicles', icon: 'fa-solid fa-circle-a' },
  { text: 'Vehicles with High Electrical Demand', icon: 'fa-solid fa-bolt' }
])

// Üstünlüklər listi
const advantages = reactive([
  'High starting power in all weather conditions',
  'Reliable performance under heavy load',
  'Excellent safety with leak-proof design',
  'Longer life compared to conventional batteries',
  'Stable power for modern automotive electronics'
])
</script>

<template>
  <div class="product-page">

    <!-- HERO -->
    <header class="hero">

      <!-- LEFT -->
      <div class="hero-left">

        <div class="brand">
          {{ brand?.hero?.brand }}
          <span>{{ brand?.hero?.technology }}</span>
        </div>

        <h1 class="title">
          {{ product?.headline }}
          <span>{{ product?.subHeadline }}</span>
        </h1>

        <p class="subtitle">
          Premium Power • Maximum Reliability • AGM Technology
        </p>

        <!-- FEATURES -->
        <div class="features">
          <div
              v-for="(f, i) in currentHighlights?.features"
              :key="i"
              class="feature-card"
          >
            <i :class="f.icon"></i>
            <div>
              <h4>{{ f.title }}</h4>
              <p>{{ f.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="hero-right">
        <div class="image-box">
          <div class="glow"></div>
          <img :src="product?.image" />
        </div>

        <div class="origin">
          <div>{{ brand?.hero?.originTitle }}</div>
          <small>{{ brand?.hero?.originSubtitle }}</small>
        </div>
      </div>

    </header>

    <!-- SPECS -->
    <section class="section">
      <h2>Specifications</h2>

      <div class="spec-grid">
        <div
            v-for="(spec, key) in product?.specs"
            :key="key"
            class="spec-card"
        >
          <i :class="spec.icon"></i>
          <div>
            <span class="label">{{ key }}</span>
            <span class="value">{{ spec }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- IDEAL FOR -->
    <section class="section">
      <h2>Ideal For</h2>

      <div class="chip-wrap">
        <div
            v-for="item in idealFor"
            :key="item.text"
            class="chip"
        >
          <i :class="item.icon"></i>
          {{ item.text }}
        </div>
      </div>
    </section>

    <!-- ADVANTAGES -->
    <section class="section">
      <h2>Advantages</h2>

      <div class="adv-grid">
        <div
            v-for="adv in advantages"
            :key="adv"
            class="adv-card"
        >
          <i class="fa-solid fa-check"></i>
          <span>{{ adv }}</span>
        </div>
      </div>
    </section>

    <!-- FOOTER STRIP -->
    <footer class="footer-strip">
      <div>ENGINEERED IN EUROPE</div>
      <div>EXTREME START POWER</div>
      <div>3X CYCLE LIFE</div>
    </footer>

  </div>
</template>
<style scoped>
.product-page {
  background: #0b0f17;
  color: #fff;
  padding: 40px;
  font-family: Inter, sans-serif;
}

/* HERO */
.hero {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
}

.brand {
  font-size: 13px;
  letter-spacing: 2px;
  opacity: 0.7;
}

.title {
  font-size: 54px;
  font-weight: 800;
  line-height: 1.1;
}

.title span {
  display: block;
  font-size: 18px;
  opacity: 0.7;
  margin-top: 10px;
}

.subtitle {
  margin-top: 10px;
  opacity: 0.6;
}

/* FEATURES */
.features {
  margin-top: 30px;
  display: grid;
  gap: 14px;
}

.feature-card {
  display: flex;
  gap: 12px;
  padding: 14px;
  border-radius: 14px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
}

/* IMAGE */
.hero-right {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-box {
  position: relative;
  padding: 40px;
}

.image-box img {
  width: 100%;
  filter: drop-shadow(0 30px 80px rgba(0,0,0,0.6));
}

.glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(0,255,200,0.25), transparent 60%);
}

/* ORIGIN */
.origin {
  margin-top: 20px;
  text-align: center;
  opacity: 0.7;
}

/* SECTION */
.section {
  margin-bottom: 70px;
}

.section h2 {
  font-size: 22px;
  margin-bottom: 20px;
}

/* SPECS */
.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.spec-card {
  background: rgba(255,255,255,0.05);
  padding: 16px;
  border-radius: 14px;
  display: flex;
  gap: 10px;
}

/* CHIPS */
.chip-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  font-size: 13px;
}

/* ADV */
.adv-grid {
  display: grid;
  gap: 12px;
}

.adv-card {
  display: flex;
  gap: 10px;
  padding: 12px;
  border-left: 3px solid #00ffd5;
  background: rgba(255,255,255,0.03);
}

/* FOOTER STRIP */
.footer-strip {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  font-size: 12px;
  opacity: 0.7;
}
</style>

