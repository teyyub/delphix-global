<script setup>
import {computed, reactive} from 'vue'
import {useRoute} from "vue-router";
const route = useRoute()
// Məhsulun əsas datası
// const product = reactive({
//   voltage: '12V',
//   capacity: '45Ah',
//   cca: '500A'
// })

const product = computed(() => {
  return JSON.parse(
      decodeURIComponent(route.query.product)
  )
})
// Sol tərəfdəki ikonlu üstünlüklər
const features = reactive([
  { title: 'High Starting Power', description: 'Strong engine starts even in cold weather', icon: 'fa-solid fa-car-battery' },
  { title: 'Long Service Life', description: 'Enhanced cycle life for extended durability', icon: 'fa-solid fa-shield-halved' },
  { title: 'Vibration Resistant', description: 'Built to perform in demanding driving conditions', icon: 'fa-solid fa-waveform-path' },
  { title: 'Maintenance Free', description: 'No need to add water. Ready to use', icon: 'fa-solid fa-faucet-drip' },
  { title: 'Fast Recharge', description: 'Optimized for quick and efficient charging', icon: 'fa-solid fa-bolt' },
  { title: 'Start-Stop Ready', description: 'Ideal for vehicles with Start-Stop systems', icon: 'fa-solid fa-circle-a' }
])

// Texniki göstəricilər cədvəli
const specifications = reactive([
  { label: 'Voltage', value: '12V', icon: 'fa-solid fa-bolt' },
  { label: 'Capacity', value: '45Ah', icon: 'fa-solid fa-plus-minus' },
  { label: 'Cold Cranking Amps (CCA)', value: '500A (EN)', icon: 'fa-solid fa-snowflake' },
  { label: 'Technology', value: 'AGM (Absorbent Glass Mat)', icon: 'fa-solid fa-layer-group' },
  { label: 'Battery Type', value: 'Maintenance-Free', icon: 'fa-solid fa-wrench' },
  { label: 'Polarity', value: 'Right Positive (R+)', icon: 'fa-solid fa-arrows-left-right' },
  { label: 'Dimensions (mm)', value: '207 (L) x 175 (W) x 190 (H)', icon: 'fa-solid fa-maximize' },
  { label: 'Weight (kg)', value: 'Approx. 12.5 kg', icon: 'fa-solid fa-weight-hanging' }
])

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
  <div class="product-container">
    <header class="battery-header">
      <div class="brand-title">DELPHIX <span>AGM</span></div>
      <div class="sub-brand">TECHNOLOGY</div>
    </header>

    <main class="main-content">

      <section class="left-column">
        <div class="hero-text">
          <h1>
            {{ product.voltage }} {{ product.capacity }}
            <span>{{ product.cca }} <small class="en-tag">(EN)</small></span>
          </h1>
          <p class="tagline">PREMIUM POWER. MAXIMUM RELIABILITY.</p>
          <p class="tech-desc">Advanced AGM Technology for Modern Vehicles</p>
        </div>

        <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-item"
        >
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <div class="feature-details">
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section class="right-column">
        <div class="product-image">
          <img :src="product.image" :alt="product.title">
        </div>
        <h3 class="specs-title">Product Specifications</h3>
        <table class="spec-table">
          <tbody>
          <tr v-for="(spec, key) in product.specs" :key="key">
            <td class="spec-label">
              <i :class="spec.icon"></i> {{ key }}
            </td>
            <td class="spec-value">{{ spec }}</td>
          </tr>
          </tbody>
        </table>

        <div class="origin-badge">
          <span class="usa-tech">MADE IN USA TECHNOLOGY</span><br>
          <small class="euro-eng">Engineered in Europe</small>
        </div>
      </section>
    </main>

    <section class="bottom-info">
      <div class="info-box">
        <h3>Ideal For</h3>
        <ul class="info-list ideal-list">
          <li v-for="(item, index) in idealFor" :key="index">
            <i :class="item.icon"></i> {{ item.text }}
          </li>
        </ul>
      </div>

      <div class="info-box">
        <h3>Advantages</h3>
        <ul class="info-list adv-list">
          <li v-for="(advantage, index) in advantages" :key="index">
            <i class="fa-solid fa-circle-check"></i> {{ advantage }}
          </li>
        </ul>
      </div>
    </section>

    <div class="footer-stripe">
      <div><i class="fa-solid fa-globe"></i> ENGINEERED IN EUROPE</div>
      <div><i class="fa-solid fa-gauge-high"></i> EXTREME POWER START-STOP SYSTEMS</div>
      <div><i class="fa-solid fa-arrows-spin"></i> 3x CYCLE LIFE</div>
    </div>

    <footer class="main-footer">
      DELPHIX AGM — EXTREME POWER. TRUSTED PERFORMANCE.
    </footer>
  </div>
