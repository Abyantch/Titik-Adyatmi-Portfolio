<template>
  <section class="relative overflow-hidden px-6 pb-20 pt-24">
    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="text-center">
        <h1
          class="mt-8 text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white md:text-6xl"
        >
          Artefak Pembelajaran
          <br />
          <span class="text-sky-500">Semester 1 & 2</span>
        </h1>

        <p
          class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
        >
          Dokumentasi terstruktur yang mencakup hasil observasi, perangkat
          pembelajaran, dan evaluasi praktik mengajar selama masa pendidikan
          profesi.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <div
          class="group flex items-center gap-5 rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white"
          >
            <i class="mdi mdi-school-outline text-3xl"></i>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400"
            >
              Sekolah Mitra
            </p>

            <h3
              class="mt-2 text-lg font-bold text-slate-800 dark:text-white"
            >
              SMPN 2 Kota Serang
            </h3>
          </div>
        </div>

        <div
          class="group flex items-center gap-5 rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white"
          >
            <i class="mdi mdi-flask-outline text-3xl"></i>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400"
            >
              Mata Pelajaran
            </p>

            <h3
              class="mt-2 text-lg font-bold text-slate-800 dark:text-white"
            >
              Ilmu Pengetahuan Alam
            </h3>
          </div>
        </div>

        <div
          class="group flex items-center gap-5 rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white"
          >
            <i class="mdi mdi-account-tie-outline text-3xl"></i>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400"
            >
              Penyusun
            </p>

            <h3
              class="mt-2 text-lg font-bold text-slate-800 dark:text-white"
            >
              Titiek Triadyatmi, S.Pd
            </h3>
          </div>
        </div>
      </div>

      <div class="mt-20 border-t-2 border-dashed border-slate-300/80"></div>
    </div>
  </section>

  <section
    id="dokumen-artefak"
    class="relative overflow-hidden border-t border-slate-200/80 px-6 py-20 dark:border-slate-800"
  >
    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="text-center">
        <span
          class="inline-flex rounded-full bg-sky-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-sky-500/20"
        >
          Dokumen Artefak
        </span>

        <h2
          class="mt-5 text-3xl font-black text-slate-900 dark:text-white md:text-4xl"
        >
          Artefak
          <span class="text-sky-500">Per Semester</span>
        </h2>

        <p
          class="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400"
        >
          Kumpulan artefak pembelajaran dari berbagai mata kuliah selama
          perjalanan PPG.
        </p>
      </div>

      <div class="mt-10 flex justify-center">
        <div
          class="inline-flex rounded-full border border-slate-200 bg-white/80 p-1.5 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
          role="tablist"
          aria-label="Semester"
        >
          <button
            v-for="semester in semesterTabs"
            :key="semester.id"
            type="button"
            role="tab"
            :aria-selected="activeSemester === semester.id"
            @click="setSemester(semester.id)"
            :class="[
              'rounded-full px-7 py-3 text-sm font-bold transition-all duration-300',
              activeSemester === semester.id
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                : 'text-slate-500 hover:text-sky-500 dark:text-slate-400',
            ]"
          >
            {{ semester.label }}
          </button>
        </div>
      </div>

      <div
        v-if="mataKuliahTabs[activeSemester]?.length"
        class="mt-8 flex flex-wrap justify-center gap-3"
        role="tablist"
        aria-label="Mata kuliah"
      >
        <button
          v-for="tab in mataKuliahTabs[activeSemester]"
          :key="tab.id"
          type="button"
          role="tab"
          :aria-selected="activeMataKuliah === tab.id"
          @click="activeMataKuliah = tab.id"
          :class="[
            'inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold transition-all duration-300',
            activeMataKuliah === tab.id
              ? 'border-transparent bg-sky-500 text-white shadow-lg shadow-sky-500/30'
              : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400',
          ]"
        >
          <component :is="tab.icon" class="h-4 w-4" />
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <div
        v-else
        class="mt-8 rounded-[28px] border border-dashed border-slate-300 bg-white/60 px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900/50"
      >
        <div
          class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500"
        >
          <i class="mdi mdi-folder-open-outline text-3xl"></i>
        </div>

        <h3
          class="mt-4 text-lg font-bold text-slate-700 dark:text-slate-200"
        >
          Artefak Semester 2
        </h3>

        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Dokumen artefak untuk semester ini akan ditampilkan di sini.
        </p>
      </div>

      <div
        v-if="activeMataKuliah"
        class="mt-10"
      >
        <div
          v-for="course in mataKuliahList"
          v-show="activeMataKuliah === course.id"
          :key="course.id"
        >
          <div class="grid gap-6 md:grid-cols-2">
            <article
              v-for="(document, index) in course.documents"
              :key="document.file"
              class="group relative overflow-hidden rounded-[32px] border border-sky-200 bg-white/90 p-5 shadow-xl shadow-sky-500/10 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none dark:hover:border-sky-700"
            >
              <div class="mb-5 flex items-start gap-4">
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sm font-extrabold text-sky-500 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white"
                >
                  {{ String(index + 1).padStart(2, "0") }}
                </div>

                <h3
                  class="pt-1 text-base font-bold leading-snug text-slate-800 dark:text-white"
                >
                  {{ document.title }}
                </h3>
              </div>

              <div
                class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800"
              >
                <iframe
                  :src="pdfUrl(document.file)"
                  :title="document.title"
                  class="h-[520px] w-full"
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
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import {
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
  LightBulbIcon,
  BookOpenIcon,
} from "@heroicons/vue/24/outline";

import collagePhotoOne from "../assets/titik2.jpg";
import collagePhotoTwo from "../assets/wisuda.png";

