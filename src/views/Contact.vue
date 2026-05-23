<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const contactInfo = ref({
  email: "info@delphixglobal.com",
  phone: "+971 50 123 4567",
  address: "Jumeirah Lakes Towers, Dubai, UAE"
});

const submitForm = () => {
  console.log("Form:", form.value);
  alert("Message sent successfully!");
};
</script>

<template>
  <div class="contact-page">

    <!-- HEADER -->
    <section class="contact-hero">
      <h1>CONTACT US</h1>
      <p>We are here to help you. Get in touch with our team.</p>
    </section>

    <!-- CONTENT -->
    <section class="contact-content">

      <!-- LEFT INFO -->
      <div class="contact-info">
        <h2>Get in Touch</h2>

        <div class="info-item">
          📧 <span>{{ contactInfo.email }}</span>
        </div>

        <div class="info-item">
          📞 <span>{{ contactInfo.phone }}</span>
        </div>

        <div class="info-item">
          📍 <span>{{ contactInfo.address }}</span>
        </div>
      </div>

      <!-- FORM -->
      <div class="contact-form">
        <h2>Send Message</h2>

        <input v-model="form.name" placeholder="Your Name" />
        <input v-model="form.email" placeholder="Your Email" />
        <input v-model="form.subject" placeholder="Subject" />

        <textarea v-model="form.message" placeholder="Your Message"></textarea>

        <button @click="submitForm">Send Message</button>
      </div>

    </section>

  </div>
</template>

<style scoped>
.contact-page {
  background: #f9f9f9;
  color: #333;
}

/* HERO */
.contact-hero {
  background: linear-gradient(90deg, #0a192f, #132a4e);
  color: white;
  padding: 70px 50px;
  text-align: center;
}

.contact-hero h1 {
  font-size: 36px;
  font-weight: 900;
}

.contact-hero p {
  color: #cbd5e0;
  margin-top: 10px;
}

/* CONTENT */
.contact-content {
  display: flex;
  gap: 40px;
  padding: 60px 50px;
}

/* INFO */
.contact-info {
  flex: 1;
}

.contact-info h2 {
  margin-bottom: 20px;
}

.info-item {
  margin-bottom: 15px;
  font-size: 14px;
}

/* FORM */
.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.contact-form textarea {
  min-height: 120px;
  resize: none;
}

.contact-form button {
  background: #e53e3e;
  color: white;
  padding: 12px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 6px;
}

.contact-form button:hover {
  background: #c53030;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }
}
</style>