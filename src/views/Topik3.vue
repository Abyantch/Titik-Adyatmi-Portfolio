

<script setup>

import { computed, ref } from "vue";

const props = defineProps({

  page: { type: String, default: "topik-3" },

});

const activePdf = ref(null);

const toFileUrl = (path) => encodeURI(path);

const openPdf = (document) => {
  activePdf.value = document;
};

const closePdf = () => {
  activePdf.value = null;
};

const moduleDocument = {
  title: "Modul Ajar Sistem Saraf",
  category: "MODUL AJAR",
  url: "/pdf/TOPIK 3/RANCANGAN PEMBELAJARAN (MODUL AJAR)/Modul Ajar DEEPLEARNING UDL 2.pdf",
};

const mediaDocuments = [
  {
    title: "PPT Pembelajaran",
    description: "Presentasi materi sistem saraf",
    url: "/pdf/TOPIK 3/MEDIA AJAR/PPT.pdf",
    icon: "mdi-file-presentation-box",
    category: "PRESENTASI",
  },
  {
    title: "Lembar Kerja Murid (LKM)",
    description: "Lembar aktivitas dan analisis kasus",
    url: "/pdf/TOPIK 3/MEDIA AJAR/LKM.pdf",
    icon: "mdi-file-document-outline",
    category: "LEMBAR KERJA",
  },
];

const activePhoto = ref(0);

const activityPhotos = [

  {

    src: "/pdf/TOPIK 3/KEGIATAN NON MENGAJAR/Pembiasaan pagi duha dan ngaji.jpg",

    title: "Pembiasaan Pagi Duha dan Ngaji",

    caption: "Membiasakan murid untuk shalat duha dan ngaji setiap pagi.",

  },

  {

    src: "/pdf/TOPIK 3/KEGIATAN NON MENGAJAR/Pendamping Ujian Praktik IPA Sekolah.png",

    title: "Pendamping Ujian Praktik IPA",

    caption: "Mendampingi pelaksanaan ujian praktik IPA di sekolah.",

  },

  {

    src: "/pdf/TOPIK 3/KEGIATAN NON MENGAJAR/Pesantren Kilat.jpg",

    title: "Pesantren Kilat",

    caption: "Berpartisipasi dalam kegiatan penguatan karakter dan spiritual.",

  },

  {

    src: "/pdf/TOPIK 3/KEGIATAN NON MENGAJAR/Kokurikuler.jpg",

    title: "Kegiatan Kokurikuler",

    caption: "Berpartisipasi dalam kegiatan ekstrakurikuler di sekolah.",

  },

  {

    src: "/pdf/TOPIK 3/KEGIATAN NON MENGAJAR/Kegiatan Pagi Hari.jpeg",

    title: "Kegiatan Pagi Hari",

    caption: "Menyambut murid, menjaga piket, dan mendampingi kegiatan pembiasaan di pagi hari.",

  },

  {

    src: "/pdf/TOPIK 3/KEGIATAN NON MENGAJAR/Pembiasaan pagi duha dan ngaji.jpg",

    title: "Pembiasaan Pagi Duha dan Ngaji",

    caption: "Membiasakan murid untuk shalat duha dan ngaji setiap pagi.",

  },

];

