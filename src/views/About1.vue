<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="about-hero">
      <h1>About Delphix Global</h1>
      <p>
        Delphix Global is an international automotive products company focused on
        developing, manufacturing, and distributing high-quality mobility solutions
        for global markets.
      </p>
    </section>

    <!-- DESCRIPTION -->
    <section class="about-section">
      <p>
        With a strong commitment to innovation, reliability, and long-term partnerships,
        Delphix Global collaborates with leading manufacturing facilities across Asia,
        Europe, and the Middle East to deliver products that meet international quality
        standards and the evolving needs of the automotive industry.
      </p>
    </section>

    <!-- PORTFOLIO -->
    <section class="about-values">
      <h2>Our Product Portfolio</h2>

      <div class="grid">

        <div class="card">
          <h3>Automotive Batteries</h3>
          <p>DELPHIX, PANOSONIC PLUS, PHILLIPS XPRO, DENZO</p>
        </div>

        <div class="card">
          <h3>Lubricants & Fluids</h3>
          <p>DELPHIX, PLATIN, WESTOL</p>
        </div>

        <div class="card">
          <h3>Automotive Filters</h3>
          <p>DELPHIX, DENZO</p>
        </div>

        <div class="card">
          <h3>Tires</h3>
          <p>DENZO</p>
        </div>

      </div>
    </section>

    <!-- GLOBAL NETWORK -->
    <section class="about-section">
      <h2>Global Manufacturing Network</h2>
      <p>
        Our manufacturing network spans key global production hubs, including China,
        Thailand, Germany, the United Arab Emirates, and Azerbaijan, enabling us to
        combine advanced technology, efficient supply chains, and competitive market solutions.
      </p>
    </section>

    <!-- MISSION -->
    <section class="about-section">
      <h2>Our Mission</h2>
      <p>
        To become a trusted global supplier of automotive batteries, lubricants, filters,
        and tires, delivering products that power mobility and support the future of transportation.
      </p>
    </section>

    <!-- SLOGAN -->
    <section class="about-footer">
      <h2>Delphix Global</h2>
      <p>Driving Performance. Powering Mobility. Connecting Markets.</p>
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
.about-footer {
  text-align: center;
  margin-top: 60px;
  padding: 40px;
  background: #0b1c33;
  color: white;
  border-radius: 10px;
}

.about-footer p {
  margin-top: 10px;
  color: #cbd5e0;
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