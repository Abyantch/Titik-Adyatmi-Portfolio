<template>
  <section class="relative overflow-hidden px-6 py-24">
    <!-- BACKGROUND -->
    <div class="float-slow absolute left-8 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"></div>
    <div class="float-slower absolute bottom-20 right-8 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"></div>
    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- HERO -->
      <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>

          <h1 class="mt-7 text-5xl font-black leading-tight text-slate-900 dark:text-white md:text-7xl">
            Refleksi Belajar
            <span class="block bg-gradient-to-r text-sky-500 bg-clip-text">
              Semester 1 & 2
            </span>
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
            Sebuah perjalanan untuk memahami, bertumbuh, dan menjadi pendidik.
            Semester 1 memperkaya pemahaman tentang peserta didik, pembelajaran, dan berbagai kompetensi yang
            membentuk seorang guru.
          </p>

        </div>

        <!-- HERO COLLAGE: sumber foto dummy dapat diganti nanti pada import di bawah. -->
        <div class="relative mx-auto h-[420px] w-full max-w-[500px]" aria-label="Kolase foto refleksi">
          <div class="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl"></div>
          <div class="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/70"></div>

          <figure
            class="absolute left-8 top-10 z-10 h-[300px] w-[225px] -rotate-6 overflow-hidden rounded-[32px] border-8 border-white bg-slate-100 shadow-2xl shadow-sky-500/20 transition-transform duration-500 hover:-rotate-2 dark:border-slate-800 dark:bg-slate-800 md:left-12"
          >
            <img
              :src="collagePhotoOne"
              alt="Foto dummy pertama untuk kolase refleksi"
              class="h-full w-full object-cover object-center"
            />
          </figure>

          <figure
            class="absolute bottom-7 right-6 z-20 h-[300px] w-[225px] rotate-6 overflow-hidden rounded-[32px] border-8 border-white bg-slate-100 shadow-2xl shadow-violet-500/20 transition-transform duration-500 hover:rotate-2 dark:border-slate-800 dark:bg-slate-800 md:right-10"
          >
            <img
              :src="collagePhotoTwo"
              alt="Foto dummy kedua untuk kolase refleksi"
              class="h-full w-full object-cover object-center"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section
    id="dokumen-refleksi"
    class="relative overflow-hidden border-t border-slate-200/80 px-6 py-5 dark:border-slate-800"
  >
    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="text-center">
        <span
          class="inline-flex rounded-full bg-sky-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-sky-500/20"
        >
          Dokumen Refleksi
        </span>

        <h2 class="mt-5 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
          Seminar Refleksi
          <span class="text-sky-500">Per Semester</span>
        </h2>

        <p class="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
          Kumpulan dokumen refleksi mata kuliah yang dapat dibaca langsung,
          dibuka dalam layar penuh, atau diunduh.
        </p>
      </div>

      <div class="mt-10 flex flex-wrap justify-center gap-4" role="tablist" aria-label="Semester refleksi">
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

      <div v-if="activeSemester === 'semester-1'" class="mt-12 space-y-10">
        <article
          v-for="document in semesterOneDocuments"
          :key="document.file"
          class="overflow-hidden rounded-[24px] border border-sky-200 bg-white p-6 shadow-xl shadow-sky-500/10 dark:border-slate-700 dark:bg-slate-900"
        >
          <div class="flex flex-wrap items-center justify-between gap-4">
            <h3 class="flex items-center gap-3 text-lg font-bold text-slate-800 dark:text-white">
              <i class="mdi mdi-file-pdf-box text-3xl text-red-500"></i>
              {{ document.title }}
            </h3>

            <span class="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-bold text-sky-600 dark:text-sky-300">
              Semester 1
            </span>
          </div>

          <div class="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
            <iframe
              :src="pdfUrl(document.file)"
              :title="document.title"
              class="h-[650px] w-full"
              loading="lazy"
            ></iframe>
          </div>

          <div class="mt-6 flex flex-wrap justify-center gap-4">
            <a
              :href="pdfUrl(document.file)"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-500/40"
            >
              Fullscreen
              <i class="mdi mdi-open-in-new text-base"></i>
            </a>

            <a
              :href="pdfUrl(document.file)"
              :download="document.downloadName"
              class="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white px-6 py-3 text-xs font-bold text-sky-500 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              Download
              <i class="mdi mdi-download text-base"></i>
            </a>
          </div>
        </article>
      </div>

      <div
        v-else
        class="mx-auto mt-12 max-w-3xl rounded-[24px] border border-dashed border-slate-300 bg-white/70 px-8 py-14 text-center dark:border-slate-700 dark:bg-slate-900/70"
      >
        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
          <i class="mdi mdi-file-document-outline text-4xl"></i>
        </div>
        <h3 class="mt-5 text-xl font-black text-slate-900 dark:text-white">
          Dokumen Semester 2 belum tersedia
        </h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Dokumen refleksi Semester 2 akan ditampilkan di sini setelah file PDF ditambahkan.
        </p>
      </div>
    </div>
  </section>