const pages = {

  "topik-3": {

    title: "Topik 3",

    eyebrow: "PPL Semester 2",

    description:

      "Analisis perencanaan, pelaksanaan, dan pengalaman nonmengajar selama PLP di SMP Negeri 2 Kota Serang.",

    sections: [

      {

        type: "planning",

        label: "01 / Perencanaan",

        title: "Merancang Pembelajaran yang Bermakna",

        paragraphs: [

          "Rancangan pembelajaran disusun berdasarkan tujuan pembelajaran dan karakteristik peserta didik dengan menerapkan Problem Based Learning (PBL), pendekatan Deep Learning, serta prinsip Design Universal Pembelajaran (DUP). Peserta didik mempelajari sistem saraf melalui pengamatan, diskusi, dan pemecahan masalah.",

          "Keterpaduan tujuan, aktivitas, dan asesmen menjadi kekuatan rancangan. Fenomena menyentuh benda panas membantu peserta didik menghubungkan konsep sistem saraf dengan pengalaman nyata, sedangkan prinsip DUP memberi pilihan sumber belajar dan cara menunjukkan pemahaman.",

          "Pelaksanaan memerlukan pengelolaan waktu, instruksi yang jelas, dan pendampingan yang sesuai ketika peserta didik menyelidiki, menganalisis kasus, serta menyampaikan hasil. Saya belajar merancang pembelajaran yang fleksibel, kontekstual, dan berpusat pada peserta didik.",

        ],

        notes: [

          "Struktur dan fungsi sistem saraf, jalur impuls, serta gerak sadar dan refleks.",

          "Gambar neuron, video animasi, dan LKM sebagai variasi sumber belajar.",

          "Instruksi yang jelas, pendampingan, dan asesmen yang selaras.",

        ],

      },

      {

        type: "material",

        label: "02 / Materi",

        title: "Dari Konsep Menuju Pengalaman Nyata",

        paragraphs: [

          "Materi pembelajaran berfokus pada struktur dan fungsi sistem saraf, jalur impuls, serta perbedaan gerak sadar dan refleks. Materi dikaitkan dengan kehidupan sehari-hari agar peserta didik memahami bagaimana tubuh menerima rangsangan dan menghasilkan respons.",

          "Materi disusun sesuai tujuan pembelajaran dengan mengintegrasikan fenomena sehari-hari, gambar neuron, video animasi, dan LKM untuk membantu peserta didik memahami konsep sistem saraf.",

          "Materi disajikan melalui beragam media dan aktivitas agar mengakomodasi perbedaan kesiapan serta preferensi belajar peserta didik. Beberapa konsep tetap memerlukan penjelasan bertahap dan contoh tambahan agar jalur impuls serta mekanisme gerak refleks lebih mudah dipahami.",

        ],

      },

      {

        type: "media",

        label: "03 / Media Belajar",

        title: "Media yang Mendukung Eksplorasi",

        paragraphs: [

          "PPT, video animasi, gambar, dan LKM digunakan untuk membantu peserta didik memahami konsep sistem saraf dan menganalisis kasus sehari-hari.",

          "Peserta didik memilih studi kasus yang diminati serta cara pengerjaan secara individu atau berkelompok. Variasi media mendorong minat, kemandirian, dan kolaborasi, meski tetap membutuhkan pendampingan agar tujuan pembelajaran tercapai.",

        ],

        attachments: ["PPT Pembelajaran", "Lembar Kerja Murid (LKM)"],

      },

      {

        type: "video",

        label: "04 / Dokumentasi Mengajar",

        title: "Melihat Pembelajaran Secara Langsung",

        paragraphs: [

          "Praktik mengajar menerapkan PBL dan Deep Learning berbasis DUP. Apersepsi tentang respons tubuh terhadap benda panas dilanjutkan dengan pengamatan, analisis kasus melalui LKM, diskusi, dan refleksi.",

          "Interaksi dibangun melalui pertanyaan pemantik dan diskusi. Pengelolaan waktu perlu dijaga agar pengamatan, pengerjaan LKM, diskusi, dan refleksi berlangsung seimbang.",

        ],

        url: "",

      },

      {

        type: "gallery",

        label: "05 / Kehidupan Sekolah",

        title: "Belajar Menjadi Bagian dari Sekolah",

        paragraphs: [

          "Kegiatan nonmengajar meliputi menyambut murid, menjaga piket, pembiasaan Duha dan membaca Al-Qur'an, kegiatan kokurikuler, pesantren kilat, serta pendampingan ujian praktik IPA.",

          "Kegiatan ini menunjukkan bahwa peran guru tidak hanya berfokus pada pembelajaran di kelas, tetapi juga mencakup pembiasaan karakter, penguatan nilai keagamaan, kedisiplinan, dan pendampingan kegiatan akademik. Saya belajar pentingnya tanggung jawab, keteladanan, komunikasi, dan kerja sama.",

          "Pengalaman ini membantu saya memahami bahwa pendidikan berlangsung melalui berbagai aktivitas sekolah. Saya belajar menjadi calon guru yang mendukung perkembangan akademik, karakter, spiritual, dan keterampilan peserta didik.",

        ],

      },

      {

        type: "assessment",

        label: "06 / Evaluasi",

        title: "Instrumen Penilaian",

        description:

          "Dokumen penilaian 7 dan 8 oleh Guru Pamong belum tersedia dan akan ditambahkan setelah dokumen diterima.",

      },

    ],

  },

};

const currentPage = computed(

  () => pages[props.page] ?? pages["topik-3"],

);

const displayedSections = computed(() => currentPage.value.sections);

const nextPhoto = () => {

  activePhoto.value = (activePhoto.value + 1) % activityPhotos.length;

};

const previousPhoto = () => {

  activePhoto.value =

    (activePhoto.value - 1 + activityPhotos.length) % activityPhotos.length;

};

const scrollToSection = (id) => {

  document.getElementById(id)?.scrollIntoView({

    behavior: "smooth",

    block: "start",

  });

};

</script>

<template>

  <section

    class="relative min-h-screen overflow-hidden bg-slate-50 px-5 pb-24 pt-24 text-slate-800 sm:px-8 lg:px-6 lg:pt-32 dark:bg-slate-950 dark:text-slate-100"

  >

    <!-- ANIMATED BACKGROUND -->

    <div

      class="float-slow pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"

    ></div>

    <div

      class="float-slower pointer-events-none absolute right-0 top-[650px] h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"

    ></div>

    <div

      class="float-slow pointer-events-none absolute bottom-40 left-1/3 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"

    ></div>

    <div class="relative z-10 mx-auto max-w-7xl">

      <!-- HERO -->

<header

  class="hero-editorial relative isolate grid items-center gap-10 overflow-hidden rounded-[36px] border border-white/70 bg-white/65 px-6 py-10 shadow-2xl shadow-sky-500/10 backdrop-blur-xl sm:px-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:py-14 dark:border-slate-700/70 dark:bg-slate-900/60 dark:shadow-sky-950/20"

