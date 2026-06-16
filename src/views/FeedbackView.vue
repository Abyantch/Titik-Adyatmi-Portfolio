<script setup>
import { ref, defineComponent, h } from "vue";

const activeTab = ref("Guru Pamong");

const tabs = [
  { id: "Guru Pamong", label: "Guru Pamong", icon: "mdi mdi-magnify" },
  {
    id: "Dosen Pembimbing Lapangan",
    label: "Dosen Pembimbing Lapangan",
    icon: "mdi mdi-file-document-edit-outline",
  },
];

const modulCards = [
  {
    icon: "mdi mdi-lightbulb-on-outline",
    title: "Konteks Pengembangan",
    text: "Modul ajar dikembangkan berdasarkan hasil profiling peserta didik yang mengacu pada Teori Kecerdasan Majemuk Howard Gardner. Pembelajaran dirancang menggunakan pendekatan Deep Learning (Mindful, Meaningful, dan Joyful Learning) untuk menciptakan pengalaman belajar aktif, kontekstual, dan bermakna.",
  },
  {
    icon: "mdi mdi-target",
    title: "Tujuan Pembelajaran",
    text: "Membimbing peserta didik memahami keterkaitan struktur bumi, pergerakan lempeng tektonik, dan fenomena gempa bumi melalui investigasi, simulasi, diskusi, dan proyek kolaboratif.",
  },
  {
    icon: "mdi mdi-star-check-outline",
    title: "Kelebihan Pendekatan",
    text: "Pendekatan Deep Learning mengakomodasi kebutuhan belajar beragam melalui diferensiasi konten, proses, dan produk. Peserta didik didorong berdiskusi, melakukan simulasi, membuat produk, mempresentasikan hasil, dan merefleksikan pembelajaran.",
  },
  {
    icon: "mdi mdi-alert-outline",
    title: "Tantangan Pelaksanaan",
    text: "Tantangan utama terletak pada keberagaman karakteristik peserta didik, keterbatasan akses internet, jumlah proyektor, serta perlunya pengelolaan kelas yang baik dalam diskusi kelompok dan gallery walk.",
  },
];

const dplCards = [
  {
    icon: "mdi mdi-pencil-ruler",
    title: "Konteks Pengembangan",
    text: "Dosen Pembimbing Lapangan dikembangkan untuk mendukung implementasi Deep Learning melalui kegiatan Guru Pamong, diskusi, investigasi, proyek, dan refleksi yang mengakomodasi keberagaman kecerdasan peserta didik.",
  },
  {
    icon: "mdi mdi-bullseye-arrow",
    title: "Tujuan Instruksional",
    text: "Dosen Pembimbing Lapangan memandu murid membangun pemahaman konseptual mengenai struktur bumi, pergerakan lempeng, dan gempa bumi melalui kegiatan pengamatan, kolaborasi, dan proyek.",
  },
  {
    icon: "mdi mdi-check-decagram-outline",
    title: "Kelebihan Lembar Kerja",
    text: "Dosen Pembimbing Lapangan disusun bertahap mulai dari eksplorasi konsep, pengamatan fenomena, analisis, hingga penyajian hasil belajar. Diferensiasi produk memberi ruang belajar aktif sesuai gaya belajar murid.",
  },
  {
    icon: "mdi mdi-timer-alert-outline",
    title: "Tantangan Pengerjaan",
    text: "Tantangan utama terletak pada pengelolaan waktu selama diskusi, proyek, presentasi, gallery walk, serta kemampuan peserta didik dalam bekerja sama dan membagi peran.",
  },
];

const colorMap = {
  blue: {
    header: "from-sky-500 to-sky-900",
    shadow: "hover:shadow-sky-500/20",
    badge: "bg-sky-100 text-sky-600",
  },
  violet: {
    header: "from-violet-500 to-violet-900",
    shadow: "hover:shadow-violet-500/20",
    badge: "bg-violet-100 text-violet-600",
  },
  cyan: {
    header: "from-cyan-500 to-cyan-900",
    shadow: "hover:shadow-cyan-500/20",
    badge: "bg-cyan-100 text-cyan-600",
  },
};

