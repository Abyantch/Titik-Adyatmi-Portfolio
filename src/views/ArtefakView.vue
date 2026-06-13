<template>
<section class="relative overflow-hidden px-6 pb-20 pt-24">

  <div class="relative z-10 mx-auto max-w-6xl">
    <!-- HEADER TEXT -->
    <div class="text-center">

      <h1
        class="mt-8 text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white md:text-6xl"
      >
        Artefak
        <span class=" text-sky-500 bg-clip-text">
          Pembelajaran
        </span>
      </h1>

      <p
        class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
      >
        Dokumentasi terstruktur yang mencakup hasil observasi, perangkat
        pembelajaran dan evaluasi praktik mengajar selama masa pendidikan
        profesi.
      </p>
    </div>

    <!-- INFO CARDS -->
    <div class="mt-14 grid gap-6 md:grid-cols-3">
      <!-- CARD 1 -->
      <div
        class="group flex items-center gap-5 rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
      >
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white"
        >
          <i class="mdi mdi-school-outline text-3xl"></i>
        </div>

        <div>
          <p class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
            Sekolah Mitra
          </p>
          <h3 class="mt-2 text-lg font-bold text-slate-800 dark:text-white">
            SMPN 2 Kota Serang
          </h3>
        </div>
      </div>

      <!-- CARD 2 -->
      <div
        class="group flex items-center gap-5 rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
      >
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white"
        >
          <i class="mdi mdi-flask-outline text-3xl"></i>
        </div>

        <div>
          <p class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
            Mata Pelajaran
          </p>
          <h3 class="mt-2 text-lg font-bold text-slate-800 dark:text-white">
            Ilmu Pengetahuan Alam
          </h3>
        </div>
      </div>

      <!-- CARD 3 -->
      <div
        class="group flex items-center gap-5 rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
      >
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white"
        >
          <i class="mdi mdi-account-tie-outline text-3xl"></i>
        </div>

        <div>
          <p class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
            Penyusun
          </p>
          <h3 class="mt-2 text-lg font-bold text-slate-800 dark:text-white">
            Titiek Triadyatmi, S.Pd
          </h3>
        </div>
      </div>
    </div>

    <!-- DASHED LINE -->
    <div class="mt-20 border-t-2 border-dashed border-slate-300/80"></div>
  </div>
</section>
</template>