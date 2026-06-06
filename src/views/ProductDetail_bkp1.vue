<template>
  <div class="product-container">
    <header class="battery-header">
      <div class="brand-section">
        <div class="brand-title">
          DELPH<span class="x-accent">I</span>X
        </div>
        <div class="sub-brand">TECHNOLOGY</div>
      </div>
      <div class="header-right-block">
        <div class="agm-badge">AGM</div>
      </div>
    </header>

    <main class="main-content">

      <section class="left-column">
        <div class="hero-text">
          <h1 class="voltage-capacity">{{ product?.specs?.Voltage || '12V' }} {{ product?.specs?.Capacity || '45Ah' }}</h1>
          <h2 class="cca-value">{{ product?.specs?.['Cold Cranking Amps (CCA)'] || '500A' }} <span class="en-tag">(EN)</span></h2>

          <div class="premium-divider-top"></div>
          <p class="tagline">PREMIUM POWER. MAXIMUM RELIABILITY.</p>
          <div class="premium-divider-bottom"></div>

          <p class="tech-desc">Advanced AGM Technology for Modern Vehicles</p>
        </div>

        <div class="features-list-wrapper">
          <div
              v-for="(highlight, index) in currentHighlights?.features || features"
              :key="index"
              class="feature-item"
          >
            <div class="feature-icon">
              <i :class="highlight.icon"></i>
            </div>
            <div class="feature-details">
              <h4>{{ highlight.title }}</h4>
              <p>{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="right-column">
        <div class="product-image-card">
          <div class="image-glow"></div>
          <img :src="product?.image" :alt="product?.title">
        </div>

        <h3 class="specs-title">PRODUCT SPECIFICATIONS</h3>

        <table class="spec-table">
          <tbody>
          <tr v-for="(value, key) in product?.specs" :key="key">
            <td class="spec-label">
              <i :class="getSpecIcon(key)"></i> {{ key }}
            </td>
            <td class="spec-value">{{ value }}</td>
          </tr>
          </tbody>
        </table>

        <div class="origin-badge">
          <div class="origin-badge-content">
            <span class="usa-tech">
              <i class="fa-solid fa-flag-usa"></i> {{ product?.hero?.originTitle || 'MADE IN USA TECHNOLOGY' }}
            </span>
            <div class="origin-sub-row">
              <span class="sub-item"><i class="fa-solid fa-circle-check"></i> ENGINEERED IN EUROPE</span>
              <span class="sub-item"><i class="fa-solid fa-shield-halved"></i> Extreme Power</span>
              <span class="sub-item yellow-text"><i class="fa-solid fa-bolt"></i> 3x Cycle Life</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <section class="bottom-info">

      <div class="info-box">
        <h3>IDEAL FOR</h3>
        <ul class="info-list ideal-list">
          <li v-for="(item, index) in idealFor" :key="index">
            <i :class="item.icon"></i> {{ item.text }}
          </li>
        </ul>
      </div>

      <div class="info-box">
        <h3>ADVANTAGES</h3>
        <ul class="info-list adv-list">
          <li v-for="(advantage, index) in advantages" :key="index">
            <i class="fa-solid fa-check"></i> {{ advantage }}
          </li>
        </ul>
      </div>

      <div class="info-box extreme-badge-box">
        <div class="badge-border">
          <div class="badge-accent">EXTREME POWER</div>
          <div class="badge-sub">⚡ TRUSTED ⚡</div>
          <div class="badge-accent">PERFORMANCE</div>
        </div>
      </div>
    </section>

    <div class="footer-stripe">
      <div class="stripe-item"><i class="fa-solid fa-globe"></i> ENGINEERED IN EUROPE</div>
      <div class="stripe-divider">|</div>
      <div class="stripe-item"><i class="fa-solid fa-shield-halved"></i> EXTREME POWER START-STOP SYSTEMS</div>
      <div class="stripe-divider">|</div>
      <div class="stripe-item"><strong class="stripe-bold">3x</strong> CYCLE LIFE</div>
    </div>

    <footer class="main-footer">
      <div class="footer-logo">DELPHIX AGM</div>
      <div class="footer-tagline">EXTREME POWER. TRUSTED PERFORMANCE.</div>
    </footer>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { categories } from '@/data/categories.js'
import { highlights } from '@/data/highlights.js'

const route = useRoute()

const product = computed(() => {
  const id = route.params.id
  for (const [categoryKey, category] of Object.entries(categories)) {
    for (const brands of category.brands) {
      const found = brands.products.find(p => p.id === id)
      if (found) {
        return {
          ...found,
          categoryKey,
          brandId: brands.id,
          hero: brands?.hero
        }
      }
    }
  }
  return null
})

const currentHighlights = computed(() => {
  if (!product.value) return null
  return highlights[product.value.categoryKey]?.[product.value.brandId]
})

// Sol sütundakı xüsusiyyətlər listi (Şəkildəki ikonlarla birebir uyğunlaşdırıldı)
const features = reactive([
  { title: 'High Starting Power', description: 'Strong engine starts even in cold weather', icon: 'fa-solid fa-car-battery' },
  { title: 'Long Service Life', description: 'Enhanced cycle life for extended durability', icon: 'fa-solid fa-shield-halved' },
  { title: 'Vibration Resistant', description: 'Built to perform in demanding driving conditions', icon: 'fa-solid fa-bolt-lightning' },
  { title: 'Maintenance Free', description: 'No need to add water. Ready to use', icon: 'fa-solid fa-wrench' },
  { title: 'Fast Recharge', description: 'Optimized for quick and efficient charging', icon: 'fa-solid fa-bolt' },
  { title: 'Start-Stop Ready', description: 'Ideal for vehicles with Start-Stop systems', icon: 'fa-solid fa-circle-dot' }
])

// Alt sol sütundakı "Ideal For" siyahısı (Şəkildəki ağ maşın ikonları ilə)
const idealFor = reactive([
  { text: 'Passenger Cars', icon: 'fa-solid fa-car' },
  { text: 'Compact SUVs', icon: 'fa-solid fa-car-side' },
  { text: 'Start-Stop Vehicles', icon: 'fa-solid fa-car' },
  { text: 'Vehicles with High Electrical Demand', icon: 'fa-solid fa-car-battery' }
])

// Alt orta sütundakı "Advantages" siyahısı
const advantages = reactive([
  'High starting power in all weather conditions',
  'Reliable performance under heavy load',
  'Excellent safety with leak-proof design',
  'Longer life compared to conventional batteries',
  'Stable power for modern automotive electronics'
])

// Cədvəl daxilindəki açarlara uyğun FontAwesome ikonları
const getSpecIcon = (key) => {
  const iconMap = {
    'Voltage': 'fa-solid fa-bolt',
    'Capacity': 'fa-solid fa-square-plus',
    'Cold Cranking Amps (CCA)': 'fa-solid fa-snowflake',
    'Technology': 'fa-solid fa-layer-group',
    'Battery Type': 'fa-solid fa-gears',
    'Polarity': 'fa-solid fa-retweet',
    'Dimensions (mm)': 'fa-solid fa-arrows-up-to-line',
    'Weight (kg)': 'fa-solid fa-weight-hanging'
  }
  return iconMap[key] || 'fa-solid fa-circle-info'
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

/* Şəkildəki Flayerin Rəng Və Tipoqrafiya Kodları */
.product-container {
  --primary-blue: #092552;      /* Tam şəkildəki dərin korporativ göy */
  --secondary-blue: #163a70;
  --accent-yellow: #f5c21b;     /* Şəkildəki parlaq qızılı sarı */
  --text-dark: #1e293b;
  --text-light: #475569;
  --border-gray: #cbd5e1;

  max-width: 920px;
  margin: 30px auto;
  background: #ffffff;
  border-radius: 0px;           /* Şəkildə künclər tam kəskindir, yumşaltma yoxdur */
  overflow: hidden;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif; /* Flayerdəki standart kəskin font */
}

/* Header Bölməsi */
.battery-header {
  background: #ffffff;
  padding: 30px 45px 20px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand-title {
  font-size: 3.8rem;
  font-weight: 900;
  color: var(--primary-blue);
  letter-spacing: -1px;
  line-height: 0.9;
}
.brand-title .x-accent {
  color: #d92323; /* DELPHIX loqosundakı qırmızı vurğu */
}
.sub-brand {
  font-size: 0.8rem;
  font-weight: bold;
  color: #475569;
  letter-spacing: 6px;
  margin-top: 4px;
}
.header-right-block {
  display: flex;
  align-items: center;
}
.agm-badge {
  background-color: var(--primary-blue);
  color: var(--accent-yellow);
  padding: 6px 25px;
  font-size: 2.4rem;
  font-weight: 900;
  border-radius: 0px;
  letter-spacing: 0.5px;
}

/* İki sütunlu daxili struktur */
.main-content {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 40px;
  padding: 20px 45px 35px 45px;
}

/* Sol Sütun Yazıları */
.voltage-capacity {
  font-size: 3.8rem;
  font-weight: 900;
  color: var(--primary-blue);
  line-height: 0.95;
  margin: 0;
}
.cca-value {
  font-size: 3.8rem;
  font-weight: 900;
  color: var(--accent-yellow);
  line-height: 0.95;
  margin: 5px 0 20px 0;
}
.en-tag {
  font-size: 2.2rem;
  color: #475569;
  font-weight: 700;
}
.premium-divider-top {
  width: 100%;
  height: 3px;
  background-color: var(--primary-blue);
}
.premium-divider-bottom {
  width: 100%;
  height: 1px;
  background-color: var(--primary-blue);
}
.tagline {
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--primary-blue);
  padding: 6px 0;
  margin: 0;
  letter-spacing: 0.2px;
}
.tech-desc {
  font-size: 1.05rem;
  color: #475569;
  margin: 20px 0 30px 0;
}

/* Sol tərəfdəki üstünlüklər - Nöqtəli Ayırıcı Xətlər (Dotted lines) */
.features-list-wrapper {
  display: flex;
  flex-direction: column;
}
.feature-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px dotted #94a3b8; /* Şəkildəki nöqtəli xətlər */
}
.feature-item:last-child {
  border-bottom: none;
}
.feature-icon {
  background-color: var(--primary-blue);
  color: #ffffff;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-right: 18px;
  flex-shrink: 0;
}
.feature-details h4 {
  margin: 0 0 2px 0;
  color: var(--primary-blue);
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
}
.feature-details p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--text-light);
  line-height: 1.3;
}