const activeSemester = ref("semester-1");
const activeMataKuliah = ref("peserta-didik");

const semesterTabs = [
  {
    id: "semester-1",
    label: "Semester 1",
  },
  {
    id: "semester-2",
    label: "Semester 2",
  },
];

const mataKuliahTabs = {
  "semester-1": [
    {
      id: "peserta-didik",
      label: "Peserta Didik & Pembelajaran",
      icon: UserGroupIcon,
    },
    {
      id: "pembelajaran-mendalam",
      label: "Pembelajaran Mendalam",
      icon: AcademicCapIcon,
    },
    {
      id: "growth-mindset",
      label: "Growth Mindset",
      icon: SparklesIcon,
    },
    {
      id: "design-thinking",
      label: "Design Thinking",
      icon: LightBulbIcon,
    },
    {
      id: "filosofi-pendidikan",
      label: "Filosofi Pendidikan & Nilai",
      icon: BookOpenIcon,
    },
  ],

  "semester-2": [],
};

const mataKuliahList = [
  {
    id: "peserta-didik",
    semester: "semester-1",
    documents: [
      {
        title: "Asesmen Awal Pembelajaran",
        file: "/pdf/artefak_ppdp_01.pdf",
        downloadName: "artefak_ppdp_01.pdf",
      },
      {
        title: "Analisis Karakteristik Peserta Didik",
        file: "/pdf/artefak_ppdp_02.pdf",
        downloadName: "artefak_ppdp_02.pdf",
      },
      {
        title: "Analisis Kebutuhan Peserta Didik",
        file: "/pdf/artefak_ppdp_03.pdf",
        downloadName: "artefak_ppdp_03.pdf",
      },
      {
        title: "Perancangan Pembelajaran",
        file: "/pdf/artefak_ppdp_04.pdf",
        downloadName: "artefak_ppdp_04.pdf",
      },
      {
        title: "Refleksi Pembelajaran",
        file: "/pdf/artefak_ppdp_05.pdf",
        downloadName: "artefak_ppdp_05.pdf",
      },
    ],
  },

  {
    id: "pembelajaran-mendalam",
    semester: "semester-1",
    documents: [
      {
        title: "Artefak Pembelajaran Mendalam 01",
        file: "/pdf/artefak_pma_01.pdf",
        downloadName: "artefak_pma_01.pdf",
      },
      {
        title: "Artefak Pembelajaran Mendalam 02",
        file: "/pdf/artefak_pma_02.pdf",
        downloadName: "artefak_pma_02.pdf",
      },
      {
        title: "Artefak Pembelajaran Mendalam 03",
        file: "/pdf/artefak_pma_03.pdf",
        downloadName: "artefak_pma_03.pdf",
      },
      {
        title: "Artefak Pembelajaran Mendalam 04",
        file: "/pdf/artefak_pma_04.pdf",
        downloadName: "artefak_pma_04.pdf",
      },
      {
        title: "Artefak Pembelajaran Mendalam 05",
        file: "/pdf/artefak_pma_05.pdf",
        downloadName: "artefak_pma_05.pdf",
      },
    ],
  },

  {
    id: "growth-mindset",
    semester: "semester-1",
    documents: [
      {
        title: "Artefak Growth Mindset 01",
        file: "/pdf/artefak_gm_01.pdf",
        downloadName: "artefak_gm_01.pdf",
      },
      {
        title: "Artefak Growth Mindset 02",
        file: "/pdf/artefak_gm_02.pdf",
        downloadName: "artefak_gm_02.pdf",
      },
      {
        title: "Artefak Growth Mindset 03",
        file: "/pdf/artefak_gm_03.pdf",
        downloadName: "artefak_gm_03.pdf",
      },
      {
        title: "Artefak Growth Mindset 04",
        file: "/pdf/artefak_gm_04.pdf",
        downloadName: "artefak_gm_04.pdf",
      },
    ],
  },

  {
    id: "design-thinking",
    semester: "semester-1",
    documents: [
      {
        title: "Artefak Design Thinking 01",
        file: "/pdf/artefak_dt_01.pdf",
        downloadName: "artefak_dt_01.pdf",
      },
      {
        title: "Artefak Design Thinking 02",
        file: "/pdf/artefak_dt_02.pdf",
        downloadName: "artefak_dt_02.pdf",
      },
      {
        title: "Artefak Design Thinking 03",
        file: "/pdf/artefak_dt_03.pdf",
        downloadName: "artefak_dt_03.pdf",
      },
      {
        title: "Artefak Design Thinking 04",
        file: "/pdf/artefak_dt_04.pdf",
        downloadName: "artefak_dt_04.pdf",
      },
    ],
  },

  {
    id: "filosofi-pendidikan",
    semester: "semester-1",
    documents: [
      {
        title: "Artefak Filosofi Pendidikan 01",
        file: "/pdf/artefak_filosofi_01.pdf",
        downloadName: "artefak_filosofi_01.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 02",
        file: "/pdf/artefak_filosofi_02.pdf",
        downloadName: "artefak_filosofi_02.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 03",
        file: "/pdf/artefak_filosofi_03.pdf",
        downloadName: "artefak_filosofi_03.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 04",
        file: "/pdf/artefak_filosofi_04.pdf",
        downloadName: "artefak_filosofi_04.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 05",
        file: "/pdf/artefak_filosofi_05.pdf",
        downloadName: "artefak_filosofi_05.pdf",
      },
    ],
  },
];

const setSemester = (semester) => {
  activeSemester.value = semester;

  const firstCourse = mataKuliahTabs[semester]?.[0];

  activeMataKuliah.value = firstCourse?.id ?? null;
};

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