</template>

<script setup>
import { computed, defineComponent, h, ref } from "vue";
import collagePhotoOne from "../assets/titik2.jpg";
import collagePhotoTwo from "../assets/wisuda.png";

const activeSemester = ref("semester-1");

const semesterTabs = [
  { id: "semester-1", label: "Semester 1", icon: "mdi mdi-numeric-1-circle-outline" },
  { id: "semester-2", label: "Semester 2", icon: "mdi mdi-numeric-2-circle-outline" },
];

const semesterOneDocuments = [
  {
    title: "Refleksi Mata Kuliah Pemahaman tentang Peserta Didik dan Pembelajaran",
    file: "/pdf/sem_ref_s1_mk_ppdp.pdf",
    downloadName: "sem_ref_s1_mk_ppdp.pdf",
  },
  {
    title: "Refleksi Mata Kuliah Pembelajaran Mendalam dan Asesmen Dasar",
    file: "/pdf/sem_ref_s1_mk_pma.pdf",
    downloadName: "sem_ref_s1_mk_pma.pdf",
  },
  {
    title: "Refleksi Mata Kuliah Growth Mindset",
    file: "/pdf/sem_ref_s1_mk_ gm.pdf",
    downloadName: "sem_ref_s1_mk_gm.pdf",
  },
  {
    title: "Refleksi Mata Kuliah Design Thinking",
    file: "/pdf/sem_ref_s1_ mk _dt.pdf",
    downloadName: "sem_ref_s1_mk_dt.pdf",
  },
  {
    title: "Refleksi Mata Kuliah Filosofi Pendidikan",
    file: "/pdf/sem_ref_ s1_mk_filosofi.pdf",
    downloadName: "sem_ref_s1_mk_filosofi.pdf",
  },
];

const pdfUrl = (file) => encodeURI(file);

