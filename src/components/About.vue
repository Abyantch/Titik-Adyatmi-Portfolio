<template>
  <section id="About" class="bg-white dark:bg-slate-950 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative overflow-hidden rounded-3xl shadow-xl group">
          <img
            src="/src/assets/About.png"
            alt="Foto Kampus"
            class="w-full h-[520px] object-cover transition duration-700 group-hover:scale-105"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          ></div>

          <!-- Quote -->
          <div class="absolute bottom-8 left-8 right-8 text-white">
            <span class="text-5xl font-serif text-sky-300">“</span>

            <p class="mt-3 text-lg leading-relaxed max-w-md">
              Lingkungan akademik yang inspiratif dan nyaman untuk mendukung
              lahirnya generasi pendidik yang profesional dan berdaya saing.
            </p>
          </div>
        </div>

        <!-- Content -->
        <div>
          <!-- Label -->
          <!-- <div class="flex items-center gap-3 mb-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 dark:bg-slate-800"
            >
              <i class="bx bx-map text-sky-500"></i>
            </div>

            <p
              class="text-sm uppercase tracking-[0.2em] text-sky-500 font-semibold"
            >
              Tentang Kampus
            </p>
          </div> -->

          <!-- Heading -->
          <h2
            class="text-5xl md:text-6xl font-bold leading-tight text-slate-800 dark:text-white"
          >
            Discover Our
            <span class="text-sky-500">Campus</span>
          </h2>

          <!-- Divider -->
          <div class="flex items-center gap-2 mt-6">
            <div class="w-16 h-[3px] bg-sky-500 rounded-full"></div>
            <div
              class="w-8 h-[3px] bg-slate-300 dark:bg-slate-700 rounded-full"
            ></div>
          </div>

          <!-- Description -->
          <p class="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
            FKIP Universitas Sultan Ageng Tirtayasa berlokasi di kawasan
            strategis Kota Serang, Banten. Lingkungan kampus yang nyaman dan
            kondusif mendukung proses belajar, pengembangan akademik, serta
            berbagai aktivitas mahasiswa secara optimal.
          </p>

          <!-- Address Card -->
          <a
            href="https://maps.google.com/?q=FKIP+Untirta+Ciwaru"
            target="_blank"
            rel="noopener noreferrer"
            class="group mt-8 block rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg p-6 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 cursor-pointer"
          >
            <div class="flex flex-col sm:flex-row gap-6 sm:items-center">
              <!-- Icon -->
              <div
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white text-4xl shadow-lg shadow-sky-500/30 transition duration-500 group-hover:scale-110 group-hover:shadow-sky-500/50"
              >
                <i class="bx bx-map-pin"></i>
              </div>

              <!-- Divider -->
              <div
                class="hidden sm:block w-px h-24 bg-slate-200 dark:bg-slate-700"
              ></div>

              <!-- Text -->
              <div class="flex-1">
                <div class="flex items-center justify-between gap-3">
                  <h3
                    class="text-2xl font-bold text-slate-800 dark:text-white transition duration-300 group-hover:text-sky-500"
                  >
                    Kampus FKIP Untirta
                  </h3>

                  <!-- Arrow -->
                  <div
                    class="text-sky-500 text-2xl opacity-0 translate-x-[-10px] transition duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    <i class="bx bx-up-arrow-alt rotate-45"></i>
                  </div>
                </div>

                <p class="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                  Jl. Ciwaru Raya, Cipare, Kec. Serang <br />
                  Kota Serang, Provinsi Banten <br />
                  42117
                </p>

                <!-- Mini CTA -->
                <div
                  class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-500"
                >
                  <span>Lihat di Google Maps</span>
                  <i class="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Bottom Info -->
      <div
        class="mt-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-6 md:p-8"
      >
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <!-- Title -->
          <div>
            <p
              class="text-sm uppercase tracking-[0.2em] text-sky-500 font-semibold"
            >
              Akses dari
            </p>

            <h3 class="mt-2 text-2xl font-bold text-slate-800 dark:text-white">
              Lokasi Sekitar
            </h3>
          </div>

          <!-- Items -->
          <div
            v-for="access in accessInfo"
            :key="access.title"
            class="flex items-center gap-4 md:border-l md:border-slate-200 dark:md:border-slate-700 md:pl-8"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 dark:bg-slate-800 text-sky-500 text-2xl"
            >
              <i :class="access.icon"></i>
            </div>

            <div>
              <h4 class="text-xl font-bold text-slate-800 dark:text-white">
                {{ access.title }}
              </h4>

              <p class="text-slate-600 dark:text-slate-400">
                {{ access.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const accessInfo = [
  {
    icon: "bx bx-time-five",
    title: "8 Menit",
    description: "dari Pusat Kota Serang",
  },
  {
    icon: "bx bx-buildings",
    title: "10 Menit",
    description: "dari Mall Of Serang",
  },
  {
    icon: "bx bxs-bus",
    title: "17 Menit",
    description: "dari Terminal Pakupatan",
  },
];
</script>
