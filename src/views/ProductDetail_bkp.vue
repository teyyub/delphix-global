<script setup>
import {computed, reactive} from 'vue'
import {useRoute} from "vue-router";
import {categories} from "@/data/categories.js";
import {highlights} from "@/data/highlights.js";
const route = useRoute()
const product = computed(() => {
  const id = route.params.id
  console.log("ROUTE ID:", id)
  for (const [categoryKey, category] of Object.entries(categories)) {
    for (const brands of category.brands) {
      const found = brands.products.find(p => p.id === id)

      if (found) {
        console.log("FOUND PRODUCT:", JSON.stringify(found))
        return {
          ...found,
          categoryKey,
          brandId: brands.id,
          hero:brands?.hero
        }
      }
    }
  }

  return null
})

const currentHighlights = computed(() => {
  if (!product.value) return null

  return highlights[
      product.value.categoryKey
      ]?.[
      product.value.brandId
      ]
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
// const specifications = reactive([
//   { label: 'Voltage', value: '12V', icon: 'fa-solid fa-bolt' },
//   { label: 'Capacity', value: '45Ah', icon: 'fa-solid fa-plus-minus' },
//   { label: 'Cold Cranking Amps (CCA)', value: '500A (EN)', icon: 'fa-solid fa-snowflake' },
//   { label: 'Technology', value: 'AGM (Absorbent Glass Mat)', icon: 'fa-solid fa-layer-group' },
//   { label: 'Battery Type', value: 'Maintenance-Free', icon: 'fa-solid fa-wrench' },
//   { label: 'Polarity', value: 'Right Positive (R+)', icon: 'fa-solid fa-arrows-left-right' },
//   { label: 'Dimensions (mm)', value: '207 (L) x 175 (W) x 190 (H)', icon: 'fa-solid fa-maximize' },
//   { label: 'Weight (kg)', value: 'Approx. 12.5 kg', icon: 'fa-solid fa-weight-hanging' }
// ])

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
      <div class="brand-title"> {{ product.hero.brand}}
        <span> {{ product.hero.technology }}</span>
      </div>
      <div class="sub-brand">TECHNOLOGY</div>
    </header>

    <main class="main-content">

      <section class="left-column">
        <div class="hero-text">
          <h1>
            {{ product.specs.voltage }} {{ product.specs.capacity }}
            <span>{{ product.specs.cca }} <small class="en-tag">(EN)</small></span>
          </h1>
          <p class="tagline">PREMIUM POWER. MAXIMUM RELIABILITY.</p>
          <p class="tech-desc">Advanced AGM Technology for Modern Vehicles</p>
        </div>

        <div
            v-for="(highlight, index) in currentHighlights?.features"
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
      </section>

      <section class="right-column">
        <div class="product-image-card">
          <div class="image-glow"></div>
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
          <span class="usa-tech"> {{ product.hero.originTitle }} </span><br>
          <small class="euro-eng"> {{ product.hero?.originSubtitle }}</small>
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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

/* Şəkildəki Flayerin Orijinal Rəng Palitrası */
.product-container {
  --primary-blue: #092552;      /* Şəkildəki tünd korporativ göy */
  --secondary-blue: #163a70;
  --accent-yellow: #f5c21b;     /* Şəkildəki parlaq sarı */
  --text-dark: #222222;
  --text-light: #555555;
  --bg-light: #f8f9fa;

  max-width: 900px; /* Şəkildəki flayer proporsiyası üçün eni bir az daraltdıq */
  margin: 30px auto;
  background: #ffffff;
  border-radius: 4px; /* Şəkildə künclər tamamilə kəskindir, 4px çox az yumşaqlıq verir */
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-dark);
}

/* Header - Şəkildəki kimi ağ fon və sağda göy blok */
.battery-header {
  background: #ffffff;
  padding: 25px 40px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand-title {
  font-size: 2.8rem;
  font-weight: 900;
  color: var(--primary-blue);
  letter-spacing: 1px;
  line-height: 1;
}
.brand-title span {
  color: #d92323; /* Şəkildəki loqonun qırmızı vurğusu */
}
.sub-brand {
  font-size: 0.7rem;
  font-weight: bold;
  color: var(--text-light);
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 2px;
}

/* Şəkildəki sağ üst küncdəki tünd göy AGM bloku */
.battery-header ::v-deep .agm-badge,
.battery-header .agm-badge {
  background-color: var(--primary-blue);
  color: var(--accent-yellow);
  padding: 6px 20px;
  font-size: 1.6rem;
  font-weight: 800;
  border-radius: 4px;
}

/* Əsas Grid Struktur */
.main-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 35px;
  padding: 30px 40px;
}

/* Sol Sütun Tipoqrafiyası (Şəkildəki kimi iri və kəskin) */
.hero-text h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--primary-blue);
  line-height: 1.1;
  margin-bottom: 0;
}
.hero-text .cca-value {
  font-size: 2.4rem;
  color: var(--accent-yellow);
  font-weight: 800;
  display: block;
}
.hero-text .en-tag {
  font-size: 1.4rem;
  color: var(--text-light);
  font-weight: 600;
}
.tagline {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary-blue);
  text-transform: uppercase;
  border-bottom: 2px solid var(--primary-blue);
  padding-bottom: 3px;
  margin-top: 10px;
  margin-bottom: 12px;
  display: inline-block;
  letter-spacing: 0.5px;
}
.tech-desc {
  font-size: 0.95rem;
  color: var(--text-light);
  margin-bottom: 25px;
}

