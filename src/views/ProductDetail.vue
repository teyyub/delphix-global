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

const isFilterProduct = computed(() => {
  return product.value?.categoryId === 'filters'
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
    <div v-if="isFilterProduct" class="filter-image-box">
      <div class="glow"></div>
      <img :src="product?.image"  alt="filter atrribute" />
    </div>
    <div v-else >
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

      <section class="info-panel">

        <!-- Specifications -->
        <div class="panel-block">
          <h2>Specifications</h2>

          <div class="spec-grid compact">
            <div
                v-for="(spec, key) in product?.specs"
                :key="key"
                class="spec-card"
            >
              <i :class="spec.icon"></i>
              <div>
                <span class="label">{{ key }}:</span>
                <span class="value">{{ spec }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Ideal For -->
        <div class="panel-block">
          <h2>Ideal For</h2>

          <div class="chip-wrap compact">
            <div
                v-for="item in idealFor"
                :key="item.text"
                class="chip"
            >
              <i :class="item.icon"></i>
              {{ item.text }}
            </div>
          </div>
        </div>

        <!-- Advantages -->
        <div class="panel-block">
          <h2>Advantages</h2>

          <div class="adv-grid compact">
            <div
                v-for="adv in advantages"
                :key="adv"
                class="adv-card"
            >
              <i class="fa-solid fa-check"></i>
              <span>{{ adv }}</span>
            </div>
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
  </div>
</template>
<style scoped>
.product-page {
  font-family: Inter, sans-serif;
  background: #ffffff;
}

/* HERO */
.hero {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}

/* BRAND */
.brand {
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

/* TITLE */
.title {
  font-size: 44px;
  font-weight: 750;
  line-height: 1.1;
}

.title span {
  display: block;
  font-size: 16px;
  color: #6B7280;
  margin-top: 6px;
}

/* SUBTITLE */
.subtitle {
  margin-top: 10px;
  font-size: 13px;
  color: #6B7280;
}

/* FEATURES */
.features {
  margin-top: 22px;
  display: grid;
  gap: 10px;
}

.feature-card {
  display: flex;
  gap: 10px;
  padding: 12px 14px;

  border: 1px solid #E8EBF1;
  border-radius: 12px;

}

/* RIGHT IMAGE */
.hero-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-box {
  position: relative;
  width: 85%;
  padding: 16px;

  background: #FFFFFF;
  border: 1px solid #E8EBF1;
  border-radius: 16px;

}

.image-box img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* ORIGIN */
.origin {
  margin-top: 14px;
  text-align: center;
  font-size: 12px;
  color: #6B7280;
}

/* SECTION */
.section {
  margin-bottom: 50px;
  background: transparent;
}

.section h2 {
  font-size: 18px;
  margin-bottom: 16px;
  color: #111827;
}

/* SPECS */
.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.spec-card {
  background: #FFFFFF;
  border: 1px solid #E8EBF1;
  padding: 12px 14px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;   /* 🔥 əsas dəyişiklik */
  gap: 4px;
  transition: all 0.2s ease;
}

.spec-card:hover {
  border-color: #CBD5E1;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transform: translateY(-2px);
}

.label {
  font-size: 11px;
  color: #9CA3AF;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.value {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
}

/* IDEAL FOR */
.chip-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  padding: 8px 12px;
  border-radius: 999px;

  background: #FFFFFF;
  border: 1px solid #E8EBF1;

  font-size: 12px;
  color: #374151;
}

/* ADVANTAGES */
.adv-grid {
  display: grid;
  gap: 10px;
}

.adv-card {
  display: flex;
  gap: 10px;
  padding: 10px 12px;

  background: #FFFFFF;
  border-left: 3px solid #3B82F6;

  box-shadow: 0 2px 6px rgba(0,0,0,0.03);
}

/* FOOTER */
.footer-strip {
  display: flex;
  justify-content: space-between;
  padding: 16px;

  background: #FFFFFF;
  border: 1px solid #E8EBF1;
  border-radius: 10px;

  font-size: 11px;
  color: #6B7280;
}

/* FILTER IMAGE */
.filter-image-box {
  position: relative;
  width: 100%;
  height: 480px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #FFFFFF;
  border: 1px solid #E8EBF1;
  border-radius: 18px;

  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
}

.filter-image-box img {
  width: 85%;
  height: 85%;
  object-fit: contain;
  padding: 10px;
}
.info-panel {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 40px;
}

/* hər section bir kart kimi */
.panel-block {
  border: 1px solid #E8EBF1;
  border-radius: 14px;
  padding: 16px;
  background: #fff;
}

/* başlıq daha compact */
.panel-block h2 {
  font-size: 15px;
  margin-bottom: 12px;
}
</style>