</template>



<style scoped>
/* Rəng və Stil Dəyişənləri */
.product-container {
  --primary-blue: #002B66;
  --secondary-blue: #0D47A1;
  --accent-yellow: #FFD54F;
  --text-dark: #333333;
  --text-light: #666666;
  --bg-light: #F8F9FA;

  max-width: 900px;
  margin: 20px auto;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-dark);
}

/* Header */
.battery-header {
  background: linear-gradient(135deg, #ffffff 60%, var(--accent-yellow) 100%);
  padding: 30px;
  text-align: center;
  border-bottom: 5px solid var(--primary-blue);
}
.brand-title {
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary-blue);
  margin: 0;
  letter-spacing: 2px;
}
.brand-title span {
  color: #D32F2F;
}
.sub-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-light);
  margin-top: 5px;
}

/* Grid Layout */
.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 30px;
}

@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}

/* Sol Sütun */
.hero-text h1 {
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin: 0 0 10px 0;
}
.hero-text h1 span {
  color: #FFB300;
  display: block;
  font-size: 3rem;
}
.en-tag {
  font-size: 1.5rem;
}
.tagline {
  font-weight: bold;
  color: var(--primary-blue);
  border-bottom: 2px solid var(--primary-blue);
  padding-bottom: 5px;
  margin-bottom: 15px;
}
.tech-desc {
  color: var(--text-light);
  margin-bottom: 25px;
}

/* Feature elementləri */
.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #ccc;
}
.feature-item:last-child {
  border-bottom: none;
}
.feature-icon {
  background-color: var(--primary-blue);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-right: 15px;
  flex-shrink: 0;
}
.feature-details h4 {
  margin: 0 0 5px 0;
  color: var(--primary-blue);
  font-size: 1rem;
  text-transform: uppercase;
}
.feature-details p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-light);
}

/* Sağ Sütun (Cədvəl) */
.specs-title {
  color: var(--primary-blue);
  font-size: 1.3rem;
  border-bottom: 3px solid var(--primary-blue);
  padding-bottom: 5px;
  margin-top: 0;
  margin-bottom: 15px;
  text-transform: uppercase;
}
.spec-table {
  width: 100%;
  border-collapse: collapse;
}
.spec-table td {
  padding: 10px;
  border-bottom: 1px solid #E0E0E0;
  font-size: 0.95rem;
}
.spec-table tr:nth-child(even) {
  background-color: var(--bg-light);
}
.spec-label {
  font-weight: bold;
  color: var(--primary-blue);
  width: 50%;
}
.spec-label i {
  margin-right: 8px;
  width: 20px;
  text-align: center;
}
.origin-badge {
  margin-top: 30px;
  text-align: center;
  border: 2px dashed var(--primary-blue);
  padding: 15px;
  border-radius: 5px;
}
.usa-tech {
  font-weight: bold;
  color: var(--primary-blue);
}
.euro-eng {
  color: var(--text-light);
}

/* Alt İnformasiya */
.bottom-info {
  background-color: var(--primary-blue);
  color: #ffffff;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 30px;
}
@media (max-width: 768px) {
  .bottom-info {
    grid-template-columns: 1fr;
  }
}
.info-box h3 {
  color: var(--accent-yellow);
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.info-list li {
  margin-bottom: 10px;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}
.info-list li i {
  margin-right: 10px;
}
.adv-list li i {
  color: #4CAF50;
}

/* Footer Zolaqları */
.footer-stripe {
  background-color: var(--accent-yellow);
  color: var(--primary-blue);
  padding: 15px;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 0.9rem;
}
.footer-stripe div {
  margin: 5px 10px;
}
.footer-stripe i {
  margin-right: 5px;
}
.main-footer {
  background-color: #001C44;
  color: white;
  text-align: center;
  padding: 15px;
  font-weight: bold;
  letter-spacing: 1px;
}
.right-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.product-image {
  width: 100%;
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.product-image img {
  width: 100%;
  max-height: 350px;
  object-fit: contain;
  display: block;
}

.specs-title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

.spec-table td {
  padding: 14px 18px;
  border-bottom: 1px solid #e2e8f0;
}

.spec-label {
  font-weight: 600;
  color: #334155;
  width: 45%;
}

.spec-value {
  color: #0f172a;
  font-weight: 500;
}

.origin-badge {
  text-align: center;
  padding: 18px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: white;
}

.usa-tech {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
}

.euro-eng {
  opacity: 0.8;
}
</style>