<script setup>
import { useI18n } from "@/composables/useI18n"
import {navStructure} from "@/composables/navStructure.js";
import {ref} from "vue";

const { t, currentLang, setLanguage } = useI18n()
const openDropdown = ref(null)

const toggleDropdown = (key) => {
  openDropdown.value = openDropdown.value === key ? null : key
}
const languages = [
  { code: 'en', label: 'EN' },
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' }
]

// const navLinks = [
//   { key: 'home', isActive: true },
//   { key: 'about', isActive: false },
//   { key: 'products', isActive: false },
//   { key: 'brands', isActive: false },
//   { key: 'oem', isActive: false },
//   { key: 'manufacturing', isActive: false },
//   { key: 'news', isActive: false },
//   { key: 'contact', isActive: false }
// ]

// const setActiveLink = (clicked) => {
//   navLinks.forEach(l => l.isActive = l.key === clicked.key)
// }

const handleQuote = () => {
  alert('Quote request')
}
</script>

<template>
  <nav class="navbar">

    <div class="logo">
      <span>D</span> DELPHIX GLOBAL
    </div>


    <ul class="nav-links">
      <li v-for="item in navStructure" :key="item.key">

        <!-- SIMPLE LINK -->
        <template v-if="item.type === 'link'">
          <a href="#">
            {{ t.nav[item.key] }}
          </a>
        </template>

        <!-- DROPDOWN -->
        <template v-else-if="item.type === 'dropdown'">
          <div class="dropdown">
            <a href="#" @click.prevent="toggleDropdown(item.key)">
              {{ t.nav[item.key].label }} ▾
            </a>

            <ul
                v-show="openDropdown === item.key"
                class="dropdown-menu"
            >
              <li v-for="child in item.children" :key="child.key">
                {{ t.nav[item.key].items[child.key] }}
              </li>
            </ul>
          </div>
        </template>

      </li>
    </ul>

    <!-- LANGUAGE SELECT -->
    <select v-model="currentLang" @change="setLanguage(currentLang)">
      <option
          v-for="l in languages"
          :key="l.code"
          :value="l.code"
      >
        {{ l.label }}
      </option>
    </select>

    <button class="btn-quote" @click="handleQuote">
      {{ t.nav.quote }}
    </button>

  </nav>
</template>

<style scoped>
.navbar {
  background-color: #fff;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 22px;
  font-weight: 900;
  color: #0b1c33;
}

.logo span {
  color: #e53e3e;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links a {
  font-size: 13px;
  font-weight: 600;
  color: #4a5568;
  text-decoration: none;
}

.nav-links a.active {
  color: #e53e3e;
  border-bottom: 2px solid #e53e3e;
  padding-bottom: 5px;
}

.lang-select {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-quote {
  background: #0b1c33;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

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
  min-width: 180px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
</style>