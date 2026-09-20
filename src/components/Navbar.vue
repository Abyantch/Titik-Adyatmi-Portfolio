<template>
  <header class="bg-white dark:bg-gray-900">
    <nav
      id="nav-menu"
      ref="navRef"
      class="fixed top-0 left-0 z-50 mx-auto flex w-full max-w-8xl items-center bg-white/30 p-7 backdrop-blur-2xl dark:bg-white/5 lg:px-8"
      aria-label="Global"
    >
      <!-- ========================= -->
      <!-- RIGHT SIDE: MENU + DARK MODE + MOBILE BUTTON -->
      <!-- ========================= -->
      <div class="mr-auto flex items-center gap-6 lg:gap-8">

      <!-- ========================= -->
      <!-- DESKTOP NAVIGATION -->
      <!-- ========================= -->

                <!-- DARK MODE (desktop) -->
        <div class="hidden items-center lg:flex">

          <label class="swap swap-rotate cursor-pointer">

            <input
              type="checkbox"
              class="hidden theme-controller"
              v-model="darkMode"
            />


            <!-- SUN ICON -->
            <svg
              class="swap-off h-7 w-7 fill-current text-amber-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
              />
            </svg>


            <!-- MOON ICON -->
            <svg
              class="swap-on h-7 w-7 fill-current text-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              />
            </svg>

          </label>

        </div>

      <div class="hidden items-center lg:flex lg:gap-x-8">

        <!-- PROFIL -->
        <RouterLink
          to="/"
          class="relative text-sm font-semibold leading-6 text-slate-700 transition-colors duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-full after:-translate-x-1/2 after:scale-x-0 after:rounded-full after:bg-sky-500 after:transition-transform after:duration-300 after:content-[''] hover:text-sky-500 hover:after:scale-x-100 dark:text-slate-100 dark:hover:text-sky-300"
          active-class="text-sky-500 after:scale-x-100 dark:text-sky-300"
        >
          Profil
        </RouterLink>


        <!-- ========================= -->
        <!-- SEMINAR -->
        <!-- ========================= -->
        <div
          class="relative"
          @mouseenter="openMenu('seminar')"
          @mouseleave="scheduleClose('seminar')"
        >

          <button
            type="button"
            :class="menuButtonClass(seminarOpen)"
            @click="toggleMenu('seminar')"
          >
            Seminar

            <svg
              class="h-4 w-4 transition-transform duration-200"
              :class="{ 'rotate-180': seminarOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>


          <!-- SEMINAR DROPDOWN -->
          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div
              v-show="seminarOpen"
              class="absolute left-0 z-50 mt-3 w-60 rounded-2xl border border-white/40 bg-white/90 p-2 shadow-xl shadow-sky-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/90"
              @mouseenter="openMenu('seminar')"
              @mouseleave="scheduleClose('seminar')"
            >
              <div class="space-y-1">

                <RouterLink
                  v-for="(item, index) in seminarItems"
                  :key="item.name"
                  :to="item.to"
                  class="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-sky-50 hover:text-sky-500 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-sky-300"
                  @click="closeMenus"
                >

                  <!-- ICON -->
                  <span
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-500 transition-all duration-200 group-hover:scale-105 group-hover:bg-sky-100 dark:bg-sky-500/10 dark:text-sky-300"
                  >

                    <!-- Seminar 1 -->
                   <svg
                      v-if="index === 0"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v4M12 17v4M3 12h4M17 12h4"
                      />

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                      />
                    </svg>

                    <svg
                      v-else-if="index === 3"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v4M12 17v4M3 12h4M17 12h4"
                      />

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                      />
                    </svg>

                    <!-- Seminar 2 -->
                    <svg
                      v-else-if="index === 1"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"
                      />

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"
                      />
                    </svg>

                    <!-- Seminar 3 -->
                    <svg
                      v-else
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h6M12 9v6"
                      />
                      <circle cx="12" cy="12" r="9" />
                    </svg>

                  </span>

                  {{ item.name }}

                </RouterLink>

              </div>
            </div>
          </Transition>

        </div>


        <!-- ========================= -->
        <!-- PPL -->
        <!-- ========================= -->
        <div
          class="relative"
          @mouseenter="openMenu('ppl')"
          @mouseleave="scheduleClose('ppl')"
        >

          <button
            type="button"
            :class="menuButtonClass(pplOpen)"
            @click="toggleMenu('ppl')"
          >
            PPL

            <svg
              class="h-4 w-4 transition-transform duration-200"
              :class="{ 'rotate-180': pplOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>


          <!-- PPL DROPDOWN -->
          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div
              v-show="pplOpen"
              class="absolute left-0 z-50 mt-3 w-64 rounded-2xl border border-white/40 bg-white/90 p-2 shadow-xl shadow-sky-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/90"
              @mouseenter="openMenu('ppl')"
              @mouseleave="scheduleClose('ppl')"
            >
              <div class="space-y-1">

                <RouterLink
                  v-for="(item, index) in pplItems"
                  :key="item.name"
                  :to="item.to"
                  class="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-sky-50 hover:text-sky-500 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-sky-300"
                  @click="closeMenus"
                >

                  <!-- ICON -->
                  <span
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-500 transition-all duration-200 group-hover:scale-105 group-hover:bg-sky-100 dark:bg-sky-500/10 dark:text-sky-300"
                  >

                    <!-- ARTEFAK -->
                    <svg
                      v-if="index === 0"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"
                      />

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4 7.5 8 4.5 8-4.5M12 12v9"
                      />
                    </svg>


                    <!-- FEEDBACK -->
                    <svg
                      v-else-if="index === 1"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-4.5a7.5 7.5 0 1 1 16-5Z"
                      />
                    </svg>


                    <!-- MODEL GURU -->
                    <svg
                      v-else-if="index === 2"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z"
                      />

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 10v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5"
                      />
                    </svg>


                    <!-- REFLEKSI -->
                    <svg
                      v-else-if="index === 3"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v4M12 17v4M3 12h4M17 12h4"
                      />

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                      />
                    </svg>


                    <!-- FILOSOFI MENGAJAR -->
                    <svg
                      v-else
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"
                      />

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"
                      />
                    </svg>

                  </span>

                  {{ item.name }}

                </RouterLink>

              </div>
            </div>
          </Transition>

        </div>

      </div>

        <!-- MOBILE BUTTON -->
        <div class="flex lg:hidden">

          <button
            type="button"
            class="-m-2.5 inline-flex justify-end rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>

            <Bars3Icon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>

        </div>

      </div>

    </nav>


    <!-- ========================= -->
    <!-- MOBILE NAVIGATION -->
    <!-- ========================= -->

    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >

      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 max-h-[360px] w-full max-w-xxl overflow-y-auto bg-white/30 px-6 py-6 backdrop-blur-2xl dark:bg-white/5"
      >

        <!-- MOBILE HEADER -->
        <div class="flex items-center justify-end">

          <button
            @click="mobileMenuOpen = false"
            class="text-gray-500 dark:text-gray-400"
          >
            <XMarkIcon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>

        </div>


        <div class="mt-6 flow-root">

          <div class="-my-6 divide-y divide-gray-500/10">

            <div class="space-y-2 py-6">

              <!-- PROFIL -->
              <RouterLink
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                active-class="bg-sky-50 text-sky-500 dark:bg-sky-500/10 dark:text-sky-300"
                @click="closeMobileMenu"
              >
                Profil
              </RouterLink>


              <!-- SEMINAR -->
              <div class="space-y-1">

                <p
                  class="px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200"
                >
                  Seminar
                </p>

                <RouterLink
                  v-for="item in seminarItems"
                  :key="item.name"
                  :to="item.to"
                  class="mx-2 flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-sky-500 dark:text-gray-300 dark:hover:bg-gray-700"
                  active-class="bg-sky-50 text-sky-500 dark:bg-sky-500/10 dark:text-sky-300"
                  @click="closeMobileMenu"
                >

                  <span class="text-sky-500 dark:text-sky-300">
                    ✦
                  </span>

                  {{ item.name }}

                </RouterLink>

              </div>


              <!-- PPL -->
              <div class="space-y-1 pt-2">

                <p
                  class="px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200"
                >
                  PPL
                </p>

                <RouterLink
                  v-for="item in pplItems"
                  :key="item.name"
                  :to="item.to"
                  class="mx-2 flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-sky-500 dark:text-gray-300 dark:hover:bg-gray-700"
                  active-class="bg-sky-50 text-sky-500 dark:bg-sky-500/10 dark:text-sky-300"
                  @click="closeMobileMenu"
                >

                  <span class="text-sky-500 dark:text-sky-300">
                    ✦
                  </span>

                  {{ item.name }}

                </RouterLink>

              </div>

            </div>

          </div>

        </div>

      </DialogPanel>

    </Dialog>

  </header>
