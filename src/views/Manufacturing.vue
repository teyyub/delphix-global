<script setup>
import { useI18n } from "@/composables/useI18n"

const { t } = useI18n()
</script>

<template>
  <div class="manufacturing-page">

    <!-- HERO -->
    <section class="hero">
      <h1>{{ t.manufacture.hero.title }}</h1>
      <p>{{ t.manufacture.hero.text }}</p>
    </section>

    <!-- INTRO -->
    <section class="block">
      <p v-for="(p, i) in t.manufacture.intro" :key="i">
        {{ p }}
      </p>
    </section>

    <!-- PRODUCT PORTFOLIO -->
    <section class="card-section">
      <h2>{{ t.manufacture.portfolio.title }}</h2>

      <div class="card">
        <div v-for="(item, i) in t.manufacture.portfolio.items" :key="i">
          {{ item }}
        </div>
      </div>
    </section>

    <!-- QUALITY -->
    <section class="card-section">
      <h2>{{ t.manufacture.quality.title }}</h2>

      <div class="card">
        <div v-for="(item, i) in t.manufacture.quality.items" :key="i">
          {{ item }}
        </div>
      </div>
    </section>

    <!-- FACTORIES -->
    <section class="factories">
      <h2>{{ t.manufacture.factories.title }}</h2>
      <p>{{ t.manufacture.factories.text }}</p>

      <div class="factory-grid">

        <div class="factory-card delphix">
          <div class="overlay">
            <h3>DELPHIX</h3>
            <p>Advanced Manufacturing Hub</p>
          </div>
        </div>

        <div class="factory-card china">
          <div class="overlay">
            <h3>CHINA</h3>
            <p>Advanced Manufacturing Hub</p>
          </div>
        </div>

        <div class="factory-card dubai">
          <div class="overlay">
            <h3>DUBAI</h3>
            <p>Logistics & Distribution Center</p>
          </div>
        </div>

        <div class="factory-card kazakhstan">
          <div class="overlay">
            <h3>KAZAKHSTAN</h3>
            <p>Heavy Production Facility</p>
          </div>
        </div>

        <div class="factory-card germany">
          <div class="overlay">
            <h3>GERMANY</h3>
            <p>Engineering & R&D Center</p>
          </div>
        </div>

        <div class="factory-card turkey">
          <div class="overlay">
            <h3>TURKEY</h3>
            <p>Regional Manufacturing Plant</p>
          </div>
        </div>

        <div class="factory-card usa">
          <div class="overlay">
            <h3>USA</h3>
            <p>Quality Control & Export Hub</p>
          </div>
        </div>

      </div>
    </section>

    <!-- MISSION -->
    <section class="block center">
      <h2>{{ t.manufacture.mission.title }}</h2>
      <p>{{ t.manufacture.mission.text }}</p>
    </section>

    <!-- VISION -->
    <section class="block center">
      <h2>{{ t.manufacture.vision.title }}</h2>
      <p>{{ t.manufacture.vision.text }}</p>
    </section>

    <!-- VALUES -->
    <section class="block center">
      <h2>{{ t.manufacture.values.title }}</h2>
      <p class="values">{{ t.manufacture.values.text }}</p>
    </section>

    <!-- CORPORATE -->
    <section class="corporate">
      <h2>{{ t.manufacture.corporate.title }}</h2>

      <p v-for="(p, i) in t.manufacture.corporate.paragraphs" :key="i">
        {{ p }}
      </p>

      <div class="slogans">
        <div v-for="(s, i) in t.manufacture.corporate.slogans" :key="i">
          {{ s }}
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.manufacturing-page {
  background: #f6f7f9;
  color: #1c1c1c;
  font-family: Arial, sans-serif;
}

/* HERO */
.hero {
  background: linear-gradient(90deg, #0a192f, #132a4e);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 42px;
  font-weight: 900;
  letter-spacing: 2px;
}

.hero p {
  max-width: 800px;
  margin: 15px auto 0;
  color: #cbd5e0;
  line-height: 1.6;
}

/* BLOCK */
.block {
  max-width: 1000px;
  margin: auto;
  padding: 50px 20px;
}

.block p {
  margin-bottom: 15px;
  line-height: 1.8;
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
  margin-bottom: 15px;
  font-size: 22px;
  color: #0a192f;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.05);
  line-height: 1.8;
  color: #555;
}

/* FACTORIES */
.factories {
  padding: 80px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.factories h2 {
  font-size: 28px;
  font-weight: 800;
  color: #0a192f;
}

.factories p {
  margin-top: 10px;
  color: #666;
}

.factory-grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.factory-card {
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  background-size: cover;
  background-position: center;
}

.factory-card:hover {
  transform: translateY(-6px);
}

.factory-card .overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  color: white;
}

.factory-card h3 {
  font-size: 18px;
  letter-spacing: 2px;
}

.factory-card p {
  font-size: 13px;
  color: #cbd5e0;
}

/* IMAGES */
.delphix { background-image: url('/images/factories/7.jpeg'); }
.china { background-image: url('/images/factories/1.jpeg'); }
.dubai { background-image: url('/images/factories/2.jpeg'); }
.kazakhstan { background-image: url('/images/factories/3.jpeg'); }
.germany { background-image: url('/images/factories/4.jpeg'); }
.turkey { background-image: url('/images/factories/5.jpeg'); }
.usa { background-image: url('/images/factories/6.jpeg'); }

/* VALUES */
.values {
  font-weight: 600;
  color: #0a192f;
  letter-spacing: 1px;
}

/* CORPORATE */
.corporate {
  background: #0a192f;
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.corporate p {
  max-width: 900px;
  margin: auto;
  line-height: 1.8;
  color: #cbd5e0;
}

.slogans {
  margin-top: 30px;
  font-weight: bold;
  line-height: 2;
}
</style>