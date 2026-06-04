<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const categories = ref([
  { title: "Batteries",
    slug: 'batteries',
    image: '/images/batteries.webp'
  },
  { title: "Lubricants",
    slug: 'lubricants',
    image: '/images/lubricants.webp'
  },
  { title: "Filters",
    slug: 'filters',
    image: '/images/filters.webp'
  },
  { title: "Tires",
    slug: 'tires',
    image: '/images/tires.webp'
  }
]);

const features = ref([
  { icon: "🌐", title: "Global Quality", description: "International standards you can trust" },
  { icon: "🛡️", title: "Engineered Performance", description: "Advanced technology for maximum protection" },
  { icon: "🤝", title: "Strong Partnerships", description: "Long-term relationships worldwide" },
  { icon: "📜", title: "Certified Products", description: "ISO/TS certified manufacturing" },
  { icon: "🎧", title: "Dedicated Support", description: "Professional support whenever you need" }
]);

const exploreProducts = () => {};
const handleQuote = () => {};
const viewCategory = (slug) => {

  router.push(`/categories/${slug}`);
};


</script>

<template>
  <div class="home">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <div class="hero-tag">Delphix Global</div>
        <h1>ENGINEERED FOR<br>GLOBAL PERFORMANCE</h1>
        <p>Premium Lubricants, Batteries, Filters & Tires – Built to Power Your World.</p>

        <div class="hero-btns">
          <button class="btn-explore" @click="exploreProducts">
            EXPLORE PRODUCTS →
          </button>

          <button class="btn-outline" @click="handleQuote">
            GET A QUOTE
          </button>
        </div>
      </div>


    </section>

    <!-- Categories -->
    <section class="categories-section">
      <div class="section-tag">Our Products</div>
      <div class="section-title">Product Categories</div>

      <div class="grid-categories">
        <div
            v-for="category in categories"
            :key="category.title"
            class="category-card"
        >
          <div class="category-image">
            <img :src="category.image" :alt="category.title" />
          </div>

          <div class="category-content">
            <h3>{{ category.title }}</h3>

            <a href="#" @click.prevent="viewCategory(category.slug)">
              View Products →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features-bar">
      <div class="grid-features">
        <div
            v-for="feature in features"
            :key="feature.title"
            class="feature-item"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
    <section class="global-network-section">
      <div class="network-wrapper">
        <img
            src="/images/network.webp"
            alt="Global Manufacturing Network and Statistics"
            class="global-network-image"
        />

        <div class="network-overlay-top">
          <div class="network-info-left">
            <span class="net-tag">GLOBAL MANUFACTURING NETWORK</span>
            <h2>BUILT IN STRATEGIC<br>LOCATIONS</h2>
            <p>
              Our state-of-the-art manufacturing facilities in China, Dubai, and Kazakhstan
              enable us to deliver premium quality products to global markets with efficiency and reliability.
            </p>
            <a href="#" class="net-btn-dark" @click.prevent="">LEARN MORE →</a>
          </div>

          <div class="card-china">
            <span class="card-title">CHINA</span>
            <span class="card-sub">Manufacturing<br>Excellence</span>
          </div>

          <div class="card-dubai">
            <span class="card-title">DUBAI</span>
            <span class="card-sub">Logistics<br>Hub</span>
          </div>

          <div class="card-kazakhstan">
            <span class="card-title">KAZAKHSTAN</span>
            <span class="card-sub">Production<br>Facility</span>
          </div>
        </div>

        <div class="network-overlay-bottom">
          <div class="export-info-left">
            <span class="net-tag">GLOBAL EXPORT</span>
            <h2>DELIVERING TO MORE<br>THAN 80 COUNTRIES</h2>
            <p>Our products are trusted by customers in over 80 countries across 6 continents.</p>
            <a href="#" class="net-btn-light" @click.prevent="">VIEW EXPORT MAP →</a>
          </div>

          <div class="stats-grid">
            <div class="stat-box">
              <span class="stat-number">80+</span>
              <span class="stat-label">COUNTRIES</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">1000+</span>
              <span class="stat-label">PRODUCTS</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">500+</span>
              <span class="stat-label">PARTNERS</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">20+</span>
              <span class="stat-label">YEARS EXPERIENCE</span>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