</template>


<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

import {
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";


/* =========================
   STATE
========================= */

const mobileMenuOpen = ref(false);
const darkMode = ref(false);
const navRef = ref(null);


/* =========================
   SEMINAR
   Dummy dulu.
========================= */

const seminarItems = [
  {
    name: "Refleksi",
    to: "/seminar/refleksi",
  },
  {
    name: "Artefak",
    to: "/seminar/artefak",
  },
  {
    name: "Seminar 3",
    to: "/seminar/3",
  },
];


/* =========================
   PPL
   Route DIJAGA.
========================= */

const pplItems = [
  {
    name: "Artefak",
    to: "/artefak",
  },
  {
    name: "Feedback",
    to: "/feedback",
  },
  {
    name: "Model Guru",
    to: "/modelguru",
  },
  {
    name: "Refleksi",
    to: "/refleksi",
  },
  {
    name: "Filosofi Mengajar",
    to: "/filosofimengajar",
  },
];


/* =========================
   MOBILE MENU
========================= */

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};


/* =========================
   DESKTOP DROPDOWN (HOVER + CLICK)
   Efek underline disamakan dengan "Profil".
========================= */

const seminarOpen = ref(false);
const pplOpen = ref(false);
const closeTimers = { seminar: null, ppl: null };

// Class tombol dropdown, disamakan dengan style RouterLink "Profil"
const menuButtonClass = (isOpen) => [
  "group relative flex items-center gap-1 text-sm font-semibold leading-6 outline-none transition-colors duration-300",
  "after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-full after:-translate-x-1/2 after:rounded-full after:bg-sky-500 after:transition-transform after:duration-300 after:content-['']",
  "hover:text-sky-500 hover:after:scale-x-100 dark:hover:text-sky-300",
  isOpen
    ? "text-sky-500 after:scale-x-100 dark:text-sky-300"
    : "text-slate-700 after:scale-x-0 dark:text-slate-100",
];

