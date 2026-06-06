<script setup>
import {categories} from "@/data/categories.js";
import {useRoute} from "vue-router";
const route = useRoute()
const brandId = route.params.brandId

const allProducts = []

for (const category of Object.values(categories)) {
  for (const brand of category.brands || []) {
    if (brand.id.toLowerCase() === brandId.toLowerCase()) {
      allProducts.push({
        category: category.id,
        brand: brand.title,
        products: brand.products
      })
    }
  }
}
// const brands = ref([
//   { name: "Delphix", logo: "🏷️", desc: "Premium industrial solutions" },
//   { name: "TurboLube", logo: "🛢️", desc: "High-performance lubricants" },
//   { name: "PowerCell", logo: "🔋", desc: "Advanced battery technology" },
//   { name: "FilterPro", logo: "🌪️", desc: "Filtration systems" },
//   { name: "RoadGrip", logo: "🛞", desc: "Tire & traction solutions" },
//   { name: "AutoMax", logo: "🚗", desc: "Automotive excellence" }
// ]);
</script>

<template>
  <div class="brands-page">

    <!-- HERO -->
    <section class="brands-hero">
      <h1>OUR BRANDS</h1>
      <p>Trusted names delivering global quality and performance</p>
    </section>

    <!-- GRID -->
    <section class="brands-grid">
      <div
          v-for="brand in brands"
          :key="brand.name"
          class="brand-card"
      >
        <div class="logo">{{ brand.logo }}</div>
        <h3>{{ brand.name }}</h3>
        <p>{{ brand.desc }}</p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.brands-page {
  background: #f9f9f9;
  color: #333;
}

/* HERO */
.brands-hero {
  background: linear-gradient(90deg, #0a192f, #132a4e);
  color: white;
  padding: 70px 50px;
  text-align: center;
}

.brands-hero h1 {
  font-size: 36px;
  font-weight: 900;
}

.brands-hero p {
  color: #cbd5e0;
  margin-top: 10px;
}

/* GRID */
.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  padding: 60px 50px;
}

/* CARD */
.brand-card {
  background: white;
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: 0.2s;
}

.brand-card:hover {
  transform: translateY(-5px);
}

.logo {
  font-size: 40px;
  margin-bottom: 15px;
}

.brand-card h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.brand-card p {
  font-size: 13px;
  color: #666;
}
</style>