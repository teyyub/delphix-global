<script setup>
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";
import Landing from "@/components/Landing.vue";
</script>

<template>
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
<!--  <landing />-->
</template>

<!--<style scoped>-->
<!--header {-->
<!--  line-height: 1.5;-->
<!--}-->

<!--.logo {-->
<!--  display: block;-->
<!--  margin: 0 auto 2rem;-->
<!--}-->

<!--@media (min-width: 1024px) {-->
<!--  header {-->
<!--    display: flex;-->
<!--    place-items: center;-->
<!--    padding-right: calc(var(&#45;&#45;section-gap) / 2);-->
<!--  }-->

<!--  .logo {-->
<!--    margin: 0 2rem 0 0;-->
<!--  }-->

<!--  header .wrapper {-->
<!--    display: flex;-->
<!--    place-items: flex-start;-->
<!--    flex-wrap: wrap;-->
<!--  }-->
<!--}-->
<!--</style>-->

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #f9f9f9;
  color: #0b1c33;
}

/* desktop container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* TABLET */
@media (max-width: 1024px) {
  .container {
    padding: 0 16px;
  }
}

/* MOBILE */
@media (max-width: 768px) {

  /* text bir az kiçilsin */
  body {
    font-size: 14px;
  }

  /* navbar */
  .navbar {
    padding: 10px 16px !important;
  }

  /* menu gizlət (sonra hamburger edərik) */
  .nav-links {
    display: none !important;
  }

  /* hero mobile layout */
  .hero {
    flex-direction: column !important;
    text-align: center;
    padding: 40px 16px !important;
  }

  /* grid-lər 1 column olsun */
  .grid-categories,
  .grid-features {
    grid-template-columns: 1fr !important;
  }

  /* logo kiçilsin */
  .navbar-logo {
    height: 40px;
  }
}
</style>