>

  <!-- BACKGROUND DECORATION -->

  <div

    class="pointer-events-none absolute -left-24 -top-28 -z-10 h-72 w-72 rounded-full bg-sky-300/25 blur-[90px]"

  ></div>

  <div

    class="pointer-events-none absolute -bottom-32 right-0 -z-10 h-80 w-80 rounded-full bg-violet-400/20 blur-[100px]"

  ></div>

  <div

    class="hero-dot-pattern pointer-events-none absolute right-8 top-8 -z-10 hidden h-28 w-28 opacity-50 sm:block"

  ></div>

  <!-- LEFT: EDITORIAL CONTENT -->

  <div class="relative z-10 min-w-0">

    <span

      class="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-4 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-sky-600 shadow-lg shadow-sky-500/10 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80 dark:text-sky-300"

    >

      <i class="mdi mdi-book-open-page-variant-outline text-lg"></i>

      {{ currentPage.eyebrow }}

    </span>

    <h1

      class="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl dark:text-white"

    >

      {{ currentPage.title }}

      <span

        class="hero-gradient-text mt-2 block pb-1"

      >

        Refleksi & Praktik

      </span>

    </h1>

    <p

      class="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-400"

    >

      {{ currentPage.description }}

    </p>

    <!-- GRADIENT ACCENT -->

    <div

      class="mt-6 h-1.5 w-36 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700"

    >

      <div

        class="hero-accent-bar h-full w-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500"

      ></div>

    </div>

    <!-- SECTION NAVIGATION -->

    <nav

      aria-label="Navigasi bagian Topik 3"

      class="mt-8 flex flex-wrap gap-2.5"

    >

      <button

        v-for="(section, index) in displayedSections"

        :key="section.label"

        type="button"

        @click="scrollToSection(section.label)"

        class="hero-nav-chip group inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-3 text-xs font-bold text-slate-700 shadow-md shadow-slate-200/50 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:text-sky-600 hover:shadow-lg hover:shadow-sky-500/15 sm:text-sm dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-200 dark:shadow-none dark:hover:border-sky-500/60 dark:hover:text-sky-300"

      >

        <i

          :class="[

            'text-lg transition-transform duration-300 group-hover:scale-110',

            [

              'mdi-lightbulb-on-outline',

              'mdi-book-open-page-variant-outline',

              'mdi-presentation',

              'mdi-play-box-outline',

              'mdi-account-group-outline',

              'mdi-clipboard-check-outline',

            ][index % 6],

          ]"

        ></i>

        {{ section.label.split("/").pop().trim() }}

      </button>

    </nav>

  </div>

  <!-- RIGHT: SCHOOL PHOTO COMPOSITION -->

  <div

    class="hero-visual relative mx-auto w-full max-w-[520px] lg:ml-auto"

  >

    <!-- Decorative orbit rings -->

    <div

      class="hero-orbit hero-orbit-one pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-[48%] border border-sky-400/60"

    ></div>

    <div

      class="hero-orbit hero-orbit-two pointer-events-none absolute left-1/2 top-1/2 h-[105%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[48%] border border-violet-400/50"

    ></div>

    <!-- Ambient glow -->

    <div

      class="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/25 blur-[80px]"

    ></div>

    <!-- Decorative floating dots -->

    <span

      class="hero-orb hero-orb-a pointer-events-none absolute left-[8%] top-[20%] z-20 h-4 w-4 rounded-full bg-gradient-to-br from-sky-300 to-blue-500 shadow-lg shadow-sky-400/40"

    ></span>

    <span

      class="hero-orb hero-orb-b pointer-events-none absolute right-[12%] top-[12%] z-20 h-5 w-5 rounded-full bg-gradient-to-br from-violet-300 to-violet-500 shadow-lg shadow-violet-400/40"

    ></span>

    <span

      class="hero-orb hero-orb-c pointer-events-none absolute bottom-[15%] right-[8%] z-20 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-cyan-300 to-sky-500 shadow-lg shadow-cyan-400/40"

    ></span>

    <!-- Main photo frame -->

    <div class="hero-photo-frame relative z-10 mx-5 my-8 rotate-[-3deg] rounded-[32px] border border-white/80 bg-white/70 p-2.5 shadow-2xl shadow-sky-500/20 backdrop-blur-xl transition-transform duration-500 hover:rotate-0 sm:mx-10 sm:my-10 sm:p-3 dark:border-slate-600/80 dark:bg-slate-800/70 dark:shadow-sky-950/30">

      <div

        class="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-gradient-to-br from-sky-100 via-white to-violet-100 dark:from-slate-800 dark:via-slate-900 dark:to-violet-950"

      >

        <!-- Ganti path ini dengan foto sekolah kamu -->

        <img

          src="/pdf/TOPIK 3/KEGIATAN NON MENGAJAR/Kegiatan Pagi Hari.jpeg"

          alt="Lingkungan SMP Negeri 2 Kota Serang"

          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"

          @error="$event.target.style.visibility = 'hidden'"

        />

        <!-- Fallback jika foto belum tersedia -->

        <div

          class="absolute inset-0 -z-10 flex flex-col items-center justify-center text-sky-500/70"

        >

          <i class="mdi mdi-school-outline text-6xl"></i>

          <span class="mt-3 text-xs font-bold">Foto lingkungan sekolah</span>

        </div>

        <!-- Photo overlay -->

        <div

          class="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-sky-950/10"

        ></div>

        <div class="absolute bottom-5 left-5 right-5 text-white sm:bottom-6 sm:left-6">

          <span

            class="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md sm:text-xs"

          >

            <i class="mdi mdi-map-marker-outline text-sm"></i>

            Lingkungan Praktik

          </span>

        </div>

      </div>

    </div>

    <!-- Floating concept badge: top left -->

    <div

      class="hero-float hero-float-one absolute -left-1 top-[12%] z-30 inline-flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/90 px-3 py-3 shadow-xl shadow-sky-500/10 backdrop-blur-xl sm:-left-2 sm:px-4 dark:border-slate-700 dark:bg-slate-900/90"

    >

      <span

        class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white"

      >

        <i class="mdi mdi-earth text-xl"></i>

      </span>

      <span class="text-xs font-black text-slate-800 sm:text-sm dark:text-slate-100">

        Kontekstual

      </span>

    </div>

    <!-- Floating concept badge: top right -->

    <div

      class="hero-float hero-float-two absolute -right-1 top-[27%] z-30 inline-flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/90 px-3 py-3 shadow-xl shadow-violet-500/10 backdrop-blur-xl sm:-right-2 sm:px-4 dark:border-slate-700 dark:bg-slate-900/90"

    >

      <span

        class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white"

      >

        <i class="mdi mdi-rocket-launch-outline text-xl"></i>

      </span>

      <span class="text-xs font-black text-slate-800 sm:text-sm dark:text-slate-100">

        Deep Learning

      </span>

    </div>

    <!-- Floating concept badge: bottom left -->

    <div

      class="hero-float hero-float-three absolute -left-1 bottom-[20%] z-30 inline-flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/90 px-3 py-3 shadow-xl shadow-cyan-500/10 backdrop-blur-xl sm:-left-2 sm:px-4 dark:border-slate-700 dark:bg-slate-900/90"

    >

      <span

        class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 text-white"

      >

        <i class="mdi mdi-handshake-outline text-xl"></i>

      </span>

      <span class="text-xs font-black text-slate-800 sm:text-sm dark:text-slate-100">

        Kolaboratif

      </span>

    </div>

    <!-- School information floating card -->

    <div

      class="hero-float hero-float-four absolute -bottom-1 right-0 z-30 flex max-w-[245px] items-center gap-3 rounded-[22px] border border-white/80 bg-white/90 p-3.5 shadow-xl shadow-violet-500/10 backdrop-blur-xl sm:-right-1 sm:bottom-0 sm:max-w-[275px] sm:p-4 dark:border-slate-700 dark:bg-slate-900/90"

    >

      <span

        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20"

      >

        <i class="mdi mdi-school-outline text-2xl"></i>

      </span>

      <div class="min-w-0">

        <p class="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-300">

          Lokasi PPL

        </p>

        <p class="mt-1 text-xs font-black leading-5 text-slate-800 sm:text-sm dark:text-white">

          SMP Negeri 2 Kota Serang

        </p>

      </div>

      <i class="mdi mdi-arrow-up-right text-xl text-violet-500"></i>

    </div>

  </div>

