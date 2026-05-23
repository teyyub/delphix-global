<script setup>
import { ref } from "vue";

const categories = ref([
  { title: "Batteries", icon: "🔋" },
  { title: "Lubricants", icon: "🛢️" },
  { title: "Filters", icon: "🌪️" },
  { title: "Tires", icon: "🛞" }
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
const viewCategory = (title) => console.log(title);
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
          <div class="category-icon">{{ category.icon }}</div>
          <h3>{{ category.title }}</h3>
          <a href="#" @click.prevent="viewCategory(category.title)">
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
  background: #f7fafc;
  border: 1px solid #edf2f7;
  border-radius: 8px;
  padding: 30px 20px;
  transition: 0.2s;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-icon {
  font-size: 45px;
  margin-bottom: 20px;
}

.category-card h3 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
}

.category-card a {
  font-size: 12px;
  color: #718096;
}

/* FEATURES */
.features-bar {
  background: #0b1c33;
  color: #fff;
  padding: 30px 50px;
}

.grid-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  text-align: center;
}

.feature-icon {
  font-size: 20px;
}

.feature-item h4 {
  font-size: 12px;
  margin: 8px 0;
  text-transform: uppercase;
}

.feature-item p {
  font-size: 10px;
  color: #a0aec0;
}
</style>