.home {
  background-color: #f9f9f9;
  color: #333;
}

/* HERO */
.hero {
  position: relative;

  background-image: url('/images/home.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  min-height: 520px;

  padding: 100px 60px;

  display: flex;
  align-items: center;

  color: #fff;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;

  background: linear-gradient(
      90deg,
      rgba(10, 25, 47, 0.90) 35%,
      rgba(10, 25, 47, 0.55) 100%
  );

  z-index: 1;
}
.hero-text {
  position: relative;
  z-index: 2;

  max-width: 600px;
}

.hero-tag {
  color: #e53e3e;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.hero h1 {
  font-size: 48px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 18px;
}

.hero p {
  font-size: 16px;
  color: #cbd5e0;
  margin-bottom: 30px;
  max-width: 500px;
}

.hero-btns {
  display: flex;
  gap: 12px;
}

.btn-explore {
  background: #e53e3e;
  color: #fff;

  padding: 12px 24px;
  border-radius: 8px;

  border: none;
  font-weight: 700;

  cursor: pointer;
  transition: .3s;
}

.btn-explore:hover {
  background: #ff4d4d;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #fff;

  padding: 12px 24px;
  border-radius: 8px;

  border: 1px solid rgba(255,255,255,0.6);

  font-weight: 700;

  cursor: pointer;
  transition: .3s;
}

.btn-outline:hover {
  background: rgba(255,255,255,0.1);
}

.hero-emojis {
  font-size: 80px;
  opacity: 0.2;
}

/* CATEGORIES */
.categories-section {
  padding: 60px 50px;
  text-align: center;
  background: #fff;
}

.section-tag {
  color: #e53e3e;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.section-title {
  font-size: 26px;
  font-weight: 900;
  color: #0b1c33;
  margin-bottom: 40px;
}

.grid-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
}

.category-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;

  border: 1px solid #eef2f7;

  transition: all .25s ease;
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
}
.category-image {
  height: 240px;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  display: block;
}

.category-card:hover .category-image img {
  transform: scale(1.06);
}

.category-content {
  padding: 18px;
  text-align: center;
}
.category-content h3 {
  margin: 0 0 8px;

  font-size: 18px;
  font-weight: 800;

  text-transform: uppercase;
  letter-spacing: 1px;

  color: #111827;
}

.category-content a {
  font-size: 13px;
  font-weight: 600;

  color: #6b7280;

  text-decoration: none;

  transition: .2s;
}

.category-content a:hover {
  color: #e53e3e;
  letter-spacing: 0.5px;
}

/* FEATURES */
.features-bar {
  background: #0b1c33;
  color: #fff;
  padding: 80px 50px;
}

.grid-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
  text-align: center;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}



.feature-item {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 35px 25px;
  transition: all .3s ease;
}

.feature-item:hover {
  transform: translateY(-8px);
  background: rgba(255,255,255,0.08);
}

.feature-item h4 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 12px;
  text-transform: none;
}

.feature-item p {
  font-size: 15px;
  line-height: 1.6;
  color: #cbd5e1;
}
/* GLOBAL NETWORK SECTION */
.global-network-section {
  padding: 60px 0;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
}

.network-wrapper {
  position: relative;
  width: 100%;
  max-width: 1440px; /* Şəklin orijinal maksimum eni */
  margin: 0 auto;
}

.global-network-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Ortaq Stil Teqləri */
.net-tag {
  color: #e53e3e;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  display: block;
  margin-bottom: 8px;
}

/* ÜST BÖLMƏ - POZİSİYALAR */
.network-overlay-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 62.5%; /* Şəklin üst yarısının nisbəti */
}