</header>

      <!-- CONTENT SECTIONS -->

      <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-24">

        <template

          v-for="section in displayedSections"

          :key="section.label"

        >

          <!-- PLANNING -->

          <section

            v-if="section.type === 'planning'"

            :id="section.label"

            class="scroll-mt-24 grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr]"

          >

            <div class="min-w-0">

              <p class="text-sm font-bold uppercase tracking-[0.25em] text-sky-500">

                {{ section.label }}

              </p>

              <h2 class="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl dark:text-white">

                Merancang dengan tujuan.

              </h2>

              <p class="mt-5 max-w-sm text-sm leading-8 text-slate-600 dark:text-slate-400">

                Setiap keputusan pembelajaran berangkat dari tujuan, kebutuhan,

                dan pengalaman peserta didik.

              </p>

              <div class="mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"></div>

<!-- MODUL AJAR PREVIEW -->
<div class="shine-card group relative mt-7 overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-xl shadow-sky-500/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">
  <div class="flex items-center gap-3">
    <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20">
      <i class="mdi mdi-file-document-outline text-2xl"></i>
    </div>
    <div class="min-w-0 flex-1">
      <p class="text-[10px] font-black uppercase tracking-widest text-sky-500">Dokumen Pendukung</p>
      <h3 class="mt-1 text-sm font-black text-slate-900 dark:text-white">{{ moduleDocument.title }}</h3>
    </div>
  </div>
  <div class="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
    <iframe :src="`${toFileUrl(moduleDocument.url)}#toolbar=0&navpanes=0`" :title="moduleDocument.title" class="h-[210px] w-full bg-white" loading="lazy"></iframe>
  </div>
  <div class="mt-3 grid grid-cols-2 gap-2">
    <button type="button" @click="openPdf(moduleDocument)" class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-bold text-slate-700 transition-all duration-300 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
      <i class="mdi mdi-fullscreen text-lg"></i> Fullscreen
    </button>
    <a :href="toFileUrl(moduleDocument.url)" :download="moduleDocument.url.split('/').pop()" class="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-3 py-3 text-xs font-bold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5">
      <i class="mdi mdi-download text-lg"></i> Download
    </a>
  </div>
</div>

            </div>

            <article

              class="shine-card group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-7 shadow-2xl shadow-slate-200/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 sm:p-10 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"

            >

              <i

                class="mdi mdi-lightbulb-on-outline absolute -right-5 top-3 text-[130px] text-sky-500/10 transition-all duration-500 group-hover:scale-110 group-hover:text-sky-500/20"

              ></i>

              <div class="relative z-10">

                <h3 class="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">

                  {{ section.title }}

                </h3>

                <div class="mt-6 space-y-5 text-justify text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">

                  <p v-for="paragraph in section.paragraphs" :key="paragraph">

                    {{ paragraph }}

                  </p>

                </div>

                <div class="mt-9 border-t border-slate-200 pt-6 dark:border-slate-700">

                  <p class="text-sm font-bold uppercase tracking-[0.2em] text-violet-500">

                    Fokus Refleksi

                  </p>

                  <div class="mt-5 grid gap-4 sm:grid-cols-3">

                    <div

                      v-for="(note, i) in section.notes"

                      :key="note"

                      class="group/note rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 dark:border-slate-700 dark:bg-slate-800/80"

                    >

                      <span class="text-xs font-black text-sky-500">0{{ i + 1 }}</span>

                      <p class="mt-3 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">

                        {{ note }}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </article>

          </section>

          <!-- MATERIAL -->

          <section

            v-else-if="section.type === 'material'"

            :id="section.label"

            class="scroll-mt-24"

          >

            <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>

                <span class="inline-flex rounded-full bg-sky-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-sky-500/20">

                  {{ section.label }}

                </span>

                <h2 class="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl dark:text-white">

                  {{ section.title }}

                </h2>

                <div class="mt-6 space-y-4 text-justify text-sm leading-8 text-slate-600 dark:text-slate-400">

                  <p v-for="paragraph in section.paragraphs" :key="paragraph">

                    {{ paragraph }}

                  </p>

                </div>

              </div>

              <div class="shine-card relative overflow-hidden rounded-[36px] border border-white/70 bg-white/70 p-7 shadow-xl shadow-slate-200/50 backdrop-blur transition-all duration-500 hover:border-sky-300 hover:shadow-sky-500/20 sm:p-9 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">

                <div class="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-sky-300/15 blur-3xl"></div>

                <div class="relative grid gap-4 sm:grid-cols-2">

                  <div class="group rounded-2xl border border-slate-100 bg-white/80 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 dark:border-slate-700 dark:bg-slate-800/80">

                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

                      <i class="mdi mdi-brain text-3xl"></i>

                    </div>

                    <h3 class="mt-5 font-black text-slate-900 dark:text-white">Struktur dan Fungsi</h3>

                    <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">

                      Mengenali bagian sistem saraf dan perannya dalam tubuh.

                    </p>

                  </div>

                  <div class="group rounded-2xl border border-slate-100 bg-white/80 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 dark:border-slate-700 dark:bg-slate-800/80">

                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

                      <i class="mdi mdi-transit-connection-variant text-3xl"></i>

                    </div>

                    <h3 class="mt-5 font-black text-slate-900 dark:text-white">Jalur Impuls</h3>

                    <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">

                      Memahami bagaimana rangsangan diproses menjadi respons.

                    </p>

                  </div>

                  <div class="group rounded-2xl border border-slate-100 bg-white/80 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 sm:col-span-2 dark:border-slate-700 dark:bg-slate-800/80">

                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-white shadow-lg shadow-cyan-500/25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

                      <i class="mdi mdi-lightning-bolt-outline text-3xl"></i>

                    </div>

                    <h3 class="mt-5 font-black text-slate-900 dark:text-white">Gerak Sadar dan Refleks</h3>

                    <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">

                      Menghubungkan konsep dengan fenomena sehari-hari, termasuk respons terhadap benda panas.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

