<template>
  <footer
    class="relative mt-20 overflow-hidden border-t border-slate-200 bg-gradient-to-br from-sky-50 via-white to-violet-50 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
  >
    <!-- Background Glow -->
    <div
      class="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
    ></div>

    <div
      class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <!-- Tagline -->
      <div class="text-center">
        <h2
          class="text-xl font-black leading-tight text-slate-800 dark:text-white md:text-6xl"
        >
          Semua Tempat <span class="bg-gradient-to-r text-sky-500 bg-clip-text">Adalah Sekolah.</span>
          <br/>
          Semua Orang <span class="bg-gradient-to-r text-sky-500 bg-clip-text">Adalah Guru.</span>
        </h2>

        <p
          class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400"
        >
          Filosofi yang mengingatkan bahwa proses belajar tidak hanya terjadi di
          ruang kelas. Setiap pengalaman adalah pembelajaran dan setiap individu
          dapat menjadi sumber inspirasi bagi orang lain.
        </p>
      </div>

      <!-- Line Top -->
      <div
        class="mx-auto mt-14 h-px max-w-6xl bg-gradient-to-r from-transparent via-sky-300 to-transparent"
      ></div>

      <!-- Footer Content -->
      <div class="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.8fr_1fr]">
        <!-- Profile -->
        <div>
          <div class="flex items-center gap-4">

            <div>
              <h3 class="text-2xl font-black text-sky-500 dark:text-white">
                E-Portfolio PPG Prajabatan IPA
              </h3>

            </div>
          </div>

          <p class="mt-6 max-w-md leading-8 text-slate-600 dark:text-slate-400">
            Dokumentasi perjalanan belajar, refleksi, dan praktik pembelajaran
            selama pelaksanaan PPG Prajabatan di SMP Negeri 2 Kota Serang.
          </p>

          <!-- Social -->
          <div class="mt-6 flex gap-3">
            <a
              href="#"
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-slate-500 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white dark:bg-slate-800 dark:text-slate-400"
            >
              <i class="mdi mdi-instagram text-xl"></i>
            </a>

            <a
              href="#"
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-slate-500 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white dark:bg-slate-800 dark:text-slate-400"
            >
              <i class="mdi mdi-linkedin text-xl"></i>
            </a>

            <a
              href="mailto:amanullahabyan@gmail.com"
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-slate-500 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white dark:bg-slate-800 dark:text-slate-400"
            >
              <i class="mdi mdi-email-outline text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-xl font-black text-slate-800 dark:text-white">
            Navigasi Cepat
          </h3>

          <ul class="mt-6 space-y-4">
            <li v-for="menu in menus" :key="menu.to">
              <RouterLink
                :to="menu.to"
                class="group flex items-center gap-3 text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-sky-500 dark:text-slate-400"
              >
                <span
                  class="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white"
                >
                  <i class="mdi mdi-chevron-right"></i>
                </span>

                {{ menu.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Campus -->
        <div>
          <h3 class="text-xl font-black text-slate-800 dark:text-white">
            LPTK
          </h3>

          <div class="mt-5 flex items-center gap-2 text-sky-500">
            <i class="mdi mdi-map-marker text-xl"></i>
            Universitas Sultan Ageng Tirtayasa
          </div>

          <div
            class="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <iframe
              src="https://maps.google.com/maps?q=Universitas%20Sultan%20Ageng%20Tirtayasa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="180"
              style="border: 0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Line Bottom -->
      <div
        class="mx-auto mt-14 h-px max-w-6xl bg-gradient-to-r from-transparent via-violet-300 to-transparent"
      ></div>

      <!-- Copyright -->
      <div
        class="mt-8 text-center text-sm text-slate-500 dark:text-slate-500"
      >
        © 2026 E-Portofolio PPG Prajabatan IPA • Titiek Triadyatmi, S.Pd.
      </div>
    </div>
  </footer>
</template>

<script setup>
const menus = [
  { label: "Profil", to: "/" },
  { label: "Artefak", to: "/artefak" },
  { label: "Feedback", to: "/lampiran" },
  { label: "Model Guru", to: "/modelguru" },
  { label: "Refleksi", to: "/refleksi" },
  { label: "Filosofi Mengajar", to: "/filosofimengajar" },
];
</script>