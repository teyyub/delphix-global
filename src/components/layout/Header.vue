<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from "vue"
import { useRoute, useRouter } from "vue-router"
import { useI18n } from "@/composables/useI18n"
import { navStructure } from "@/composables/navStructure"

const { t, currentLang, setLanguage } = useI18n()
const router = useRouter();
const route = useRoute();
const openDropdown = ref(null)
const dropdownRefs = ref(new Map())

const navigate = async (item) => {
  console.log('item:',item);
  if (!item) return

  await router.push(item )
  openDropdown.value = null
}
const languages = [
  { code: 'en', label: 'EN' },
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' }
]

// const handleOutsideClick = (e) => {
//   const isInside = Array.from(dropdownRefs.value.values())
//       .some(el => el && el.contains?.(e.target))
//
//   if (!isInside) {
//     openDropdown.value = null
//   }
// }


// const handleOutsideClick = (e) => {
//   if (!dropdownRef.value) return
//
//   if (!dropdownRef.value.contains(e.target)) {
//     openDropdown.value = null
//   }
// }

// onMounted(() => {
//   document.addEventListener("click", handleOutsideClick)
// })
//
// onBeforeUnmount(() => {
//   document.removeEventListener("click", handleOutsideClick)
// })

const contact = {
  email: 'info@delphixglobal.com',
  phone: '+971 50 123 4567'
}

// NAV
// const goTo = (key) => {
//   router.push({ name: key })
// }

const goTo = (item) => {
  router.push(item.route)
}

const goToCategory = (child) => {
  openDropdown.value = null
  router.push(child.route)
}

const toggle = (key) => {
  openDropdown.value = openDropdown.value === key ? null : key
}



watch(route, () => {
  openDropdown.value = null
})


const isActive = (item) => {
  return item.route === route.path
}
const isActiveRoute = (path) => {
  return route.path === path
}

const isActiveChild = (child) => {
  return route.path.startsWith(child.route)
}

const isActiveParent = (item) => {
  if (!item.children) return false
  return item.children.some(c => route.path.startsWith(c.route))
}
// CTA
const handleQuote = () => {
  alert("Quote request")
}
</script>

<template>
  <header class="header">

    <!-- TOP BAR -->
    <div class="top-bar">
<!--      <div class="top-bar-left">-->
<!--        <span>{{ contact.email }}</span>-->
<!--        <span>{{ contact.phone }}</span>-->
<!--      </div>-->

<!--      <div class="top-bar-right">-->
<!--        <select v-model="currentLang" @change="setLanguage(currentLang)">-->
<!--          <option v-for="l in languages" :key="l.code" :value="l.code">-->
<!--            {{ l.label }}-->
<!--          </option>-->
<!--        </select>-->
<!--      </div>-->
    </div>

    <!-- NAVBAR -->
    <nav class="navbar">

      <!-- LOGO -->

      <router-link to="/" class="logo">
        <img src="/logo_new.svg" alt="Delphix Global Logo" class="navbar-logo" />
      </router-link>
      <!-- LINKS -->
      <ul class="nav-links">

        <li v-for="item in navStructure" :key="item.key">

          <!-- SIMPLE LINK -->
          <template v-if="item.type === 'link'">
            <a :class="{ active: isActiveRoute(item.route) }"
                @click.prevent="goTo(item)">
              {{ t.nav[item.key] }}
            </a>
          </template>
          <!-- DROPDOWN -->
          <template v-else>
            <div class="dropdown">

              <a @click.stop.prevent ="toggle(item.key)">
                {{ t.nav[item.key].label }} ▾
              </a>

              <ul v-show="openDropdown === item.key" class="dropdown-menu">
                <li v-for="child in item.children" :key="child.key">

                  <a @click.stop.prevent="navigate(child.route)">
                    {{ t.nav[item.key].items[child.key] }}
                  </a>

                </li>
              </ul>

            </div>
          </template>
          <!-- DROPDOWN -->
<!--          <template v-else>-->
<!--&lt;!&ndash;            <div class="dropdown" ref="dropdownRef">&ndash;&gt;-->
<!--            <div class="dropdown"-->
<!--                 :ref="el => el && dropdownRefs.set(item.key, el)"-->
<!--                 @click.stop>-->
<!--              <a @click="toggle(item.key)">-->
<!--                {{ t.nav[item.key].label }} ▾-->
<!--              </a>-->

<!--              <ul v-show="openDropdown === item.key" class="dropdown-menu"-->
<!--              >-->
<!--                <li v-for="child in item.children"-->
<!--                    :key="child.key"-->
<!--                    :class="{ active: isActiveChild(child) }"-->
<!--                    @click.stop="navigate(child)"-->
<!--                >-->
<!--                    {{ t.nav[item.key].items[child.key] }}-->
<!--                </li>-->
<!--              </ul>-->

<!--            </div>-->
<!--          </template>-->

        </li>

      </ul>

      <!-- CTA -->
      <button class="btn-quote" @click="handleQuote">
        {{ t.nav.quote || 'GET A QUOTE' }}
      </button>

    </nav>

  </header>
</template>

<style scoped>
.header {
  width: 100%;
}

/* TOP BAR */
.top-bar {
  background: #0b1c33;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  padding: 8px 50px;
  font-size: 12px;
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.navbar-logo {
  height: 50px; /* Sizin navbarın hündürlüyünə uyğun olaraq 40px - 60px arası dəyişə bilərsiniz */
  width: auto;  /* Eni proporsional olaraq özü tənzimlənəcək */
  display: block;
}
.logo {
  color: #0b1c33;
}
.navbar-logo {
  height: 50px;
  width: auto;
  display: block;
  fill: currentColor;
}

/* NAV */
.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links a {
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
  position: relative;
  text-decoration: none;
  color: #0b1c33;
}
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #e53e3e;
  transition: width 0.3s ease;
}
.nav-links a:hover {
  color: #e53e3e;
}
.nav-links a:hover::after {
  width: 100%;
}

/* DROPDOWN */
.dropdown {
  position: relative;
}



/* BUTTON */
.btn-quote {
  background: #0b1c33;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.nav-links a.active {
  color: #e53e3e;
}

.nav-links a.active::after {
  width: 100%;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
  z-index: 999;
}

.dropdown-menu li {
  padding: 12px 16px;
  cursor: pointer;
  transition: 0.2s;
}

.dropdown-menu li:hover {
  background: #f5f7fa;
  color: #e53e3e;
}
</style>