<!-- MEDIA & LKM -->

<section

  v-else-if="section.type === 'media'"

  :id="section.label"

  class="scroll-mt-24"

>

  <!-- SECTION HEADER -->

  <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

    <div>

      <p class="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">

        {{ section.label }}

      </p>

      <h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">

        {{ section.title }}

      </h2>

    </div>

    <p class="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">

      Beragam media mendukung eksplorasi, diskusi, dan pemahaman konsep.

      Setiap dokumen dapat ditinjau langsung atau diunduh.

    </p>

  </div>

  <!-- CONTENT GRID -->

  <div class="mt-8 grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">

    <!-- REFLECTION PANEL -->

    <article

      class="shine-card group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-300 hover:shadow-violet-500/20 sm:p-9 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"

    >

      <i

        class="mdi mdi-play-box-multiple absolute -right-4 top-0 text-[110px] text-violet-500/10 transition-all duration-500 group-hover:scale-110 group-hover:text-violet-500/20"

      ></i>

      <div class="relative z-10">

        <div

          class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"

        >

          <i class="mdi mdi-presentation text-3xl"></i>

        </div>

        <p class="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sky-500">

          Refleksi Media

        </p>

        <h3 class="mt-2 text-2xl font-black text-slate-900 dark:text-white">

          Mendukung proses eksplorasi

        </h3>

        <div class="mt-5 space-y-4 text-justify text-sm leading-8 text-slate-600 dark:text-slate-300">

          <p

            v-for="paragraph in section.paragraphs"

            :key="paragraph"

          >

            {{ paragraph }}

          </p>

        </div>

        <div class="mt-8 border-t border-slate-200 pt-5 dark:border-slate-700">

          <div class="flex items-center gap-3">

            <div

              class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 to-violet-500/10 text-sky-500"

            >

              <i class="mdi mdi-file-pdf-box text-2xl"></i>

            </div>

            <div>

              <p class="text-sm font-black text-slate-800 dark:text-white">

                {{ mediaDocuments.length }} Dokumen PDF

              </p>

              <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">

                Preview dan unduh dokumen

              </p>

            </div>

          </div>

        </div>

      </div>

    </article>

    <!-- PDF DOCUMENTS -->

    <div class="grid gap-5">

      <article

        v-for="(doc, i) in mediaDocuments"

        :key="doc.title"

        class="shine-card group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-xl shadow-slate-200/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 sm:p-5 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"

      >

        <!-- DOCUMENT HEADER -->

        <div class="mb-4 flex items-center gap-3">

          <div

            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"

          >

            <i :class="['mdi', doc.icon, 'text-2xl']"></i>

          </div>

          <div class="min-w-0 flex-1">

            <p class="text-[10px] font-black uppercase tracking-[0.18em] text-sky-500">

              Dokumen 0{{ i + 1 }} · {{ doc.category }}

            </p>

            <h3 class="mt-1 font-black text-slate-900 dark:text-white">

              {{ doc.title }}

            </h3>

            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">

              {{ doc.description }}

            </p>

          </div>

          <span

            class="rounded-lg border border-violet-200 bg-violet-50 px-2 py-1 text-[10px] font-black text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300"

          >

            PDF

          </span>

        </div>

        <!-- INLINE PDF PREVIEW -->

        <div

          class="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800"

        >

          <iframe

            :key="doc.url"
              :src="`${toFileUrl(doc.url)}#toolbar=0&navpanes=0`"

            :title="`Preview ${doc.title}`"

            class="h-[230px] w-full bg-white"

            loading="lazy"

          ></iframe>

          <div

            class="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-200/40 to-transparent dark:from-slate-900/20"

          ></div>

        </div>

        <!-- DOCUMENT ACTIONS -->

        <div class="mt-4 grid grid-cols-2 gap-2">

          <button

            type="button"

            @click="openPdf(doc)"

            class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-bold text-slate-700 transition-all duration-300 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:bg-slate-700"

          >

            <i class="mdi mdi-fullscreen text-lg"></i>

            Fullscreen

          </button>

          <a

            :href="toFileUrl(doc.url)"

            :download="doc.url.split('/').pop()"

            class="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-3 py-3 text-xs font-bold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/25"

          >

            <i class="mdi mdi-download text-lg"></i>

            Download PDF

          </a>

        </div>

      </article>

    </div>

  </div>

