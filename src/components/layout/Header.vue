<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useI18n } from "@/composables/useI18n"
import { navStructure } from "@/composables/navStructure"

const { t, currentLang, setLanguage } = useI18n()
const router = useRouter()

const openDropdown = ref(null)

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' }
]

const contact = {
  email: 'info@delphixglobal.com',
  phone: '+971 50 123 4567'
}

// NAV
const goTo = (key) => {
  router.push({ name: key })
}

const toggle = (key) => {
  openDropdown.value = openDropdown.value === key ? null : key
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
      <div class="top-bar-left">
        <span>{{ contact.email }}</span>
        <span>{{ contact.phone }}</span>
      </div>

      <div class="top-bar-right">
        <select v-model="currentLang" @change="setLanguage(currentLang)">
          <option v-for="l in languages" :key="l.code" :value="l.code">
            {{ l.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- NAVBAR -->
    <nav class="navbar">

      <!-- LOGO -->
<!--      <div class="logo">-->
<!--        <span>D</span> DELPHIX GLOBAL-->
<!--      </div>-->
<!--      <router-link to="/" class="logo">-->
<!--        <span>D</span> DELPHIX GLOBAL-->
<!--      </router-link>-->
      <router-link to="/" class="logo">
        <img src="/delphix-global-logo.png" alt="Delphix Global Logo" class="navbar-logo" />
      </router-link>
      <!-- LINKS -->
      <ul class="nav-links">

        <li v-for="item in navStructure" :key="item.key">

          <!-- SIMPLE LINK -->
          <template v-if="item.type === 'link'">
            <a @click.prevent="goTo(item.key)">
              {{ t.nav[item.key] }}
            </a>
          </template>

          <!-- DROPDOWN -->
          <template v-else>
            <div class="dropdown">

              <a @click="toggle(item.key)">
                {{ t.nav[item.key].label }} ▾
              </a>

              <ul v-show="openDropdown === item.key" class="dropdown-menu">
                <li v-for="child in item.children" :key="child.key">
                  {{ t.nav[item.key].items[child.key] }}
                </li>
              </ul>

            </div>
          </template>

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
  font-size: 22px;
  font-weight: 900;
  color: #0b1c33;
}

.logo span {
  color: #e53e3e;
}
.logo {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: 0.2s ease;
}

.logo:hover {
  opacity: 0.7;
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

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* BUTTON */
.btn-quote {
  background: #0b1c33;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
</style>