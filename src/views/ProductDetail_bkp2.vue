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
  <div v-if="product" class="product-page">

    <!-- HERO -->
    <section class="hero">

      <div class="hero-image">

        <div class="image-bg"></div>

        <img
            :src="product.image"
            :alt="product.title"
        />
      </div>

      <div class="hero-content">

        <div class="brand-badge">
          {{ brand?.hero?.brand }}
        </div>

        <h1>
          {{ product.headline }}
        </h1>

        <p class="subtitle">
          {{ product.subHeadline }}
        </p>

        <p class="description">
          Premium automotive battery engineered for
          maximum starting power and long service life.
        </p>

        <div class="spec-cards">

          <div class="spec-card">
            <span>Voltage</span>
            <strong>{{ product.specs.Voltage }}</strong>
          </div>

          <div class="spec-card">
            <span>Capacity</span>
            <strong>{{ product.specs.Capacity }}</strong>
          </div>

          <div class="spec-card">
            <span>CCA</span>
            <strong>{{ product.specs.CCA }}</strong>
          </div>

          <div class="spec-card">
            <span>Technology</span>
            <strong>{{ brand?.hero?.technology }}</strong>
          </div>

        </div>

      </div>

    </section>

    <!-- FEATURES -->

    <section class="features-section">

      <h2>Key Features</h2>

      <div class="features-grid">

        <div
            v-for="(feature,index) in currentHighlights.features"
            :key="index"
            class="feature-card"
        >
          <i :class="feature.icon"></i>

          <h3>{{ feature.title }}</h3>

          <p>
            {{ feature.description }}
          </p>
        </div>

      </div>

    </section>

    <!-- TECHNICAL -->

    <section class="technical-section">

      <h2>Technical Specifications</h2>

      <div class="technical-grid">

        <div
            v-for="(value,key) in product.specs"
            :key="key"
            class="technical-item"
        >
          <span>{{ key }}</span>
          <strong>{{ value }}</strong>
        </div>

      </div>

    </section>

  </div>
</template>

<style>

.product-page{
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 32px;
  box-sizing: border-box;
}
/* HERO */

.hero{
  display:grid;
  grid-template-columns: 55% 45%;
  gap:80px;
  align-items:center;
  min-height:700px;
}

.hero-image{
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
}

.image-bg{
  position:absolute;
  width:500px;
  height:500px;
  border-radius:50%;

  background:
      radial-gradient(
          circle,
          rgba(0,43,102,.12),
          transparent 70%
      );

  filter:blur(40px);
}

.hero-image img{
  width:100%;
  max-width:650px;

  position:relative;
  z-index:2;

  object-fit:contain;

  filter:drop-shadow(
      0 40px 60px rgba(0,0,0,.18)
  );
}

.brand-badge{
  display:inline-flex;

  padding:8px 18px;

  border-radius:999px;

  background:#f1f5f9;

  font-size:13px;
  font-weight:700;
  letter-spacing:1px;
  text-transform:uppercase;
}

.hero-content h1{
  font-size:56px;
  line-height:1.05;
  font-weight:900;
  margin-top:20px;
}

.subtitle{
  font-size:22px;
  color:#475569;
  margin-top:10px;
}

.description{
  margin-top:25px;
  line-height:1.8;
  color:#64748b;
  max-width:550px;
}

/* SPEC CARDS */

.spec-cards{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:16px;

  margin-top:40px;
}

.spec-card{
  background:white;

  border:1px solid #e2e8f0;

  border-radius:20px;

  padding:24px;

  transition:.25s;
}

.spec-card:hover{
  transform:translateY(-5px);
}

.spec-card span{
  display:block;

  color:#64748b;

  font-size:13px;
}

.spec-card strong{
  display:block;

  margin-top:8px;

  font-size:28px;
  font-weight:800;
}

/* FEATURES */

.features-section{
  margin-top:120px;
}

.features-section h2{
  font-size:40px;
  text-align:center;
  margin-bottom:50px;
}

.features-grid{
  display:grid;

  grid-template-columns:
      repeat(auto-fit,minmax(260px,1fr));

  gap:24px;
}

.feature-card{
  background:white;

  border:1px solid #e2e8f0;

  border-radius:24px;

  padding:32px;

  transition:.3s;
}

.feature-card:hover{
  transform:translateY(-8px);

  box-shadow:
      0 20px 40px rgba(0,0,0,.08);
}

.feature-card i{
  font-size:34px;
  color:#002B66;
}

.feature-card h3{
  margin-top:20px;
  font-size:20px;
}

.feature-card p{
  margin-top:12px;
  color:#64748b;
  line-height:1.7;
}

/* TECHNICAL */

.technical-section{
  margin-top:120px;
}

.technical-section h2{
  text-align:center;
  font-size:40px;
  margin-bottom:50px;
}

.technical-grid{
  display:grid;

  grid-template-columns:
      repeat(auto-fit,minmax(250px,1fr));

  gap:20px;
}

.technical-item{
  background:#f8fafc;

  border-radius:18px;

  padding:24px;
}

.technical-item span{
  display:block;

  color:#64748b;
  margin-bottom:10px;
}

.technical-item strong{
  font-size:24px;
}

/* MOBILE */

@media(max-width:992px){

  .hero{
    grid-template-columns:1fr;
    gap:40px;
  }

  .hero-content h1{
    font-size:42px;
  }

  .product-page{
    padding:30px 20px;
  }
}
</style>