</section>

          <!-- VIDEO -->

          <section

            v-else-if="section.type === 'video'"

            :id="section.label"

            class="scroll-mt-24"

          >

            <div class="moving-gradient relative overflow-hidden rounded-[36px] bg-gradient-to-r from-sky-500 via-blue-600 to-violet-500 p-[1px] shadow-2xl shadow-sky-500/20">

              <div class="grid overflow-hidden rounded-[35px] bg-white/95 dark:bg-slate-900/95 lg:grid-cols-[0.9fr_1.1fr]">

                <div class="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-violet-500/20 p-8 sm:min-h-80 dark:from-sky-500/10 dark:to-violet-500/10">

                  <div class="float-slow absolute -left-10 top-0 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl"></div>

                  <div class="float-slower absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-violet-300/30 blur-3xl"></div>

                  <div class="relative text-center">

                    <div class="float-soft mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-2xl shadow-sky-500/30 transition-all duration-500 hover:scale-110">

                      <i class="mdi mdi-play text-6xl"></i>

                    </div>

                    <p class="mt-6 text-xs font-black uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">

                      Video Praktik Mengajar

                    </p>

                  </div>

                </div>

                <div class="p-7 sm:p-10">

                  <p class="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">

                    {{ section.label }}

                  </p>

                  <h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">

                    {{ section.title }}

                  </h2>

                  <div class="mt-5 space-y-4 text-justify text-sm leading-7 text-slate-600 dark:text-slate-400">

                    <p v-for="paragraph in section.paragraphs" :key="paragraph">

                      {{ paragraph }}

                    </p>

                  </div>

                  <a

                    v-if="section.url"

                    :href="section.url"

                    target="_blank"

                    rel="noopener noreferrer"

                    class="group mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/25"

                  >

                    <i class="mdi mdi-play-circle-outline text-xl transition-transform duration-300 group-hover:scale-125"></i>

                    Tonton Video

                    <i class="mdi mdi-arrow-top-right transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></i>

                  </a>

                  <p v-else class="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-slate-400">

                    <i class="mdi mdi-link-variant text-lg"></i>

                    Tautan video akan ditambahkan.

                  </p>

                </div>

              </div>

            </div>

          </section>

          <!-- NON-TEACHING GALLERY -->

          <section

            v-else-if="section.type === 'gallery'"

            :id="section.label"

            class="scroll-mt-24"

          >

            <div class="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">

              <div>

                <p class="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">

                  {{ section.label }}

                </p>

                <h2 class="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl dark:text-white">

                  {{ section.title }}

                </h2>

                <div class="mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"></div>

                <div class="mt-6 space-y-4 text-justify text-sm leading-8 text-slate-600 dark:text-slate-400">

                  <p v-for="paragraph in section.paragraphs" :key="paragraph">

                    {{ paragraph }}

                  </p>

                </div>

                <div class="shine-card group relative mt-7 overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-xl shadow-slate-200/50 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">

                  <div class="relative z-10 flex items-center gap-4">

                    <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

                      <i class="mdi mdi-camera-outline text-3xl"></i>

                    </div>

                    <div>

                      <p class="font-black text-slate-900 dark:text-white">

                        Dokumentasi Kegiatan

                      </p>

                      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">

                        {{ activityPhotos.length }} momen selama praktik sekolah

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <!-- CAROUSEL -->

              <div class="min-w-0">

                <div class="shine-card group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-3 shadow-2xl shadow-slate-200/60 backdrop-blur-xl transition-all duration-500 hover:border-sky-300 hover:shadow-sky-500/20 sm:p-4 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">

                  <div class="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-gradient-to-br from-sky-100 via-white to-violet-100 dark:from-slate-800 dark:via-slate-900 dark:to-violet-950">

                    <img

                      :key="activityPhotos[activePhoto].src"

                      :src="activityPhotos[activePhoto].src"

                      :alt="activityPhotos[activePhoto].title"

                      class="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"

                      @error="$event.target.style.display = 'none'"

                    />

                    <div class="absolute inset-0 flex flex-col items-center justify-center">

                      <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-xl shadow-sky-500/25">

                        <i class="mdi mdi-image-multiple-outline text-4xl"></i>

                      </div>

                      <p class="mt-4 text-sm font-bold text-slate-500 dark:text-slate-400">

                        Foto {{ String(activePhoto + 1).padStart(2, "0") }}

                      </p>

                    </div>

                    <div class="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-6 pt-24 text-white sm:p-8 sm:pt-28">

                      <p class="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">

                        Momen {{ String(activePhoto + 1).padStart(2, "0") }}

                      </p>

                      <h3 class="mt-2 text-2xl font-black sm:text-3xl">

                        {{ activityPhotos[activePhoto].title }}

                      </h3>

                      <p class="mt-2 max-w-lg text-sm leading-6 text-white/80">

                        {{ activityPhotos[activePhoto].caption }}

                      </p>

                    </div>

                    <button

                      type="button"

                      aria-label="Foto sebelumnya"

                      @click="previousPhoto"

                      class="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-sky-600 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-sky-500 hover:to-violet-500 hover:text-white dark:border-slate-600 dark:bg-slate-900/80"

                    >

                      <i class="mdi mdi-chevron-left text-3xl"></i>

                    </button>

                    <button

                      type="button"

                      aria-label="Foto berikutnya"

                      @click="nextPhoto"

                      class="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-sky-600 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-sky-500 hover:to-violet-500 hover:text-white dark:border-slate-600 dark:bg-slate-900/80"

                    >

                      <i class="mdi mdi-chevron-right text-3xl"></i>

                    </button>

                  </div>

                  <div class="flex items-center justify-between gap-4 px-2 pb-1 pt-4">

                    <p class="text-xs font-bold text-slate-500 dark:text-slate-400">

                      {{ String(activePhoto + 1).padStart(2, "0") }}

                      <span class="mx-1 text-slate-300">/</span>

                      {{ String(activityPhotos.length).padStart(2, "0") }}

                    </p>

                    <div class="flex items-center gap-2">

                      <button

                        v-for="(photo, photoIndex) in activityPhotos"

                        :key="photo.src"

                        type="button"

                        :aria-label="`Tampilkan ${photo.title}`"

                        @click="activePhoto = photoIndex"

                        class="h-2.5 rounded-full transition-all duration-300"

                        :class="activePhoto === photoIndex

                          ? 'w-8 bg-gradient-to-r from-sky-500 to-violet-500'

                          : 'w-2.5 bg-slate-300 hover:bg-sky-300 dark:bg-slate-700'"

                      ></button>

                    </div>

                  </div>

                </div>

                <!-- THUMBNAILS -->

                <div class="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">

                  <button

                    v-for="(photo, photoIndex) in activityPhotos"

                    :key="photo.src"

                    type="button"

                    @click="activePhoto = photoIndex"

                    :aria-label="`Tampilkan ${photo.title}`"

                    class="group/thumb relative overflow-hidden rounded-2xl border-2 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/15 dark:bg-slate-900"

                    :class="activePhoto === photoIndex

                      ? 'border-sky-400 shadow-lg shadow-sky-500/15'

                      : 'border-white/70 opacity-70 hover:border-violet-300 hover:opacity-100 dark:border-slate-700'"

                  >

                    <div class="relative aspect-square overflow-hidden bg-gradient-to-br from-sky-100 to-violet-100 dark:from-slate-800 dark:to-violet-950">

                      <img

                        :src="photo.src"

                        :alt="photo.title"

                        class="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"

                        @error="$event.target.style.visibility = 'hidden'"

                      />

                      <div class="absolute inset-0 flex items-center justify-center">

                        <i class="mdi mdi-image-outline text-2xl text-sky-500/60"></i>

                      </div>

                    </div>

                  </button>

                </div>

              </div>

            </div>

          </section>

          <!-- ASSESSMENT -->

          <section

            v-else-if="section.type === 'assessment'"

            :id="section.label"

            class="scroll-mt-24"

          >

            <div class="shine-card group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-300 hover:shadow-violet-500/15 sm:p-9 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">

              <i class="mdi mdi-clipboard-text-outline absolute -right-4 -top-3 text-[120px] text-violet-500/10 transition-all duration-500 group-hover:scale-110"></i>

              <div class="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">

                <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

                  <i class="mdi mdi-clipboard-check-outline text-3xl"></i>

                </div>

                <div class="flex-1">

                  <p class="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">

                    {{ section.label }}

                  </p>

                  <h2 class="mt-2 text-2xl font-black text-slate-900 dark:text-white">

                    {{ section.title }}

                  </h2>

                  <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">

                    {{ section.description }}

                  </p>

                </div>

                <span class="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">

                  <i class="mdi mdi-clock-outline text-base"></i>

                  Menunggu dokumen

                </span>

              </div>

            </div>

          </section>

        </template>

      </div>

      <!-- FOOTER -->

      <footer class="mt-24 border-t border-slate-200 pt-8 dark:border-slate-800">

        <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

          <div class="flex items-center gap-3">

            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20">

              <i class="mdi mdi-school-outline text-xl"></i>

            </div>

            <div>

              <p class="text-sm font-black text-slate-900 dark:text-white">

                Refleksi Praktik Pengalaman Lapangan

              </p>

              <p class="mt-1 text-xs text-slate-500">

                Topik 3 · SMP Negeri 2 Kota Serang

              </p>

            </div>

          </div>

          <button

            type="button"

            @click="window.scrollTo({ top: 0, behavior: 'smooth' })"

            class="group inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300"

          >

            Kembali ke atas

            <i class="mdi mdi-arrow-up transition-transform duration-300 group-hover:-translate-y-1"></i>

          </button>

        </div>

      </footer>

    </div>

  </section>

  <!-- GLOBAL PDF FULLSCREEN -->
  <Teleport to="body">
    <Transition name="module-modal">
      <div v-if="activePdf" class="fixed inset-0 z-[9999] flex flex-col bg-slate-950/95 p-3 backdrop-blur-xl sm:p-6" role="dialog" aria-modal="true" :aria-label="`Preview ${activePdf.title}`" @click.self="closePdf" @keydown.esc.window="closePdf">
        <div class="mb-3 flex shrink-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white">
          <div class="flex min-w-0 items-center gap-3">
            <i class="mdi mdi-file-pdf-box text-2xl text-sky-400"></i>
            <div class="min-w-0">
              <p class="truncate text-sm font-black">{{ activePdf.title }}</p>
              <p class="text-xs text-slate-400">{{ activePdf.category }} · Preview PDF</p>
            </div>
          </div>
          <div class="flex shrink-0 items-center gap-2">
            <a :href="toFileUrl(activePdf.url)" :download="activePdf.url.split('/').pop()" class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-3 py-2 text-xs font-bold text-white transition hover:brightness-110 sm:px-4">
              <i class="mdi mdi-download text-lg"></i><span class="hidden sm:inline">Download</span>
            </a>
            <button type="button" aria-label="Tutup preview" @click="closePdf" class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/15">
              <i class="mdi mdi-close text-2xl"></i>
            </button>
          </div>
        </div>
        <iframe :key="activePdf.url" :src="toFileUrl(activePdf.url)" :title="`Fullscreen ${activePdf.title}`" class="min-h-0 flex-1 rounded-2xl border border-white/10 bg-white"></iframe>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>