const quickNav = [
  { id: "evolusi", label: "Evolusi", icon: "mdi mdi-timeline-clock-outline" },
  { id: "tantangan", label: "Tantangan", icon: "mdi mdi-alert-circle-outline" },
  { id: "feedback", label: "Feedback", icon: "mdi mdi-chat-outline" },
  {
    id: "tindaklanjut",
    label: "Tindak Lanjut",
    icon: "mdi mdi-rocket-launch-outline",
  },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const activeStep = ref("orientasi");

const evolutionSteps = [
  {
    id: "orientasi",
    number: "01",
    icon: "mdi mdi-compass-outline",
    title: "Orientasi",
    text: "Melakukan adaptasi terhadap lingkungan sekolah, budaya akademik, sarana prasarana, serta program pembiasaan di SMPN 2 Kota Serang. Tahap ini memberikan pemahaman awal mengenai kondisi sekolah sebagai landasan dalam merancang pembelajaran yang sesuai dengan konteks peserta didik.",
  },
  {
    id: "observasi",
    number: "02",
    icon: "mdi mdi-magnify",
    title: "Observasi",
    text: "Mengidentifikasi karakteristik peserta didik melalui observasi kelas dan profiling kecerdasan majemuk berdasarkan Teori Howard Gardner. Hasil observasi menunjukkan keberagaman karakteristik belajar serta rendahnya motivasi belajar pada sebagian peserta didik.",
  },
  {
    id: "asistensi",
    number: "03",
    icon: "mdi mdi-handshake-outline",
    title: "Asistensi",
    text: "Berkolaborasi dengan guru pamong dalam menyusun modul ajar, LKM, asesmen, dan media pembelajaran berbasis Deep Learning. Pada tahap ini dilakukan diskusi dan refleksi untuk memastikan perangkat pembelajaran mampu mengakomodasi kebutuhan peserta didik.",
  },
  {
    id: "praktik",
    number: "04",
    icon: "mdi mdi-rocket-launch-outline",
    title: "Praktik Mengajar",
    text: "Mengimplementasikan pembelajaran pada materi Struktur Bumi, Lempeng Tektonik, dan Gempa Bumi melalui diskusi, simulasi, proyek, gallery walk, dan presentasi kelompok. Hasil praktik direfleksikan melalui inquiry kolaboratif sebagai dasar perbaikan pembelajaran berkelanjutan.",
  },
];

const currentStep = computed(() => {
  return evolutionSteps.find((step) => step.id === activeStep.value);
});

const challengeSolutions = [
  {
    icon: "mdi mdi-emoticon-sad-outline",
    challengeTitle: "Motivasi belajar peserta didik masih rendah",
    challengeText:
      "Sebagian peserta didik kurang menunjukkan antusiasme dalam mengikuti pembelajaran, terutama pada tahap awal kegiatan belajar.",
    solutionTitle: "Pembelajaran berbasis proyek dan aktivitas kontekstual",
    solutionText:
      "Menggunakan proyek, simulasi, dan studi kasus agar peserta didik lebih terlibat aktif dan melihat keterkaitan materi dengan kehidupan nyata.",
  },
  {
    icon: "mdi mdi-account-voice",
    challengeTitle: "Peserta didik cenderung pasif",
    challengeText:
      "Partisipasi diskusi dan kontribusi dalam kerja kelompok belum merata sehingga interaksi belajar belum optimal.",
    solutionTitle: "Strategi kolaboratif dan scaffolding",
    solutionText:
      "Memberikan pembagian peran yang jelas, pertanyaan pemantik, serta pendampingan bertahap untuk mendorong partisipasi seluruh peserta didik.",
  },
  {
    icon: "mdi mdi-wifi-off",
    challengeTitle: "Keterbatasan sarana prasarana digital",
    challengeText:
      "Akses internet yang kurang memadai dan ketersediaan proyektor yang terbatas menjadi kendala dalam pembelajaran berbasis digital.",
    solutionTitle: "Adaptasi media pembelajaran",
    solutionText:
      "Menyiapkan alternatif pembelajaran yang tidak bergantung penuh pada internet, memanfaatkan media visual, LKPD, dan diskusi tatap muka.",
  },
];

const colorMap = {
  sky: {
    bg: "from-sky-500 to-blue-600",
    text: "text-sky-500",
    soft: "bg-sky-500/10",
    border: "hover:border-sky-300 hover:shadow-sky-500/20",
  },
  violet: {
    bg: "from-violet-500 to-purple-600",
    text: "text-violet-500",
    soft: "bg-violet-500/10",
    border: "hover:border-violet-300 hover:shadow-violet-500/20",
  },
  cyan: {
    bg: "from-cyan-500 to-sky-500",
    text: "text-cyan-500",
    soft: "bg-cyan-500/10",
    border: "hover:border-cyan-300 hover:shadow-cyan-500/20",
  },
  green: {
    bg: "from-emerald-500 to-teal-500",
    text: "text-emerald-500",
    soft: "bg-emerald-500/10",
    border: "hover:border-emerald-300 hover:shadow-emerald-500/20",
  },
};

const OrbitBadge = defineComponent({
  props: ["icon", "label", "class"],
  setup(props) {
    return () =>
      h(
        "div",
        {
          class: `float-soft absolute flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 shadow-xl shadow-slate-200/70 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 ${props.class}`,
        },
        [h("i", { class: `${props.icon} text-xl text-sky-500` }), props.label],
      );
  },
});

const SectionTitle = defineComponent({
  props: ["badge", "title", "desc"],
  setup(props) {
    return () =>
      h("div", { class: "text-center" }, [
        h(
          "span",
          {
            class:
              "inline-flex rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-sky-500/20",
          },
          props.badge,
        ),
        h(
          "h2",
          {
            class:
              "mt-5 text-3xl font-black text-slate-900 dark:text-white md:text-4xl",
          },
          props.title,
        ),
        h(
          "p",
          {
            class:
              "mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400",
          },
          props.desc,
        ),
      ]);
  },
});

const ChallengeSolutionRow = defineComponent({
  props: [
    "challengeTitle",
    "challengeText",
    "solutionTitle",
    "solutionText",
    "icon",
  ],
  setup(props) {
    return () =>
      h(
        "div",
        {
          class:
            "shine-card group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/50 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none",
        },
        [
          h("div", { class: "grid gap-6 lg:grid-cols-[1fr_auto_1fr]" }, [
            h(
              "div",
              {
                class:
                  "relative z-10 rounded-[24px] bg-red-50 p-6 dark:bg-red-500/10",
              },
              [
                h("div", { class: "flex items-center gap-4" }, [
                  h(
                    "div",
                    {
                      class:
                        "flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-500",
                    },
                    [h("i", { class: `${props.icon} text-3xl` })],
                  ),
                  h(
                    "h3",
                    {
                      class:
                        "text-lg font-black text-slate-900 dark:text-white",
                    },
                    props.challengeTitle,
                  ),
                ]),
                h(
                  "p",
                  {
                    class:
                      "mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400",
                  },
                  props.challengeText,
                ),
              ],
            ),

            h("div", { class: "flex items-center justify-center" }, [
              h(
                "div",
                {
                  class:
                    "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/25 transition-all duration-500 group-hover:scale-110",
                },
                [h("i", { class: "mdi mdi-arrow-right-bold text-2xl" })],
              ),
            ]),

            h(
              "div",
              {
                class:
                  "relative z-10 rounded-[24px] bg-sky-50 p-6 dark:bg-sky-500/10",
              },
              [
                h("div", { class: "flex items-center gap-4" }, [
                  h(
                    "div",
                    {
                      class:
                        "flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500",
                    },
                    [
                      h("i", {
                        class: "mdi mdi-lightbulb-on-outline text-3xl",
                      }),
                    ],
                  ),
                  h(
                    "h3",
                    {
                      class:
                        "text-lg font-black text-slate-900 dark:text-white",
                    },
                    props.solutionTitle,
                  ),
                ]),
                h(
                  "p",
                  {
                    class:
                      "mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400",
                  },
                  props.solutionText,
                ),
              ],
            ),
          ]),
        ],
      );
  },
});

const RoadmapCard = defineComponent({
  props: ["number", "icon", "title", "text", "color"],
  setup(props) {
    const c = colorMap[props.color];

    return () =>
      h(
        "div",
        {
          class: `shine-card group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-7 shadow-xl shadow-slate-200/50 backdrop-blur transition-all duration-500 hover:-translate-y-2 ${c.border} dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none`,
        },
        [
          h("p", { class: `text-sm font-black ${c.text}` }, props.number),
          h("i", {
            class: `${props.icon} absolute -right-5 top-5 text-8xl opacity-10 transition-all duration-500 group-hover:right-4 group-hover:scale-125 group-hover:opacity-20`,
          }),
          h(
            "div",
            {
              class: `relative z-10 mt-5 flex h-14 w-14 items-center justify-center rounded-2xl ${c.soft} ${c.text} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`,
            },
            [h("i", { class: `${props.icon} text-3xl` })],
          ),
          h(
            "h3",
            {
              class:
                "relative z-10 mt-5 text-xl font-black text-slate-900 dark:text-white",
            },
            props.title,
          ),
          h(
            "p",
            {
              class:
                "relative z-10 mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400",
            },
            props.text,
          ),
        ],
      );
  },
});
</script>

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
  transform: translateX(-130%) skewX(-20deg);
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.42),
      transparent);
  transition: transform 0.85s ease;
  pointer-events: none;
}

.shine-card:hover::before {
  transform: translateX(130%) skewX(-20deg);
}
</style>
