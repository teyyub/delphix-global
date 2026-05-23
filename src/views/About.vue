<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="about-hero">
      <h1>About Delphix Global</h1>
      <p>
        We are a global supplier of premium lubricants, batteries, filters,
        and tires, committed to performance, reliability, and innovation.
      </p>
    </section>

    <!-- MISSION -->
    <section class="about-section">
      <h2>Our Mission</h2>
      <p>
        Our mission is to deliver high-quality automotive and industrial products
        that power businesses and individuals around the world with trust and efficiency.
      </p>
    </section>

    <!-- VISION -->
    <section class="about-section">
      <h2>Our Vision</h2>
      <p>
        To become a globally recognized brand known for excellence in energy,
        mobility, and industrial solutions.
      </p>
    </section>

    <!-- VALUES -->
    <section class="about-values">
      <h2>Our Core Values</h2>

      <div class="grid">
        <div class="card">
          <h3>Quality</h3>
          <p>We never compromise on product standards.</p>
        </div>

        <div class="card">
          <h3>Trust</h3>
          <p>Long-term relationships built on reliability.</p>
        </div>

        <div class="card">
          <h3>Innovation</h3>
          <p>Continuous improvement and modern solutions.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// static page - no logic needed
</script>

<style scoped>
.about-page {
  padding: 60px 50px;
  max-width: 1100px;
  margin: auto;
}

/* HERO */
.about-hero {
  text-align: center;
  margin-bottom: 60px;
}

.about-hero h1 {
  font-size: 40px;
  font-weight: 800;
  color: #0b1c33;
}

.about-hero p {
  margin-top: 15px;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

/* SECTIONS */
.about-section {
  margin-bottom: 40px;
}

.about-section h2 {
  font-size: 24px;
  color: #0b1c33;
  margin-bottom: 10px;
}

.about-section p {
  color: #666;
  line-height: 1.6;
}

/* VALUES */
.about-values {
  margin-top: 60px;
}

.about-values h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #0b1c33;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  padding: 20px;
  background: #f8f9fb;
  border-radius: 10px;
}

.card h3 {
  margin-bottom: 10px;
  color: #0b1c33;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .about-page {
    padding: 30px 20px;
  }
}
</style>