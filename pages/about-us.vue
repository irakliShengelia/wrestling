<template>
<!-- Hero Section -->
<section
    class="bg-cover bg-center h-96 flex items-center justify-center text-white"
    style="background-image: url('https://images.pexels.com/photos/8206942/pexels-photo-8206942.jpeg');"
  >
    <div class="bg-black/70 p-10 rounded-xl text-center">
      <h1 class="text-5xl md:text-6xl font-bold">Our Story</h1>
      <p class="text-xl mt-4 text-muted">The vision, people, and passion behind Caucasus Collective</p>
    </div>
  </section>

  <!-- About Us Section -->
  <section class="py-16 px-6 bg-black">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ufc-red to-ufc-blue">Our Mission</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-ufc-red to-ufc-blue mx-auto mb-10"></div>
        <p class="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
          Founded in 2023 in the heart of Georgia's Caucasus region, Caucasus Collective was born from the combined expertise of three visionaries with a shared passion. Jarji brought his elite combat sports experience, Dachi contributed his mastery of high-altitude endurance training, and Irakli leveraged his extensive travel industry knowledge to create something truly unique.
        </p>
        <p class="text-lg text-muted max-w-3xl mx-auto mt-6 leading-relaxed">
          This powerful fusion of sports excellence and adventure tourism expertise allowed us to create training experiences that harness Georgia's spectacular landscapes and rich wrestling tradition. We combine the raw power of combat sports with the unforgiving challenges of high-altitude endurance training to forge mental and physical resilience like no other program.
        </p>
        <p class="text-lg text-muted max-w-3xl mx-auto mt-6 leading-relaxed">
          Our camps are not for the faint of heart. We push athletes beyond conventional limits in settings that demand complete focus, unwavering determination, and perfect technique. Whether on the wrestling mat or racing along alpine ridgelines, our athletes leave transformed—not just in skill, but in spirit.
        </p>
      </div>

      <!-- Team Section -->
      <div class="mt-20">
        <h2 class="text-4xl font-bold text-center mb-12">Meet Our Founders</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Jarji Card -->
          <div class="team-card bg-gray-900 rounded-lg overflow-hidden transition-all duration-300">
            <div class="h-80 overflow-hidden relative">
              <div class="absolute inset-0 red-gradient opacity-40 z-10"></div>
              <img
                src="https://shared-img.digitize.ge/jarji.jpeg"
                alt="Jarji Shiukashvili"
                class="w-full h-full object-cover object-center"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 class="text-2xl font-bold">Jarji Shiukashvili</h3>
                <p class="font-bold mt-1">Physical Preparation Specialist</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-muted leading-relaxed">
                Jarji Shiukashvili has spent a decade as a wrestling strength coach, developing effective training methods based on real competitive needs. When not coaching, he recharges through trail running, hiking, and biking in the outdoors. At "Imodzrave," the gym he co-founded, he's built a supportive community where both serious athletes and everyday fitness enthusiasts train together and push each other to improve.
              </p>
            </div>
          </div>
          
          <!-- Dachi Card -->
          <div class="team-card sky bg-gray-900 rounded-lg overflow-hidden transition-all duration-300">
            <div class="h-80 overflow-hidden relative">
              <div class="absolute inset-0 blue-gradient opacity-40 z-10"></div>
              <img
                src="https://shared-img.digitize.ge/dachi.jpeg"
                alt="Dachi Mikhelidze"
                class="w-full h-full object-cover object-center"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 class="text-2xl font-bold">Dachi Mikhelidze</h3>
                <p class="font-bold mt-1">Fitness Coach</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-muted leading-relaxed">
                Dachi Mikhelidze is a fitness coach with 12 years of experience in movement—but his true calling lives in the wild. Whether it’s hiking mountain trails, cycling open roads, or chasing golden light with a camera in hand, Dachi thrives where nature meets motion. His mission is simple: to live fully, be in the moment, and help others rediscover the joy of being outside.
              </p>
            </div>
          </div>
          
          <!-- Irakli Card -->
          <div class="team-card gold bg-gray-900 rounded-lg overflow-hidden transition-all duration-300">
            <div class="h-80 overflow-hidden relative">
              <div class="absolute inset-0 gold-gradient opacity-40 z-10"></div>
              <img
                src="https://shared-img.digitize.ge/irakli-nature.jpg"
                alt="Irakli Shengelia"
                class="w-full h-full object-cover object-center"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 class="text-2xl font-bold">Irakli Shengelia</h3>
                <p class="font-bold mt-1">Logistics Director</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-muted leading-relaxed">
                As the owner of Kartveli Tours, one of Georgia's premier travel agencies, Irakli brings unparalleled logistics expertise and local connections to our operation. A sports enthusiast himself, he bridges the gap between extreme athletics and sustainable adventure tourism in the Caucasus region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="py-16 px-6 bg-gray-900">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10">Connect With Us</h2>
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Location -->
        <div class="p-6 bg-black rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-ufc-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 class="text-xl font-bold mb-2">Location</h3>
          <p class="text-muted">Tbilisi, Georgia</p>
        </div>
        
        <!-- Email -->
        <div class="p-6 bg-black rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-ufc-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 class="text-xl font-bold mb-2">Email Us</h3>
          <p class="text-muted">info@caucasuscollective.com</p>
        </div>
        
        <!-- Phone -->
        <div class="p-6 bg-black rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <h3 class="text-xl font-bold mb-2">Call Us</h3>
          <p class="text-muted">+995 557 213 515</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 bg-gradient-to-r from-ufc-red via-yellow-600 to-ufc-blue p-px rounded-lg">
        <div class="bg-black p-8 rounded-lg">
          <h3 class="text-2xl font-bold mb-4">Ready For The Ultimate Challenge?</h3>
          <p class="text-muted mb-6">Spots for our 2025 camps are limited and fill quickly. Secure your place today.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </div>
  </section>
</template>

<script setup>
import PageWrapper from '@/components/PageWrapper.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
</style> 