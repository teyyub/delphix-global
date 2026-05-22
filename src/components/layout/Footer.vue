<script setup>
import {computed, ref} from 'vue'
import {useI18n} from "@/composables/useI18n.js";
import {footerTranslation} from "@/composables/i18n/footerTranslation.js";
const { currentLang } = useI18n()
const currentYear = new Date().getFullYear()
const footer = computed(() => {
  return footerTranslation[currentLang.value]
})

const quickLinks = computed(() => [
  footer.value.quickLinks.home,
  footer.value.quickLinks.about,
  footer.value.quickLinks.products,
  footer.value.quickLinks.contact
])


const categories = computed(() => [
  { title: footer.value.products.batteries },
  { title: footer.value.products.lubricants },
  { title: footer.value.products.filters },
  { title: footer.value.products.tires }
])

// const quickLinks = ref(['Home', 'About Us', 'Products', 'Contact Us'])

// const categories = ref([
//   { title: 'Batteries' },
//   { title: 'Lubricants' },
//   { title: 'Filters' },
//   { title: 'Tires' }
// ])

// const contactInfo = ref({
//   email: 'info@delphixglobal.com',
//   phone: '+971 50 123 4567',
//   address: 'Jumeirah Lakes Towers, Dubai, UAE'
// })


</script>

<template>
  <footer class="footer">

    <div class="footer-grid">

      <div class="footer-col">
        <h4 class="footer-brand">DELPHIX GLOBAL</h4>
        <p class="footer-desc">
           {{ footer.brandDesc }}
        </p>
      </div>

      <div class="footer-col">
        <h4>{{ footer.quickLinks.title }}</h4>
        <ul>
          <li v-for="link in quickLinks" :key="link">
            <a href="#">{{ link }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4> {{ footer.products.title }}</h4>
        <ul>
          <li v-for="category in categories" :key="category.title">
<!--            <a href="#" @click.prevent="viewCategory(category.title)">-->
              {{ category.title }}
<!--            </a>-->
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4> {{ footer.contact.title }}</h4>
        <p class="footer-contact-details">
          📍 {{ footer.contact.address }}<br>
          📞 {{ footer.contact.phone }}<br>
          📧 {{ footer.contact.email }}
        </p>
      </div>

    </div>

    <div class="footer-bottom">
      <div>© {{ currentYear }} Delphix Global. All Rights Reserved.</div>
      <div>
        <a href="#" class="footer-policy-link">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </div>

  </footer>
</template>

<style scoped>
.footer {
  background-color: #0b1c33;
  color: #a0aec0;
  font-size: 12px;
  padding: 50px 50px 20px;
  border-top: 1px solid #1a2e4c;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.footer-col h4 {
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.footer-brand {
  font-weight: 900;
}

.footer-desc {
  line-height: 1.6;
  font-size: 11px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul a {
  color: inherit;
  text-decoration: none;
}

.footer-col ul a:hover {
  color: #fff;
}

.footer-contact-details {
  font-size: 11px;
  line-height: 1.8;
}

.footer-bottom {
  border-top: 1px solid #1a2e4c;
  margin-top: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
}

.footer-policy-link {
  margin-right: 15px;
}
</style>