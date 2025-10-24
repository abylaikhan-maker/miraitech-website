<template>
  <section class="preorder-section"  id="contact">
    <div class="preorder-header">
      <p class="preorder-subtitle">{{ t('preorder-subtitle') }}</p>
      <h2 class="preorder-title">{{ t('preorder-title') }}</h2>
    </div>

    <div class="preorder-container">
      <form
        action="https://formspree.io/f/xanozvpn"
        method="POST"
        target="hidden_iframe"
        @submit="handleSubmit"
        class="preorder-form"
      >
        <input type="text" name="name" :placeholder="t('form-name')" required />
        <input type="text" name="organization" :placeholder="t('form-organization')" />
        <input type="email" name="email" :placeholder="t('form-email')" required />
        <input
          type="tel"
          name="phone"
          :placeholder="t('form-phone')"
          maxlength="18"
          required
        />
        <textarea name="message" :placeholder="t('form-message')"></textarea>
        <button type="submit" class="preorder-button">{{ t('form-submit') }}</button>

        <div v-if="submitted" class="success-popup">
          <div class="success-container">
            <img src="@/assets/fail-icon.png" alt="Success" class="success-icon" />
            <h3>{{ t('form-success') }}</h3>
            <p>{{ t('form-thanks') }}</p>
          </div>
        </div>
      </form>

      <div class="preorder-image">
        <img src="@/assets/phoneorder.png" alt="Instagram Profile on Phone" />
      </div>

      <iframe name="hidden_iframe" style="display: none"></iframe>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';
import { useLangStore } from '@/stores/lang';
const langStore = useLangStore();
const t = langStore.t;

const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
  setTimeout(() => (submitted.value = false), 5000);
}
</script>

<style scoped>
.preorder-section {
  padding: 4rem 1rem;
  background-color: #f9fbfd;
  text-align: center;
}

.preorder-header {
  margin-bottom: 2rem;
}

.preorder-title {
  font-size: 2.5rem;
  font-weight: 800;
}

.preorder-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.preorder-form {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.preorder-form input,
.preorder-form textarea {
  padding: 0.75rem;
  border: 1px solid #c8d5e0;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
}

.preorder-button {
  background-color: #00d1b2;
  color: white;
  font-weight: bold;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.preorder-button:hover {
  background-color: #00bfa3;
}

.preorder-image img {
  max-width: 300px;
  height: auto;
}

.success-popup {
  margin-top: 1rem;
  background: #e0ffe4;
  border: 1px solid #47c47c;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.success-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
}
</style>
