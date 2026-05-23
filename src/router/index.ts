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

    // // PRODUCTS
    // {
    //     path: "/products/cosmetics",
    //     name: "cosmetics",
    //     component: () => import("@/views/products/Cosmetics.vue")
    // },
    // {
    //     path: "/products/hair-care",
    //     name: "hairCare",
    //     component: () => import("@/views/products/HairCare.vue")
    // },
    // {
    //     path: "/products/skin-care",
    //     name: "skinCare",
    //     component: () => import("@/views/products/SkinCare.vue")
    // },
    // {
    //     path: "/products/supplements",
    //     name: "supplements",
    //     component: () => import("@/views/products/Supplements.vue")
    // },
    //
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