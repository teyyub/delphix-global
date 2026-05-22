<script setup>
import {computed, ref} from 'vue'
import {useI18n} from "@/composables/useI18n.js";
import {useNavigation} from "@/composables/useNavigation.js";
const { navLinks, setActive } = useNavigation();

const currentYear = ref(new Date().getFullYear())

const { t, currentLang, setLanguage } = useI18n()

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' }
]

const contactInfo = ref({
  email: 'info@delphixglobal.com',
  phone: '+971 50 123 4567',
  phoneRaw: '+971501234567',
  address: 'Jumeirah Lakes Towers, Dubai, UAE'
})

// const navLinks = ref([
//   { text: 'HOME', isActive: true },
//   { text: 'ABOUT US', isActive: false },
//   { text: 'PRODUCTS ▾', isActive: false },
//   { text: 'OEM & PRIVATE LABEL', isActive: false },
//   { text: 'MANUFACTURING', isActive: false },
//   { text: 'NEWS', isActive: false },
//   { text: 'CONTACT US', isActive: false }
// ])

// const navLinks = computed(() => t.value.nav)
const categories = ref([
  { title: 'Batteries', icon: '🔋' },
  { title: 'Lubricants', icon: '🛢️' },
  { title: 'Filters', icon: '🌪️' },
  { title: 'Tires', icon: '🛞' }
])

const features = ref([
  { icon: '🌐', title: 'Global Quality', description: 'International standards you can trust' },
  { icon: '🛡️', title: 'Engineered Performance', description: 'Advanced technology for maximum protection' },
  { icon: '🤝', title: 'Strong Partnerships', description: 'Long-term relationships worldwide' },
  { icon: '📜', title: 'Certified Products', description: 'ISO/TS certified manufacturing' },
  { icon: '🎧', title: 'Dedicated Support', description: 'Professional support whenever you need' }
])

const quickLinks = ref(['Home', 'About Us', 'Products', 'Contact Us'])

const setActiveLink = (clickedLink) => {
  navLinks.value.forEach(link => {
    link.isActive = (link.text === clickedLink.text)
  })
}

const handleQuote = () => { alert('Quote request form will open soon!') }
const exploreProducts = () => { alert('Navigating to products section...') }
const viewCategory = (categoryTitle) => { alert(`Viewing products for: ${categoryTitle}`) }
</script>

