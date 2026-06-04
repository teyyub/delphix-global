<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const categories = ref([
  { title: "Batteries",
    slug: 'batteries',
    icon: '/images/batteries.webp'
  },
  { title: "Lubricants",
    slug: 'lubricants',
    icon: '/images/lubricants.webp'
  },
  { title: "Filters",
    slug: 'filters',
    icon: '/images/filters.webp'
  },
  { title: "Tires",
    slug: 'tires',
    icon: '/images/tires.webp'
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

      <div class="hero-emojis">🚛🛢️🔋</div>
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
          <div class="category-icon">
            <img :src="category.icon" :alt="category.title" />
          </div>
          <h3>{{ category.title }}</h3>
          <a href="#" @click.prevent="viewCategory(category.slug)">
            View Products →
          </a>
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
  background: linear-gradient(90deg, #0a192f 40%, #132a4e 100%);
  color: #fff;
  padding: 80px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 450px;
}

.hero-text { max-width: 550px; }

.hero-tag {
  color: #e53e3e;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.hero h1 {
  font-size: 42px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 15px;
}

.hero p {
  color: #cbd5e0;
  font-size: 16px;
  margin-bottom: 30px;
}

.hero-btns .btn-explore {
  background: #e53e3e;
  color: #fff;
  padding: 12px 25px;
  border: none;
  font-weight: 700;
  margin-right: 15px;
  cursor: pointer;
}

.hero-btns .btn-outline {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 25px;
  font-weight: 700;
  cursor: pointer;
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.category-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;

  border: 1px solid #e5e7eb;

  transition: all .35s ease;

  display: flex;
  flex-direction: column;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-icon {
  width: 140px;
  height: 140px;

  margin: 0 auto 18px;

  border-radius: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(145deg, #ffffff, #eef2f7);

  box-shadow:
      0 25px 50px rgba(0,0,0,0.12),
      inset 0 1px 0 rgba(255,255,255,0.9);

  position: relative;

  transform: translateY(-14px);
}

.category-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 12px; /* ⭐ boşluq verir, “logo kimi” yox real image kimi göstərir */
  transform: scale(1.05);
}

.category-card:hover .category-icon {
  transform: translateY(-4px);
  box-shadow:
      0 18px 40px rgba(0,0,0,0.12),
      inset 0 1px 0 rgba(255,255,255,0.7);
}

.category-card:hover .category-icon img {
  transform: scale(1.1);
}
.category-icon::before {
  content: "";
  position: absolute;
  inset: -10px;
  background: radial-gradient(circle, rgba(229,62,62,0.15), transparent 60%);
  filter: blur(15px);
  z-index: 0;
}
.category-icon::after {
  content: "";
  position: absolute;
}
.category-card h3 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  padding: 30px 20px;
  margin-top: 10px;
  color: #0f172a;
}

.category-card a {
  display: inline-block;
  margin-top: 6px;

  font-size: 12px;
  color: #64748b;

  transition: 0.2s;
}

.category-card a:hover {
  color: #0b1c33;
  transform: translateX(3px);
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