/* Sağ Sütun: Şəkil kartı və Texniki Göstəricilər */
.right-column {
  display: flex;
  flex-direction: column;
}
.product-image-card {
  width: 100%;
  height: 330px;
  background: radial-gradient(circle, #ffffff 50%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-image-card img {
  max-width: 90%;
  max-height: 85%;
  object-fit: contain;
}

.specs-title {
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--primary-blue);
  margin: 30px 0 12px 0;
  letter-spacing: 0.2px;
}
.spec-table {
  width: 100%;
  border-collapse: collapse;
}
.spec-table tr {
  border-bottom: 1px solid #e2e8f0;
}
.spec-table td {
  padding: 10px 8px;
  font-size: 0.9rem;
}
.spec-label {
  font-weight: 700;
  color: var(--primary-blue);
  width: 50%;
  text-align: left;
}
.spec-label i {
  margin-right: 10px;
  color: var(--primary-blue);
  width: 16px;
  text-align: center;
}
.spec-value {
  color: #0f172a;
  font-weight: 500;
  text-align: left;
}

/* Şəkildə batareyanın etiketindəki göy-sarı info panel */
.origin-badge {
  margin-top: 20px;
  background-color: var(--primary-blue);
  border-top: 5px solid var(--accent-yellow); /* Üstündəki sarı zolaq */
  padding: 14px;
}
.origin-badge-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.usa-tech {
  color: var(--accent-yellow);
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0.5px;
}
.origin-sub-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.72rem;
  color: #ffffff;
  font-weight: 600;
  padding: 2px 5px 0 5px;
}
.origin-sub-row .sub-item i {
  margin-right: 4px;
}
.origin-sub-row .yellow-text {
  color: var(--accent-yellow);
}

