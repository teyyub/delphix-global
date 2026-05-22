<script setup>
import { ref } from 'vue'

const contactInfo = ref({
  email: 'info@delphixglobal.com',
  phone: '+971 50 123 4567',
  phoneRaw: '+971501234567'
})
</script>

<template>
  <div class="top-bar">
    <div>Global Supplier of Premium Automotive Products</div>

    <div class="top-bar-right">
      <a :href="`mailto:${contactInfo.email}`">📧 {{ contactInfo.email }}</a>
      <a :href="`tel:${contactInfo.phoneRaw}`">📞 {{ contactInfo.phone }}</a>
      <span>🌐 EN ▾</span>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  background-color: #0b1c33;
  color: #ccc;
  font-size: 12px;
  padding: 8px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #22344d;
}

.top-bar-right a {
  margin-left: 20px;
  color: inherit;
  text-decoration: none;
}

.top-bar-right a:hover {
  color: #fff;
}
</style>