.network-info-left {
  position: absolute;
  top: 12%;
  left: 5%;
  width: 22%;
}

.network-info-left h2 {
  font-size: clamp(16px, 2.2vw, 28px);
  font-weight: 900;
  color: #0b1c33;
  line-height: 1.2;
  margin-bottom: 12px;
}

.network-info-left p {
  font-size: clamp(11px, 1.1vw, 14px);
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 20px;
}

.net-btn-dark {
  display: inline-block;
  background: #0b1c33;
  color: #fff;
  padding: 10px 20px;
  font-size: clamp(10px, 1vw, 13px);
  font-weight: 700;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.2s;
}
.net-btn-dark:hover {
  background: #1a365d;
}

/* Ölkə Kartlarının Mətnləri (Şəkildəki bəyaz boşluqlara tam oturdulub) */
.card-china, .card-dubai, .card-kazakhstan {
  position: absolute;
  text-align: center;
  width: 11%;
}

.card-china { top: 51%; left: 45.4%; }
.card-dubai { top: 56%; left: 64.9%; }
.card-kazakhstan { top: 51%; left: 79.9%; }

.card-title {
  display: block;
  font-weight: 900;
  font-size: clamp(12px, 1.2vw, 15px);
  color: #000;
  letter-spacing: 0.5px;
}

.card-sub {
  display: block;
  font-size: clamp(10px, 0.9vw, 12px);
  color: #4a5568;
  line-height: 1.3;
  margin-top: 2px;
}

/* ALT BÖLMƏ - POZİSİYALAR */
.network-overlay-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 37.5%; /* Şəklin alt statistika hissəsinin nisbəti */
}

.export-info-left {
  position: absolute;
  top: 15%;
  left: 5%;
  width: 22%;
}

.export-info-left h2 {
  font-size: clamp(16px, 2.2vw, 26px);
  font-weight: 900;
  color: #0b1c33;
  line-height: 1.2;
  margin-bottom: 10px;
}

.export-info-left p {
  font-size: clamp(11px, 1.1vw, 14px);
  color: #4a5568;
  line-height: 1.4;
  margin-bottom: 15px;
}

.net-btn-light {
  display: inline-block;
  background: transparent;
  color: #0b1c33;
  border: 1px solid #0b1c33;
  padding: 8px 16px;
  font-size: clamp(10px, 1vw, 12px);
  font-weight: 700;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.2s;
}
.net-btn-light:hover {
  background: #0b1c33;
  color: #fff;
}

/* Statistika Kartlarının Mətnləri */
.stats-grid {
  position: absolute;
  top: 20%;
  left: 31%;
  width: 63%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2%;
}

.stat-box {
  text-align: center;
  padding-top: 18%; /* Yazıları ikonların altına itələmək üçün */
}

.stat-number {
  display: block;
  font-size: clamp(22px, 3.2vw, 42px);
  font-weight: 900;
  color: #0b1c33;
  line-height: 1;
}

.stat-label {
  display: block;
  font-size: clamp(9px, 0.9vw, 12px);
  font-weight: 800;
  color: #4a5568;
  margin-top: 5px;
  letter-spacing: 0.5px;
}

/* Mobil və Kiçik Ekranlar üçün Uyğunlaşdırma */
@media (max-width: 768px) {
  .network-overlay-top, .network-overlay-bottom {
    position: relative;
    height: auto;
    width: 100%;
    padding: 30px 20px;
  }
  .global-network-image {
    display: none; /* Mobildə arxa plan şəklini gizlədib normal blok nizamına keçirik */
  }
  .network-info-left, .export-info-left, .card-china, .card-dubai, .card-kazakhstan, .stats-grid {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .stat-box {
    padding-top: 10px;
    background: #fff;
    border: 1px solid #eef2f7;
    border-radius: 8px;
    padding: 15px;
  }
}
</style>