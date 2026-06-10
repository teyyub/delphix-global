import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue")
    },

    {
        path: "/product/:brandId/:id",
        name: "product-detail",
        component: () => import("@/views/ProductDetail.vue")
    },

    {
        path: "/categories/:slug",
        name: "category",
        component: () => import("@/views/CategoryPage.vue")
    },

    {
        path: "/brands/:brandId",
        name: "brand-products",
        component: () => import("@/views/CategoryPage.vue")
    },

    {
        path: "/brands",
        name: "brands",
        component: () => import("@/views/Brands.vue")
    },
    {
        path: "/oem",
        name: "oem",
        component: () => import("@/views/OEM.vue")
    },
    {
        path: "/manufacturing",
        name: "manufacturing",
        component: () => import("@/views/Manufacturing.vue")
    },
    {
        path: "/news",
        name: "news",
        component: () => import("@/views/News.vue")
    },
    {
        path: "/certificates",
        name: "certificates",
        component: () => import("@/views/Certificates.vue")
    },
    {
        path: "/export-map",
        name: "export-map",
        component: () => import("@/views/ExportMapPage.vue")
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/Contact.vue")
    },

    // fallback
    {
        path: "/:pathMatch(.*)*",
        redirect: "/"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router