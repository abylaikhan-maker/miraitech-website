<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="contact-footer">
    <div class="footer-wrapper">
      <div class="footer-container">
        <div class="footer-left">
          <img src="@/assets/MiraiLogo.png" alt="MIRAI TECH logo" class="footer-logo" />
          <p class="footer-desc">{{ t('footer-desc') }}</p>
       
        </div>
        <div class="footer-right">
          <div class="contact-info">
            <h3>{{ t('footer-contacts') }}</h3>
            <p>mirai.tech.kz@gmail.com</p>
            <p>{{ t('footer-address') }}</p>
             <!-- Social Media Icons -->
        <div class="social-icons">
          <a href="https://www.instagram.com/miraitech.ai" target="_blank" aria-label="Instagram">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.8,2h8.4C19.4,2,22,4.6,22,7.8v8.4c0,3.2-2.6,5.8-5.8,5.8H7.8C4.6,22,2,19.4,2,16.2V7.8C2,4.6,4.6,2,7.8,2z M18,7.6c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C19.1,7.1,18.6,7.6,18,7.6z M12,7c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S14.8,7,12,7z M12,15.2c-1.8,0-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2c1.8,0,3.2,1.4,3.2,3.2C15.2,13.8,13.8,15.2,12,15.2z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/miraitechkz/" target="_blank" aria-label="LinkedIn">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"/>
            </svg>
          </a>
          <a href="https://t.me/miraitechkz" target="_blank" aria-label="Telegram">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"/>
            </svg>
          </a>
        </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-wrapper">
          <!-- <p>{{ t('footer-copyright') }} <a href="https://t.me/shakerman" target="_blank">@Shakerman</a>{{ t('footer-copyright2') }} <a href="https://t.me/NukoCO" target="_blank">@NukoCO</a></p> -->
          <p>{{ t('footer-copyright') }} <a href="https://t.me/shakerman" target="_blank">@Shakerman</a></p>
<!--           
          <div class="footer-links">
            <a href="#">{{ t('footer-terms') }}</a>
            <span>|</span>
            <a href="#">{{ t('footer-privacy') }}</a>
          </div> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLangStore } from '@/stores/lang';
const langStore = useLangStore();
const t = langStore.t;
</script>

<style scoped>
.contact-footer {
  background: linear-gradient(145deg, #0c1127 0%, #172248 100%);
  color: white;
  padding: 3rem 1rem 1rem;
  font-family: 'Inter', sans-serif;
}

.footer-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding-bottom: 2rem;
}

.footer-logo {
  max-height: 100px;
  margin-bottom: 1rem;
}

.footer-desc {
  max-width: 350px;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
}

.contact-info {
  text-align: right;
  font-size: 1rem;
}

.contact-info h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
}

.footer-bottom-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 0.5rem;
}

.footer-links a {
  color: white;
  text-decoration: underline;
}


/* Social Icons */
.social-icons {
  display: flex;
  gap: 0.8rem;
  justify-content: flex-end;
  align-items: center;
}

.social-icon {
  width: 20px;
  height: 20px;
  color: white;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icon:hover {
  color: #32f1c2;
  transform: scale(1.1);
}

</style>