@keyframes floatSoft {

  0%,

  100% {

    transform: translateY(0);

  }

  50% {

    transform: translateY(-12px);

  }

}

@keyframes floatSlow {

  0%,

  100% {

    transform: translate(0, 0);

  }

  50% {

    transform: translate(18px, -16px);

  }

}

@keyframes floatSlower {

  0%,

  100% {

    transform: translate(0, 0);

  }

  50% {

    transform: translate(-18px, 14px);

  }

}

@keyframes gradientMove {

  0% {

    background-position: 0% 50%;

  }

  50% {

    background-position: 100% 50%;

  }

  100% {

    background-position: 0% 50%;

  }

}

.float-soft {

  animation: floatSoft 5s ease-in-out infinite;

}

.float-slow {

  animation: floatSlow 8s ease-in-out infinite;

}

.float-slower {

  animation: floatSlower 10s ease-in-out infinite;

}

.moving-gradient {

  background-size: 220% 220%;

  animation: gradientMove 9s ease infinite;

}

.shine-card::before {

  content: "";

  position: absolute;

  inset: 0;

  z-index: 1;

  transform: translateX(-130%) skewX(-20deg);

  background: linear-gradient(

    90deg,

    transparent,

    rgba(255, 255, 255, 0.42),

    transparent

  );

  transition: transform 0.85s ease;

  pointer-events: none;

}

