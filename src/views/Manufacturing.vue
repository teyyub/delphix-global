<script setup>
import { ref } from "vue";

const processes = ref([
  {
    id: 1,
    title: "Raw Material Selection",
    description: "We carefully select high-quality raw materials for production.",
    icon: "🧪"
  },
  {
    id: 2,
    title: "Formulation & Blending",
    description: "Advanced formulas are created for maximum performance.",
    icon: "⚙️"
  },
  {
    id: 3,
    title: "Precision Manufacturing",
    description: "Modern equipment ensures consistent product quality.",
    icon: "🏭"
  },
  {
    id: 4,
    title: "Quality Testing",
    description: "Each batch is tested to meet international standards.",
    icon: "🔬"
  },
  {
    id: 5,
    title: "Packaging & Delivery",
    description: "Products are safely packaged and distributed worldwide.",
    icon: "📦"
  }
]);
</script>

<template>
  <div class="manufacturing-page">

    <!-- HERO -->
    <section class="man-hero">
      <h1>MANUFACTURING</h1>
      <p>Our production process meets global quality standards</p>
    </section>

    <!-- CONTENT -->
    <section class="process-grid">
      <div
          v-for="step in processes"
          :key="step.id"
          class="process-card"
      >
        <div class="icon">{{ step.icon }}</div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.manufacturing-page {
  background: #f9f9f9;
  color: #333;
}

/* HERO */
.man-hero {
  background: linear-gradient(90deg, #0a192f, #132a4e);
  color: white;
  padding: 70px 50px;
  text-align: center;
}

.man-hero h1 {
  font-size: 36px;
  font-weight: 900;
}

.man-hero p {
  color: #cbd5e0;
  margin-top: 10px;
}

/* GRID */
.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  padding: 60px 50px;
}

/* CARD */
.process-card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  transition: 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.process-card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 35px;
  margin-bottom: 15px;
}

.process-card h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.process-card p {
  font-size: 13px;
  color: #666;
}
</style>