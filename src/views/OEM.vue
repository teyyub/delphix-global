<template>
  <div class="page">
    <section class="hero">
      <h1>OEM & PRIVATE LABEL</h1>
      <p>
        We provide end-to-end OEM and private label solutions for lubricants, batteries,
        filters, and tires — from formulation to packaging and branding.
      </p>
    </section>

    <section class="content">
      <div class="card">
        <h2>Custom Manufacturing</h2>
        <p>Tailored production based on your brand requirements and market needs.</p>
      </div>

      <div class="card">
        <h2>Brand Development</h2>
        <p>We help you build and scale your own product brand globally.</p>
      </div>

      <div class="card">
        <h2>Packaging Solutions</h2>
        <p>Modern, export-ready packaging design and labeling services.</p>
      </div>

      <div class="card">
        <h2>Global Supply</h2>
        <p>Reliable logistics and supply chain for international distribution.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page {
  padding: 60px;
  background: #f9f9f9;
  color: #0b1c33;
}

.hero {
  text-align: center;
  margin-bottom: 50px;
}

.hero h1 {
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 15px;
}

.hero p {
  max-width: 700px;
  margin: 0 auto;
  color: #4a5568;
  font-size: 16px;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.card {
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.card h2 {
  font-size: 16px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.card p {
  font-size: 13px;
  color: #555;
}
</style>