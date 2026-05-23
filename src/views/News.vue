<script setup>
import { ref } from "vue";

const newsList = ref([
  {
    id: 1,
    title: "Delphix Global expands production capacity",
    date: "2026-05-20",
    description: "We are increasing production to meet global demand for lubricants and batteries.",
    image: "https://via.placeholder.com/600x300"
  },
  {
    id: 2,
    title: "New generation engine oils released",
    date: "2026-05-10",
    description: "Our latest lubricants provide better protection and efficiency.",
    image: "https://via.placeholder.com/600x300"
  },
  {
    id: 3,
    title: "Partnerships in Middle East growing",
    date: "2026-04-28",
    description: "We are strengthening our distribution network across the region.",
    image: "https://via.placeholder.com/600x300"
  }
]);

const openNews = (news) => {
  alert(`Opening: ${news.title}`);
};
</script>

<template>
  <div class="news-page">

    <!-- HERO -->
    <section class="news-hero">
      <h1>NEWS</h1>
      <p>Latest updates and announcements</p>
    </section>

    <!-- LIST -->
    <section class="news-grid">
      <div
          v-for="news in newsList"
          :key="news.id"
          class="news-card"
          @click="openNews(news)"
      >
        <img :src="news.image" alt="" />

        <div class="news-content">
          <span class="date">{{ news.date }}</span>
          <h3>{{ news.title }}</h3>
          <p>{{ news.description }}</p>

          <a href="#">Read more →</a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.news-page {
  background: #f9f9f9;
  color: #333;
}

/* HERO */
.news-hero {
  background: linear-gradient(90deg, #0a192f, #132a4e);
  color: white;
  padding: 70px 50px;
  text-align: center;
}

.news-hero h1 {
  font-size: 36px;
  font-weight: 900;
}

.news-hero p {
  color: #cbd5e0;
  margin-top: 10px;
}

/* GRID */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  padding: 60px 50px;
}

/* CARD */
.news-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.news-content {
  padding: 15px;
}

.date {
  font-size: 12px;
  color: #e53e3e;
  font-weight: 600;
}

.news-content h3 {
  font-size: 16px;
  margin: 10px 0;
}

.news-content p {
  font-size: 13px;
  color: #666;
}

.news-content a {
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
  color: #0b1c33;
  font-weight: 700;
}
</style>