/* Sol tərəfdəki İkonlu Siyahı - Şəkildəki düzülüş */
.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
}
.feature-icon {
  background-color: var(--primary-blue);
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-right: 15px;
  flex-shrink: 0;
}
.feature-details h4 {
  margin: 0 0 2px 0;
  color: var(--primary-blue);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
}
.feature-details p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.3;
}

/* Sağ Sütun - Şəkil və Cədvəl */
.right-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.product-image-card {
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--bg-light);
  border: 1px solid #ddd;
}
.product-image-card img {
  max-width: 85%;
  max-height: 85%;
  object-fit: contain;
}

/* Şəkildəki Texniki Cədvəl Dizaynı */
.specs-title {
  color: var(--primary-blue);
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px 0 5px 0;
  letter-spacing: 0.5px;
}
.spec-table {
  width: 100%;
  border-collapse: collapse;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
}
.spec-table tr {
  border-bottom: 1px solid #ddd; /* Şəkildəki kimi sadə ayırıcı xətlər */
}
.spec-table tr:hover {
  background: transparent;
}
.spec-table td {
  padding: 8px 10px;
  font-size: 0.85rem;
  text-align: left;
}
.spec-label {
  font-weight: 600;
  color: var(--secondary-blue);
  width: 50%;
  display: flex;
  align-items: center;
  gap: 8px;
}
.spec-value {
  color: var(--text-dark);
  font-weight: 500;
}

/* Şəkildəki Sarı/Göy Mənşə Bloku (USA Technology) */
.origin-badge {
  margin-top: 10px;
  padding: 15px;
  border-radius: 4px;
  background: var(--primary-blue);
  border-top: 4px solid var(--accent-yellow); /* Üstündəki sarı zolaq */
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: none;
}
.origin-badge .usa-tech {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--accent-yellow); /* Şəkildəki kimi sarı yazı */
  letter-spacing: 1px;
}
.origin-badge .euro-eng {
  font-size: 0.75rem;
  color: #ffffff; /* Ağ alt yazı */
  opacity: 0.9;
}

/* Alt tünd göy bloklar (3 Sütunlu Yan-yana düzülüş) */
.bottom-info {
  background-color: var(--primary-blue);
  color: #ffffff;
  padding: 30px 40px;
  display: grid;
  grid-template-columns: 1fr 1.2fr 0.8fr;
  gap: 25px;
  border-bottom: 5px solid var(--accent-yellow);
}
.info-box h3 {
  color: var(--accent-yellow); /* Parlaq sarı başlıqlar */
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
}
.info-list li {
  margin-bottom: 8px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}
.ideal-list li i {
  color: #ffffff;
  opacity: 0.7;
}
.adv-list li i {
  color: var(--accent-yellow); /* Şəkildəki sarı check ikonları */
}

/* Sağ alt küncdəki EXTREME nişanı */
.extreme-badge-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.badge-border {
  border: 2px solid var(--accent-yellow);
  padding: 15px;
  text-align: center;
  width: 100%;
  border-radius: 4px;
}
.badge-accent {
  font-size: 0.95rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.5px;
}
.badge-sub {
  font-size: 0.7rem;
  color: var(--accent-yellow);
  margin: 3px 0;
}

/* Footer Alt Sarı Zolaq */
.footer-stripe {
  background-color: var(--accent-yellow);
  color: var(--primary-blue);
  padding: 12px 40px;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-stripe div {
  margin: 0;
}

/* Ən alt tünd göy brend sahəsi */
.main-footer {
  background-color: var(--primary-blue);
  color: #ffffff;
  padding: 20px;
  text-align: center;
  letter-spacing: 1px;
}
.main-footer h2 {
  font-size: 1.3rem;
  font-weight: 800;
  margin: 0;
}
.main-footer p {
  font-size: 0.65rem;
  letter-spacing: 2px;
  opacity: 0.7;
  margin-top: 4px;
  text-transform: uppercase;
}

/* Mobil Adaptivlik */
@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  .bottom-info {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  .battery-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 20px;
  }
  .footer-stripe {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>