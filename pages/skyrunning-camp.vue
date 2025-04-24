<template>
  <Head>
    <title>Skyrunning Camp in Georgia | Caucasus Collective</title>
    <meta name="description" content="Join our exclusive skyrunning camp in Georgia's Caucasus mountains. Experience high-altitude endurance training, technical trail running, and breathtaking alpine landscapes." />
    <meta name="keywords" content="skyrunning, trail running, Georgia, Caucasus mountains, endurance training, alpine running, mountain running" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://caucasuscollective.com/skyrunning-camp" />
    <meta property="og:title" content="Skyrunning Camp in Georgia | Caucasus Collective" />
    <meta property="og:description" content="Join our exclusive skyrunning camp in Georgia's Caucasus mountains. Experience high-altitude endurance training, technical trail running, and breathtaking alpine landscapes." />
    <meta property="og:image" content="https://shared-img.digitize.ge/skyrunning-hero.jpg" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://caucasuscollective.com/skyrunning-camp" />
    <meta property="twitter:title" content="Skyrunning Camp in Georgia | Caucasus Collective" />
    <meta property="twitter:description" content="Join our exclusive skyrunning camp in Georgia's Caucasus mountains. Experience high-altitude endurance training, technical trail running, and breathtaking alpine landscapes." />
    <meta property="twitter:image" content="https://shared-img.digitize.ge/skyrunning-hero.jpg" />
  </Head>
  <div 
    id="bottom-navigation"
    v-show="shouldShowBottomNav"
    class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg transition-all duration-300 transform md:hidden"
    :class="shouldShowBottomNav ? 'translate-y-0' : 'translate-y-full'"
  >
    <nav class="flex justify-around items-center py-4">
      <a 
        href="#summary" 
        class="flex flex-col items-center group px-4"
        @click.prevent="smoothScroll('#summary')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 group-hover:text-blue-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span class="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">Summary</span>
      </a>
      <a 
        href="#camp-overview" 
        class="flex flex-col items-center group px-4"
        @click.prevent="smoothScroll('#camp-overview')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 group-hover:text-blue-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">Overview</span>
      </a>
      <a 
        href="#itinerary" 
        class="flex flex-col items-center group px-4"
        @click.prevent="smoothScroll('#itinerary')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 group-hover:text-blue-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">Itinerary</span>
      </a>
      <a 
        href="#cancellation-policy" 
        class="flex flex-col items-center group px-4"
        @click.prevent="smoothScroll('#cancellation-policy')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 group-hover:text-blue-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span class="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">Policy</span>
      </a>
    </nav>
  </div>
  <section
    id="hero"
    class="h-[80vh] bg-cover bg-center flex items-center justify-center relative"
    style="background-image: url('https://shared-img.digitize.ge/pascal_by_Thomas_Lutz-min%20(1).jpg');"
  >
    <div class="max-w-4xl mx-auto px-4 md:px-8 text-white text-center md:text-left">
      <h1 class="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Sky-Running Camp with <span class="text-5xl md:text-7xl">Pascal Egli</span></h1>
      <p class="text-lg md:text-xl mt-4 text-white drop-shadow-lg">A high-altitude trail running camp across Georgia's majestic mountains</p>
      <div class="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
        <a
          href="#booking"
          class="inline-block px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg uppercase"
          @click.prevent="smoothScroll('#booking')"
        >
          Apply Now
        </a>
        <a
          href="#summary"
          class="inline-block px-6 md:px-8 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg uppercase"
          @click.prevent="smoothScroll('#summary')"
        >
          Read More
        </a>
      </div>
    </div>
    <a href="#summary" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" @click.prevent="smoothScroll('#summary')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4v16m0 0l-4-4m4 4l4-4" />
      </svg>
    </a>
    <div class="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 p-1 rounded">Photo by Thomas Lutz</div>
  </section>

  <div 
    id="floating-apply-button"
    v-show="shouldShowApplyNowButton" 
    class="fixed bottom-20 right-8 z-50"
  >
    <a
      href="#booking"
      class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg uppercase shadow-lg transform hover:scale-105 transition-all duration-300"
      @click.prevent="smoothScroll('#booking')"
    >
      Apply Now
    </a>
  </div>

  <section id="summary" class="py-16 px-6 bg-white text-left relative">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-bold text-black">Kazbegi Skyrunning Camp</h1>
      <h2 class="text-3xl font-semibold text-blue-600 mt-2">From beginners to advanced trail runners</h2>
      <p class="text-lg text-gray-700 mt-4">
        An extraordinary week of high-altitude running in the Caucasus mountains of Georgia — a skyrunner's dream through untamed trails, ancient culture, and breathtaking views.
      </p>
      <ul class="text-lg text-gray-700 mt-4 list-disc list-inside pl-5">
        <li>Average daily distance: 20km</li>
        <li>Average daily climb: 1200 meters</li>
      </ul>

      <h3 class="text-2xl font-semibold text-black mt-6">2025 Dates</h3>
      <div class="dates mt-2">
        <p class="text-lg text-blue-600"><strong>Sept 22 - Sep 29, 2025</strong> (6 spots left)</p>
      </div>

      <p class="text-lg font-bold text-black mt-4"><strong>Price:</strong> <span class="line-through">2700 USD</span> <span class="text-red-600">2495 USD</span> (Earlybird)</p>
      <p class="text-lg text-gray-700">(All-Inclusive, details below)</p>
    </div>
    <a href="#camp-overview" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" @click.prevent="smoothScroll('#camp-overview')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4v16m0 0l-4-4m4 4l4-4" />
      </svg>
    </a>
  </section>

  <section id="camp-overview" class="py-16 px-6 relative bg-cover" style="background-image: url('https://shared-img.digitize.ge/overview-bg.jpg');">
    <div class="bg-white bg-opacity-90 p-10 rounded-xl max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-blue-600">Camp Overview</h2>
      <p class="text-lg text-gray-800 mt-4">
        Welcome to Kazbegi, a hidden gem nestled in the Greater Caucasus. Picture rugged alpine ridges, sweeping valleys, glaciers, and remote trails winding through centuries-old villages. This 7-day skyrunning camp offers an epic blend of endurance, adventure, and exploration.
      </p>
      <p class="text-lg text-gray-800 mt-4">
        This adventure includes nearly 100 miles (160 km) of trail running with over 9,800 meters (32,000 ft) of elevation gain. It's challenging, beautiful, and unlike anything else in Europe. Starting and ending in Tbilisi, we'll base ourselves in Stepantsminda (Kazbegi), Georgia — gateway to Mount Kazbek (5,047m).
      </p>
      <h3 class="text-2xl font-semibold text-black mt-6">Why Travel With Us</h3>
      <p class="text-lg text-gray-800 mt-4">
        We are a small team who specialize in crafting unique running experiences that balance raw wilderness with comfort. Every detail is handled with care to ensure a meaningful and memorable journey — because this is your dream, your effort, and your time.
      </p>
      <h3 class="text-2xl font-semibold text-black mt-6">Who Is This For?</h3>
      <p class="text-lg text-gray-800 mt-4">
        If you're a trail runner or road runner seeking the next level of adventure, this camp is for you. You don't need to be a racer — just in good shape and ready to run for 6–8 hours daily with substantial elevation gain.
      </p>
      <h3 class="text-2xl font-semibold text-black mt-6">Fitness Requirements</h3>
      <p class="text-lg text-gray-800 mt-4">
        This is a high-effort trip with daily outings of 6–8 hours and elevation gains of up to 1500m. You should be in excellent hiking/running condition and capable of mountain terrain. Not sure? Let's chat.
      </p>
      <h3 class="text-2xl font-semibold text-black mt-6">What's Included</h3>
      <ul class="text-lg text-gray-800 mt-4 list-disc list-inside pl-5">
        <li>All meals during the camp</li>
        <li>Guided trail runs with experienced instructors</li>
        <li>Transportation from Tbilisi to Kazbegi and back</li>
        <li>Daily snacks and hydration support</li>
        <li>All necessary permits and fees</li>
        <li>Group gear (e.g., first aid kit, safety equipment)</li>
        <li>Post-camp support and follow-up</li>
      </ul>
      <p class="text-lg text-gray-800 mt-4"><strong>Note:</strong> Airfare and hotels in Tbilisi are not included.</p>
    </div>
    <a href="#itinerary" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" @click.prevent="smoothScroll('#itinerary')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4v16m0 0l-4-4m4 4l4-4" />
      </svg>
    </a>
  </section>

  <!-- Daily Itinerary Section -->
  <section id="itinerary" class="py-16 px-6 bg-white text-left shadow-lg relative">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-blue-600 mb-6">Daily Itinerary</h2>
      
      <div class="mt-8">
        <h3 class="text-3xl font-semibold text-black mb-2">Day 1 | Kazbegi Arrival & Acclimatization</h3>
        <ul class="text-lg text-gray-800 mt-2 list-disc list-inside pl-5">
          <li>Transfer from Tbilisi to Kazbegi (Stepantsminda) - scenic 3–4 hour drive along the Georgian Military Highway.</li>
          <li>Check into cozy guesthouse or hotel with views of Mount Kazbek.</li>
          <li>Gentle acclimatization hike to <strong>Gergeti Trinity Church</strong> (2170 m) for stunning views.</li>
          <li>Evening safety briefing and overview of the week ahead.</li>
        </ul>
        <p class="text-gray-800 mt-4"><strong>Accommodation:</strong>3* Hotel Kazbegi or local guesthouse (twin/double occupancy).</p>
      </div>

      <div class="mt-8">
        <h3 class="text-3xl font-semibold text-black mb-2">Day 2 | Khde Gorge & Truso Valley</h3>
        <ul class="text-lg text-gray-800 mt-2 list-disc list-inside pl-5">
          <li>Technical warm-up trail through <strong>Khde Gorge</strong>, known for its rugged terrain.</li>
          <li>Transfer to <strong>Truso Valley</strong> - explore colorful mineral springs and ancient ruins.</li>
          <li>Optional dip in natural mineral springs to relax.</li>
        </ul>
        <p class="text-gray-800 mt-4"><strong>The route:</strong></p>
        <ul class="list-disc list-inside text-gray-800 pl-5">
          <li><span class="icon-distance"><i class="fas fa-ruler-combined"></i> ~15km / 9.3mi</span></li>
          <li><span class="icon-elevation"><i class="fas fa-arrow-up"></i> +800m | <i class="fas fa-arrow-down"></i> -800m</span></li>
          <li><span class="icon-time"><i class="fas fa-clock"></i> Approximate time: 4–5 hours</span></li>
          <li><strong>Accommodation:</strong> Return to Kazbegi lodging.</li>
        </ul>
      </div>

      <div class="mt-8">
        <h3 class="text-3xl font-semibold text-black mb-2">Day 3 | Juta & Chaukhi Pass</h3>
        <ul class="text-lg text-gray-800 mt-2 list-disc list-inside pl-5">
          <li>Travel to the alpine village of <strong>Juta</strong> (2200 m).</li>
          <li>Ascent to <strong>Chaukhi Pass</strong> (3338 m) - enjoy rocky climbs and panoramic views.</li>
          <li>Descend toward <strong>Abudelauri Lakes</strong> if weather permits.</li>
        </ul>
        <p class="text-gray-800 mt-4"><strong>The route:</strong></p>
        <ul class="list-disc list-inside text-gray-800 pl-5">
          <li><span class="icon-distance"><i class="fas fa-ruler-combined"></i> ~18km / 11mi</span></li>
          <li><span class="icon-elevation"><i class="fas fa-arrow-up"></i> +1100m | <i class="fas fa-arrow-down"></i> -1100m</span></li>
          <li><span class="icon-time"><i class="fas fa-clock"></i> Approximate time: 5–6 hours</span></li>
          <li><strong>Accommodation:</strong> Juta guesthouse or mountain hut (shared rooms).</li>
        </ul>
      </div>

      <div class="mt-8">
        <h3 class="text-3xl font-semibold text-black mb-2">Day 4 | Sno Valley Ridge Run</h3>
        <ul class="text-lg text-gray-800 mt-2 list-disc list-inside pl-5">
          <li>Explore the ridgeline above <strong>Sno Valley</strong> - link traditional trails with sheep tracks.</li>
          <li>Experience technical terrain and panoramic views of the Kazbegi region.</li>
        </ul>
        <p class="text-gray-800 mt-4"><strong>The route:</strong></p>
        <ul class="list-disc list-inside text-gray-800 pl-5">
          <li><span class="icon-distance"><i class="fas fa-ruler-combined"></i> ~17km / 10.5mi</span></li>
          <li><span class="icon-elevation"><i class="fas fa-arrow-up"></i> +950m | <i class="fas fa-arrow-down"></i> -950m</span></li>
          <li><span class="icon-time"><i class="fas fa-clock"></i> Approximate time: 5–6 hours</span></li>
          <li><strong>Accommodation:</strong> Return to Kazbegi base.</li>
        </ul>
      </div>

      <div class="mt-8">
        <h3 class="text-3xl font-semibold text-black mb-2">Day 5 | Rest Day or Optional Cultural Tour</h3>
        <ul class="text-lg text-gray-800 mt-2 list-disc list-inside pl-5">
          <li>Enjoy a well-earned rest day - relax or soak in views from a cafe terrace.</li>
          <li>Optional cultural tour to <strong>Dariali Monastery</strong>, <strong>Gveleti Waterfalls</strong>, or a cheese-making experience.</li>
        </ul>
        <p class="text-gray-800 mt-4"><strong>Accommodation:</strong> Kazbegi guesthouse/hotel.</p>
      </div>

      <div class="mt-8">
        <h3 class="text-3xl font-semibold text-black mb-2">Day 6 | Arsha to Gergeti Ridge Traverse</h3>
        <ul class="text-lg text-gray-800 mt-2 list-disc list-inside pl-5">
          <li>Climb from <strong>Arsha village</strong> to a hidden ridge above Gergeti.</li>
          <li>Experience some of the best trail running with sustained climbs and technical ridgelines.</li>
        </ul>
        <p class="text-gray-800 mt-4"><strong>The route:</strong></p>
        <ul class="list-disc list-inside text-gray-800 pl-5">
          <li><span class="icon-distance"><i class="fas fa-ruler-combined"></i> ~20km / 12.4mi</span></li>
          <li><span class="icon-elevation"><i class="fas fa-arrow-up"></i> +1200m | <i class="fas fa-arrow-down"></i> -1200m</span></li>
          <li><span class="icon-time"><i class="fas fa-clock"></i> Approximate time: 6–7 hours</span></li>
          <li><strong>Accommodation:</strong> Final night in Kazbegi.</li>
        </ul>
      </div>

      <div class="mt-8">
        <h3 class="text-3xl font-semibold text-black mb-2">Day 7 | Farewell & Transfer to Tbilisi</h3>
        <ul class="text-lg text-gray-800 mt-2 list-disc list-inside pl-5">
          <li>After breakfast, pack up and transfer back to Tbilisi.</li>
          <li>Stop at <strong>Ananuri Fortress</strong> or <strong>Zhinvali Reservoir</strong> for photos and snacks.</li>
        </ul>
        <p class="text-gray-800 mt-4">This marks the end of an unforgettable week in the Caucasus.</p>
      </div>
    </div>
    <a href="#cancellation-policy" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" @click.prevent="smoothScroll('#cancellation-policy')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4v16m0 0l-4-4m4 4l4-4" />
      </svg>
    </a>
  </section>

  <!-- Cancellation Policy Section -->
  <section id="cancellation-policy" class="py-16 px-6 bg-gray-100 text-left w-full relative">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-blue-600">Cancellation Policy</h2>
      <ul class="text-lg text-gray-800 mt-4 list-disc list-inside">
        <li>Pending trip: 25% deposit is fully refundable</li>
        <li>Confirmed trip: 25% deposit is non-refundable, but transferable to another trip within 1 year</li>
        <li>Less than 60 days before trip: no refund</li>
      </ul>
    </div>
    <a href="#booking" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce  " @click.prevent="smoothScroll('#booking')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4v16m0 0l-4-4m4 4l4-4" />
      </svg>
    </a>
  </section>

  <!-- Skyrunning Mission Section -->
  <section class="py-16 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-6 text-blue-600">About Caucasus Collective</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Founded in 2023 in the heart of Georgia's Caucasus region, Caucasus Collective was born from the combined expertise of three visionaries with a shared passion. Dachi brought his mastery of high-altitude endurance training, Irakli contributed his extensive travel industry knowledge, and together they created something truly unique in the world of skyrunning.
        </p>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
          This powerful fusion of mountain expertise and adventure tourism allows us to create running experiences that harness Georgia's spectacular alpine landscapes. We combine technical trail running with high-altitude endurance training to forge mental and physical resilience like no other program.
        </p>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
          Our skyrunning camps are not for the faint of heart. We push athletes beyond conventional limits in settings that demand complete focus, unwavering determination, and perfect technique. Whether racing along alpine ridgelines or navigating technical descents, our athletes leave transformed—not just in skill, but in spirit.
        </p>
        <NuxtLink to="/about-us" class="inline-block mt-8 text-gray-600 hover:text-blue-600 transition-colors duration-300">
          Read more about our story →
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Request to Book Section -->
  <section
    id="booking" class="py-16 px-6 bg-blue-600 text-white text-left w-full relative bg-cover md:bg-center"
    style="background-image: url('https://shared-img.digitize.ge/book-bg.jpg');"
  >
    <div class="max-w-4xl mx-auto">
      <h2 v-if="!submitted" class="text-4xl font-bold text-center">Request to Book</h2>
      <div v-if="submitted" class="mt-8 text-center">
        <h3 class="text-2xl font-bold text-white">Thank You!</h3>
        <p class="text-lg mt-4">Your application has been submitted successfully. We will get back to you shortly!</p>
      </div>
      <form v-else @submit.prevent="handleSubmit" class="mt-8 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div class="mb-4">
          <label class="block text-gray-800 font-bold mb-2">Full Name</label>
          <input v-model="form.name" type="text" class="w-full p-3 border rounded-lg bg-gray-200 text-black" placeholder="Enter your name" required />
          <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-800 font-bold mb-2">Email</label>
          <input v-model="form.email" type="email" class="w-full p-3 border rounded-lg bg-gray-200 text-black" placeholder="Enter your email" required />
          <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-800 font-bold mb-2">Trail Running Experience</label>
          <select v-model="form.level" class="w-full p-3 border rounded-lg bg-gray-200 text-black" required>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-800 font-bold mb-2">Tell us why you want to join</label>
          <textarea v-model="form.message" class="w-full p-3 border rounded-lg bg-gray-200 text-black" rows="4" placeholder="Motivation, goals, etc." required></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
        </div>
        <button type="submit" class="w-full p-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg uppercase">Submit Application</button>
      </form>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = 'https://kmkyrbjzobzwlqiwqvgl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtta3lyYmp6b2J6d2xxaXdxdmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NjU5ODIsImV4cCI6MjA2MDA0MTk4Mn0.e3azC9U-iQShFvWZyBkG73G05BTG5MAnzIzVLV3O9ZY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        level: 'beginner',
        message: ''
      },
      errors: {},
      submitted: false,
      shouldShowApplyNowButton: false,
      shouldShowBottomNav: false,
      lastScrollY: 0,
      scrollTimeout: null,
      isManualScroll: true
    };
  },
  methods: {
    smoothScroll(target) {
      this.isManualScroll = false;
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.shouldShowBottomNav = false;
      }
      // Reset the flag after a short delay to allow for smooth scroll completion
      setTimeout(() => {
        this.isManualScroll = true;
      }, 1000);
    },
    validateForm() {
      this.errors = {};
      if (!this.form.name) this.errors.name = 'Full Name is required.';
      if (!this.form.email) {
        this.errors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        this.errors.email = 'Email is invalid.';
      }
      if (!this.form.message) this.errors.message = 'Motivation is required.';
      return Object.keys(this.errors).length === 0;
    },
    async handleSubmit() {
      if (this.validateForm()) {
        const { data, error } = await supabase
          .from('skyrunning_applications')
          .insert([this.form]);

        if (error) {
          console.error('Error inserting data:', error);
        } else {
          this.submitted = true;
          this.form = { name: '', email: '', level: 'beginner', message: '' };
        }
      }
    },
    checkVisibility() {
      const hero = document.getElementById('hero');
      const booking = document.getElementById('booking');
      
      if (hero && booking) {
        const heroRect = hero.getBoundingClientRect();
        const bookingRect = booking.getBoundingClientRect();
        
        // Check if neither section is in viewport
        const heroInView = heroRect.top <= window.innerHeight && heroRect.bottom >= 0;
        const bookingInView = bookingRect.top <= window.innerHeight && bookingRect.bottom >= 0;
        
        this.shouldShowApplyNowButton = !heroInView && !bookingInView;
        
        // Only update bottom nav visibility for manual scrolling
        if (this.isManualScroll) {
          this.shouldShowBottomNav = !heroInView && !bookingInView;
          
          // Check scroll direction
          const currentScrollY = window.scrollY;
          if (currentScrollY > this.lastScrollY) {
            // Scrolling down
            this.shouldShowBottomNav = true;
          } else {
            // Scrolling up
            this.shouldShowBottomNav = false;
          }
          this.lastScrollY = currentScrollY;

          // Clear existing timeout
          if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
          }

          // Set new timeout to hide side nav after 1 second of no scrolling
          this.scrollTimeout = setTimeout(() => {
            this.shouldShowBottomNav = false;
          }, 6000);
        }
      }
    }
  },
  mounted() {
    this.checkVisibility();
    window.addEventListener('scroll', this.checkVisibility);
  },
  unmounted() {
    window.removeEventListener('scroll', this.checkVisibility);
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}
</script>