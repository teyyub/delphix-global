<template>
  <div class="map-page">
    <h1>Global Export Map</h1>

    <img src="/images/network.webp" class="map-image" />
  </div>
</template>

<style scoped>
.map-page {
  min-height: 100vh;
  width: 100%;
  background: #000;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;     /* 🔥 full fill */
  object-position: center;
  display: block;
}
</style>