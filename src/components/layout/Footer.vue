<script setup>
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const currentYear = new Date().getFullYear()

const contactInfo = {
  email: 'info@delphixglobal.com',
  phone: '+971 50 123 4567',
  phoneRaw: '+971501234567',
  address: 'Jumeirah Lakes Towers, Dubai, UAE'
}

const quickLinks = [
  { label: 'Home' },
  { label: 'About Us' },
  { label: 'Products' },
  { label: 'Contact Us' }
]

const categories = [
  { title: 'Batteries' },
  { title: 'Lubricants' },
  { title: 'Filters' },
  { title: 'Tires' }
]
</script>

<template>
  <footer class="footer">

    <div class="footer-grid">

      <!-- BRAND -->
      <div class="footer-col">
        <h4 class="footer-brand">DELPHIX GLOBAL</h4>

        <p class="footer-desc">
          Delphix Global is a leading international supplier of premium automotive products including batteries, lubricants, filters, tires and auto parts.
        </p>
      </div>

      <!-- QUICK LINKS -->
      <div class="footer-col">
        <h4>{{ t.quickLinks }}</h4>

        <ul>
          <li v-for="link in quickLinks" :key="link.label">
            <a href="#">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <!-- PRODUCTS -->
      <div class="footer-col">
        <h4>{{ t.footerProducts }}</h4>

        <ul>
          <li v-for="cat in categories" :key="cat.title">
            <a href="#">{{ cat.title }}</a>
          </li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div class="footer-col">
        <h4>{{ t.contactUs }}</h4>

        <p class="footer-contact-details">
          📍 {{ contactInfo.address }}<br>
          📞 {{ contactInfo.phone }}<br>
          📧 {{ contactInfo.email }}
        </p>
      </div>

    </div>

    <!-- BOTTOM -->
    <div class="footer-bottom">

      <div>
        © {{ currentYear }} Delphix Global. All Rights Reserved.
      </div>

      <div>
        <a href="#" class="footer-policy-link">
          {{ t.privacy }}
        </a>

        <a href="#">
          {{ t.terms }}
        </a>
      </div>

    </div>

  </footer>
</template>