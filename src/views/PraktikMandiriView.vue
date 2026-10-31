<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  page: {
    type: String,
    default: "praktik-mandiri",
  },
});

/* =========================================================
   STATE
========================================================= */

const activeCycleId = ref("siklus-1");
const activePdf = ref(null);

/* =========================================================
   HELPER
========================================================= */

const toFileUrl = (path) => encodeURI(path || "");

const openPdf = (document) => {
  if (!document?.url) return;
  activePdf.value = document;
};

const closePdf = () => {
  activePdf.value = null;
};

const scrollToContent = () => {
  document.getElementById("praktik-content")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

/* =========================================================
   DATA PRAKTIK MANDIRI
   Path PDF dan link video sengaja dikosongkan.
========================================================= */

const cycles = [
  {
    id: "siklus-1",
    number: "01",
    label: "Siklus 1",
    source: "UTS",
    subject: "Alat Indra Manusia",
    shortDescription:
      "Eksplorasi pengalaman belajar melalui Mystery Box, permainan edukatif, gambar, dan LKM Jelajah Pos.",

    planning: {
      title: "Produk Perencanaan Pembelajaran",
      paragraphs: [
        "Praktik mengajar mandiri Siklus 1 dilaksanakan pada materi Alat Indra Manusia kelas IX B SMP Negeri 2 Kota Serang. Pembelajaran menggunakan Deep Learning berbasis DUP untuk memahami struktur, fungsi, dan mekanisme kerja alat indra.",

        "Eksplorasi Mystery Box, permainan edukatif, gambar, dan LKM Jelajah Pos membantu peserta didik mengamati rangsangan, mengidentifikasi fungsi alat indra, dan menghubungkan hasil pengamatan dengan konsep.",

        "Rancangan memberi pilihan cara belajar dan bekerja sesuai kebutuhan peserta didik. Tujuan mengidentifikasi rangsangan, menjelaskan fungsi alat indra, serta menganalisis struktur, fungsi, dan gangguan didukung melalui eksplorasi, presentasi, dan refleksi.",
      ],

      notes: [
        {
          label: "Kekuatan",
          icon: "mdi-star-four-points-outline",
          text: "Mystery Box dan LKM Jelajah Pos mendorong rasa ingin tahu, penalaran kritis, dan keterlibatan aktif.",
        },
        {
          label: "Keterbatasan",
          icon: "mdi-chart-timeline-variant",
          text: "Beberapa pos dan ragam aktivitas membutuhkan instruksi, waktu, serta pendampingan yang tepat.",
        },
        {
          label: "Perbaikan",
          icon: "mdi-lightbulb-on-outline",
          text: "Perjelas alokasi waktu, sesuaikan bimbingan dengan kesiapan peserta didik, serta perkuat umpan balik dan refleksi.",
        },
      ],

      documents: [
        {
          title: "Modul Ajar",
          category: "PERENCANAAN",
          description: "Rancangan pembelajaran Siklus 1",
          icon: "mdi-file-document-outline",
          url: "/pdf/PRAKTIK MANDIRI/UTS/PRODUK PERENCANAAN/MA ALAT INDRA DUP.pdf",
        },
        {
          title: "PPT Pembelajaran",
          category: "MEDIA AJAR",
          description: "Presentasi pembelajaran Siklus 1",
          icon: "mdi-file-presentation-box",
          url: "/pdf/PRAKTIK MANDIRI/UTS/PRODUK PERENCANAAN/PPT ALAT INDERA.pdf",
        },
        {
          title: "Lembar Kerja Murid (LKM)",
          category: "LEMBAR KERJA",
          description: "Aktivitas eksplorasi peserta didik",
          icon: "mdi-file-document-edit-outline",
          url: "/pdf/PRAKTIK MANDIRI/UTS/PRODUK PERENCANAAN/LKM Alat Indra.pdf",
        },
      ],
    },

    implementation: {
      title: "Video Pelaksanaan",
      paragraphs: [
        "Pelaksanaan pembelajaran alat indra membangun pemahaman melalui apersepsi, eksplorasi, pengamatan, dan diskusi agar peserta didik mampu menghubungkan pengalaman sehari-hari dengan fungsi alat indra.",

        "Mystery Box, gambar, dan LKM Jelajah Pos mendukung eksplorasi konkret. Guru mengarahkan dan menguatkan konsep melalui pertanyaan pemantik, eksplorasi, serta diskusi.",
      ],
      url: "",
    },
  },

  {
    id: "siklus-2",
    number: "02",
    label: "Siklus 2",
    source: "UAS",
    subject: "Homeostasis Tubuh Manusia",
    shortDescription:
      "Memahami mekanisme tubuh dalam menjaga keseimbangan melalui fenomena dan analisis kasus sehari-hari.",

    planning: {
      title: "Produk Perencanaan Pembelajaran",
      paragraphs: [
        "Siklus 2 membahas Homeostasis Tubuh Manusia agar peserta didik memahami pentingnya homeostasis serta mekanisme pengaturan suhu tubuh, kadar gula darah, dan kadar cairan tubuh.",

        "Model Discovery Learning dan pendekatan Deep Learning digunakan melalui eksplorasi fenomena sehari-hari, analisis kasus, dan LKM. Asesmen diagnostik menjadi dasar penyesuaian bimbingan dan kompleksitas tugas.",
      ],

      notes: [
        {
          label: "Kekuatan",
          icon: "mdi-star-four-points-outline",
          text: "Fenomena berkeringat, menggigil, dan perubahan kondisi tubuh menghubungkan konsep dengan pengalaman nyata.",
        },
        {
          label: "Perbaikan",
          icon: "mdi-lightbulb-on-outline",
          text: "Selaraskan instrumen penilaian, alokasi waktu, dan instruksi LKM; siapkan juga media konkret serta cetak.",
        },
      ],

      documents: [
        {
          title: "Modul Ajar",
          category: "PERENCANAAN",
          description: "Rancangan pembelajaran Siklus 2",
          icon: "mdi-file-document-outline",
          url: "/pdf/PRAKTIK MANDIRI/UAS/SIKLUS 2/MODUL AJAR.pdf",
        },
        {
          title: "PPT Pembelajaran",
          category: "MEDIA AJAR",
          description: "Presentasi pembelajaran Siklus 2",
          icon: "mdi-file-presentation-box",
          url: "/pdf/PRAKTIK MANDIRI/UAS/SIKLUS 2/PPT HOMEOSTATIS.pdf",
        },
        {
          title: "Lembar Kerja Murid (LKM)",
          category: "LEMBAR KERJA",
          description: "Aktivitas analisis peserta didik",
          icon: "mdi-file-document-edit-outline",
          url: "/pdf/PRAKTIK MANDIRI/UAS/SIKLUS 2/LKM HOMEOSTATIS.pdf",
        },
      ],
    },

    implementation: {
      title: "Video Pelaksanaan",
      paragraphs: [
        "Pelaksanaan tidak sepenuhnya mengikuti modul karena post-test diberikan berdasarkan kesepakatan kelas ketika peserta didik membuat kegaduhan. Penyesuaian ini dilakukan untuk mengondisikan peserta didik agar kembali fokus.",

        "LKM, gambar, dan bahan tayang membantu analisis homeostasis. Post-test tetap perlu dijaga fungsinya sebagai alat ukur pemahaman sekaligus evaluasi belajar.",
      ],
      url: "",
    },
  },

  {
    id: "siklus-3",
    number: "03",
    label: "Siklus 3",
    source: "UAS",
    subject: "Zat Aditif",
    shortDescription:
      "Menghubungkan konsep IPA dengan makanan khas dan pengalaman budaya lokal Banten.",

    planning: {
      title: "Produk Perencanaan Pembelajaran",
      paragraphs: [
        "Siklus 3 pada materi Zat Aditif kelas IX B menggunakan Deep Learning berbasis Culturally Responsive Teaching (CRT) dengan menghubungkan konsep IPA dan budaya lokal Banten.",

        "Peserta didik mengamati makanan khas Banten, mengumpulkan informasi, mengidentifikasi bahan, dan mengklasifikasikan zat aditif berdasarkan asal serta fungsinya melalui LKM, diskusi, dan presentasi.",

        "Konteks lokal menjadikan pembelajaran bermakna serta memberi ruang peserta didik untuk berbagi pengetahuan dari keluarga dan lingkungan.",
      ],

      notes: [
        {
          label: "Kekuatan",
          icon: "mdi-star-four-points-outline",
          text: "Pembelajaran kontekstual mendukung penalaran kritis dan kolaborasi.",
        },
        {
          label: "Perbaikan",
          icon: "mdi-lightbulb-on-outline",
          text: "Perjelas panduan LKM, sesuaikan waktu, sediakan sumber informasi alternatif, dan bedakan bahan utama dengan zat aditif secara tepat.",
        },
      ],

      documents: [
        {
          title: "Modul Ajar",
          category: "PERENCANAAN",
          description: "Rancangan pembelajaran Siklus 3",
          icon: "mdi-file-document-outline",
          url: "/pdf/PRAKTIK MANDIRI/UAS/SIKLUS 3/MA DEEP LEARNING CRT.pdf",
        },
        {
          title: "PPT Pembelajaran",
          category: "MEDIA AJAR",
          description: "Presentasi pembelajaran Siklus 3",
          icon: "mdi-file-presentation-box",
          url: "/pdf/PRAKTIK MANDIRI/UAS/SIKLUS 3/Zat Aditif dan Zat Adiktif.pdf",
        },
        {
          title: "Lembar Kerja Murid (LKM)",
          category: "LEMBAR KERJA",
          description: "Aktivitas eksplorasi peserta didik",
          icon: "mdi-file-document-edit-outline",
          url: "/pdf/PRAKTIK MANDIRI/UAS/SIKLUS 3/LKM_dan_LK_Wawancara_Zat_Aditif.pdf",
        },
      ],
    },

    implementation: {
      title: "Video Pelaksanaan",
      paragraphs: [
        "Pembelajaran dimulai melalui apersepsi tentang es teh dan pengamatan makanan khas Banten, lalu dilanjutkan identifikasi bahan, analisis informasi, diskusi, dan presentasi.",

        "PPT, gambar makanan khas Banten, dan LKM membantu peserta didik mengaitkan pengalaman nyata dengan konsep zat aditif.",
      ],
      url: "",
    },
  },

  {
    id: "siklus-4",
    number: "04",
    label: "Siklus 4",
    source: "UAS",
    subject: "Sistem Reproduksi Manusia",
    shortDescription:
      "Pembelajaran diferensiatif melalui TaRL dan eksplorasi konsep menggunakan media Augmented Reality.",

    planning: {
      title: "Produk Perencanaan Pembelajaran",
      paragraphs: [
        "Siklus 4 membahas Sistem Reproduksi Manusia dengan model Discovery Learning dan Deep Learning berbasis Teaching at the Right Level (TaRL). Tujuannya mengidentifikasi organ, menentukan alur sperma dan ovum, serta menganalisis hubungan struktur dan fungsi.",

        "PPT, LKM, gambar anatomi, dan model tiga dimensi berbasis Augmented Reality (AR) mendukung pengamatan, pengumpulan informasi, diskusi, pengolahan data, dan presentasi.",

        "TaRL diterapkan melalui kelompok Gamet, Fertilisasi, dan Zigot berdasarkan asesmen awal. Aktivitas dan pendampingan disesuaikan dengan kebutuhan tanpa memberi label kemampuan secara langsung.",
      ],

      notes: [
        {
          label: "Kekuatan",
          icon: "mdi-star-four-points-outline",
          text: "Integrasi TaRL dan AR membuat pembelajaran lebih konkret, interaktif, serta mendukung penalaran kritis, kolaborasi, dan komunikasi.",
        },
        {
          label: "Perbaikan",
          icon: "mdi-lightbulb-on-outline",
          text: "Pastikan tautan/QR AR dapat diakses, demonstrasikan penggunaannya, perjelas LKM, optimalkan pendampingan, dan atur waktu pengamatan hingga presentasi.",
        },
      ],

      documents: [
        {
          title: "Modul Ajar",
          category: "PERENCANAAN",
          description: "Rancangan pembelajaran Siklus 4",
          icon: "mdi-file-document-outline",
          url: "/pdf/PRAKTIK MANDIRI/UAS/SIKLUS 4/MODUL AJAR.pdf",
        },
        {
          title: "PPT Pembelajaran",
          category: "MEDIA AJAR",
          description: "Presentasi pembelajaran Siklus 4",
          icon: "mdi-file-presentation-box",
          url: "/pdf/PRAKTIK MANDIRI/UAS/SIKLUS 4/PPT.pdf",
        },
        {
          title: "Lembar Kerja Murid (LKM)",
          category: "LEMBAR KERJA",
          description: "Aktivitas pembelajaran berbasis TaRL",
          icon: "mdi-file-document-edit-outline",
          url: "/pdf/PRAKTIK MANDIRI/UAS/SIKLUS 4/LKM Sistem Reproduksi (1).pdf",
        },
      ],
    },

    implementation: {
      title: "Video Pelaksanaan",
      paragraphs: [
        "Pembelajaran diawali dengan apersepsi asal-usul manusia dan pengenalan sistem reproduksi. Peserta didik mengamati gambar anatomi serta mengeksplorasi model AR.",

        "Melalui TaRL, peserta didik mengerjakan LKM sesuai kebutuhan, menganalisis struktur dan fungsi organ, lalu mempresentasikan hasil diskusi. Pemerataan partisipasi kelompok tetap perlu diperhatikan.",
      ],
      url: "",
    },
  },
];

/* =========================================================
   COMPUTED
========================================================= */

const currentCycle = computed(
  () =>
    cycles.find((cycle) => cycle.id === activeCycleId.value) ??
    cycles[0],
);

const totalDocuments = computed(
  () => currentCycle.value.planning.documents.length,
);

const hasPdf = (document) => Boolean(document?.url);

const hasVideo = computed(
  () => Boolean(currentCycle.value.implementation.url),
);

/* =========================================================
   ACTIONS
========================================================= */

const selectCycle = (cycleId) => {
  activeCycleId.value = cycleId;

  window.setTimeout(() => {
    scrollToContent();
  }, 100);
};
</script>

<template>
  <section
    class="relative min-h-screen overflow-hidden bg-slate-50 px-5 pb-24 pt-24 text-slate-800 sm:px-8 lg:px-6 lg:pt-32 dark:bg-slate-950 dark:text-slate-100">
    <!-- BACKGROUND -->
    <div class="float-slow pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl">
    </div>

    <div
      class="float-slower pointer-events-none absolute right-0 top-[500px] h-80 w-80 rounded-full bg-violet-300/20 blur-3xl">
    </div>

    <div
      class="float-slow pointer-events-none absolute bottom-40 left-1/3 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl">
    </div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- =====================================================
     HERO
====================================================== -->
      <header
        class="hero-editorial relative isolate grid items-center gap-10 overflow-hidden rounded-[36px] border border-white/70 bg-white/65 px-6 py-10 shadow-2xl shadow-sky-500/10 backdrop-blur-xl sm:px-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:py-14 dark:border-slate-700/70 dark:bg-slate-900/60 dark:shadow-sky-950/20">
        <!-- BACKGROUND EFFECT -->
        <div
          class="pointer-events-none absolute -left-24 -top-28 -z-10 h-72 w-72 rounded-full bg-sky-300/25 blur-[90px]">
        </div>

        <div
          class="pointer-events-none absolute -bottom-32 right-0 -z-10 h-80 w-80 rounded-full bg-violet-400/20 blur-[100px]">
        </div>

        <div
          class="hero-dot-pattern pointer-events-none absolute right-8 top-8 -z-10 hidden h-28 w-28 opacity-50 sm:block">
        </div>

        <!-- LEFT -->
        <div class="relative z-10 min-w-0">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-4 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-sky-600 shadow-lg shadow-sky-500/10 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80 dark:text-sky-300">
            <i class="mdi mdi-school-outline text-lg"></i>
            PPL Semester 2
          </span>

          <h1
            class="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl dark:text-white">
            Praktik
            <span class="hero-gradient-text mt-2 block pb-1">
              Mandiri.
            </span>
          </h1>

          <p class="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-400">
            Dokumentasi perjalanan praktik mengajar melalui empat siklus
            pembelajaran. Setiap siklus merekam proses perencanaan,
            pelaksanaan, refleksi, serta perkembangan dalam menciptakan
            pengalaman belajar yang bermakna bagi peserta didik.
          </p>

          <div class="mt-6 h-1.5 w-36 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700">
            <div
              class="hero-accent-bar h-full w-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500">
            </div>
          </div>

          <button type="button" @click="scrollToContent"
            class="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/25">
            Jelajahi Perjalanan

            <i class="mdi mdi-arrow-down text-lg transition-transform duration-300 group-hover:translate-y-1"></i>
          </button>
        </div>

        <!-- RIGHT / HERO VISUAL -->
        <div class="relative mx-auto flex h-[390px] w-full max-w-[480px] items-center justify-center sm:h-[440px]">

          <!-- GLOW -->
          <div
            class="hero-glow-one pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 blur-[80px]">
          </div>

          <div
            class="hero-glow-two pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-[70px]">
          </div>

          <!-- ORBIT -->
          <div
            class="hero-orbit-one pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-300/70 dark:border-sky-500/20 sm:h-[390px] sm:w-[390px]">
          </div>

          <div
            class="hero-orbit-two pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/70 dark:border-violet-500/20 sm:h-[300px] sm:w-[300px]">
          </div>

          <!-- MAIN PHOTO -->
          <div
            class="hero-photo-frame group relative z-10 h-[260px] w-[210px] overflow-hidden rounded-[32px] border-4 border-white bg-gradient-to-br from-sky-500 via-blue-500 to-violet-500 p-1.5 shadow-2xl shadow-sky-500/25 sm:h-[320px] sm:w-[255px] dark:border-slate-800">
            <!-- FOTO -->
            <img v-if="heroImage" :src="heroImage" alt="Dokumentasi Praktik Mandiri"
              class="h-full w-full rounded-[26px] object-cover transition-transform duration-700 group-hover:scale-105" />

            <!-- FALLBACK SEBELUM FOTO DIISI -->
            <div v-else
              class="flex h-full w-full flex-col items-center justify-center rounded-[26px] bg-gradient-to-br from-sky-500 via-blue-500 to-violet-500 text-center text-white">
              <div
                class="flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/20 bg-white/10 backdrop-blur">
                <i class="mdi mdi-school-outline text-5xl"></i>
              </div>

              <p class="mt-5 text-xs font-black uppercase tracking-[0.2em]">
                Praktik Mandiri
              </p>

              <span class="mt-2 text-xs text-white/70">
                Dokumentasi Perjalanan
              </span>
            </div>

            <!-- PHOTO OVERLAY -->
            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/50 to-transparent">
            </div>
          </div>

          <!-- FLOATING CYCLE BADGES -->
          <button v-for="cycle in cycles" :key="cycle.id" type="button" @click="selectCycle(cycle.id)"
            class="hero-float absolute z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-white/90 text-sm font-black text-sky-600 shadow-xl shadow-sky-500/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-sky-300 hover:text-violet-500 dark:border-slate-700 dark:bg-slate-900/90 dark:text-sky-300"
            :class="{
              'left-0 top-8 sm:left-2 sm:top-10': cycle.number === '01',
              'right-0 top-12 sm:right-2 sm:top-16 hero-float-two': cycle.number === '02',
              'bottom-12 left-1 sm:left-5 hero-float-three': cycle.number === '03',
              'bottom-8 right-0 sm:right-4 hero-float-four': cycle.number === '04',
            }" :aria-label="`Pilih ${cycle.label}`">
            {{ cycle.number }}
          </button>

          <!-- INFO CHIP -->
          <div
            class="absolute bottom-0 left-1/2 z-20 flex w-max max-w-[90%] -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-center text-xs font-bold text-slate-600 shadow-lg shadow-sky-500/10 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
            <i class="mdi mdi-chart-timeline-variant text-lg text-violet-500"></i>
            Empat siklus dalam satu perjalanan pembelajaran
          </div>
        </div>
      </header>

      <!-- =====================================================
           CYCLE NAVIGATION
      ====================================================== -->
      <section id="praktik-content" class="scroll-mt-24 mt-16 lg:mt-20">
        <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.25em] text-sky-500">
              Perjalanan Pembelajaran
            </p>

            <h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl dark:text-white">
              Pilih satu siklus untuk
              <span class="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
                dieksplorasi.
              </span>
            </h2>
          </div>

          <p class="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
            Setiap siklus menampilkan proses perencanaan, dokumen pendukung,
            serta refleksi pelaksanaan pembelajaran.
          </p>
        </div>

        <!-- DESKTOP / MOBILE TAB -->
        <div class="mt-8 overflow-x-auto pb-3">
          <div class="flex min-w-max gap-3">
            <button v-for="cycle in cycles" :key="cycle.id" type="button" @click="selectCycle(cycle.id)"
              class="cycle-tab group relative min-w-[210px] overflow-hidden rounded-[24px] border p-4 text-left transition-all duration-500"
              :class="activeCycleId === cycle.id
                ? 'border-transparent bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-xl shadow-sky-500/25'
                : 'border-white/70 bg-white/75 text-slate-700 shadow-lg shadow-slate-200/30 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/10 dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-200 dark:shadow-none'
                ">
              <div class="flex items-start justify-between gap-4">
                <span
                  class="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black transition-transform duration-300 group-hover:scale-110"
                  :class="activeCycleId === cycle.id
                    ? 'bg-white/20 text-white'
                    : 'bg-sky-500/10 text-sky-500'
                    ">
                  {{ cycle.number }}
                </span>

                <span class="rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider" :class="activeCycleId === cycle.id
                  ? 'bg-white/15 text-white'
                  : 'bg-violet-500/10 text-violet-500'
                  ">
                  {{ cycle.source }}
                </span>
              </div>

              <p class="mt-4 text-sm font-black">
                {{ cycle.label }}
              </p>

              <p class="mt-1 text-xs leading-5" :class="activeCycleId === cycle.id
                ? 'text-white/75'
                : 'text-slate-500 dark:text-slate-400'
                ">
                {{ cycle.subject }}
              </p>
            </button>
          </div>
        </div>

        <!-- =====================================================
             ACTIVE CYCLE HEADER
        ====================================================== -->
        <Transition name="cycle-content" mode="out-in">
          <div :key="currentCycle.id" class="mt-10">
            <div
              class="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-7 shadow-xl shadow-sky-500/5 backdrop-blur-xl sm:p-9 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
              <div
                class="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-violet-400/10 blur-3xl">
              </div>

              <div class="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div class="max-w-3xl">
                  <div class="flex flex-wrap items-center gap-3">
                    <span
                      class="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">
                      <i class="mdi mdi-book-open-page-variant-outline"></i>
                      {{ currentCycle.label }}
                    </span>

                    <span class="text-xs font-bold text-violet-500">
                      {{ currentCycle.source }}
                    </span>
                  </div>

                  <h2 class="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-5xl dark:text-white">
                    {{ currentCycle.subject }}
                  </h2>

                  <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                    {{ currentCycle.shortDescription }}
                  </p>
                </div>

                <div
                  class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-2xl font-black text-white shadow-lg shadow-sky-500/25">
                  {{ currentCycle.number }}
                </div>
              </div>
            </div>

            <!-- =================================================
                 MAIN CONTENT
            ================================================== -->
            <div class="mt-8 grid items-start gap-8 xl:grid-cols-[1.1fr_0.9fr]">
              <!-- PLANNING -->
              <article
                class="shine-card group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-7 shadow-xl shadow-slate-200/40 backdrop-blur-xl transition-all duration-500 hover:border-sky-300 hover:shadow-sky-500/15 sm:p-9 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">
                <i
                  class="mdi mdi-file-document-multiple-outline pointer-events-none absolute -right-5 -top-5 text-[130px] text-sky-500/10 transition-transform duration-500 group-hover:scale-110"></i>

                <div class="relative z-10">
                  <div class="flex items-center gap-4">
                    <div
                      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/25">
                      <i class="mdi mdi-notebook-edit-outline text-3xl"></i>
                    </div>

                    <div>
                      <p class="text-xs font-bold uppercase tracking-[0.2em] text-sky-500">
                        Perencanaan
                      </p>

                      <h3 class="mt-1 text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
                        {{ currentCycle.planning.title }}
                      </h3>
                    </div>
                  </div>

                  <!-- REFLECTION TEXT -->
                  <div class="mt-7 space-y-4 text-justify text-sm leading-8 text-slate-600 dark:text-slate-300">
                    <p v-for="paragraph in currentCycle.planning.paragraphs" :key="paragraph">
                      {{ paragraph }}
                    </p>
                  </div>

                  <!-- NOTES -->
                  <div v-if="currentCycle.planning.notes.length"
                    class="mt-9 border-t border-slate-200 pt-7 dark:border-slate-700">
                    <p class="text-xs font-bold uppercase tracking-[0.2em] text-violet-500">
                      Catatan Reflektif
                    </p>

                    <div class="mt-5 grid gap-3" :class="currentCycle.planning.notes.length === 3
                      ? 'sm:grid-cols-3'
                      : 'sm:grid-cols-2'
                      ">
                      <div v-for="(note, index) in currentCycle.planning.notes" :key="note.label"
                        class="group/note relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 dark:border-slate-700 dark:bg-slate-800/80">
                        <span class="absolute right-3 top-2 text-3xl font-black text-slate-200/70 dark:text-slate-700">
                          0{{ index + 1 }}
                        </span>

                        <i :class="[note.icon, 'relative z-10 text-xl text-sky-500']"></i>

                        <p class="relative z-10 mt-3 text-[10px] font-black uppercase tracking-wider text-violet-500">
                          {{ note.label }}
                        </p>

                        <p
                          class="relative z-10 mt-2 text-xs font-semibold leading-6 text-slate-600 dark:text-slate-300">
                          {{ note.text }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <!-- IMPLEMENTATION -->
              <aside class="space-y-6">
                <article
                  class="shine-card group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl transition-all duration-500 hover:border-violet-300 hover:shadow-violet-500/15 sm:p-7 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">
                  <i
                    class="mdi mdi-play-circle-outline pointer-events-none absolute -right-4 -top-4 text-[120px] text-violet-500/10 transition-transform duration-500 group-hover:scale-110"></i>

                  <div class="relative z-10">
                    <div class="flex items-center gap-4">
                      <div
                        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-white shadow-lg shadow-violet-500/20">
                        <i class="mdi mdi-video-outline text-3xl"></i>
                      </div>

                      <div>
                        <p class="text-xs font-bold uppercase tracking-[0.2em] text-violet-500">
                          Pelaksanaan
                        </p>

                        <h3 class="mt-1 text-xl font-black text-slate-900 dark:text-white">
                          {{ currentCycle.implementation.title }}
                        </h3>
                      </div>
                    </div>

                    <!-- VIDEO AREA -->
                    <div
                      class="mt-6 flex min-h-[180px] flex-col items-center justify-center rounded-[24px] border border-dashed border-violet-200 bg-gradient-to-br from-violet-50 via-white to-sky-50 p-6 text-center dark:border-violet-500/20 dark:from-violet-950/30 dark:via-slate-900 dark:to-sky-950/30">
                      <div
                        class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-white shadow-lg shadow-violet-500/20">
                        <i :class="hasVideo
                          ? 'mdi mdi-play text-3xl'
                          : 'mdi mdi-video-outline text-3xl'
                          "></i>
                      </div>

                      <template v-if="hasVideo">
                        <p class="mt-4 text-sm font-black text-slate-800 dark:text-white">
                          Video Pembelajaran Tersedia
                        </p>

                        <a :href="currentCycle.implementation.url" target="_blank" rel="noopener noreferrer"
                          class="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-3 text-xs font-black text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1">
                          Tonton Video
                          <i class="mdi mdi-arrow-top-right"></i>
                        </a>
                      </template>

                      <template v-else>
                        <p class="mt-4 text-sm font-black text-slate-700 dark:text-slate-200">
                          Video akan ditambahkan
                        </p>

                        <p class="mt-2 max-w-xs text-xs leading-6 text-slate-500 dark:text-slate-400">
                          Tautan video pelaksanaan dapat kamu masukkan pada
                          data Siklus {{ currentCycle.number }}.
                        </p>
                      </template>
                    </div>

                    <div class="mt-6 space-y-4 text-justify text-sm leading-8 text-slate-600 dark:text-slate-300">
                      <p v-for="paragraph in currentCycle.implementation.paragraphs" :key="paragraph">
                        {{ paragraph }}
                      </p>
                    </div>
                  </div>
                </article>

                <!-- JOURNEY INDICATOR -->
                <div
                  class="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 p-5 shadow-lg shadow-slate-200/30 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
                  <div
                    class="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl">
                  </div>

                  <div class="relative z-10">
                    <div class="flex items-center justify-between">
                      <p class="text-[10px] font-black uppercase tracking-[0.18em] text-sky-500">
                        Progress Perjalanan
                      </p>

                      <span class="text-xs font-black text-violet-500">
                        {{ currentCycle.number }}/04
                      </span>
                    </div>

                    <div class="mt-4 flex gap-2">
                      <button v-for="cycle in cycles" :key="cycle.id" type="button" @click="selectCycle(cycle.id)"
                        class="h-2 flex-1 rounded-full transition-all duration-500" :class="cycle.id === currentCycle.id
                          ? 'bg-gradient-to-r from-sky-500 to-violet-500'
                          : 'bg-slate-200 hover:bg-sky-200 dark:bg-slate-700 dark:hover:bg-slate-600'
                          " :aria-label="`Pilih ${cycle.label}`"></button>
                    </div>

                    <p class="mt-4 text-xs leading-6 text-slate-500 dark:text-slate-400">
                      Setiap siklus menjadi bagian dari proses belajar,
                      refleksi, dan pengembangan praktik pembelajaran.
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            <!-- =================================================
                 DOCUMENTS
            ================================================== -->
            <section class="mt-8">
              <!-- SECTION HEADER -->
              <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p class="text-xs font-bold uppercase tracking-[0.2em] text-sky-500">
                    Dokumen Pendukung
                  </p>

                  <h3 class="mt-2 text-2xl font-black text-slate-900 dark:text-white">
                    Perangkat Pembelajaran
                  </h3>
                </div>

                <p class="text-sm text-slate-500 dark:text-slate-400">
                  {{ totalDocuments }} dokumen tersedia untuk Siklus
                  {{ currentCycle.number }}.
                </p>
              </div>

              <!-- DOCUMENT LIST -->
              <div class="mt-6 space-y-6">
                <article v-for="(document, index) in currentCycle.planning.documents" :key="document.title"
                  class="shine-card group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-xl shadow-slate-200/40 backdrop-blur-xl transition-all duration-500 hover:border-sky-300 hover:shadow-sky-500/20 sm:p-7 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">
                  <!-- Decorative background icon -->
                  <i :class="[
                    document.icon,
                    'absolute -right-6 -top-6 text-[150px] text-sky-500/[0.04] transition-transform duration-500 group-hover:scale-110',
                  ]"></i>

                  <div class="relative z-10">
                    <!-- DOCUMENT HEADER -->
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-4">
                        <div
                          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
                          <i :class="[document.icon, 'text-3xl']"></i>
                        </div>

                        <div class="min-w-0">
                          <p class="text-[10px] font-black uppercase tracking-[0.18em] text-sky-500 sm:text-xs">
                            Dokumen 0{{ index + 1 }} · {{ document.category }}
                          </p>

                          <h4 class="mt-1 truncate text-lg font-black text-slate-900 sm:text-xl dark:text-white">
                            {{ document.title }}
                          </h4>

                          <p class="mt-1 text-xs leading-6 text-slate-500 sm:text-sm dark:text-slate-400">
                            {{ document.description }}
                          </p>
                        </div>
                      </div>

                      <span v-if="hasPdf(document)"
                        class="shrink-0 rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-violet-600 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300">
                        PDF
                      </span>
                    </div>

                    <!-- PDF PREVIEW -->
                    <div v-if="hasPdf(document)"
                      class="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner dark:border-slate-700 dark:bg-slate-800">
                      <iframe :src="toFileUrl(document.url)" class="h-[300px] w-full sm:h-[420px]"
                        :title="`Preview ${document.title}`"></iframe>
                    </div>

                    <!-- EMPTY STATE -->
                    <div v-else
                      class="mt-6 flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-6 text-center dark:border-slate-700 dark:bg-slate-800/50">
                      <div
                        class="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800">
                        <i class="mdi mdi-file-clock-outline text-3xl"></i>
                      </div>

                      <p class="mt-4 text-sm font-bold text-slate-500 dark:text-slate-400">
                        Dokumen belum tersedia
                      </p>

                      <p class="mt-1 text-xs text-slate-400">
                        Path dokumen akan ditambahkan kemudian.
                      </p>
                    </div>

                    <!-- ACTION BUTTONS -->
                    <div v-if="hasPdf(document)" class="mt-5 grid gap-3 sm:grid-cols-[1fr_1.1fr]">
                      <button type="button" @click="openPdf(document)"
                        class="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 hover:shadow-lg hover:shadow-sky-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        <i class="mdi mdi-fullscreen text-lg"></i>
                        Fullscreen
                      </button>

                      <a :href="toFileUrl(document.url)" :download="document.url.split('/').pop()"
                        class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-4 text-sm font-black text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/25">
                        <i class="mdi mdi-download text-lg"></i>
                        Download PDF
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <!-- NEXT / PREVIOUS CYCLE -->
            <div
              class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row dark:border-slate-800">
              <p class="text-center text-sm text-slate-500 sm:text-left dark:text-slate-400">
                Jelajahi siklus lainnya untuk melihat perkembangan praktik
                pembelajaran.
              </p>

              <div class="flex gap-2">
                <button type="button" @click="
                  selectCycle(
                    cycles[
                      Math.max(
                        0,
                        cycles.findIndex(
                          (cycle) => cycle.id === currentCycle.id,
                        ) - 1,
                      )
                    ].id,
                  )
                  " :disabled="currentCycle.id === cycles[0].id"
                  class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:border-sky-300 hover:text-sky-500 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  aria-label="Siklus sebelumnya">
                  <i class="mdi mdi-arrow-left"></i>
                </button>

                <button type="button" @click="
                  selectCycle(
                    cycles[
                      Math.min(
                        cycles.length - 1,
                        cycles.findIndex(
                          (cycle) => cycle.id === currentCycle.id,
                        ) + 1,
                      )
                    ].id,
                  )
                  " :disabled="currentCycle.id === cycles[cycles.length - 1].id
                    "
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Siklus berikutnya">
                  <i class="mdi mdi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </section>
    </div>

    <!-- =====================================================
         GLOBAL PDF FULLSCREEN
    ====================================================== -->
    <Teleport to="body">
      <Transition name="pdf-modal">
        <div v-if="activePdf" class="fixed inset-0 z-[9999] flex flex-col bg-slate-950/95 p-3 backdrop-blur-xl sm:p-6"
          role="dialog" aria-modal="true" :aria-label="`Preview ${activePdf.title}`" @keydown.esc.window="closePdf">
          <div
            class="mb-3 flex shrink-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white">
            <div class="flex min-w-0 items-center gap-3">
              <i class="mdi mdi-file-pdf-box text-2xl text-sky-400"></i>

              <div class="min-w-0">
                <p class="truncate text-sm font-black">
                  {{ activePdf.title }}
                </p>

                <p class="text-xs text-slate-400">
                  {{ activePdf.category }} · Preview PDF
                </p>
              </div>
            </div>

            <div class="flex shrink-0 items-center gap-2">
              <a :href="toFileUrl(activePdf.url)" :download="activePdf.url.split('/').pop()"
                class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-3 py-2 text-xs font-bold text-white transition hover:brightness-110 sm:px-4">
                <i class="mdi mdi-download text-lg"></i>
                <span class="hidden sm:inline">Download</span>
              </a>

              <button type="button" aria-label="Tutup preview" @click="closePdf"
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/15">
                <i class="mdi mdi-close text-2xl"></i>
              </button>
            </div>
          </div>

          <iframe :key="activePdf.url" :src="toFileUrl(activePdf.url)" :title="`Fullscreen ${activePdf.title}`"
            class="min-h-0 flex-1 rounded-2xl border border-white/10 bg-white"></iframe>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* =========================================================
   BACKGROUND MOTION
