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

        <!-- LEFT -->
        <div class="hero">
          <h1>{{ category?.title }}</h1>
          <p>{{ category?.description }}</p>
        </div>

        <!-- RIGHT -->
        <div class="filters">
          <button class="pill" @click="clearFilter">
            All Products
          </button>

          <button
              v-for="brand in brands"
              :key="brand.id"
              class="pill"
              @click="filterByBrand(brand.id)"
          >
            {{ brand.title }}
          </button>
        </div>
      </div>
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
   padding: 50px 80px;
   background: #f6f7fb;
   min-height: 100vh;
   font-family: system-ui, -apple-system, sans-serif;
   color: #0f172a;
 }

 /* =========================
    TOP BAR (NO BACKGROUND)
 ========================= */
 .top-bar {
   display: flex;
   justify-content: space-between;
   align-items: stretch;
   gap: 20px;
   margin-bottom: 25px;

   background: transparent;
 }

 /* =========================
    HERO (TEXT ONLY)
 ========================= */
 .hero {
   flex: 1;
   min-width: 0;

   background: transparent;
   border: none;
   padding: 0;

   display: flex;
   flex-direction: column;
   justify-content: center;
 }

 .hero h1 {
   font-size: 22px;
   font-weight: 800;
   margin-bottom: 6px;
   color: #0f172a;
 }

 .hero p {
   font-size: 13px;
   color: #64748b;
   line-height: 1.5;
 }

 /* =========================
    FILTERS
 ========================= */
 .filters {
   flex: 1;
   min-width: 0;

   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 10px;

   overflow-x: auto;
   background: transparent;
 }

 .filters::-webkit-scrollbar {
   display: none;
 }

 /* =========================
    PILLS
 ========================= */
 .pill {
   padding: 8px 14px;
   border-radius: 999px;
   border: 1px solid #e5e7eb;
   background: #fff;

   font-size: 12px;
   cursor: pointer;
   white-space: nowrap;

   color: #0f172a;
   transition: all 0.2s ease;
 }

 /* 🔥 HOVER FIX */
 .pill:hover {
   background: #0f172a;   /* tünd fon */
   color: #ffffff;        /* ağ text */
   border-color: #0f172a;
 }

 /* ACTIVE state */
 .pill.active {
   background: #0f172a;
   color: #ffffff;
   border-color: #0f172a;
 }

 /* =========================
    PRODUCTS GRID
 ========================= */
 .products-grid {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 20px;
 }

 /* responsive */
 @media (max-width: 1200px) {
   .products-grid {
     grid-template-columns: repeat(3, 1fr);
   }
 }

 @media (max-width: 900px) {
   .top-bar {
     flex-direction: column;
   }

   .filters {
     justify-content: flex-start;
   }

   .products-grid {
     grid-template-columns: repeat(2, 1fr);
   }
 }

 @media (max-width: 600px) {
   .products-grid {
     grid-template-columns: 1fr;
   }
 }

 /* =========================
    PRODUCT CARD
 ========================= */
 .product-card {
   background: #fff;
   border-radius: 16px;
   overflow: hidden;
   border: 1px solid #e5e7eb;
   transition: 0.25s;
 }

 .product-card:hover {
   transform: translateY(-6px);
   box-shadow: 0 10px 25px rgba(0,0,0,0.08);
 }
 .image-wrapper {
   height: 370px;
   background: #f8fafc;
   overflow: hidden;
   padding: 12px;
 }

 .image-wrapper img {
   width: 100%;
   height: 100%;
   object-fit: contain;
   transition: 0.3s ease;
 }

 .product-card:hover img {
   transform: scale(1.05);
 }
 .product-card:hover img {
   transform: scale(1.05);
 }

 /* CONTENT */
 .content {
   padding: 14px;
 }

 .content h3 {
   font-size: 15px;
   font-weight: 700;
 }

 .desc {
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
   margin-top: 12px;
 }

 .badge {
   font-size: 10px;
   padding: 4px 8px;
   background: #dcfce7;
   color: #16a34a;
   border-radius: 999px;
 }

 /* BUTTON */
 button {
   background: #0f172a;
   color: #fff;
   border: none;
   padding: 7px 12px;
   font-size: 11px;
   border-radius: 8px;
   cursor: pointer;
   transition: 0.2s;
 }

 button:hover {
   background: #1e293b;
 }
 </style>