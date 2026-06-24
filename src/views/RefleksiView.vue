<template>
  <section class="relative min-h-screen overflow-hidden px-6 py-24">
    <!-- BACKGROUND -->
    <!-- <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_35%)]"
    ></div> -->
    <div
      class="float-slow absolute left-8 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
    ></div>
    <div
      class="float-slower absolute bottom-20 right-8 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- HERO -->
      <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>

          <h1
            class="mt-7 text-5xl font-black leading-tight text-slate-900 dark:text-white md:text-7xl"
          >
            Bertumbuh Menjadi
            <span
              class="block bg-gradient-to-r text-sky-500 bg-clip-text"
            >
              Guru Reflektif
            </span>
          </h1>

          <p
            class="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
          >
            Sintesis pengalaman belajar dari tahapan orientasi, observasi,
            asistensi, hingga praktik pembelajaran terbimbing di SMP Negeri 2
            Kota Serang.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <button
              v-for="nav in quickNav"
              :key="nav.id"
              @click="scrollToSection(nav.id)"
              class="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-bold text-slate-600 shadow-md shadow-slate-200/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:text-sky-500 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:shadow-none"
            >
              <i
                :class="`${nav.icon} text-lg transition-transform duration-300 group-hover:scale-125`"
              ></i>
              {{ nav.label }}
            </button>
          </div>
        </div>

        <!-- HERO VISUAL -->
        <div class="relative mx-auto h-[420px] w-full max-w-[500px]">
          <div
            class="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-300/70"
          ></div>
          <div
            class="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/70"
          ></div>

          <div class="absolute inset-0 z-20 flex items-center justify-center">
            <div
              class="float-soft flex h-40 w-40 items-center justify-center rounded-[40px] bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-2xl shadow-sky-500/30"
            >
              <i class="mdi mdi-compass-outline text-7xl"></i>
            </div>
          </div>

          <OrbitBadge
            class="left-0 top-14"
            icon="mdi mdi-compass-outline"
            label="Orientasi"
          />
          <OrbitBadge
            class="right-0 top-20"
            icon="mdi mdi-magnify"
            label="Observasi"
          />
          <OrbitBadge
            class="bottom-20 left-2"
            icon="mdi mdi-handshake-outline"
            label="Asistensi"
          />
          <OrbitBadge
            class="bottom-14 right-2"
            icon="mdi mdi-rocket-launch-outline"
            label="Praktik"
          />
        </div>
      </div>

      <!-- EVOLUSI -->
      <section id="evolusi" class="mt-20">
        <SectionTitle
          badge="Evolusi Pembelajaran"
          title="Perjalanan PPL Terbimbing"
          desc="Pengembangan kompetensi mengajar melalui proses orientasi, observasi, asistensi, dan praktik mengajar yang reflektif serta berpusat pada murid."
        />

        <div
          class="mt-10 rounded-[36px] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-slate-200/60 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
        >
          <div class="relative grid gap-5 md:grid-cols-4">
            <button
              v-for="step in evolutionSteps"
              :key="step.id"
              @click="activeStep = step.id"
              :class="[
                'group relative overflow-hidden rounded-[26px] border p-6 text-left transition-all duration-500',
                activeStep === step.id
                  ? 'border-transparent bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-xl shadow-sky-500/30'
                  : 'border-slate-100 bg-white text-slate-700 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200',
              ]"
            >
              <i
                :class="`${step.icon} absolute -right-4 top-4 text-7xl opacity-10 transition-all duration-500 group-hover:right-4 group-hover:scale-125 group-hover:opacity-20`"
              ></i>

              <div
                :class="[
                  'relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
                  activeStep === step.id
                    ? 'bg-white/20 text-white'
                    : 'bg-sky-500/10 text-sky-500',
                ]"
              >
                <i :class="`${step.icon} text-3xl`"></i>
              </div>

              <p
                class="relative z-10 mt-5 text-xs font-black uppercase tracking-[0.18em] opacity-70"
              >
                {{ step.number }}
              </p>

              <h3 class="relative z-10 mt-2 text-xl font-black">
                {{ step.title }}
              </h3>
            </button>
          </div>

          <div
            class="shine-card relative mt-8 overflow-hidden rounded-[28px] border border-slate-100 bg-slate-50 p-7 dark:border-slate-700 dark:bg-slate-800"
          >
            <div class="flex flex-col gap-5 md:flex-row md:items-start">
              <div
                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/25"
              >
                <i :class="`${currentStep.icon} text-4xl`"></i>
              </div>

              <div>
                <p
                  class="text-xs font-black uppercase tracking-[0.2em] text-sky-500"
                >
                  {{ currentStep.number }}
                </p>

                <h3
                  class="mt-2 text-2xl font-black text-slate-900 dark:text-white"
                >
                  {{ currentStep.title }}
                </h3>

                <p
                  class="mt-4 text-sm leading-8 text-slate-600 dark:text-slate-400 md:text-base"
                >
                  {{ currentStep.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TANTANGAN SOLUSI -->
      <section id="tantangan" class="mt-20">
        <SectionTitle
          badge="Tantangan & Solusi"
          title="Dari Kendala Menjadi Strategi"
          desc="Kondisi pembelajaran di kelas VIII-I menunjukkan beberapa tantangan yang direspons melalui strategi adaptif dan berpusat pada murid."
        />

        <div class="mt-10 space-y-6">
          <ChallengeSolutionRow
            v-for="item in challengeSolutions"
            :key="item.challengeTitle"
            :challenge-title="item.challengeTitle"
            :challenge-text="item.challengeText"
            :solution-title="item.solutionTitle"
            :solution-text="item.solutionText"
            :icon="item.icon"
          />
        </div>
      </section>

      <!-- FEEDBACK -->
      <section id="feedback" class="mt-20">
        <div
          class="moving-gradient relative overflow-hidden rounded-[36px] bg-gradient-to-r from-sky-500 via-blue-600 to-violet-500 p-10 text-white shadow-2xl shadow-sky-500/30"
        >
          <i
            class="mdi mdi-format-quote-open absolute left-8 top-5 text-8xl text-white/20"
          ></i>
          <i
            class="mdi mdi-chat-processing-outline absolute bottom-6 right-10 text-8xl text-white/15"
          ></i>

          <div class="relative z-10 mx-auto max-w-4xl text-center">
            <p
              class="text-sm font-black uppercase tracking-[0.25em] text-white/70"
            >
              Umpan Balik Konstruktif
            </p>

            <h2 class="mt-4 text-3xl font-black md:text-5xl">
              Catatan Refleksi Bersama
            </h2>

            <p class="mt-7 text-lg font-medium leading-9 text-white/90">
              “Pembelajaran yang dirancang sudah menunjukkan upaya yang baik
              dalam meningkatkan keterlibatan peserta didik melalui aktivitas
              proyek, diskusi, dan pembelajaran kontekstual. Ke depan, perlu
              penguatan strategi untuk memotivasi peserta didik yang masih
              pasif, pemerataan partisipasi dalam kelompok, serta pemanfaatan
              media pembelajaran yang lebih fleksibel sesuai keterbatasan sarana
              prasarana sekolah.”
            </p>

            <div
              class="mx-auto mt-8 h-[3px] w-20 rounded-full bg-white/50"
            ></div>

            <p class="mt-5 font-semibold text-white/80">
              — Hasil Refleksi Bersama
            </p>
          </div>
        </div>
      </section>

      <!-- TINDAK LANJUT -->
      <section id="tindaklanjut" class="mt-20">
        <SectionTitle
          badge="Tindak Lanjut Perbaikan"
          title="Roadmap Pembelajaran Berkelanjutan"
          desc="Rencana pengembangan pembelajaran yang disusun berdasarkan refleksi praktik, asesmen, serta kebutuhan peserta didik."
        />

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <RoadmapCard
            number="01"
            icon="mdi mdi-target"
            title="Peningkatan Motivasi Belajar"
            text="Menerapkan ice breaking, simulasi, gallery walk, proyek kreatif, media interaktif, dan permainan edukatif."
            color="sky"
          />

          <RoadmapCard
            number="02"
            icon="mdi mdi-account-group-outline"
            title="Partisipasi Aktif Murid"
            text="Menerapkan pembagian peran, pertanyaan pemantik, dan scaffolding untuk mendorong keterlibatan semua murid."
            color="violet"
          />

          <RoadmapCard
            number="03"
            icon="mdi mdi-laptop"
            title="Optimalisasi Media"
            text="Menyiapkan media alternatif yang tidak bergantung penuh pada internet, seperti LKPD, visual, dan simulasi sederhana."
            color="cyan"
          />

          <RoadmapCard
            number="04"
            icon="mdi mdi-clipboard-check-outline"
            title="Refleksi & Asesmen"
            text="Memberikan ruang refleksi murid dan menggunakan hasil asesmen sebagai dasar umpan balik serta perbaikan berkelanjutan."
            color="green"
          />
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { computed, defineComponent, h, ref } from "vue";

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
</style>
