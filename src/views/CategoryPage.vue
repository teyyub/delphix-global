  <script setup>
  import { useRoute } from "vue-router"
  import {computed, ref} from "vue";
  import { useRouter } from "vue-router"
  import { categories } from "@/data/categories.js";

  const router = useRouter()
  const route = useRoute()
  const activeSeries = ref(null)

  // const category = categories[route.params.slug]

  const category = computed(() => {
    return categories[route.params.slug]
  })


  const products = computed(() => {
    return category.value?.series?.flatMap(series => series.products) || []
  })

  const goToProduct = (product) => {
    console.log('product:' ,product);
    router.push(`/product/${product.id}`)
    // router.push({
    //   path: `/product/${product.id}`,
    //   query: {
    //     product: encodeURIComponent(JSON.stringify(product))
    //   }
    // })
  }

  </script>

  <template>
    <div class="category-page">
      <div class="header">
      <h1>{{ category?.title }}</h1>

      <p>{{ category?.description }}</p>
      </div>
<!--      <div class="series-grid" v-if="!activeSeries">-->

<!--        <div-->
<!--            v-for="series in category?.series"-->
<!--            :key="series.id"-->
<!--            class="series-card"-->
<!--            @click="activeSeries = series.id"-->
<!--        >-->
<!--          <h2>{{ series.title }}</h2>-->
<!--          <p>{{ series.products.length }} products</p>-->
<!--        </div>-->
<!--      </div>-->
<!--        <div v-else>-->
<!--          <button class="back-btn" @click="activeSeries = null">-->
<!--            ← Back-->
<!--          </button>-->
<!--          <div class="products-grid">-->

<!--            <div-->
<!--                v-for="(product, index) in products"-->
<!--                :key="index"-->
<!--                class="product-card"-->
<!--            >-->
<!--              <div class="image-wrapper">-->
<!--                <img :src="product.image" :alt="product.title" />-->
<!--              </div>-->
<!--              <div class="content">-->
<!--                <h3>{{ product.title }}</h3>-->
<!--                <p class="desc">-->
<!--                  {{ product.description || "High performance automotive battery designed for durability and reliability." }}-->
<!--                </p>-->
<!--                <div class="bottom">-->
<!--                  <span class="badge">In Stock</span>-->
<!--                  <button @click="goToProduct(product)">-->
<!--                    View-->
<!--                  </button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->
      <div class="products-grid">
        <div
            v-for="(product, index) in products"
            :key="index"
            class="product-card"
        >
          <div class="image-wrapper">
            <img :src="product.image" :alt="product.title" />
          </div>

          <div class="content">
            <h3>{{ product.title }}</h3>

            <p class="desc">
              {{
                product.description ||
                "High performance automotive product designed for durability and reliability."
              }}
            </p>

            <div class="bottom">
              <span class="badge">In Stock</span>

              <button @click="goToProduct(product)">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.category-page {
  padding: 60px;
  background: #f6f7fb;
  min-height: 100vh;
}

/* HEADER */
.header {
  margin-bottom: 40px;
}

.header h1 {
  font-size: 36px;
  font-""Weight (kg)"  (kg)" : 900;
  color: #0f172a;
}

.header p {
  color: #64748b;
  margin-top: 8px;
  max-width: 600px;
  line-height: 1.6;
}

/* GRID */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .products-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
/* CARD */
.product-card {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
  transition: 0.3s;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.12);
}

/* IMAGE */
.image-wrapper {
  height: 300px;
  overflow: hidden;
  background: #f1f5f9;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
}

.product-card:hover img {
  transform: scale(1.08);
}

/* CONTENT */
.content {
  padding: 18px;
}

.content h3 {
  font-size: 18px;
  font-""Weight (kg)"  (kg)" : 800;
  color: #0f172a;
}

.desc {
  font-size: 13px;
  color: #64748b;
  margin-top: 6px;
  line-height: 1.5;
}

/* BOTTOM */
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.badge {
  font-size: 11px;
  background: #dcfce7;
  color: #16a34a;
  padding: 4px 10px;
  border-radius: 20px;
  font-""Weight (kg)"  (kg)" : 600;
}

button {
  background: #0f172a;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  transition: 0.2s;
}

button:hover {
  background: #1e293b;
}



.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #f1f5f9;
}

.image-wrapper img {
  transition: transform 0.4s ease;
}

.product-card:hover img {
  transform: scale(1.1);
}

/* =========================
   SERIES WRAPPER
========================= */
.series-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  max-width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}

/* =========================
   SERIES CARD
========================= */
.series-card {
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border: 1px solid #e2e8f0;
  border-radius: 20px;

  padding: 45px 30px;
  text-align: center;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
  position: relative;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

/* hover glow effect */
.series-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top, rgba(59,130,246,0.15), transparent 60%);
  opacity: 0;
  transition: 0.3s;
}

.series-card:hover::before {
  opacity: 1;
}

.series-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
  border-color: #cbd5e1;
}

/* =========================
   ICON
========================= */
.series-icon {
  font-size: 42px;
  margin-bottom: 18px;
  background: #f1f5f9;
  width: 70px;
  height: 70px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: inset 0 2px 8px rgba(0,0,0,0.05);
}

/* =========================
   TITLE
========================= */
.series-card h2 {
  font-size: 18px;
  font-""Weight (kg)"  (kg)" : 800;
  color: #0f172a;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* =========================
   SUB TEXT
========================= */
.series-card p {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 18px;
}

/* =========================
   CTA TEXT
========================= */
.view {
  font-size: 12px;
  font-""Weight (kg)"  (kg)" : 600;
  color: #2563eb;
  opacity: 0.9;
  transition: 0.3s;
}

.series-card:hover .view {
  letter-spacing: 1px;
  opacity: 1;
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 900px) {
  .series-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .series-card {
    padding: 35px 25px;
  }
}
</style>