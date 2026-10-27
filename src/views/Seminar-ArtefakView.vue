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

      <div v-if="activeCourse" class="mt-10">
        <div :key="activeCourse.id">
          <div v-if="activeCourse.documents.length" class="grid gap-6 md:grid-cols-2">
            <article
              v-for="(document, index) in activeCourse.documents"
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
                  v-if="document.type !== 'pptx' && document.type !== 'image'"
                  :src="pdfUrl(document.file)"
                  :title="document.title"
                  class="h-[520px] w-full"
                  loading="lazy"
                ></iframe>
                <img
                  v-else-if="document.type === 'image'"
                  :src="pdfUrl(document.file)"
                  :alt="document.title"
                  class="h-[520px] w-full object-contain"
                  loading="lazy"
                />
                <div v-else class="flex h-[520px] flex-col items-center justify-center gap-4 px-6 text-center">
                  <i class="mdi mdi-file-powerpoint-box text-6xl text-orange-500"></i>
                  <p class="text-sm font-semibold text-slate-600 dark:text-slate-300">Preview PowerPoint tidak tersedia di halaman ini.</p>
                </div>
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
          <div
            v-else
            class="rounded-[28px] border border-dashed border-slate-300 bg-white/60 px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900/50"
          >
            <i class="mdi mdi-folder-open-outline text-4xl text-sky-500"></i>
            <h3 class="mt-4 text-lg font-bold text-slate-700 dark:text-slate-200">Dokumen belum tersedia</h3>
            <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Artefak untuk mata kuliah ini akan ditampilkan di sini.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
  LightBulbIcon,
  BookOpenIcon,
} from "@heroicons/vue/24/outline";

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

  "semester-2": [
    { id: "etnopedagogi", label: "Etnopedagogi", icon: BookOpenIcon },
    { id: "pmal", label: "Pembelajaran Mendalam & Asesmen Lanjutan", icon: AcademicCapIcon },
    { id: "pse", label: "Pendidikan Sosial Emosional", icon: SparklesIcon },
    { id: "ppl-semester-2", label: "PPL", icon: UserGroupIcon },
    { id: "proyek-kepemimpinan", label: "Proyek Kepemimpinan", icon: LightBulbIcon },
  ],
};

