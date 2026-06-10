
<script setup>
import { ref } from "vue";

const processes = ref([
  {
    id: 1,
    title: "Raw Material Selection",
    description: "We carefully select high-quality raw materials for production.",
    icon: "🧪"
  },
  {
    id: 2,
    title: "Formulation & Blending",
    description: "Advanced formulas are created for maximum performance.",
    icon: "⚙️"
  },
  {
    id: 3,
    title: "Precision Manufacturing",
    description: "Modern equipment ensures consistent product quality.",
    icon: "🏭"
  },
  {
    id: 4,
    title: "Quality Testing",
    description: "Each batch is tested to meet international standards.",
    icon: "🔬"
  },
  {
    id: 5,
    title: "Packaging & Delivery",
    description: "Products are safely packaged and distributed worldwide.",
    icon: "📦"
  }
]);
</script>

<template>
  <div class="manufacturing-page">

    <!-- HERO -->
    <section class="hero">
      <h1>MANUFACTURING</h1>
      <p>
        DELPHIX is a global automotive and industrial brand dedicated to delivering high-quality products
        through innovation, advanced engineering, and world-class manufacturing standards.
      </p>
    </section>

    <!-- INTRO -->
    <section class="block">
      <p>
        Our products are developed using modern technologies, premium-grade materials, and strict quality control procedures
        to ensure exceptional performance, durability, and reliability in every application.
      </p>

      <p>
        With a strong commitment to excellence, DELPHIX continuously invests in research, product development, and manufacturing innovation.
        Every product undergoes comprehensive testing and inspection processes to meet international quality requirements and customer expectations across global markets.
      </p>

      <p>
        Our manufacturing philosophy is based on precision, efficiency, sustainability, and long-term customer satisfaction.
        From raw material selection to final packaging, each stage of production is carefully monitored to guarantee consistent quality and dependable performance.
      </p>
    </section>

    <!-- PRODUCT PORTFOLIO -->
    <section class="card-section">
      <h2>OUR PRODUCT PORTFOLIO</h2>
      <div class="card">
        Automotive Batteries<br>
        AGM & EFB Batteries<br>
        Heavy Duty Batteries<br>
        Motor Oils & Lubricants<br>
        Automotive Filters<br>
        Coolants & Antifreeze<br>
        Brake Fluids<br>
        Industrial Energy Solutions<br>
        Automotive Accessories
      </div>
    </section>

    <!-- QUALITY -->
    <section class="card-section">
      <h2>QUALITY & TECHNOLOGY</h2>
      <div class="card">
        Advanced Manufacturing Technologies<br>
        Premium Quality Raw Materials<br>
        Automated Quality Control Systems<br>
        International Manufacturing Standards<br>
        Environmentally Responsible Production<br>
        Continuous Innovation and Development<br>
        High Reliability and Long Service Life<br>
        Customer-Oriented Engineering Solutions
      </div>
    </section>

    <!-- FACTORIES -->
    <section class="factories">
      <h2>OUR GLOBAL FACTORIES</h2>
      <p>Strategically located production facilities ensuring global efficiency and quality.</p>

      <div class="factory-grid">

        <div class="factory-card delphix">
          <div class="overlay">
            <h3></h3>
            <p>Advanced Manufacturing Hub</p>
          </div>
        </div>
        <div class="factory-card china">
          <div class="overlay">
            <h3></h3>
            <p>Advanced Manufacturing Hub</p>
          </div>
        </div>

        <div class="factory-card dubai">
          <div class="overlay">
            <h3>DENZO</h3>
            <p>Logistics & Distribution Center</p>
          </div>
        </div>

        <div class="factory-card kazakhstan">
          <div class="overlay">
            <h3>PANOSONIC</h3>
            <p>Heavy Production Facility</p>
          </div>
        </div>

        <div class="factory-card germany">
          <div class="overlay">
            <h3>PANASONIC</h3>
            <p>Engineering & R&D Center</p>
          </div>
        </div>

        <div class="factory-card turkey">
          <div class="overlay">
            <h3>PHILLIPS</h3>
            <p>Regional Manufacturing Plant</p>
          </div>
        </div>

        <div class="factory-card usa">
          <div class="overlay">
            <h3>PLATIN</h3>
            <p>Quality Control & Export Hub</p>
          </div>
        </div>

      </div>
    </section>

    <!-- MISSION -->
    <section class="block center">
      <h2>OUR MISSION</h2>
      <p>
        To provide innovative, reliable, and high-performance automotive and industrial products that exceed customer expectations and support sustainable growth worldwide.
      </p>
    </section>

    <!-- VISION -->
    <section class="block center">
      <h2>OUR VISION</h2>
      <p>
        To become a globally recognized brand known for quality, innovation, trust, and excellence across every market we serve.
      </p>
    </section>

    <!-- VALUES -->
    <section class="block center">
      <h2>DELPHIX VALUES</h2>
      <p class="values">
        Quality • Innovation • Reliability • Performance • Sustainability • Customer Satisfaction
      </p>
    </section>

    <!-- CORPORATE -->
    <section class="corporate">
      <h2>CORPORATE STATEMENT</h2>

      <p>
        DELPHIX products are manufactured under strict quality management systems and international production standards.
        Through continuous improvement, advanced technology, and professional expertise, we deliver dependable solutions designed to perform in the most demanding environments.
      </p>

      <p>
        Our commitment to excellence ensures that every DELPHIX product represents superior quality, outstanding value, and long-lasting performance.
      </p>

      <div class="slogans">
        DELPHIX — ENGINEERED FOR PERFORMANCE<br>
        DELPHIX — BUILT FOR RELIABILITY<br>
        DELPHIX — TRUSTED WORLDWIDE<br>
        DELPHIX — POWERING THE FUTURE
      </div>
    </section>

  </div>
