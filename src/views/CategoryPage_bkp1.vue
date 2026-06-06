  <script setup>
  import { useRoute } from "vue-router"
  import {computed, ref} from "vue";
  import { useRouter } from "vue-router"
  import { categories } from "@/data/categories.js";
  import { products as allProducts } from "@/data/products.js"
  import { brands as allBrands } from "@/data/brands.js"
  const router = useRouter()
  const route = useRoute()
  const activeSeries = ref(null)
  const selectedBrand = ref(null)
  // const category = categories[route.params.slug]
  const brandId = computed(() => route.params.brandId)
  const category = computed(() => {
    return categories[route.params.slug]
  })

  const products = computed(() => {
    let result = allProducts

    // 🟢 CATEGORY PAGE
    if (route.params.slug) {
      result = result.filter(
          p => p.categoryId === route.params.slug
      )
    }

    // 🔵 BRAND PAGE
    if (route.params.brandId) {
      result = result.filter(
          p => p.brandId === route.params.brandId
      )
    }

    // 🔴 UI FILTER (click brand inside page)
    if (selectedBrand.value) {
      result = result.filter(
          p => p.brandId === selectedBrand.value
      )
    }

    return result
  })
  // const products = computed(() => {
  //   let result = allProducts.filter(
  //       p => p.categoryId === route.params.slug
  //   )
  //
  //   if (selectedBrand.value) {
  //     result = result.filter(
  //         p => p.brandId === selectedBrand.value
  //     )
  //   }
  //
  //   return result
  // })

  const brands = computed(() => {
    const categoryProducts = allProducts.filter(
        p => p.categoryId === route.params.slug
    )

    const brandIds = [
      ...new Set(categoryProducts.map(p => p.brandId))
    ]

    return brandIds.map(id => allBrands[id])
  })

  // const brands = computed(() => {
  //   return category.value?.brands || []
  // })

  const filterByBrand = (brandId) => {
    selectedBrand.value = brandId
  }

  const clearFilter = () => {
    selectedBrand.value = null
  }

  const goToProduct = (product) => {
    console.log('product:' ,product);
    // router.push(`/product/${product.id}`)
    router.push(`/product/${product.brandId}/${product.id}`
    )
  }

  </script>

  <template>
    <div class="category-page">
      <div class="top-bar">
      <!-- HERO (clean minimal) -->
      <section class="hero">
        <div>
          <h1>{{ category?.title }}</h1>
          <p>{{ category?.description }}</p>
        </div>
      </section>

      <!-- FILTER BAR (modern pills) -->
      <section class="filters">

        <button
            class="pill"
            :class="{ active: !selectedBrand }"
            @click="clearFilter"
        >
          All Products
        </button>

        <button
            v-for="brand in brands"
            :key="brand.id"
            class="pill"
            :class="{ active: selectedBrand === brand.id }"
            @click="filterByBrand(brand.id)"
        >
          {{ brand.title }}
        </button>

      </section>
      </div>
      <!-- PRODUCTS -->
      <section class="grid">

        <article
            v-for="product in products"
            :key="product.id"
            class="card"
        >
          <div class="img">
            <img :src="product.image" />
          </div>

          <div class="content">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>

            <div class="bottom">
              <span class="badge">In Stock</span>
              <button @click="goToProduct(product)">View</button>
            </div>
          </div>
        </article>

      </section>

    </div>
  </template>
  <style scoped>
  .category-page {
    background: #f9fafb;
    min-height: 100vh;
    padding: 40px 80px;
    font-family: system-ui;
    color: #0f172a;
  }

  /* =========================
     TOP BAR (HERO + FILTERS)
  ========================= */
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 18px;
  }

  /* HERO */
  .hero {
    flex: 1;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 16px 20px;
  }

  .hero h1 {
    font-size: 20px;
    font-weight: 800;
  }

  .hero p {
    font-size: 13px;
    color: #64748b;
    margin-top: 4px;
  }

  /* FILTERS */
  .filters {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    overflow-x: auto;
    padding: 6px 0;
  }

  /* =========================
     PILLS (FILTER BUTTONS)
  ========================= */
  .pill {
    padding: 7px 14px;
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .pill:hover {
    border-color: #0f172a;
    transform: translateY(-1px);
  }

  .pill.active {
    background: #0f172a;
    color: #ffffff;
    border-color: #0f172a;
  }

  /* =========================
     PRODUCT GRID
  ========================= */
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  /* CARD */
  .card {
    background: #ffffff;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    transition: all 0.25s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    border-color: #cbd5e1;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
  }

  /* IMAGE */
  .img {
    aspect-ratio: 1/1;
    background: #f1f5f9;
    overflow: hidden;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .card:hover img {
    transform: scale(1.05);
  }

  /* CONTENT */
  .content {
    padding: 12px;
  }

  .content h3 {
    font-size: 14px;
    font-weight: 700;
  }

  .content p {
    font-size: 12px;
    color: #64748b;
    margin-top: 6px;
    line-height: 1.4;
  }

  /* BOTTOM */
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .badge {
    font-size: 10px;
    padding: 4px 8px;
    background: #ecfdf5;
    color: #16a34a;
    border-radius: 999px;
  }

  /* BUTTON */
  button {
    background: #0f172a;
    color: #ffffff;
    border: none;
    padding: 6px 10px;
    font-size: 11px;
    border-radius: 999px;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background: #1e293b;
  }

  /* =========================
     RESPONSIVE
  ========================= */
  @media (max-width: 1200px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 900px) {
    .top-bar {
      flex-direction: column;
      align-items: stretch;
    }

    .filters {
      justify-content: flex-start;
    }

    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
  </style>