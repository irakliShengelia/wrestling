<template>
    <!-- Hero Section -->
  <section
    class="h-screen bg-cover bg-center flex items-center justify-center text-white"
    style="background-image: url('https://media.istockphoto.com/id/1500640160/photo/senior-wrestlers-demonstrating-techniques-for-children.jpg?s=1024x1024&w=is&k=20&c=TLt19TzK70XNvtQdTEbMH9uT75d9_s0XASLaLycdSkU=');"
  >
    <div class="bg-black/60 p-10 rounded-xl text-center">
      <h1 class="text-5xl md:text-6xl font-bold">Elite Wrestling Camp</h1>
      <p class="text-xl mt-4 text-muted">A two-week high-performance combat training experience in Georgia</p>
      <a
        href="#apply"
        class="mt-6 inline-block px-8 py-4 bg-accent hover:bg-red-900 text-white font-bold rounded-lg uppercase"
      >
        Apply Now
      </a>
    </div>
  </section>

  <!-- Overview -->
  <section class="py-16 px-6 bg-black text-center">
    <h2 class="text-4xl font-bold text-accent">Overview</h2>
    <p class="text-lg text-muted mt-4 max-w-3xl mx-auto">
      The Elite Wrestling Camp is designed for serious athletes seeking to improve technical skills,
      build strength, and learn from top-tier coaches in a high-focus environment.
    </p>
    <p class="text-lg text-muted mt-4">
      Only 20 participants accepted. Runs August 2025. Price: $4500 (includes housing, meals, training, and local transport).
    </p>
  </section>

  <!-- What to Expect -->
  <section class="py-16 px-6 bg-gray-900 text-center">
    <h2 class="text-4xl font-bold text-accent mb-8">What to Expect</h2>
    <div class="grid gap-6 max-w-4xl mx-auto text-left">
      <!-- 1) Medal Icon -->
      <div class="flex items-start">
        <svg class="icon text-accent" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 40H48a8 8 0 00-8 8v40a8 8 0 008 8h48a8 8 0 008-8V48a8 8 0 00-8-8zm112 0h-48a8 8 0 00-8 8v40a8 8 0 008 8h48a8 8 0 008-8V48a8 8 0 00-8-8zM128 80a48 48 0 1048 48 48 48 0 00-48-48z"/>
        </svg>
        <p class="text-lg text-muted">
          <strong>Elite Coaching:</strong> Work with Olympic and pro-level wrestling coaches and trainers
        </p>
      </div>
      <!-- 2) Fire Icon -->
      <div class="flex items-start">
        <svg class="icon text-accent" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path d="M172.47 100.18c-3.46-11.33-6.53-21.37-6.53-33.24a40 40 0 00-80 0c0 11.87-3.07 21.91-6.53 33.24C73.36 114.23 64 131.09 64 150.4 64 179.77 87.9 200 120 200s56-20.23 56-49.6c0-19.31-9.36-36.17-3.53-50.22z"/>
        </svg>
        <p class="text-lg text-muted">
          <strong>Combat Conditioning:</strong> Intense drills, sparring, and recovery routines
        </p>
      </div>
      <!-- 3) Hiking Icon -->
      <div class="flex items-start">
        <svg class="icon text-accent" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path d="M152 40a24 24 0 11-24 24 24 24 0 0124-24zm56 184h-16a8 8 0 010-16h16a8 8 0 010 16zm-82.48-56l-14-28h-13.48a8 8 0 01-7.16-4.42l-16-28A8 8 0 0072 104H56a8 8 0 010-16h16a24 24 0 0121.45 13.26l12.93 22.66h8.66a8 8 0 017.16 4.42l18 36A8 8 0 01152 168z"/>
        </svg>
        <p class="text-lg text-muted">
          <strong>Outdoor Training:</strong> Strength &amp; mindset work in nature, including hiking and mobility
        </p>
      </div>
      <!-- 4) Users Icon -->
      <div class="flex items-start">
        <svg class="icon text-accent" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path d="M88 104a40 40 0 1180 0 40 40 0 01-80 0zm136 80H32a8 8 0 000 16h192a8 8 0 000-16z"/>
        </svg>
        <p class="text-lg text-muted">
          <strong>Team Atmosphere:</strong> Train alongside serious athletes from around the world
        </p>
      </div>
      <!-- 5) Check Square Icon -->
      <div class="flex items-start">
        <svg class="icon text-accent" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path d="M208 32H48A16 16 0 0032 48v160a16 16 0 0016 16h160a16 16 0 0016-16V48a16 16 0 00-16-16zm-33.66 78.34l-56 56a8 8 0 01-11.32 0l-28-28a8 8 0 0111.32-11.32L120 150.69l50.34-50.35a8 8 0 0111.32 11.32z"/>
        </svg>
        <p class="text-lg text-muted">
          <strong>All-Inclusive:</strong> Housing, meals, transportation, and training all covered
        </p>
      </div>
    </div>
  </section>

  <!-- Application Form -->
  <section id="apply" class="py-16 px-6 bg-accent text-white text-center">
    <h2 class="text-4xl font-bold">Apply to Join</h2>
    <p class="text-lg mt-4">Only <strong>20 spots</strong> available. Investment: <strong>$4500</strong></p>

    <form class="mt-8 max-w-xl mx-auto bg-black p-6 rounded-lg shadow-lg">
      <div class="mb-4">
        <label class="block text-muted font-bold mb-2">Full Name</label>
        <input
          type="text"
          class="w-full p-3 border rounded-lg bg-gray-900 text-white"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-muted font-bold mb-2">Email</label>
        <input
          type="email"
          class="w-full p-3 border rounded-lg bg-gray-900 text-white"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-muted font-bold mb-2">Wrestling Experience</label>
        <select class="w-full p-3 border rounded-lg bg-gray-900 text-white" required>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-muted font-bold mb-2">Why do you want to join?</label>
        <textarea
          class="w-full p-3 border rounded-lg bg-gray-900 text-white"
          rows="4"
          placeholder="Motivation, goals, background..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full p-3 bg-red-700 hover:bg-red-900 text-white font-bold rounded-lg uppercase"
      >
        Submit Application
      </button>
    </form>
  </section>
</template>