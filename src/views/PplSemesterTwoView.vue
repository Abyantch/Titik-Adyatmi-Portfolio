<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="relative min-h-screen overflow-hidden px-6 py-32">
    <div class="absolute left-0 top-20 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl"></div>
    <div class="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"></div>

    <div class="relative mx-auto max-w-3xl text-center">
      <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500">
        <i class="mdi mdi-notebook-outline text-4xl"></i>
      </div>
      <p class="mt-7 text-sm font-black uppercase tracking-[0.24em] text-sky-500">PPL Semester 2</p>
      <h1 class="mt-4 text-4xl font-black text-slate-900 dark:text-white md:text-6xl">{{ title }}</h1>
      <p class="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
        Dokumentasi untuk bagian ini sedang disiapkan dan akan segera ditampilkan.
      </p>
    </div>
  </section>
</template>
