<script setup></script>

<template>
  <section id="Hero" class="bg-white dark:bg-slate-950">
    <div class="mx-auto mt-[6.5rem] max-w-6xl px-6 py-10 sm:px-8 lg:px-8">
      <div
        class="relative isolate overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-xl ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900 dark:ring-slate-800 sm:px-12 lg:flex lg:items-center lg:gap-x-16 lg:px-16 lg:py-16"
      >
        <!-- Decorative line -->
        <div
          class="absolute left-8 top-8 h-1.5 w-16 rounded-full bg-sky-500 sm:left-12 lg:left-16"
        ></div>

        <!-- Decorative dots -->
        <div
          class="absolute right-12 top-12 hidden h-36 w-36 opacity-30 lg:block"
          aria-hidden="true"
        >
          <div class="grid grid-cols-6 gap-4">
            <span
              v-for="item in 36"
              :key="item"
              class="h-1.5 w-1.5 rounded-full bg-sky-500"
            ></span>
          </div>
        </div>
        <div
          class="absolute left-12 bottom-2 hidden h-36 w-36 opacity-30 lg:block"
          aria-hidden="true"
        >
          <div class="grid grid-cols-6 gap-4">
            <span
              v-for="item in 36"
              :key="item"
              class="h-1.5 w-1.5 rounded-full bg-sky-500"
            ></span>
          </div>
        </div>

        <!-- Text -->
        <div
          class="relative z-10 mx-auto max-w-xl text-center lg:mx-0 lg:flex-1 lg:text-left"
        >
          <h1
            class="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Halo, Saya <span class="text-sky-500">Titik</span>
            <span class="block text-sky-500">
              Guru IPA
              <span class="font-bold italic  text-slate-950 dark:text-white">Gen Z!</span>
            </span>
          </h1>

          <p
            class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl"
          >
            Menciptakan pembelajaran interaktif dan media ajar kreatif untuk pengalaman belajar yang mindful, meaningful, & joyful.
          </p>

          <div class="mt-8 flex justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/muhammad-hafidz-amanullah-abyan-4a8b191ab/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              <i class="mdi mdi-account"></i>
              Connect With Me!
            </a>
          </div>
        </div>

        <!-- Image -->
        <div class="relative mt-12 flex justify-center lg:mt-0 lg:flex-1">
          <div
            class="absolute bottom-0 h-72 w-72 rounded-full bg-sky-100 dark:bg-sky-900/50 sm:h-96 sm:w-96"
          ></div>

          <img
            class="relative z-10 w-72 object-contain sm:w-96 lg:w-[28rem]"
            src="/src/assets/Titik.png"
            alt="Titik"
          />
        </div>
      </div>

      <!-- Arrow Down -->
      <div class="relative mt-1">
        <div class="absolute bottom-[25px] left-0 z-10 block w-full">
          <a
            href="#About"
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-500 shadow-md transition hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-200"
          >
            <i class="mdi mdi-arrow-down animate-bounce text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  border-radius: 0;
}
</style>
