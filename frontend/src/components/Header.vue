<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo and Title Group -->
      <div class="logo-group">
        <img src="@/assets/MiraiLogo.png" alt="Logo" class="navbar-logo" />
        <div class="logo-text">
          <div class="logo-title">MIRAI TECH</div>
          <div class="logo-subtitle">{{ t('header-tagline') }}</div>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="navbar-links">
        <a href="#try">{{ t('nav-try') }}</a>
        <a href="#technology">{{ t('nav-technology') }}</a>
        <a href="#how">{{ t('nav-how') }}</a>
        <a href="#publications">{{ t('nav-publications') }}</a>
        <a href="#contact">{{ t('nav-contact') }}</a>
      </nav>

      <!-- Right Side Controls -->
      <div class="navbar-right">
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

        <!-- Language Selection -->
        <div class="lang-buttons">
          <button @click="langStore.setLanguage('kz')" :class="{ active: langStore.current === 'kz' }">KZ</button>
          <button @click="langStore.setLanguage('en')" :class="{ active: langStore.current === 'en' }">EN</button>
          <button @click="langStore.setLanguage('ru')" :class="{ active: langStore.current === 'ru' }">RU</button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="hamburger" @click="menuOpen = !menuOpen">&#9776;</div>
      </div>

      <!-- Mobile Dropdown -->
      <nav v-if="menuOpen" class="mobile-dropdown">
        <a href="#try">{{ t('nav-try') }}</a>
        <a href="#technology">{{ t('nav-technology') }}</a>
        <a href="#how">{{ t('nav-how') }}</a>
        <a href="#publications">{{ t('nav-publications') }}</a>
        <a href="#contact">{{ t('nav-contact') }}</a>
        <div class="mobile-social-icons">
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
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useLangStore } from '@/stores/lang';

const menuOpen = ref(false);
const langStore = useLangStore();
const t = langStore.t;
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(120deg, #0f1639, #1b2855);
  padding: 1.5rem 2rem;
  z-index: 9999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  gap: 1rem;
}

/* Logo Group */
.logo-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-right: auto;
}

.navbar-logo {
  height: 50px;
  cursor: pointer;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-title {
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  white-space: nowrap;
  margin-bottom: 0.2rem;
}

.logo-subtitle {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
  white-space: nowrap;
}

/* Navigation Links */
.navbar-links {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.navbar-links a:hover {
  color: #32f1c2;
}

/* Right Side Controls */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
  margin-left: auto;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 0.8rem;
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

/* Language Selection */
.lang-buttons {
  display: flex;
  gap: 0.3rem;
}

.lang-buttons button {
  background: transparent;
  border: 1px solid #fff;
  padding: 0.2rem 0.5rem;
  font-weight: 500;
  font-size: 0.75rem;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.lang-buttons button.active,
.lang-buttons button:hover {
  background: #32f1c2;
  color: #0b102a;
  border-color: #32f1c2;
}

.hamburger {
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  display: none;
}

/* Mobile Dropdown */
.mobile-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(11, 16, 42, 0.98);
  flex-direction: column;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 10000;
}

.mobile-dropdown a {
  color: white;
  text-decoration: none;
  padding: 0.75rem 2rem;
  font-size: 0.95rem;
  transition: background-color 0.3s;
}

.mobile-dropdown a:hover {
  background-color: rgba(50, 241, 194, 0.1);
}

.mobile-social-icons {
  display: none;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 0;
  margin-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive Breakpoint */
@media (max-width: 1024px) {
  .navbar {
    padding: 0.75rem 1.5rem;
  }
  
  .navbar-links {
    display: none;
  }
  
  .hamburger {
    display: block;
  }
  
  .mobile-dropdown {
    display: flex;
  }
  
  .logo-group {
    gap: 0.4rem;
  }
  
  .logo-title {
    font-size: 1.05rem;
  }
  
  .logo-subtitle {
    font-size: 0.65rem;
  }
}

@media (max-width: 768px) {
  .social-icons {
    display: none;
  }
  
  .mobile-social-icons {
    display: flex;
  }
  
  /* Hide logo text in mobile */
  .logo-text {
    display: none;
  }
  
  /* Show social icons in place of logo text */
  .logo-group .social-icons {
    display: flex;
    margin-left: 0.5rem;
  }
}

@media (max-width: 640px) {
  .navbar {
    padding: 0.6rem 1rem;
  }
  
  .logo-subtitle {
    display: none;
  }
  
  .navbar-logo {
    height: 38px;
  }
  
  .lang-buttons button {
    padding: 0.15rem 0.4rem;
  }
  
  .navbar-right {
    gap: 1rem;
  }
}
</style>