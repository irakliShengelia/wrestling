<template>
<section
    class="bg-cover bg-center h-screen flex items-center justify-center text-white"
    style="background-image: url('https://images.unsplash.com/photo-1705679547979-93e9f12ce5d7?q=80&w=3564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
  >
    <div class="bg-black/70 p-10 rounded-xl text-center">
      <h1 class="text-5xl md:text-6xl font-bold">Caucasus Collective</h1>
      <p class="text-xl mt-4 text-muted">Elite outdoor and combat training experiences for athletes of all levels.</p>
      <div class="mt-6 flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="wrestling-camp.html"
          class="px-8 py-4 bg-ufc-red hover:bg-red-700 text-white font-bold rounded-lg uppercase"
        >
          Wrestling Camp
        </a>
        <a
          href="sky-running-camp.html"
          class="px-8 py-4 bg-ufc-blue hover:bg-blue-900 text-white font-bold rounded-lg uppercase"
        >
          Sky-Running Camp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
</style> 