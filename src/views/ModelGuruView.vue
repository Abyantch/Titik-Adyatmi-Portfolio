<template>
  <section class="relative min-h-screen overflow-hidden px-6 py-24">
    <!-- BACKGROUND -->
    <!-- <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_35%)]"></div> -->
    <div
      class="float-slow absolute left-10 top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
    ></div>
    <div
      class="float-slower absolute bottom-20 right-10 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- HERO -->
      <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1
            class="mt-7 text-5xl font-black leading-tight text-slate-900 dark:text-white md:text-7xl"
          >
            Guru IPA yang
            <span
              class="block bg-gradient-to-r from-sky-500 via-blue-600 to-violet-500 bg-clip-text text-transparent"
            >
              Adaptif & Reflektif
            </span>
          </h1>

          <p
            class="mt-6 max-w-2xl text-base text-justify leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
          >
            Mewujudkan pembelajaran IPA yang berpusat pada murid melalui
            pengalaman belajar yang aktif, kontekstual, dan kolaboratif guna
            menumbuhkan rasa ingin tahu, penalaran kritis, kreativitas,
            karakter, serta kepedulian peserta didik terhadap lingkungan dan
            fenomena alam dalam kehidupan sehari-hari.
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

        <!-- HERO ORBIT -->
        <div class="relative mx-auto h-[430px] w-full max-w-[520px]">
          <!-- ORBIT LINES -->
          <div
            class="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-300/70"
          ></div>

          <div
            class="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/70"
          ></div>

          <!-- CENTER -->
          <div class="absolute inset-0 flex items-center justify-center z-20">
            <div
              class="float-soft flex h-44 w-44 items-center justify-center rounded-[40px] bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-2xl shadow-sky-500/30"
            >
              <i class="mdi mdi-flask-outline text-7xl"></i>
            </div>
          </div>

          <!-- BADGES -->
          <OrbitBadge
            class="left-0 top-14"
            icon="mdi mdi-earth"
            label="Kontekstual"
          />

          <OrbitBadge
            class="right-0 top-20"
            icon="mdi mdi-rocket-launch-outline"
            label="Deep Learning"
          />

          <OrbitBadge
            class="bottom-20 left-2"
            icon="mdi mdi-handshake-outline"
            label="Kolaboratif"
          />

          <OrbitBadge
            class="bottom-14 right-2"
            icon="mdi mdi-heart-outline"
            label="Berpihak Murid"
          />
        </div>
      </div>

      <!-- MANIFESTO -->
      <section id="visi" class="mt-16">
        <div
          class="shine-card group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-slate-200/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none"
        >
          <i
            class="mdi mdi-format-quote-close absolute right-8 top-5 text-[130px] text-violet-500/10 transition-all duration-500 group-hover:scale-110 group-hover:text-violet-500/20"
          ></i>

          <div class="relative z-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div
              class="rounded-[30px] bg-gradient-to-br from-sky-500 to-violet-500 p-8 text-white shadow-xl shadow-sky-500/25"
            >
              <p
                class="text-sm font-bold uppercase tracking-[0.25em] text-white/70"
              >
                Visi Pembelajaran
              </p>

              <h2 class="mt-6 text-3xl font-black leading-tight">
                Mewujudkan Pembelajaran IPA yang Bermakna
              </h2>

              <div class="mt-6 h-[3px] w-16 rounded-full bg-white/70"></div>

              <p class="mt-6 text-sm leading-8 text-white/85">
                Menjadi Guru IPA yang adaptif, reflektif, dan inovatif dalam
                mewujudkan pembelajaran yang berpusat pada murid.
              </p>
            </div>

            <div>
              <p
                class="text-sm font-bold uppercase tracking-[0.25em] text-violet-500"
              >
                Misi Strategis
              </p>

              <div class="mt-6 space-y-4">
                <MissionPanel
                  icon="mdi mdi-earth"
                  title="Pembelajaran Kontekstual Berbasis Fenomena"
                  text="Mengaitkan konsep IPA dengan konteks nyata agar peserta didik memahami, mengaplikasikan, dan merefleksikan pengetahuan dalam kehidupan sehari-hari."
                />

                <MissionPanel
                  icon="mdi mdi-brain"
                  title="Deep Learning & Pembelajaran Berdiferensiasi"
                  text="Menerapkan Mindful, Meaningful, dan Joyful Learning yang mengakomodasi keberagaman karakteristik serta kecerdasan peserta didik."
                />

                <MissionPanel
                  icon="mdi mdi-account-group-outline"
                  title="Pembelajaran Aktif dan Kolaboratif"
                  text="Mendorong diskusi, kolaborasi, investigasi, karya, dan refleksi untuk mengembangkan kemampuan diri peserta didik."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PILLARS -->
      <section id="kompetensi" class="mt-20">
        <SectionTitle
          badge="Pilar Kompetensi"
          title="Kompetensi yang Saya Kembangkan"
          desc="Kompetensi utama yang dikembangkan selama PPG dan praktik pembelajaran."
        />

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FlipCard
            icon="mdi mdi-human-male-board"
            title="Pedagogik"
            text="Mengembangkan pembelajaran yang berpusat pada murid melalui Deep Learning dan pembelajaran berdiferensiasi."
            color="sky"
          />

          <FlipCard
            icon="mdi mdi-book-open-page-variant-outline"
            title="Profesional"
            text="Menguasai materi IPA serta merancang pengalaman belajar kontekstual agar murid memahami, menerapkan, dan merefleksikan pengetahuan."
            color="violet"
          />

          <FlipCard
            icon="mdi mdi-handshake-outline"
            title="Sosial"
            text="Membangun komunikasi dan kolaborasi positif dengan peserta didik, guru pamong, DPL, serta warga sekolah."
            color="cyan"
          />

          <FlipCard
            icon="mdi mdi-star-outline"
            title="Kepribadian"
            text="Menunjukkan sikap reflektif, adaptif, bertanggung jawab, serta menjadi teladan profesional bagi peserta didik."
            color="violet"
          />
        </div>
      </section>

      <!-- VALUES -->
      <section id="karakter" class="mt-20">
        <SectionTitle
          badge="Karakter Guru Ideal"
          title="Nilai yang Menjadi Pedoman Saya"
          desc="Nilai-nilai karakter yang membentuk cara saya merancang, melaksanakan, dan merefleksikan praktik pembelajaran."
        />

        <div class="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div class="space-y-6">
            <ValueCard
              icon="mdi mdi-magnify"
              title="Pembelajar Reflektif"
              text="Melakukan refleksi terhadap perencanaan, pelaksanaan, dan hasil pembelajaran serta terbuka terhadap umpan balik."
              color="sky"
            />

            <ValueCard
              icon="mdi mdi-handshake-outline"
              title="Kolaboratif dan Inspiratif"
              text="Membangun budaya belajar yang mendorong kerja sama, komunikasi, dan saling menghargai."
              color="cyan"
            />
          </div>

          <div
            class="relative flex min-h-[360px] items-center justify-center rounded-[36px] border border-white/70 bg-white/70 p-8 shadow-xl shadow-slate-200/50 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
          >
            <div
              class="absolute inset-10 rounded-full border border-dashed border-sky-300"
            ></div>
            <div
              class="absolute inset-20 rounded-full border border-dashed border-violet-300"
            ></div>

            <div
              class="float-soft relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-2xl shadow-sky-500/30"
            >
              <i class="mdi mdi-account-heart-outline text-7xl"></i>
            </div>
          </div>

          <div class="space-y-6">
            <ValueCard
              icon="mdi mdi-heart-outline"
              title="Berpihak pada Murid"
              text="Menempatkan kebutuhan, karakteristik, dan potensi peserta didik sebagai dasar dalam merancang pembelajaran."
              color="pink"
            />

            <ValueCard
              icon="mdi mdi-lightbulb-on-outline"
              title="Inovatif dan Adaptif"
              text="Mengembangkan strategi, media, dan pengalaman belajar yang relevan dengan kebutuhan murid serta perubahan zaman."
              color="green"
            />
          </div>
        </div>
      </section>

      <!-- QUOTE -->
      <div
        class="moving-gradient relative mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-sky-500 via-blue-600 to-violet-500 p-10 text-center text-white shadow-2xl shadow-sky-500/30"
      >
        <i
          class="mdi mdi-format-quote-open absolute left-8 top-4 text-8xl text-white/20"
        ></i>
        <i
          class="mdi mdi-paper-airplane absolute right-10 top-8 rotate-12 text-7xl text-white/15"
        ></i>

        <p
          class="relative z-10 mx-auto max-w-4xl text-2xl font-black leading-relaxed md:text-3xl"
        >
          Guru bukan hanya mengajarkan ilmu, tetapi membantu peserta didik
          <span class="text-cyan-200">menemukan makna</span>
          dari apa yang mereka pelajari.
        </p>

        <p class="relative z-10 mt-6 font-semibold text-white/80">
          — Titiek Triadyatmi, S.Pd.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from "vue";