const InsightCard = defineComponent({
  props: ["color", "icon", "title", "items", "target"],
  setup(props) {
    const c = colorMap[props.color];

    return () =>
      h(
        "div",
        {
          class: `overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 ${c.shadow} dark:border-slate-700 dark:bg-slate-900`,
        },
        [
          h(
            "div",
            { class: `bg-gradient-to-r ${c.header} px-6 py-5 text-white` },
            [
              h("div", { class: "flex items-center gap-3" }, [
                h("i", { class: `${props.icon} text-3xl` }),
                h("h3", { class: "text-lg font-bold" }, props.title),
              ]),
            ],
          ),
          h(
            "div",
            { class: "space-y-5 p-6 text-sm leading-7" },
            props.items.map((item) =>
              h("div", [
                h(
                  "p",
                  {
                    class: item.warning
                      ? "font-semibold text-amber-500"
                      : "font-semibold text-slate-800 dark:text-white",
                  },
                  item.label,
                ),
                h(
                  "p",
                  { class: "mt-1 text-slate-600 dark:text-slate-400" },
                  item.text,
                ),
              ]),
            ),
          ),
          h(
            "div",
            {
              class:
                "border-t border-slate-100 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-800 right-0",
            },
            [
              h(
                "span",
                {
                  class: `rounded-full px-2 py-1 text-xs font-bold ${c.badge}`,
                },
                `Target: ${props.target}`,
              ),
            ],
          ),
        ],
      );
  },
});

const ContentSection = defineComponent({
  props: ["title", "highlight", "description", "cards"],
  setup(props) {
    return () =>
      h("div", [
        h("div", { class: "text-center" }, [
          h(
            "h2",
            {
              class:
                "text-3xl font-bold text-slate-800 dark:text-white md:text-4xl",
            },
            [
              props.title + " ",
              h(
                "span",
                {
                  class: "text-sky-500 bg-clip-text",
                },
                props.highlight,
              ),
            ],
          ),
          h(
            "p",
            {
              class:
                "mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400",
            },
            props.description,
          ),
        ]),
        h(
          "div",
          { class: "mt-12 grid gap-6 md:grid-cols-2" },
          props.cards.map((card) =>
            h(
              "div",
              {
                class:
                  "group relative overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none",
              },
              [
                h("i", {
                  class: `${card.icon} pointer-events-none absolute -right-4 top-4 text-8xl text-sky-500/10 transition-all duration-500 group-hover:right-6 group-hover:scale-125 group-hover:text-sky-500/25`,
                }),
                h(
                  "div",
                  {
                    class:
                      "relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white",
                  },
                  [h("i", { class: `${card.icon} text-2xl` })],
                ),
                h(
                  "h3",
                  {
                    class:
                      "relative z-10 text-xl font-bold text-slate-800 dark:text-white",
                  },
                  card.title,
                ),
                h(
                  "p",
                  {
                    class:
                      "relative z-10 mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400",
                  },
                  card.text,
                ),
              ],
            ),
          ),
        ),
      ]);
  },
});

const PdfPreviewCard = defineComponent({
  props: ["title", "file"],
  setup(props) {
    return () =>
      h(
        "div",
        {
          class:
            "mt-10 overflow-hidden rounded-[22px] border border-sky-200 bg-white p-6 shadow-xl shadow-sky-500/10 dark:border-slate-700 dark:bg-slate-900",
        },
        [
          h(
            "h3",
            {
              class:
                "flex items-center gap-3 text-lg font-bold text-slate-800 dark:text-white",
            },
            [
              h("i", { class: "mdi mdi-file-pdf-box text-2xl text-red-500" }),
              props.title,
            ],
          ),

          h("div", {
            class:
              "mt-5 border-t border-dashed border-slate-200 dark:border-slate-700",
          }),

          h(
            "div",
            {
              class:
                "mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800",
            },
            [
              h("iframe", {
                src: `${props.file}`,
                class: "h-[650px] w-full",
              }),
            ],
          ),

          h(
            "div",
            {
              class: "mt-6 flex flex-wrap justify-center gap-4",
            },
            [
              h(
                "a",
                {
                  href: props.file,
                  target: "_blank",
                  class:
                    "inline-flex items-center gap-2 rounded-full bg-sky-500  px-6 py-3 text-xs font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-500/40",
                },
                [
                  "Fullscreen",
                  h("i", { class: "mdi mdi-open-in-new text-base" }),
                ],
              ),

              h(
                "a",
                {
                  href: props.file,
                  download: "",
                  class:
                    "inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white px-6 py-3 text-xs font-bold text-sky-500 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-900 dark:hover:bg-slate-800",
                },
                ["Download", h("i", { class: "mdi mdi-download text-base" })],
              ),
            ],
          ),
        ],
      );
  },
});