const clearTimer = (name) => {
  if (closeTimers[name]) {
    clearTimeout(closeTimers[name]);
    closeTimers[name] = null;
  }
};

const openMenu = (name) => {
  clearTimer(name);

  if (name === "seminar") {
    seminarOpen.value = true;
    pplOpen.value = false;
  } else {
    pplOpen.value = true;
    seminarOpen.value = false;
  }
};

const scheduleClose = (name) => {
  clearTimer(name);

  closeTimers[name] = setTimeout(() => {
    if (name === "seminar") seminarOpen.value = false;
    else pplOpen.value = false;
  }, 150);
};

const toggleMenu = (name) => {
  clearTimer(name);

  if (name === "seminar") {
    seminarOpen.value = !seminarOpen.value;
    if (seminarOpen.value) pplOpen.value = false;
  } else {
    pplOpen.value = !pplOpen.value;
    if (pplOpen.value) seminarOpen.value = false;
  }
};

const closeMenus = () => {
  seminarOpen.value = false;
  pplOpen.value = false;
};

const handleClickOutside = (event) => {
  if (navRef.value && !navRef.value.contains(event.target)) {
    closeMenus();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  clearTimer("seminar");
  clearTimer("ppl");
});


/* =========================
   DARK MODE
========================= */

watch(darkMode, (newValue) => {
  const html = document.querySelector("html");

  if (newValue) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});


onMounted(() => {
  const html = document.querySelector("html");

  darkMode.value = html.classList.contains("dark");
});
</script>


<style scoped>
.read-the-docs {
  color: #888;
}


/* =========================
   DARK MODE TOGGLE
========================= */

input[type="checkbox"]:checked ~ svg.swap-off {
  display: none;
}

input[type="checkbox"]:not(:checked) ~ svg.swap-on {
  display: none;
}
</style>
