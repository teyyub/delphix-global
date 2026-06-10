<script setup>
import { ref } from "vue";
const certificates = [
  {
    id: 1,
    title: "DELPHIX Certificate",
    image: "/certificates/1.jpeg",
  },
  {
    id: 2,
    title: "DELPHIX Certificate",
    image: "/certificates/2.jpeg",
  },
  {
    id: 3,
    title: "VOLVO Certificate",
    image: "/certificates/3.jpeg",
  },
  {
    id: 4,
    title: "PLATIN Certificate",
    image: "/certificates/4.jpeg",
  },
  {
    id: 5,
    title: "DEXOS Certificate",
    image: "/certificates/5.jpeg",
  },
  {
    id: 6,
    title: "VOLKSWAGEN Certificate",
    image: "/certificates/6.jpeg",
  },
];
</script>

<template>
  <section class="certificates">
    <h2>Certificates</h2>

    <div class="certificate-grid">
      <div
          v-for="certificate in certificates"
          :key="certificate.id"
          class="certificate-card"
      >
        <img
            :src="certificate.image"
            :alt="certificate.title"
            class="certificate-image"
        />
        <h3>{{ certificate.title }}</h3>
      </div>
    </div>
  </section>
</template>
<style scoped>
.certificates {
  padding: 40px 20px;
}

.certificate-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.certificate-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
}

.certificate-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .certificate-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .certificate-grid {
    grid-template-columns: 1fr;
  }
}
</style>