const quickNav = [
  { id: "visi", label: "Visi & Misi", icon: "mdi mdi-compass-outline" },
  { id: "kompetensi", label: "Kompetensi", icon: "mdi mdi-star-outline" },
  { id: "karakter", label: "Karakter", icon: "mdi mdi-heart-outline" },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

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
  pink: {
    bg: "from-pink-500 to-rose-500",
    text: "text-pink-500",
    soft: "bg-pink-500/10",
    border: "hover:border-pink-300 hover:shadow-pink-500/20",
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

const MissionPanel = defineComponent({
  props: ["icon", "title", "text"],
  setup(props) {
    return () =>
      h(
        "div",
        {
          class:
            "shine-card group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-800 dark:shadow-none",
        },
        [
          h("div", { class: "relative z-10 flex gap-4" }, [
            h(
              "div",
              {
                class:
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
              },
              [h("i", { class: `${props.icon} text-3xl` })],
            ),
            h("div", [
              h(
                "h3",
                { class: "font-bold text-slate-900 dark:text-white" },
                props.title,
              ),
              h(
                "p",
                {
                  class:
                    "mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400",
                },
                props.text,
              ),
            ]),
          ]),
        ],
      );
  },
});

const FlipCard = defineComponent({
  props: ["icon", "title", "text", "color"],
  setup(props) {
    const c = colorMap[props.color];

    return () =>
      h("div", { class: "group h-72 [perspective:1200px]" }, [
        h(
          "div",
          {
            class:
              "relative h-full w-full rounded-[28px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]",
          },
          [
            h(
              "div",
              {
                class:
                  "absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/70 bg-white p-6 shadow-xl shadow-slate-200/60 [backface-visibility:hidden] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none",
              },
              [
                h("i", {
                  class: `${props.icon} absolute -right-5 top-5 text-8xl opacity-10`,
                }),
                h(
                  "div",
                  {
                    class: `relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${c.bg} text-white shadow-lg`,
                  },
                  [h("i", { class: `${props.icon} text-3xl` })],
                ),
                h("div", { class: "relative z-10" }, [
                  h(
                    "h3",
                    {
                      class:
                        "text-2xl font-black text-slate-900 dark:text-white",
                    },
                    props.title,
                  ),
                  h(
                    "div",
                    {
                      class:
                        "mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-sky-500 shadow-sm transition-all duration-300 group-hover:rotate-180 group-hover:border-sky-300 group-hover:bg-sky-50 group-hover:text-violet-500 dark:border-slate-700 dark:bg-slate-900",
                    },
                    [
                      h("i", {
                        class: "mdi mdi-rotate-3d-variant text-xl",
                      }),
                    ],
                  ),
                ]),
              ],
            ),

            h(
              "div",
              {
                class: `absolute inset-0 flex flex-col justify-center rounded-[28px] bg-gradient-to-br ${c.bg} p-6 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]`,
              },
              [
                h("i", {
                  class: `${props.icon} absolute -right-4 top-4 text-8xl text-white/15`,
                }),
                h(
                  "p",
                  { class: "relative z-10 text-sm font-semibold leading-7" },
                  props.text,
                ),
              ],
            ),
          ],
        ),
      ]);
  },
});

const ValueCard = defineComponent({
  props: ["icon", "title", "text", "color"],
  setup(props) {
    const c = colorMap[props.color];

    return () =>
      h(
        "div",
        {
          class: `shine-card group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/50 backdrop-blur transition-all duration-500 hover:-translate-y-2 ${c.border} dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none`,
        },
        [
          h("i", {
            class: `${props.icon} absolute -right-4 top-4 text-7xl opacity-10 transition-all duration-500 group-hover:right-4 group-hover:scale-125 group-hover:opacity-20`,
          }),

          h(
            "div",
            {
              class: `relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl ${c.soft} ${c.text} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gradient-to-br group-hover:${c.bg} group-hover:text-white`,
            },
            [h("i", { class: `${props.icon} text-3xl` })],
          ),

          h(
            "h3",
            {
              class:
                "relative z-10 mt-5 text-lg font-black text-slate-900 dark:text-white",
            },
            props.title,
          ),

          h(
            "p",
            {
              class:
                "relative z-10 mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400",
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
