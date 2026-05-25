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
/*
  Qlobal sıfırlama (Reset).
  Brauzerlərin standart kənar boşluqlarını silir ki, sayt tam otursun.
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
}
</style>