========================================================= */

.float-slow {
  animation: floatSlow 12s ease-in-out infinite;
}

.float-slower {
  animation: floatSlow 16s ease-in-out infinite reverse;
}

.float-soft {
  animation: floatSoft 5s ease-in-out infinite;
}

@keyframes floatSlow {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(18px, -24px, 0);
  }
}

@keyframes floatSoft {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

/* =========================================================
   HERO
========================================================= */

.hero-gradient-text {
  background: linear-gradient(90deg,
      rgb(14 165 233),
      rgb(59 130 246),
      rgb(139 92 246));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-accent-bar {
  animation: accentMove 4s ease-in-out infinite;
}

@keyframes accentMove {

  0%,
  100% {
    transform: translateX(-12%);
  }

  50% {
    transform: translateX(12%);
  }
}

/* =========================================================
   CARD SHINE EFFECT
========================================================= */

.shine-card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.45) 45%,
      transparent 70%);
  transform: translateX(-130%);
  transition: transform 800ms ease;
}

.shine-card:hover::before {
  transform: translateX(130%);
}

/* =========================================================
   CYCLE TRANSITION
========================================================= */

.cycle-content-enter-active,
.cycle-content-leave-active {
  transition:
    opacity 280ms ease,
    transform 280ms ease;
}

.cycle-content-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.cycle-content-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* =========================================================
   PDF MODAL
========================================================= */

.pdf-modal-enter-active,
.pdf-modal-leave-active {
  transition:
    opacity 250ms ease,
    transform 250ms ease;
}

.pdf-modal-enter-from,
.pdf-modal-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

@media (prefers-reduced-motion: reduce) {

  .float-slow,
  .float-slower,
  .float-soft,
  .hero-accent-bar {
    animation: none;
  }

  .cycle-content-enter-active,
  .cycle-content-leave-active,
  .pdf-modal-enter-active,
  .pdf-modal-leave-active {
    transition: none;
  }
}
</style>