<template>
  <section class="relative overflow-hidden px-6 py-24">
    <div
      class="float-slow absolute left-8 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
    ></div>

    <div
      class="float-slower absolute bottom-20 right-8 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1
            class="mt-7 text-5xl font-black leading-tight text-slate-900 dark:text-white md:text-7xl"
          >
            Refleksi Belajar
            <span class="block text-sky-500"> Semester 1 & 2 </span>
          </h1>

          <p
            class="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
          >
            Sebuah perjalanan untuk memahami, bertumbuh, dan menjadi pendidik.
            Semester 1 memperkaya pemahaman tentang peserta didik, pembelajaran,
            dan berbagai kompetensi yang membentuk seorang guru.
          </p>
        </div>

        <div
          class="relative mx-auto h-[420px] w-full max-w-[500px]"
          aria-label="Kolase foto refleksi"
        >
          <div
            class="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl"
          ></div>

          <div
            class="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/70"
          ></div>

          <figure
            class="absolute left-8 top-10 z-10 h-[300px] w-[225px] -rotate-6 overflow-hidden rounded-[32px] border-8 border-white bg-slate-100 shadow-2xl shadow-sky-500/20 transition-transform duration-500 hover:-rotate-2 dark:border-slate-800 dark:bg-slate-800 md:left-12"
          >
            <img
              :src="collagePhotoOne"
              alt="Foto refleksi pertama"
              class="h-full w-full object-cover object-center"
            />
          </figure>

          <figure
            class="absolute bottom-7 right-6 z-20 h-[300px] w-[225px] rotate-6 overflow-hidden rounded-[32px] border-8 border-white bg-slate-100 shadow-2xl shadow-violet-500/20 transition-transform duration-500 hover:rotate-2 dark:border-slate-800 dark:bg-slate-800 md:right-10"
          >
            <img
              :src="collagePhotoTwo"
              alt="Foto refleksi kedua"
              class="h-full w-full object-cover object-center"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section
    id="dokumen-refleksi"
    class="relative overflow-hidden border-t border-slate-200/80 px-6 py-20 dark:border-slate-800"
  >
    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="text-center">
        <span
          class="inline-flex rounded-full bg-sky-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-sky-500/20"
        >
          Dokumen Refleksi
        </span>

        <h2
          class="mt-5 text-3xl font-black text-slate-900 dark:text-white md:text-4xl"
        >
          Refleksi
          <span class="text-sky-500">Per Semester</span>
        </h2>

        <p
          class="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400"
        >
          Kumpulan dokumen refleksi mata kuliah selama perjalanan PPG yang dapat
          dibaca langsung atau diunduh.
        </p>
      </div>

      <div
        class="mt-10 flex flex-wrap justify-center gap-4"
        role="tablist"
        aria-label="Semester refleksi"
      >
        <button
          v-for="tab in semesterTabs"
          :key="tab.id"
          type="button"
          role="tab"
          :aria-selected="activeSemester === tab.id"
          @click="activeSemester = tab.id"
          :class="[
            'inline-flex items-center gap-2 rounded-full border px-8 py-3 text-sm font-bold transition-all duration-300',
            activeSemester === tab.id
              ? 'border-transparent bg-sky-500 text-white shadow-lg shadow-sky-500/30'
              : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400',
          ]"
        >
          <i :class="tab.icon"></i>
          {{ tab.label }}
        </button>
      </div>

      <div v-if="activeSemester === 'semester-1'" class="mt-12 space-y-8">
        <article
          v-for="document in semesterOneDocuments"
          :key="document.file"
          class="group relative overflow-hidden rounded-[32px] border border-sky-200 bg-white/90 shadow-xl shadow-sky-500/10 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none dark:hover:border-sky-700"
        >
          <div class="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div class="relative overflow-hidden p-7 sm:p-9 lg:p-10">
              <div
                class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-500/5 blur-3xl"
              ></div>

              <div
                class="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-violet-500/5 blur-3xl"
              ></div>

              <div class="relative z-10">
                <span
                  class="inline-flex rounded-full bg-sky-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300"
                >
                  Semester 1
                </span>

                <h3
                  class="mt-5 text-2xl font-black leading-tight text-slate-900 dark:text-white"
                >
                  {{ document.title }}
                </h3>

                <p
                  class="mt-4 text-base font-semibold italic leading-7 text-sky-500"
                >
                  {{ document.tagline }}
                </p>

                <div class="mt-6 h-[2px] w-12 rounded-full bg-sky-500"></div>

                <div
                  class="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
                >
                  <p
                    v-for="(paragraph, index) in document.reflection"
                    :key="index"
                  >
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="border-t border-slate-200 bg-slate-50/70 p-5 dark:border-slate-700 dark:bg-slate-800/40 lg:border-l lg:border-t-0 sm:p-6"
            >
              <div class="mb-4 flex items-center gap-3">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-red-500"
                >
                  <i class="mdi mdi-file-pdf-box text-xl"></i>
                </div>

                <div>
                  <p class="text-sm font-bold text-slate-800 dark:text-white">
                    Dokumen Lengkap
                  </p>

                  <p class="text-xs text-slate-500 dark:text-slate-400">
                    Lihat dokumen refleksi secara lengkap.
                  </p>
                </div>
              </div>

              <div
                class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <iframe
                  :src="pdfUrl(document.file)"
                  :title="document.title"
                  class="h-[520px] w-full sm:h-[600px]"
                  loading="lazy"
                ></iframe>
              </div>

              <div class="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  :href="pdfUrl(document.file)"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-500/40"
                >
                  Fullscreen
                  <i class="mdi mdi-open-in-new text-base"></i>
                </a>

                <a
                  :href="pdfUrl(document.file)"
                  :download="document.downloadName"
                  class="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white px-5 py-2.5 text-xs font-bold text-sky-500 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                >
                  Download
                  <i class="mdi mdi-download text-base"></i>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div
        v-else
        class="mx-auto mt-12 max-w-3xl rounded-[24px] border border-dashed border-slate-300 bg-white/70 px-8 py-14 text-center dark:border-slate-700 dark:bg-slate-900/70"
      >
        <div
          class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500"
        >
          <i class="mdi mdi-file-document-outline text-4xl"></i>
        </div>

        <h3 class="mt-5 text-xl font-black text-slate-900 dark:text-white">
          Dokumen Semester 2 belum tersedia
        </h3>

        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Dokumen refleksi Semester 2 akan ditampilkan di sini setelah file PDF
          ditambahkan.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import collagePhotoOne from "../assets/titik2.jpg";