<template>
  <div class="delphix-site">
    <!-- Üst İnfo Bar -->
    <div class="top-bar">
      <div>Global Supplier of Premium Automotive Products</div>
      <div class="top-bar-right">
        <a :href="`mailto:${contactInfo.email}`">📧 {{ contactInfo.email }}</a>
        <a :href="`tel:${contactInfo.phoneRaw}`">📞 {{ contactInfo.phone }}</a>
        <span class="lang-selector">🌐 EN ▾</span>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo"><span>D</span> DELPHIX GLOBAL</div>
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.key">
          <a
              href="#"
              :class="{ active: link.isActive }"
              @click.prevent="setActiveLink(link)"
          >
            {{ t.nav[link.key] }}
          </a>
        </li>
      </ul>
      <!-- LANGUAGE SELECT -->
      <select
          class="lang-select"
          v-model="currentLang"
      >
        <option
            v-for="l in languages"
            :key="l.code"
            :value="l.code"
        >
          {{ l.label }}
        </option>
      </select>
      <button class="btn-quote" @click="handleQuote">GET A QUOTE</button>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <div class="hero-tag">Delphix Global</div>
        <h1>ENGINEERED FOR<br>GLOBAL PERFORMANCE</h1>
        <p>Premium Lubricants, Batteries, Filters & Tires – Built to Power Your World.</p>
        <div class="hero-btns">
          <button class="btn-explore" @click="exploreProducts">EXPLORE PRODUCTS →</button>
          <button class="btn-outline" @click="handleQuote">GET A QUOTE</button>
        </div>
      </div>
      <div class="hero-emojis">🚛🛢️🔋</div>
    </section>

    <!-- Categories -->
    <section class="categories-section">
      <div class="section-tag">Our Products</div>
      <div class="section-title">Product Categories</div>

      <div class="grid-categories">
        <div v-for="category in categories" :key="category.title" class="category-card">
          <div class="category-icon">{{ category.icon }}</div>
          <h3>{{ category.title }}</h3>
          <a href="#" @click.prevent="viewCategory(category.title)">View Products →</a>
        </div>
      </div>
    </section>

    <!-- Features Bar -->
    <section class="features-bar">
      <div class="grid-features">
        <div v-for="feature in features" :key="feature.title" class="feature-item">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-col">
          <h4 class="footer-brand">DELPHIX GLOBAL</h4>
          <p class="footer-desc">
            Delphix Global is a leading international supplier of premium automotive products including batteries, lubricants, filters, tires and auto parts.
          </p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li v-for="link in quickLinks" :key="link"><a href="#">{{ link }}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li v-for="category in categories" :key="category.title">
              <a href="#" @click.prevent="viewCategory(category.title)">{{ category.title }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Us</h4>
          <p class="footer-contact-details">
            📍 {{ contactInfo.address }}<br>
            📞 {{ contactInfo.phone }}<br>
            📧 {{ contactInfo.email }}
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© {{ currentYear }} Delphix Global. All Rights Reserved.</div>
        <div>
          <a href="#" class="footer-policy-link">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>

/* Komponentə özəl stillər */
.delphix-site {
  background-color: #f9f9f9;
  color: #333;
}
a { text-decoration: none; color: inherit; }

.top-bar {
  background-color: #0b1c33;
  color: #ccc;
  font-size: 12px;
  padding: 8px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #22344d;
}
.top-bar-right a { margin-left: 20px; }
.top-bar-right a:hover { color: #fff; }
.lang-selector { margin-left: 20px; cursor: pointer; }

.navbar {
  background-color: #fff;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo { font-size: 22px; font-weight: 900; color: #0b1c33; letter-spacing: 1px; }
.logo span { color: #e53e3e; }
.nav-links { display: flex; list-style: none; }
.nav-links li { margin: 0 15px; }
.nav-links a { font-size: 13px; font-weight: 600; color: #4a5568; transition: color 0.2s; }
.nav-links a:hover, .nav-links a.active { color: #e53e3e; }
.nav-links a.active { border-bottom: 2px solid #e53e3e; padding-bottom: 5px; }

.btn-quote {
  background-color: #0b1c33;
  color: #fff;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-quote:hover { background-color: #e53e3e; }

.hero {
  background: linear-gradient(90deg, #0a192f 40%, #132a4e 100%);
  color: #fff;
  padding: 80px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 450px;
}
.hero-text { max-width: 550px; }
.hero-tag { color: #e53e3e; text-transform: uppercase; font-size: 12px; font-weight: 700; letter-spacing: 2px; margin-bottom: 10px; }
.hero h1 { font-size: 42px; font-weight: 900; line-height: 1.2; margin-bottom: 15px; }
.hero p { color: #cbd5e0; font-size: 16px; margin-bottom: 30px; }
.hero-btns .btn-explore { background-color: #e53e3e; color: #fff; padding: 12px 25px; font-size: 13px; font-weight: 700; border: none; border-radius: 4px; cursor: pointer; margin-right: 15px; }
.hero-btns .btn-outline { background: transparent; color: #fff; border: 1px solid #fff; padding: 12px 25px; font-size: 13px; font-weight: 700; border-radius: 4px; cursor: pointer; }
.hero-emojis { font-size: 80px; opacity: 0.2; }

.categories-section { padding: 60px 50px; text-align: center; background-color: #fff; }
.section-tag { color: #e53e3e; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; }
.section-title { font-size: 26px; font-weight: 900; color: #0b1c33; text-transform: uppercase; margin-top: 5px; margin-bottom: 40px; }
.grid-categories { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; }
.category-card { background-color: #f7fafc; border: 1px solid #edf2f7; border-radius: 8px; padding: 30px 20px; display: flex; flex-direction: column; align-items: center; transition: transform 0.2s, box-shadow 0.2s; }
.category-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05); }
.category-icon { font-size: 45px; margin-bottom: 20px; }
.category-card h3 { font-size: 15px; font-weight: 700; color: #1a202c; text-transform: uppercase; margin-bottom: 15px; }
.category-card a { font-size: 12px; color: #718096; font-weight: 700; }
.category-card a:hover { color: #e53e3e; }

.features-bar { background-color: #0b1c33; color: #fff; padding: 30px 50px; }
.grid-features { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; text-align: center; }
.feature-icon { font-size: 20px; }
.feature-item h4 { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 8px 0 4px 0; }
.feature-item p { font-size: 10px; color: #a0aec0; max-width: 150px; margin: 0 auto; }

.footer { background-color: #0b1c33; color: #a0aec0; font-size: 12px; padding: 50px 50px 20px 50px; border-top: 1px solid #1a2e4c; }
.footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto 40px auto; }
.footer-col h4 { color: #fff; font-size: 13px; text-transform: uppercase; margin-bottom: 20px; }
.footer-brand { color: #fff; font-weight: 900; }
.footer-desc { line-height: 1.6; font-size: 11px; }
.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 10px; }
.footer-col ul a:hover { color: #fff; }
.footer-contact-details { font-size: 11px; line-height: 1.8; }
.footer-bottom { border-top: 1px solid #1a2e4c; padding-top: 20px; display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto; font-size: 11px; }
.footer-policy-link { margin-right: 15px; }

.lang-select {
  margin-right: 15px;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 12px;
  cursor: pointer;
  background: white;
  color: #333;
}

.lang-select:focus {
  outline: none;
  border-color: #e53e3e;
}
</style>