const GuruPamongCycle = defineComponent({
  props: ["cycle", "description", "documents"],
  setup(props) {
    return () =>
      h(
        "div",
        {
          class:
            "group relative overflow-hidden rounded-[32px] border border-sky-200 bg-white/90 p-7 shadow-xl shadow-sky-500/10 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none",
        },
        [
          h(
            "div",
            {
              class:
                "pointer-events-none absolute -right-8 -top-10 text-[140px] font-extrabold leading-none text-sky-500/5 transition-all duration-500 group-hover:right-4 group-hover:text-sky-500/10",
            },
            `0${props.cycle}`,
          ),

          h(
            "div",
            {
              class:
                "relative z-10 flex flex-col gap-4 md:flex-row md:items-center",
            },
            [
              h(
                "div",
                {
                  class:
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                },
                [h("i", { class: "mdi mdi-refresh text-3xl" })],
              ),

              h("div", [
                h(
                  "h3",
                  {
                    class: "text-2xl font-bold text-slate-800 dark:text-white",
                  },
                  `Siklus ${props.cycle}`,
                ),
                h(
                  "p",
                  {
                    class:
                      "mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400",
                  },
                  props.description,
                ),
              ]),
            ],
          ),

          h(
            "div",
            { class: "relative z-10 mt-7 grid gap-6 lg:grid-cols-2" },
            props.documents.map((doc) =>
              h(
                "div",
                {
                  class:
                    "overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/15 dark:border-slate-700 dark:bg-slate-900",
                },
                [
                  h(
                    "div",
                    { class: "grid gap-5 p-5 xl:grid-cols-[1fr_280px]" },
                    [
                      h("div", { class: "flex flex-col" }, [
                        h("div", { class: "flex items-start gap-3" }, [
                          h(
                            "div",
                            {
                              class:
                                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white",
                            },
                            [h("i", { class: `${doc.icon} text-2xl` })],
                          ),

                          h("div", [
                            h(
                              "h4",
                              {
                                class:
                                  "font-bold text-slate-800 dark:text-white",
                              },
                              doc.title,
                            ),
                            h(
                              "p",
                              {
                                class:
                                  "mt-1 text-xs font-semibold text-violet-500",
                              },
                              doc.subtitle,
                            ),
                          ]),
                        ]),

                        h("div", {
                          class:
                            "mt-4 h-[3px] w-12 rounded-full bg-gradient-to-r from-sky-500 to-violet-500",
                        }),

                        h(
                          "p",
                          {
                            class:
                              "mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400",
                          },
                          doc.description,
                        ),

                        h(
                          "div",
                          {
                            class:
                              "mt-5 rounded-2xl border-l-4 border-sky-500 bg-sky-50/70 p-4 dark:bg-sky-500/10",
                          },
                          [
                            h("div", { class: "flex gap-3" }, [
                              h("i", {
                                class:
                                  "mdi mdi-presentation text-2xl text-sky-500",
                              }),
                              h("div", [
                                h(
                                  "p",
                                  {
                                    class:
                                      "font-bold text-slate-800 dark:text-white",
                                  },
                                  "Fokus Penilaian:",
                                ),
                                h(
                                  "p",
                                  {
                                    class:
                                      "mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400",
                                  },
                                  doc.focus,
                                ),
                              ]),
                            ]),
                          ],
                        ),
                      ]),

                      h(
                        "div",
                        {
                          class:
                            "overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800",
                        },
                        [
                          h("iframe", {
                            src: doc.file,
                            class: "h-[340px] w-full",
                          }),

                          h(
                            "div",
                            {
                              class:
                                "flex justify-center gap-3 border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900",
                            },
                            [
                              h(
                                "a",
                                {
                                  href: doc.file,
                                  target: "_blank",
                                  class:
                                    "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1",
                                },
                                [
                                  "Buka Penuh",
                                  h("i", {
                                    class: "mdi mdi-open-in-new text-base",
                                  }),
                                ],
                              ),

                              h(
                                "a",
                                {
                                  href: doc.file,
                                  download: "",
                                  class:
                                    "inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white px-4 py-2 text-xs font-bold text-sky-500 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-900 dark:hover:bg-slate-800",
                                },
                                [
                                  "Unduh",
                                  h("i", {
                                    class: "mdi mdi-download text-base",
                                  }),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      );
  },
});
</script>

<template>
  <section class="relative overflow-hidden px-6 pb-20 pt-24">
    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="text-center">
        <h1
          class="mt-8 text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white md:text-6xl"
        >
          Umpan Balik &
          <span class="text-sky-500 bg-clip-text"> Penilaian </span>
        </h1>

        <p
          class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
        >
          Dokumentasi hasil penilaian dan umpan balik berkelanjutan dari Guru
          Pamong dan Dosen Pembimbing Lapangan terhadap perancangan perangkat
          ajar serta pelaksanaan pembelajaran IPA selama tiga siklus praktik
          mengajar di SMP Negeri 2 Kota Serang
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <div
          class="group flex items-center gap-5 rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white"
          >
            <i class="mdi mdi-account-school-outline text-3xl"></i>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400"
            >
              Dosen Pembimbing Lapangan
            </p>
            <h3 class="mt-2 text-lg font-bold text-slate-800 dark:text-white">
              Mudmainah Vitasari, M.Pd
            </h3>
          </div>
        </div>

        <div
          class="group flex items-center gap-5 rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white"
          >
            <i class="mdi mdi-human-male-board text-3xl"></i>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400"
            >
              Guru Pamong
            </p>
            <h3 class="mt-2 text-lg font-bold text-slate-800 dark:text-white">
              Noviandrini Wikan T, S.Pt
            </h3>
          </div>
        </div>

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
              Mahasiswa
            </p>
            <h3 class="mt-2 text-lg font-bold text-slate-800 dark:text-white">
              Titiek Triadyatmi, S.Pd
            </h3>
          </div>
        </div>
      </div>

      <div class="mt-20 border-t-2 border-dashed border-slate-300/80"></div>
    </div>
  </section>
  <section class="px-10">
    <div class="flex flex-wrap justify-center gap-4">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'inline-flex items-center gap-2 rounded-full border px-8 py-3 text-sm font-bold transition-all duration-300',
          activeTab === tab.id
            ? 'border-transparent bg-sky-500 text-white shadow-lg shadow-sky-500/30'
            : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400',
        ]"
      >
        <i :class="tab.icon"></i>
        {{ tab.label }}
      </button>
    </div>

    <!-- Guru Pamong -->
    <div v-if="activeTab === 'Guru Pamong'" class="mt-10">
      <div class="mt-12 space-y-8">
        <GuruPamongCycle
          cycle="1"
          description="Siklus pertama menjadi tahap awal implementasi pembelajaran di kelas."
          :documents="[
            {
              title: 'Penilaian Perangkat Pembelajaran',
              subtitle: 'Guru Pamong · Siklus 1',
              icon: 'mdi mdi-file-document-edit-outline',
              description:
                'Penilaian berfokus pada kelengkapan perangkat pembelajaran, kesesuaian tujuan, alur kegiatan, diferensiasi aktivitas, asesmen, dan keterpaduan perangkat ajar.',
              focus:
                'Kesesuaian modul ajar, tujuan pembelajaran, langkah kegiatan, media, asesmen, dan kebutuhan belajar peserta didik.',
              file: '/pdf/lkm-siklus-1.pdf',
            },
            {
              title: 'Penilaian Praktik Mengajar',
              subtitle: 'Guru Pamong · Siklus 1',
              icon: 'mdi mdi-human-male-board',
              description:
                'Siklus pertama menjadi tahap awal praktik mengajar dengan fokus pada pembukaan pembelajaran, penyampaian materi, pengelolaan kelas, dan interaksi awal dengan peserta didik.',
              focus:
                'Kemampuan membuka pembelajaran, menyampaikan materi secara sistematis, mengelola waktu, serta membangun interaksi dan partisipasi murid.',
              file: '/pdf/lkm-siklus-1.pdf',
            },
          ]"
        />

        <GuruPamongCycle
          cycle="2"
          description="Siklus kedua berfokus pada penguatan strategi pembelajaran dan pengelolaan aktivitas kelas."
          :documents="[
            {
              title: 'Penilaian Perangkat Pembelajaran',
              subtitle: 'Guru Pamong · Siklus 2',
              icon: 'mdi mdi-file-document-edit-outline',
              description:
                'Perangkat pembelajaran mulai disesuaikan berdasarkan refleksi siklus sebelumnya, terutama pada penguatan alur aktivitas, media, LKPD, dan asesmen formatif.',
              focus:
                'Penguatan rancangan pembelajaran, kejelasan instruksi, kesesuaian media, serta keterpaduan antara aktivitas dan asesmen.',
              file: '/pdf/lkm-siklus-2.pdf',
            },
            {
              title: 'Penilaian Praktik Mengajar',
              subtitle: 'Guru Pamong · Siklus 2',
              icon: 'mdi mdi-human-male-board',
              description:
                'Praktik mengajar pada siklus kedua menekankan peningkatan keterlibatan peserta didik melalui diskusi, simulasi, kerja kelompok, dan aktivitas pembelajaran aktif.',
              focus:
                'Kemampuan memfasilitasi diskusi, mengelola dinamika kelompok, memberikan penguatan, dan menjaga keterlibatan murid selama pembelajaran.',
              file: '/pdf/lkm-siklus-2.pdf',
            },
          ]"
        />

        <GuruPamongCycle
          cycle="3"
          description="Siklus ketiga menjadi tahap pemantapan pembelajaran berdasarkan hasil refleksi dan perbaikan."
          :documents="[
            {
              title: 'Penilaian Perangkat Pembelajaran',
              subtitle: 'Guru Pamong · Siklus 3',
              icon: 'mdi mdi-file-document-edit-outline',
              description:
                'Perangkat pembelajaran pada siklus ketiga menunjukkan penyempurnaan pada diferensiasi kegiatan, pemilihan media, asesmen, dan keterkaitan antara tujuan, proses, serta produk pembelajaran.',
              focus:
                'Konsistensi perangkat ajar, kesesuaian strategi pembelajaran, instrumen penilaian, dan keterpaduan refleksi dengan tindak lanjut pembelajaran.',
              file: '/pdf/lkm-siklus-3.pdf',
            },
            {
              title: 'Penilaian Praktik Mengajar',
              subtitle: 'Guru Pamong · Siklus 3',
              icon: 'mdi mdi-human-male-board',
              description:
                'Praktik mengajar siklus ketiga berfokus pada pemantapan pengelolaan kelas, penguatan konsep, refleksi pembelajaran, dan keterlibatan aktif peserta didik.',
              focus:
                'Kemampuan mengelola kelas secara lebih stabil, memantik penalaran kritis, memberi umpan balik, serta menutup pembelajaran dengan refleksi bermakna.',
              file: '/pdf/lkm-siklus-3.pdf',
            },
          ]"
        />
      </div>
    </div>

    <!-- Dosen Pembimbing Lapangan -->
    <div v-else-if="activeTab === 'Dosen Pembimbing Lapangan'" class="mt-10">
            <div class="mt-12 space-y-8">
        <GuruPamongCycle
          cycle="1"
          description="Siklus pertama menjadi tahap awal implementasi pembelajaran di kelas."
          :documents="[
            {
              title: 'Penilaian Perangkat Pembelajaran',
              subtitle: 'Dosen Pembimbing Lapangan · Siklus 1',
              icon: 'mdi mdi-file-document-edit-outline',
              description:
                'Penilaian berfokus pada kelengkapan perangkat pembelajaran, kesesuaian tujuan, alur kegiatan, diferensiasi aktivitas, asesmen, dan keterpaduan perangkat ajar.',
              focus:
                'Kesesuaian modul ajar, tujuan pembelajaran, langkah kegiatan, media, asesmen, dan kebutuhan belajar peserta didik.',
              file: '/pdf/lkm-siklus-1.pdf',
            },
            {
              title: 'Penilaian Praktik Mengajar',
              subtitle: 'Dosen Pembimbing Lapangan · Siklus 1',
              icon: 'mdi mdi-human-male-board',
              description:
                'Siklus pertama menjadi tahap awal praktik mengajar dengan fokus pada pembukaan pembelajaran, penyampaian materi, pengelolaan kelas, dan interaksi awal dengan peserta didik.',
              focus:
                'Kemampuan membuka pembelajaran, menyampaikan materi secara sistematis, mengelola waktu, serta membangun interaksi dan partisipasi murid.',
              file: '/pdf/lkm-siklus-1.pdf',
            },
          ]"
        />

        <GuruPamongCycle
          cycle="2"
          description="Siklus kedua berfokus pada penguatan strategi pembelajaran dan pengelolaan aktivitas kelas."
          :documents="[
            {
              title: 'Penilaian Perangkat Pembelajaran',
              subtitle: 'Dosen Pembimbing Lapangan · Siklus 2',
              icon: 'mdi mdi-file-document-edit-outline',
              description:
                'Perangkat pembelajaran mulai disesuaikan berdasarkan refleksi siklus sebelumnya, terutama pada penguatan alur aktivitas, media, LKPD, dan asesmen formatif.',
              focus:
                'Penguatan rancangan pembelajaran, kejelasan instruksi, kesesuaian media, serta keterpaduan antara aktivitas dan asesmen.',
              file: '/pdf/lkm-siklus-2.pdf',
            },
            {
              title: 'Penilaian Praktik Mengajar',
              subtitle: 'Dosen Pembimbing Lapangan · Siklus 2',
              icon: 'mdi mdi-human-male-board',
              description:
                'Praktik mengajar pada siklus kedua menekankan peningkatan keterlibatan peserta didik melalui diskusi, simulasi, kerja kelompok, dan aktivitas pembelajaran aktif.',
              focus:
                'Kemampuan memfasilitasi diskusi, mengelola dinamika kelompok, memberikan penguatan, dan menjaga keterlibatan murid selama pembelajaran.',
              file: '/pdf/lkm-siklus-2.pdf',
            },
          ]"
        />

        <GuruPamongCycle
          cycle="3"
          description="Siklus ketiga menjadi tahap pemantapan pembelajaran berdasarkan hasil refleksi dan perbaikan."
          :documents="[
            {
              title: 'Penilaian Perangkat Pembelajaran',
              subtitle: 'Dosen Pembimbing Lapangan · Siklus 3',
              icon: 'mdi mdi-file-document-edit-outline',
              description:
                'Perangkat pembelajaran pada siklus ketiga menunjukkan penyempurnaan pada diferensiasi kegiatan, pemilihan media, asesmen, dan keterkaitan antara tujuan, proses, serta produk pembelajaran.',
              focus:
                'Konsistensi perangkat ajar, kesesuaian strategi pembelajaran, instrumen penilaian, dan keterpaduan refleksi dengan tindak lanjut pembelajaran.',
              file: '/pdf/lkm-siklus-3.pdf',
            },
            {
              title: 'Penilaian Praktik Mengajar',
              subtitle: 'Dosen Pembimbing Lapangan · Siklus 3',
              icon: 'mdi mdi-human-male-board',
              description:
                'Praktik mengajar siklus ketiga berfokus pada pemantapan pengelolaan kelas, penguatan konsep, refleksi pembelajaran, dan keterlibatan aktif peserta didik.',
              focus:
                'Kemampuan mengelola kelas secara lebih stabil, memantik penalaran kritis, memberi umpan balik, serta menutup pembelajaran dengan refleksi bermakna.',
              file: '/pdf/lkm-siklus-3.pdf',
            },
          ]"
        />
      </div>
    </div>

    <div class="mt-20 border-t-2 border-dashed border-slate-300/80"></div>
  </section>
</template>
