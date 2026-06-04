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
</style>