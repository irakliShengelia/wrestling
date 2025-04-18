<template>
  <section
    class="h-screen bg-cover bg-center flex items-center justify-center text-black relative"
    style="background-image: url('https://shared-img.digitize.ge/pascal_by_Thomas_Lutz-min%20(1).jpg');"
  >
    <div class="bg-white/90 p-10 rounded-xl text-left shadow-lg max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-bold text-blue-600">Sky-Running Camp with Pascal Egli</h1>
      <p class="text-xl mt-4 text-gray-800">A high-altitude trail running camp across Georgia's majestic mountains</p>
      <div class="mt-6 flex flex-col md:flex-row gap-4">
        <a
          href="#booking"
          class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg uppercase"
          @click.prevent="smoothScroll('#booking')"
        >
          Apply Now
        </a>
        <a
          href="#summary"
          class="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg uppercase"
          @click.prevent="smoothScroll('#summary')"
        >
          Read More
        </a>
      </div>
    </div>
    <a href="#summary" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" @click.prevent="smoothScroll('#summary')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4v16m0 0l-4-4m4 4l4-4" />
      </svg>
    </a>
    <div class="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 p-1 rounded">Photo by Thomas Lutz</div>
  </section>
  
  <section id="summary" class="py-16 px-6 bg-white text-left relative">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-bold text-black">Kazbegi Skyrunning Camp</h1>
      <h2 class="text-3xl font-semibold text-blue-600 mt-2">For intermediate to advanced trail runners</h2>
      <p class="text-lg text-gray-700 mt-4">
        An extraordinary week of high-altitude running in the Caucasus mountains of Georgia — a skyrunner's dream through untamed trails, ancient culture, and breathtaking views.
      </p>

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

  <!-- Camp Overview Section -->
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
    <a href="#daily-itinerary" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" @click.prevent="smoothScroll('#daily-itinerary')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 4v16m0 0l-4-4m4 4l4-4" />
      </svg>
    </a>
  </section>

  <!-- Daily Itinerary Section -->
  <section id="daily-itinerary" class="py-16 px-6 bg-white text-left shadow-lg relative">
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
import { ref } from 'vue';
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
      submitted: false // New state to track submission
    };
  },
  methods: {
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
          this.submitted = true; // Set submitted to true on successful submission
          this.form = { name: '', email: '', level: 'beginner', message: '' }; // Reset form
        }
      }
    }
  }
}
</script>