const mataKuliahList = [
  {
    id: "peserta-didik",
    semester: "semester-1",
    documents: [
      {
        title: "Artefak Peserta Didik & Pembelajaran 01",
        file: "/pdf/ARTEFAK SEMESTER 1/PPDP/sem_art_mk_ppdp_1d.png",
        downloadName: "sem_art_mk_ppdp_1d.png",
        type: "image",
      },
      {
        title: "Artefak Peserta Didik & Pembelajaran 02",
        file: "/pdf/ARTEFAK SEMESTER 1/PPDP/sem_art_mk_ppdp_2e.pdf",
        downloadName: "sem_art_mk_ppdp_2e.pdf",
      },
      {
        title: "Artefak Peserta Didik & Pembelajaran 03",
        file: "/pdf/ARTEFAK SEMESTER 1/PPDP/sem_art_mk_ppdp_3d.pdf",
        downloadName: "sem_art_mk_ppdp_3d.pdf",
      },
      {
        title: "Artefak Peserta Didik & Pembelajaran 04",
        file: "/pdf/ARTEFAK SEMESTER 1/PPDP/sem_art_mk_ppdp_4d.pdf",
        downloadName: "sem_art_mk_ppdp_4d.pdf",
      },
      {
        title: "Artefak Peserta Didik & Pembelajaran 05",
        file: "/pdf/ARTEFAK SEMESTER 1/PPDP/sem_art_mk_ppdp_4e.pdf",
        downloadName: "sem_art_mk_ppdp_4e.pdf",
      },
    ],
  },

  {
    id: "pembelajaran-mendalam",
    semester: "semester-1",
    documents: [
      {
        title: "Artefak Pembelajaran Mendalam 01",
        file: "/pdf/ARTEFAK SEMESTER 1/PMA/sem_art_mk_pma_1d.1",
        downloadName: "sem_art_mk_pma_1d.1",
        type: "image",
      },
      {
        title: "Artefak Pembelajaran Mendalam 02",
        file: "/pdf/ARTEFAK SEMESTER 1/PMA/sem_art_mk_pma_2d.1",
        downloadName: "sem_art_mk_pma_2d.1",
      },
      {
        title: "Artefak Pembelajaran Mendalam 03",
        file: "/pdf/ARTEFAK SEMESTER 1/PMA/sem_art_mk_pma_3d.pdf",
        downloadName: "sem_art_mk_pma_3d.pdf",
      },
      {
        title: "Artefak Pembelajaran Mendalam 04",
        file: "/pdf/ARTEFAK SEMESTER 1/PMA/sem_art_mk_pma_3e.pdf",
        downloadName: "sem_art_mk_pma_3e.pdf",
      },
      {
        title: "Artefak Pembelajaran Mendalam 05",
        file: "/pdf/ARTEFAK SEMESTER 1/PMA/sem_art_mk_pma_4d.pdf",
        downloadName: "sem_art_mk_pma_4d.pdf",
      },
      {
        title: "Artefak Pembelajaran Mendalam 06",
        file: "/pdf/ARTEFAK SEMESTER 1/PMA/sem_art_mk_pma_4e.pdf",
        downloadName: "sem_art_mk_pma_4e.pdf",
      },
    ],
  },

  {
    id: "growth-mindset",
    semester: "semester-1",
    documents: [
      {
        title: "Artefak Growth Mindset 01",
        file: "/pdf/ARTEFAK SEMESTER 1/GM/sem_art_mk_gm_1a.pdf",
        downloadName: "sem_art_mk_gm_1a.pdf",
      },
      {
        title: "Artefak Growth Mindset 02",
        file: "/pdf/ARTEFAK SEMESTER 1/GM/sem_art_mk_gm_1d.pptx",
        downloadName: "sem_art_mk_gm_1d.pptx",
        type: "pptx",
      },
      {
        title: "Artefak Growth Mindset 03",
        file: "/pdf/ARTEFAK SEMESTER 1/GM/sem_art_mk_gm_2a.pdf",
        downloadName: "sem_art_mk_gm_2a.pdf",
      },
      {
        title: "Artefak Growth Mindset 04",
        file: "/pdf/ARTEFAK SEMESTER 1/GM/sem_art_mk_gm_3a.pdf",
        downloadName: "sem_art_mk_gm_3a.pdf",
      },
      {
        title: "Artefak Growth Mindset 05",
        file: "/pdf/ARTEFAK SEMESTER 1/GM/sem_art_mk_gm_4c.pdf",
        downloadName: "sem_art_mk_gm_4c.pdf",
      },
    ],
  },

  {
    id: "design-thinking",
    semester: "semester-1",
    documents: [
      {
        title: "Artefak Design Thinking 01",
        file: "/pdf/ARTEFAK SEMESTER 1/DT/sem_art_s1_mk_dt_1.pdf",
        downloadName: "sem_art_s1_mk_dt_1.pdf",
      },
      {
        title: "Artefak Design Thinking 02",
        file: "/pdf/ARTEFAK SEMESTER 1/DT/sem_art_s1_mk_dt_2.pdf",
        downloadName: "sem_art_s1_mk_dt_2.pdf",
      },
      {
        title: "Artefak Design Thinking 03",
        file: "/pdf/ARTEFAK SEMESTER 1/DT/sem_art_s1_mk_dt_3.pdf",
        downloadName: "sem_art_s1_mk_dt_3.pdf",
      },
      {
        title: "Artefak Design Thinking 04",
        file: "/pdf/ARTEFAK SEMESTER 1/DT/sem_art_s1_mk_dt_4.pdf",
        downloadName: "sem_art_s1_mk_dt_4.pdf",
      },
      {
        title: "Artefak Design Thinking 05",
        file: "/pdf/ARTEFAK SEMESTER 1/DT/sem_art_s1_mk_dt_5.pdf",
        downloadName: "sem_art_s1_mk_dt_5.pdf",
      },
    ],
  },

  {
    id: "filosofi-pendidikan",
    semester: "semester-1",
    documents: [
      {
        title: "Artefak Filosofi Pendidikan 01",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 1/2237253195_Titiek Triadyatmi_Aktivitas 1.4.pdf",
        downloadName: "2237253195_Titiek Triadyatmi_Aktivitas 1.4.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 02",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 2/2237253195_Titiek Triadatmi_2D Sintesis.pdf",
        downloadName: "2237253195_Titiek Triadatmi_2D Sintesis.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 03",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 2/2237253195_Titiek Triadyatmi_2.5 Refleksi dan Tindak Lanjut.pdf",
        downloadName: "2237253195_Titiek Triadyatmi_2.5 Refleksi dan Tindak Lanjut.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 04",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 2/2237253195_Titiek Triadyatmi_Analisis Sokola Rimba.pdf",
        downloadName: "2237253195_Titiek Triadyatmi_Analisis Sokola Rimba.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 05",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 2/2237253195_Titiek Triadyatmi_TUG OF WAR.pdf",
        downloadName: "2237253195_Titiek Triadyatmi_TUG OF WAR.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 06",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 3/2237253195_Titiek Triadyatmi_3.5. Refleksi dan Tindak Lanjut.pdf",
        downloadName: "2237253195_Titiek Triadyatmi_3.5. Refleksi dan Tindak Lanjut.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 07",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 3/Kelompok 2_3.4 Peran Guru dalam Pendidikan Nilai (1).pdf",
        downloadName: "Kelompok 2_3.4 Peran Guru dalam Pendidikan Nilai (1).pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 08",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 3/LK 3C_Kelompok 2.pdf",
        downloadName: "LK 3C_Kelompok 2.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 09",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 4/2237253195_Titiek Triadyatmi_4.C. Kasus-kasus Pelanggaran Kode Etik Guru.pdf",
        downloadName: "2237253195_Titiek Triadyatmi_4.C. Kasus-kasus Pelanggaran Kode Etik Guru.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 10",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 4/2237253195_Titiek Triadyatmi_4.D. Kode etik dalam kerangka pendidikan nilai.pdf",
        downloadName: "2237253195_Titiek Triadyatmi_4.D. Kode etik dalam kerangka pendidikan nilai.pdf",
      },
      {
        title: "Artefak Filosofi Pendidikan 11",
        file: "/pdf/ARTEFAK SEMESTER 1/FILOSOFI/TOPIK 4/2237253195_Titiek Triadyatmi_4.E. Refleksi dan Aksi Nyata.pdf",
        downloadName: "2237253195_Titiek Triadyatmi_4.E. Refleksi dan Aksi Nyata.pdf",
      },
    ],
  },
  {
    id: "etnopedagogi",
    semester: "semester-2",
    documents: [
      { title: "Topik 1 — Sintesis", file: "/pdf/ARTEFAK SEMESTER 2/ETNOPEDAGOGI/TOPIK 1/4001420026_Titiek Triadyatmi_1.D Sintesis.pdf", downloadName: "4001420026_Titiek Triadyatmi_1.D Sintesis.pdf" },
      { title: "Topik 1 — Aktivitas 1E", file: "/pdf/ARTEFAK SEMESTER 2/ETNOPEDAGOGI/TOPIK 1/2237253195_Titiek Triadyatmi_1E.pdf", downloadName: "2237253195_Titiek Triadyatmi_1E.pdf" },
      { title: "Topik 2 — Sintesis", file: "/pdf/ARTEFAK SEMESTER 2/ETNOPEDAGOGI/TOPIK 2/2237253195_Titiek Triadyatmi_2D Sintesis.pdf", downloadName: "2237253195_Titiek Triadyatmi_2D Sintesis.pdf" },
      { title: "Topik 2 — Aktivitas 2E", file: "/pdf/ARTEFAK SEMESTER 2/ETNOPEDAGOGI/TOPIK 2/2237253195_Titiek Triadyatmi_2.E..pdf", downloadName: "2237253195_Titiek Triadyatmi_2.E..pdf" },
      { title: "Topik 3 — Sintesis", file: "/pdf/ARTEFAK SEMESTER 2/ETNOPEDAGOGI/TOPIK 3/2237253195_Titiek Triadyatmi_3.D. Sintesis.pdf", downloadName: "2237253195_Titiek Triadyatmi_3.D. Sintesis.pdf" },
      { title: "Topik 3 — Aktivitas 3E", file: "/pdf/ARTEFAK SEMESTER 2/ETNOPEDAGOGI/TOPIK 3/2237253195_Titiek Triadyatmi_3.E..pdf", downloadName: "2237253195_Titiek Triadyatmi_3.E..pdf" },
    ],
  },
  {
    id: "pmal",
    semester: "semester-2",
    documents: [
      { title: "Topik 1 — Asesmen Kognitif dan Nonkognitif", file: "/pdf/ARTEFAK SEMESTER 2/PMAL/TOPIK 1/Kelompok 2_Asesmen Kognitif dan Non Kognitif (1).pdf", downloadName: "Kelompok 2_Asesmen Kognitif dan Non Kognitif (1).pdf" },
      { title: "Topik 2 — Microteaching", file: "/pdf/ARTEFAK SEMESTER 2/PMAL/TOPIK 2/2237253195_Titiek Triadyatmi_2C Microteaching.pdf", downloadName: "2237253195_Titiek Triadyatmi_2C Microteaching.pdf" },
      { title: "Topik 2 — Aktivitas 2D", file: "/pdf/ARTEFAK SEMESTER 2/PMAL/TOPIK 2/2237253195_Titiek Triadyatmi_2D.pdf", downloadName: "2237253195_Titiek Triadyatmi_2D.pdf" },
      { title: "Topik 3 — Microteaching", file: "/pdf/ARTEFAK SEMESTER 2/PMAL/TOPIK 3/2237253195_Titiek Triadyatmi_3C Microteaching.pdf", downloadName: "2237253195_Titiek Triadyatmi_3C Microteaching.pdf" },
      { title: "Topik 3 — Aktivitas 3D", file: "/pdf/ARTEFAK SEMESTER 2/PMAL/TOPIK 3/2237253195_Titiek Triadyatmi_3D.pdf", downloadName: "2237253195_Titiek Triadyatmi_3D.pdf" },
      { title: "Topik 4 — Microteaching", file: "/pdf/ARTEFAK SEMESTER 2/PMAL/TOPIK 4/2237253195_Titiek Triadyatmi_4C Microteaching.pdf", downloadName: "2237253195_Titiek Triadyatmi_4C Microteaching.pdf" },
      { title: "Topik 5 — Aktivitas 5C", file: "/pdf/ARTEFAK SEMESTER 2/PMAL/TOPIK 5/2237253195_Titiek Triadyatmi_5C.pdf", downloadName: "2237253195_Titiek Triadyatmi_5C.pdf" },
      { title: "Topik 5 — Aktivitas 5D", file: "/pdf/ARTEFAK SEMESTER 2/PMAL/TOPIK 5/2237253195_Titiek Triadyatmi_5D.pdf", downloadName: "2237253195_Titiek Triadyatmi_5D.pdf" },
    ],
  },
  {
    id: "pse",
    semester: "semester-2",
    documents: [
      { title: "Topik 1 — Aktivitas 1C", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 1/2237253195_Titiek Triadyatmi_1C.pdf", downloadName: "2237253195_Titiek Triadyatmi_1C.pdf" },
      { title: "Topik 1 — Aktivitas 1D", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 1/2237253195_Titiek Triadyatmi_1D.pdf", downloadName: "2237253195_Titiek Triadyatmi_1D.pdf" },
      { title: "Topik 1 — Aktivitas 1E", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 1/2237253195_Titiek Triadyatmi_1E.pdf", downloadName: "2237253195_Titiek Triadyatmi_1E.pdf" },
      { title: "Topik 1 — Lembar Kerja 1B", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 1/2237253195_Titiek Triadyatmi_LK 1.B.pdf", downloadName: "2237253195_Titiek Triadyatmi_LK 1.B.pdf" },
      { title: "Topik 2 — Aktivitas 2B", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 2/2237253195_Titiek Triadyatmi_2B.pdf", downloadName: "2237253195_Titiek Triadyatmi_2B.pdf" },
      { title: "Topik 2 — Aktivitas 2C", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 2/2237253195_Titiek Triadyatmi_2C.pdf", downloadName: "2237253195_Titiek Triadyatmi_2C.pdf" },
      { title: "Topik 2 — Aktivitas 2D", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 2/2237253195_Titiek Triadyatmi_2D PSE.pdf", downloadName: "2237253195_Titiek Triadyatmi_2D PSE.pdf" },
      { title: "Topik 2 — Aktivitas 2E", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 2/2237253195_Titiek Triadyatmi_2E.pdf", downloadName: "2237253195_Titiek Triadyatmi_2E.pdf" },
      { title: "Topik 3 — Experiential Learning", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 3/Kelompok 2_3A Experiental Learning.pdf", downloadName: "Kelompok 2_3A Experiental Learning.pdf" },
      { title: "Topik 3 — Aktivitas 3B", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 3/2237253195_Titiek Triadyatmi_3B.pdf", downloadName: "2237253195_Titiek Triadyatmi_3B.pdf" },
      { title: "Topik 3 — Aktivitas 3C", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 3/2237253195_Titiek Triadyatmi_3C.pdf", downloadName: "2237253195_Titiek Triadyatmi_3C.pdf" },
      { title: "Topik 4 — Aktivitas 4.1", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 4/2237253195_Titiek Triadyatmi 4.1.pdf", downloadName: "2237253195_Titiek Triadyatmi 4.1.pdf" },
      { title: "Topik 4 — Aktivitas 4B", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 4/2237253195_Titiek Triadyatmi_4B.pdf", downloadName: "2237253195_Titiek Triadyatmi_4B.pdf" },
      { title: "Topik 4 — Aktivitas 4B.3", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 4/2237253195_Titiek Triadyatmi_4B.3.pdf", downloadName: "2237253195_Titiek Triadyatmi_4B.3.pdf" },
      { title: "Topik 4 — Aktivitas 4C", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 4/2237253195_Titiek Triadyatmi_4C.pdf", downloadName: "2237253195_Titiek Triadyatmi_4C.pdf" },
      { title: "Topik 4 — Aktivitas 4D", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 4/2237253195_Titiek Triadyatmi_4D.pdf", downloadName: "2237253195_Titiek Triadyatmi_4D.pdf" },
      { title: "Topik 4 — Aktivitas 4E.1", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 4/2237253195_Titiek Triadyatmi_4E.1.pdf", downloadName: "2237253195_Titiek Triadyatmi_4E.1.pdf" },
      { title: "Topik 4 — Aktivitas 4E.2", file: "/pdf/ARTEFAK SEMESTER 2/PSE/TOPIK 4/2237253195_Titiek Triadyatmi_4E.2.pdf", downloadName: "2237253195_Titiek Triadyatmi_4E.2.pdf" },
    ],
  },
  { id: "ppl-semester-2", semester: "semester-2", documents: [] },
  { id: "proyek-kepemimpinan", semester: "semester-2", documents: [] },
];

const activeCourse = computed(() =>
  mataKuliahList.find(
    (course) =>
      course.id === activeMataKuliah.value &&
      course.semester === activeSemester.value,
  ),
);

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
