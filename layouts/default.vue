<template>
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Summit Sports Camps</title>
      <!-- Google Font -->
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div>
      <!-- Nav Bar -->
      <header class="w-full bg-black bg-opacity-80 py-4 px-6 flex items-center justify-between">
        <div class="text-xl font-bold uppercase">
          <NuxtLink to="/" exact-active-class="text-ufc-red">Summit Sports Camps</NuxtLink>
        </div>
        <button id="menu-button" class="block md:hidden text-white text-2xl">
          &#9776;
        </button>
        <nav id="menu" class="fixed top-0 left-0 h-full w-full bg-black bg-opacity-90 transform -translate-x-full transition-transform duration-300 flex flex-col items-center justify-center space-y-6 md:static md:flex-row md:space-x-4 md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:space-y-0">
          <NuxtLink to="/wrestling-camp" exact-active-class="text-ufc-red" class="block text-2xl hover:text-ufc-blue uppercase">Wrestling Camp</NuxtLink>
          <NuxtLink to="/skyrunning-camp" exact-active-class="text-ufc-red" class="block text-2xl hover:text-ufc-blue uppercase">Sky Running Camp</NuxtLink>
          <NuxtLink to="/about-us" exact-active-class="text-ufc-red" class="block text-2xl hover:text-ufc-blue uppercase">About Us</NuxtLink>
        </nav>
      </header>

      <slot />
      
      <!-- Footer -->
      <footer class="bg-gray-900 text-center text-muted py-6">
        <p>&copy; 2025 Summit Sports Camps. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app';

useHead({
  script: [
    {
      src: 'https://cdn.tailwindcss.com',
      async: true,
    },
  ],
});

// You can add any necessary script logic here
const menuButton = ref(null);
const menu = ref(null);

onMounted(() => {
  menuButton.value = document.getElementById('menu-button');
  menu.value = document.getElementById('menu');

  menuButton.value.addEventListener('click', () => {
    menu.value.classList.toggle('-translate-x-full');
  });
});
</script> 

<style>
body {
      font-family: 'Oswald', sans-serif;
      background-color: #111;
      color: #fff;
    }
    h1, h2, h3, h4 {
      font-weight: 700;
      text-transform: uppercase;
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