</template>

<style scoped>
.manufacturing-page {
  background: #f6f7f9;
  color: #1c1c1c;
  font-family: Arial, sans-serif;
}

/* HERO */
.hero {
  background: linear-gradient(90deg, #0a192f, #132a4e);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 42px;
  font-weight: 900;
  letter-spacing: 2px;
}

.hero p {
  max-width: 800px;
  margin: 15px auto 0;
  color: #cbd5e0;
  line-height: 1.6;
}

/* BLOCK TEXT */
.block {
  max-width: 1000px;
  margin: auto;
  padding: 50px 20px;
}

.block p {
  margin-bottom: 15px;
  line-height: 1.8;
  color: #444;
}

.center {
  text-align: center;
}

/* CARD SECTIONS */
.card-section {
  max-width: 1000px;
  margin: auto;
  padding: 40px 20px;
}

.card-section h2 {
  margin-bottom: 15px;
  font-size: 22px;
  color: #0a192f;
  letter-spacing: 1px;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.05);
  line-height: 1.8;
  color: #555;
}

/* VALUES */
.values {
  font-weight: 600;
  color: #0a192f;
  letter-spacing: 1px;
}

/* CORPORATE */
.corporate {
  background: #0a192f;
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.corporate h2 {
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.corporate p {
  max-width: 900px;
  margin: auto;
  line-height: 1.8;
  color: #cbd5e0;
}

.slogans {
  margin-top: 30px;
  font-weight: bold;
  line-height: 2;
  letter-spacing: 1px;
}
.factories {
  padding: 80px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.factories h2 {
  font-size: 28px;
  font-weight: 800;
  color: #0a192f;
  letter-spacing: 2px;
}

.factories p {
  margin-top: 10px;
  color: #666;
}

/* GRID */
.factory-grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.factory-card {
  aspect-ratio: 16 / 10;   /* 🔥 ən vacib fix */
  height: auto;            /* artıq fixed height yox */
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  background-size: cover;
  background-position: center;
}


/* HOVER EFFECT */
.factory-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.factory-card .overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
      to top,
      rgba(0,0,0,0.75),
      rgba(0,0,0,0.25)
  );

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding: 20px;
  color: white;
}

.factory-card:hover .overlay {
  background: rgba(10, 25, 47, 0.75);
}

.factory-card h3 {
  font-size: 18px;
  letter-spacing: 2px;
}

.factory-card p {
  font-size: 13px;
  color: #cbd5e0;
}

.delphix {
  background-image: url('/images/factories/7.jpeg');
}

/* BACKGROUNDS */
.china {
  background-image: url('/images/factories/1.jpeg');
}

.dubai {
  background-image: url('/images/factories/2.jpeg');
}

.kazakhstan {
  background-image: url('/images/factories/3.jpeg');
}

.germany {
  background-image: url('/images/factories/4.jpeg');
}

.turkey {
  background-image: url('/images/factories/5.jpeg');
}

.usa {
  background-image: url('/images/factories/6.jpeg');
}
</style>