.shine-card:hover::before {

  transform: translateX(130%) skewX(-20deg);

}

@media (prefers-reduced-motion: reduce) {

  .float-soft,

  .float-slow,

  .float-slower,

  .moving-gradient {

    animation: none;

  }

  .shine-card::before {

    transition: none;

  }

}

.hero-editorial {

  isolation: isolate;

}

.hero-gradient-text {

  background-image: linear-gradient(

    105deg,

    #0ea5e9 0%,

    #3b82f6 42%,

    #8b5cf6 100%

  );

  background-clip: text;

  -webkit-background-clip: text;

  color: transparent;

}

.hero-dot-pattern {

  background-image: radial-gradient(

    circle,

    rgba(59, 130, 246, 0.35) 2px,

    transparent 2.5px

  );

  background-size: 20px 20px;

}

.hero-accent-bar {

  transform-origin: left;

  animation: heroAccent 5s ease-in-out infinite alternate;

}

.hero-photo-frame {

  animation: heroPhotoFloat 7s ease-in-out infinite;

}

.hero-orbit-one {

  animation: heroOrbit 18s linear infinite;

}

.hero-orbit-two {

  animation: heroOrbitReverse 24s linear infinite;

}

.hero-float {

  animation: heroBadgeFloat 5s ease-in-out infinite;

}

.hero-float-two {

  animation-delay: -1.2s;

}

.hero-float-three {

  animation-delay: -2.5s;

}

.hero-float-four {

  animation-delay: -0.8s;

}

.hero-orb-a {

  animation: heroBadgeFloat 4s ease-in-out infinite;

}

.hero-orb-b {

  animation: heroBadgeFloat 6s ease-in-out infinite reverse;

}

.hero-orb-c {

  animation: heroBadgeFloat 5s ease-in-out infinite;

  animation-delay: -2s;

}

.hero-scroll-dot {

  animation: heroScroll 1.5s ease-in-out infinite;

}

.hero-nav-chip:focus-visible {

  outline: 2px solid #38bdf8;

  outline-offset: 4px;

}

@keyframes heroAccent {

  from {

    transform: scaleX(0.65);

  }

  to {

    transform: scaleX(1);

  }

}

@keyframes heroPhotoFloat {

  0%,

  100% {

    translate: 0 0;

  }

  50% {

    translate: 0 -7px;

  }

}

@keyframes heroOrbit {

  from {

    rotate: 0deg;

  }

  to {

    rotate: 360deg;

  }

}

@keyframes heroOrbitReverse {

  from {

    rotate: 360deg;

  }

  to {

    rotate: 0deg;

  }

}

@keyframes heroBadgeFloat {

  0%,

  100% {

    translate: 0 0;

  }

  50% {

    translate: 0 -8px;

  }

}

@keyframes heroScroll {

  0% {

    translate: 0 0;

    opacity: 1;

  }

  70% {

    translate: 0 8px;

    opacity: 0.4;

  }

  100% {

    translate: 0 0;

    opacity: 1;

  }

}

@media (prefers-reduced-motion: reduce) {

  .hero-accent-bar,

  .hero-photo-frame,

  .hero-orbit-one,

  .hero-orbit-two,

  .hero-float,

  .hero-orb-a,

  .hero-orb-b,

  .hero-orb-c,

  .hero-scroll-dot {

    animation: none !important;

  }

  .hero-photo-frame {

    rotate: 0deg;

  }

}

.module-modal-enter-active,

.module-modal-leave-active {

  transition:

    opacity 250ms ease,

    transform 250ms ease;

}

.module-modal-enter-from,

.module-modal-leave-to {

  opacity: 0;

  transform: scale(0.98);

}

@media (prefers-reduced-motion: reduce) {

  .module-modal-enter-active,

  .module-modal-leave-active {

    transition: none;

  }

}

</style>