import collagePhotoTwo from "../assets/wisuda.png";

const activeSemester = ref("semester-1");

const semesterTabs = [
  {
    id: "semester-1",
    label: "Semester 1",
    icon: "mdi mdi-numeric-1-circle-outline",
  },
  {
    id: "semester-2",
    label: "Semester 2",
    icon: "mdi mdi-numeric-2-circle-outline",
  },
];

const semesterOneDocuments = [
  {
    title:
      "Refleksi Mata Kuliah Pemahaman tentang Peserta Didik dan Pembelajaran",
    tagline: "Understanding learners before designing learning.",
    reflection: [
      "Mata kuliah ini mengajarkan saya untuk memahami murid sebelum merancang pembelajaran. Saya belajar bahwa setiap murid memiliki karakteristik, kebutuhan, kemampuan, dan latar belakang yang berbeda, sehingga pembelajaran tidak dapat dirancang dengan pendekatan yang sama untuk semua.",
      "Pengalaman ini mengubah cara pandang saya sebagai calon guru. Pembelajaran yang baik bukan hanya tentang memahami materi dan menentukan cara mengajarnya, tetapi juga tentang memahami siapa yang akan belajar. Dari pemahaman tersebut, saya ingin menciptakan pembelajaran yang lebih inklusif, bermakna, dan berpusat pada murid.",
    ],
    file: "/pdf/sem_ref_s1_mk_ppdp.pdf",
    downloadName: "sem_ref_s1_mk_ppdp.pdf",
  },
  {
    title: "Refleksi Mata Kuliah Pembelajaran Mendalam dan Asesmen Dasar",
    tagline: "From teaching content to designing meaningful learning.",
    reflection: [
      "Mata kuliah ini mengubah cara saya melihat pembelajaran. Saya belajar bahwa pembelajaran yang mendalam bukan sekadar menyampaikan materi, tetapi merancang pengalaman belajar yang berkesadaran, bermakna, dan menggembirakan melalui proses memahami, mengaplikasikan, dan merefleksi. Saya juga belajar menyelaraskan tujuan, asesmen, dan aktivitas melalui Understanding by Design (UbD).",
      "Pengalaman ini mengubah cara pandang saya sebagai calon guru: pembelajaran yang baik perlu dirancang dari pengalaman belajar murid dan terus diperbaiki berdasarkan asesmen, refleksi, serta umpan balik. Ke depannya, saya ingin menciptakan pembelajaran IPA yang lebih kontekstual, autentik, dan memberi ruang bagi murid untuk aktif membangun pemahamannya.",
    ],
    file: "/pdf/sem_ref_s1_mk_pma.pdf",
    downloadName: "sem_ref_s1_mk_pma.pdf",
  },
  {
    title: "Refleksi Mata Kuliah Growth Mindset",
    tagline: "From “I can’t” to “I’m still learning.”",
    reflection: [
      "Mata kuliah ini mengajarkan saya bahwa kemampuan bukan sesuatu yang tetap, tetapi dapat berkembang melalui proses, usaha, strategi, dan kemauan untuk belajar dari kesalahan. Saya belajar untuk melihat tantangan bukan sebagai batasan, melainkan sebagai bagian dari proses bertumbuh.",
      "Pengalaman ini mengubah cara pandang saya sebagai calon guru. Saya tidak hanya ingin membantu murid memahami materi, tetapi juga membangun keyakinan bahwa mereka mampu berkembang. Saya ingin menciptakan pembelajaran yang memberi ruang bagi murid untuk mencoba, melakukan kesalahan, menerima umpan balik, dan terus berkembang.",
    ],
    file: "/pdf/sem_ref_s1_mk_gm.pdf",
    downloadName: "sem_ref_s1_mk_gm.pdf",
  },
  {
    title: "Refleksi Mata Kuliah Design Thinking",
    tagline: "From solving problems to understanding learners.",
    reflection: [
      "Design Thinking mengajarkan saya untuk tidak terburu-buru mencari solusi dalam pembelajaran. Saya belajar memulai dari memahami murid, menggali kebutuhan mereka melalui empati dan observasi, kemudian merancang, menguji, dan memperbaiki solusi berdasarkan umpan balik.",
      "Pengalaman ini mengubah cara pandang saya sebagai calon guru: pembelajaran yang baik bukan hanya tentang apa yang ingin saya ajarkan, tetapi tentang bagaimana murid mengalami proses belajar tersebut.",
    ],
    file: "/pdf/sem_ref_s1_mk_dt.pdf",
    downloadName: "sem_ref_s1_mk_dt.pdf",
  },
  {
    title: "Refleksi Mata Kuliah Filosofi Pendidikan",
    tagline: "From understanding education to becoming a better educator.",
    reflection: [
      "Mata kuliah ini mengubah cara pandang saya tentang makna pendidikan dan peran guru. Saya belajar bahwa pendidikan bukan sekadar menyampaikan materi, tetapi proses menuntun murid sesuai kodrat alam, kodrat zaman, potensi, dan kebutuhannya. Saya juga belajar pentingnya growth mindset, pendidikan nilai, serta keteladanan guru dalam membentuk karakter murid.",
      "Dari proses ini, saya menyadari bahwa menjadi guru berarti terus belajar, bertumbuh, dan menjaga profesionalisme. Saya ingin membawa pemahaman tersebut ke dalam praktik pembelajaran dengan membangun hubungan yang positif dengan murid, menerapkan growth mindset, mengintegrasikan nilai dalam pembelajaran, serta menjunjung tinggi kode etik guru.",
    ],
    file: "/pdf/sem_ref_s1_mk_filosofi.pdf",
    downloadName: "sem_ref_s1_mk_filosofi.pdf",
  },
];

const pdfUrl = (file) => encodeURI(file);
</script>

<style scoped>
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

.float-slow {
  animation: floatSlow 8s ease-in-out infinite;
}

.float-slower {
  animation: floatSlower 10s ease-in-out infinite;
}
</style>
  