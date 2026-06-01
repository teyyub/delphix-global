<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

// dummy data (sonra API ilə əvəz edərsən)
const categories = [
  { title: "Lubricants", icon: "🛢️" },
  { title: "Batteries", icon: "🔋" },
  { title: "Filters", icon: "🧰" },
  { title: "Tires", icon: "🛞" }
]

const features = [
  { title: "Global Shipping", icon: "🌍", description: "Fast worldwide delivery" },
  { title: "Premium Quality", icon: "⭐", description: "Top-tier certified products" },
  { title: "24/7 Support", icon: "📞", description: "Always here to help" }
]

// methods
const exploreProducts = () => {
  router.push("/products")
}

const handleQuote = () => {
  router.push("/quote")
}

const viewCategory = (category) => {
  console.log('category: ',category)
  router.push(`/products?category=${category}`)
}
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <div class="hero-text">
        <div class="hero-tag">Delphix Global</div>

        <h1>
          ENGINEERED FOR<br />
          GLOBAL PERFORMANCE
        </h1>

        <p>
          Premium Lubricants, Batteries, Filters & Tires – Built to Power Your World.
        </p>

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

    <!-- CATEGORIES -->
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

    <!-- FEATURES -->
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

</style>