/* ALT HİSSƏ: Tünd göy 3 sütunlu blok */
.bottom-info {
  background-color: var(--primary-blue);
  color: #ffffff;
  padding: 35px 45px;
  display: grid;
  grid-template-columns: 1fr 1.25fr 0.75fr;
  gap: 30px;
}
.info-box h3 {
  color: var(--accent-yellow);
  font-size: 1.05rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
}
.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.info-list li {
  margin-bottom: 12px;
  font-size: 0.88rem;
  display: flex;
  align-items: center;
}
.info-list li i {
  margin-right: 12px;
  font-size: 1rem;
}
.ideal-list li i {
  color: #ffffff; /* Ağ rəngli avtomobil ikonları */
}
.adv-list li i {
  color: var(--accent-yellow); /* Parlaq sarı check işarələri */
}

/* Şəkildəki Qızılı Qalxan Markası (Extreme Power Performance) */
.extreme-badge-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.badge-border {
  border: 2px solid var(--accent-yellow);
  padding: 20px 12px;
  text-align: center;
  width: 100%;
  position: relative;
}
/* Qalxan (Shield) formasını tamamlamaq üçün xüsusi CSS kəsiyi */
.badge-border::before {
  content: '';
  position: absolute;
  top: -2px; left: 15%; right: 15%; height: 2px;
  background: var(--primary-blue);
}
.badge-accent {
  font-size: 1rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0.5px;
}
.badge-sub {
  font-size: 0.8rem;
  color: var(--accent-yellow);
  font-weight: bold;
  margin: 5px 0;
}

/* Footer Qızılı-Sarı Zolaq */
.footer-stripe {
  background-color: var(--accent-yellow);
  color: var(--primary-blue);
  padding: 16px 45px;
  font-size: 0.9rem;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
.stripe-divider {
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 400;
}
.stripe-item i {
  margin-right: 8px;
}
.stripe-bold {
  font-size: 1.3rem;
  font-weight: 900;
}

/* Ən alt tünd göy brend sahəsi */
.main-footer {
  background-color: #04142c;
  color: #ffffff;
  padding: 25px;
  text-align: center;
}
.footer-logo {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 1px;
}
.footer-tagline {
  font-size: 0.75rem;
  letter-spacing: 2px;
  opacity: 0.8;
  margin-top: 4px;
  text-transform: uppercase;
}

/* Mobil Cihazlar Üçün Responsive Ayarlar */
@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px;
  }
  .bottom-info {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 20px;
  }
  .footer-stripe {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
  .stripe-divider {
    display: none;
  }
  .battery-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 20px;
  }
}
</style>