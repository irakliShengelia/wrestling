<template>
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Caucasus Collective</title>
      <!-- Google Font -->
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Montserrat:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div>
      <!-- Nav Bar -->
      <header class="w-full bg-black bg-opacity-80 py-4 px-6">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
          <div class="text-xl font-bold uppercase">
            <NuxtLink to="/" exact-active-class="text-ufc-red">Caucasus Collective</NuxtLink>
          </div>
          <!-- Mobile menu button -->
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white z-50">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <!-- Desktop menu -->
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/wrestling-camp" exact-active-class="text-ufc-red" class="text-lg hover:text-ufc-blue uppercase">Wrestling Camp</NuxtLink>
            <NuxtLink to="/skyrunning-camp" exact-active-class="text-ufc-red" class="text-lg hover:text-ufc-blue uppercase">Sky Running Camp</NuxtLink>
            <NuxtLink to="/about-us" exact-active-class="text-ufc-red" class="text-lg hover:text-ufc-blue uppercase">About Us</NuxtLink>
          </nav>
        </div>
      </header>

      <!-- Mobile menu overlay -->
      <div v-show="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden">
        <nav class="flex flex-col items-center justify-center h-full space-y-8">
          <NuxtLink to="/wrestling-camp" exact-active-class="text-ufc-red" class="text-2xl hover:text-ufc-blue uppercase" @click="isMenuOpen = false">Wrestling Camp</NuxtLink>
          <NuxtLink to="/skyrunning-camp" exact-active-class="text-ufc-red" class="text-2xl hover:text-ufc-blue uppercase" @click="isMenuOpen = false">Sky Running Camp</NuxtLink>
          <NuxtLink to="/about-us" exact-active-class="text-ufc-red" class="text-2xl hover:text-ufc-blue uppercase" @click="isMenuOpen = false">About Us</NuxtLink>
        </nav>
      </div>

      <slot />
      
      <!-- Footer -->
      <footer class="bg-gray-900 text-center text-muted py-6">
        <p>&copy; 2025 Caucasus Collective. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app';
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script> 

<style>
body {
      font-family: 'Montserrat', sans-serif;
      background-color: #111;
      color: #fff;
    }
    h1, h2, h3, h4 {
      font-weight: 700;
      text-transform: uppercase;
      font-family: 'Oswald', sans-serif;
    }
    .bg-ufc-red {
      background-color: #D22F27; /* accent for wrestling */
    }
    .bg-ufc-blue {
      background-color: #295b82; /* accent for sky-running */
    }
    .text-ufc-red {
      color: #D22F27;
    }
    .text-ufc-blue {
      color: #295b82;
    }
    .text-muted {
      color: #B0B0B0;
    }
    .team-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 25px -5px rgba(210, 47, 39, 0.3), 0 10px 10px -5px rgba(210, 47, 39, 0.2);
    }
    .team-card.sky:hover {
      box-shadow: 0 20px 25px -5px rgba(41, 91, 130, 0.3), 0 10px 10px -5px rgba(41, 91, 130, 0.2);
    }
    .team-card.gold:hover {
      box-shadow: 0 20px 25px -5px rgba(212, 175, 55, 0.3), 0 10px 10px -5px rgba(212, 175, 55, 0.2);
    }
    .red-gradient {
      background: linear-gradient(135deg, #D22F27 0%, #111 100%);
    }
    .blue-gradient {
      background: linear-gradient(135deg, #295b82 0%, #111 100%);
    }
    .gold-gradient {
      background: linear-gradient(135deg, #D4AF37 0%, #111 100%);
    }
    .text-gold {
      color: #D4AF37;
    }
    .bg-ufc-red {
      background-color: #D22F27;
    }
    .bg-ufc-blue {
      background-color: #295b82;
    }
    .text-muted {
      color: #B0B0B0;
    }
    .bg-accent {
      background-color: #295b82; /* sky-running accent */
    }
    /* Icon styling */
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      fill: currentColor;
      flex-shrink: 0;
    }
</style>