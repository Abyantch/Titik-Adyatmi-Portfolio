<template>
  <section class="relative min-h-screen overflow-hidden px-6 py-24">
    <!-- BACKGROUND -->
    <div class="absolute inset-0 bg-slate-50 dark:bg-slate-950"></div>
    <div class="absolute left-0 top-10 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl"></div>
    <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- HERO -->
      <div class="text-center">
        <div
          class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-2xl shadow-sky-500/30"
        >
          <i class="mdi mdi-book-heart-outline text-4xl"></i>
        </div>

        <p class="mt-6 text-sm font-black uppercase tracking-[0.3em] text-sky-500">
          Filosofi Mengajar
        </p>

        <h1 class="mt-4 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-6xl">
          Keyakinan yang
          <span class="block bg-gradient-to-r text-sky-500 bg-clip-text">
            Menuntun Praktik Mengajar
          </span>
        </h1>

        <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">
          Sebuah refleksi mengenai keyakinan, nilai, dan prinsip yang saya bangun selama menjalani PPL Terbimbing sebagai landasan dalam merancang pembelajaran yang berpusat pada murid, bermakna, dan mengembangkan potensi peserta didik secara optimal.
        </p>
      </div>

      <!-- PRINCIPLES -->
      <div class="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <!-- LEFT NAV -->
        <div class="space-y-4">
          <button
            v-for="item in principles"
            :key="item.id"
            @click="activePrinciple = item.id"
            :class="[
              'group w-full rounded-[28px] border p-5 text-left transition-all duration-500',
              activePrinciple === item.id
                ? 'border-transparent bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-xl shadow-sky-500/30'
                : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
            ]"
          >
            <div class="flex items-center gap-4">
              <div
                :class="[
                  'flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
                  activePrinciple === item.id ? 'bg-white/20 text-white' : 'bg-sky-500/10 text-sky-500'
                ]"
              >
                <i :class="`${item.icon} text-2xl`"></i>
              </div>

              <div>
                <p class="text-xs font-black uppercase tracking-[0.2em] opacity-70">
                  {{ item.number }}
                </p>
                <h3 class="mt-1 font-black">
                  {{ item.title }}
                </h3>
              </div>
            </div>
          </button>
        </div>

        <!-- DETAIL CARD -->
        <div
          class="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
        >
          <i :class="`${currentPrinciple.icon} absolute -right-8 top-6 text-[160px] text-sky-500/10`"></i>

          <div class="relative z-10">
            <span
              class="inline-flex rounded-full bg-sky-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-sky-500"
            >
              {{ currentPrinciple.number }}
            </span>

            <h2 class="mt-6 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
              {{ currentPrinciple.title }}
            </h2>

            <div class="mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"></div>

            <p class="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
              {{ currentPrinciple.text }}
            </p>
          </div>
        </div>
      </div>

      <!-- LITERATURE -->
      <div class="mt-20">
        <div class="text-center">
          <p class="text-sm font-black uppercase tracking-[0.3em] text-violet-500">
            Landasan Literatur Pedagogi
          </p>

          <h2 class="mt-3 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
            Teori yang Menguatkan
            <span class="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
              Praktik Mengajar
            </span>
          </h2>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LiteratureCard
            v-for="lit in literatures"
            :key="lit.title"
            :icon="lit.icon"
            :title="lit.title"
            :author="lit.author"
            :text="lit.text"
          />
        </div>
      </div>

      <!-- CLOSING -->
      <div
        class="relative mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-sky-500 via-blue-600 to-violet-500 p-10 text-center text-white shadow-2xl shadow-sky-500/30"
      >
        <i class="mdi mdi-format-quote-open absolute left-8 top-5 text-8xl text-white/20"></i>
        <i class="mdi mdi-school-outline absolute bottom-6 right-10 text-8xl text-white/15"></i>

        <p class="relative z-10 mx-auto max-w-4xl text-2xl font-black leading-relaxed md:text-3xl">
          Mengajar bagi saya adalah proses menuntun, memahami, dan menghadirkan ruang belajar yang membuat setiap murid merasa mampu untuk bertumbuh.
        </p>

        <p class="relative z-10 mt-6 font-semibold text-white/80">
          — Filosofi Mengajar Titiek Triadyatmi, S.Pd.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, defineComponent, h, ref } from "vue";

const activePrinciple = ref("hakikat");

const principles = [
  {
    id: "hakikat",
    number: "01 — Hakikat Pendidikan",
    icon: "mdi mdi-human-male-board",
    title: "Hakikat Pendidikan dan Peran Guru",
    text: "Saya meyakini bahwa setiap peserta didik memiliki potensi, karakteristik, dan kebutuhan belajar yang unik. Oleh karena itu, tugas guru bukan sekadar mentransfer pengetahuan, melainkan menjadi fasilitator yang menciptakan lingkungan belajar yang aman, inklusif, dan bermakna. Pandangan ini sejalan dengan filosofi Ki Hajar Dewantara yang menempatkan peserta didik sebagai pusat pembelajaran serta menekankan peran guru dalam menuntun tumbuh kembang kodrat anak sesuai potensinya.",
  },
  {
    id: "murid",
    number: "02 — Memahami Murid",
    icon: "mdi mdi-account-search-outline",
    title: "Memahami Murid sebagai Dasar Pembelajaran",
    text: "Pembelajaran yang efektif harus diawali dengan pemahaman mendalam terhadap peserta didik. Melalui observasi dan profiling kecerdasan majemuk berdasarkan teori Howard Gardner, saya belajar bahwa setiap peserta didik memiliki cara belajar berbeda. Oleh karena itu, pembelajaran berdiferensiasi menjadi penting agar setiap murid memperoleh kesempatan belajar sesuai kebutuhan, minat, dan kesiapan belajarnya.",
  },
  {
    id: "deep",
    number: "03 — Deep Learning",
    icon: "mdi mdi-brain",
    title: "Pembelajaran Bermakna melalui Deep Learning",
    text: "Saya meyakini bahwa belajar bukan sekadar mengingat informasi, tetapi membangun pemahaman yang mendalam. Oleh karena itu, pembelajaran dirancang menggunakan pendekatan Deep Learning melalui Mindful Learning, Meaningful Learning, dan Joyful Learning agar peserta didik mampu memahami konsep, mengaplikasikan pengetahuan dalam kehidupan nyata, serta merefleksikan pengalaman belajarnya.",
  },
  {
    id: "growth",
    number: "04 — Growth Mindset",
    icon: "mdi mdi-lightbulb-on-outline",
    title: "Design Thinking dan Growth Mindset",
    text: "Proses belajar merupakan ruang untuk bereksplorasi, mencoba, dan memperbaiki diri. Melalui Design Thinking, saya belajar berempati terhadap kebutuhan peserta didik, mengidentifikasi masalah pembelajaran, merancang solusi, dan melakukan perbaikan berkelanjutan. Prinsip Growth Mindset mengajarkan bahwa kemampuan dapat berkembang melalui usaha, refleksi, dan ketekunan.",
  },
];

const literatures = [
  {
    icon: "mdi mdi-leaf",
    title: "Filosofi Pendidikan",
    author: "Ki Hajar Dewantara",
    text: "Pendidikan merupakan proses menuntun peserta didik untuk mengembangkan potensi dirinya secara utuh sesuai kodrat alam dan zamannya.",
  },
  {
    icon: "mdi mdi-account-group-outline",
    title: "Pemahaman Peserta Didik",
    author: "Howard Gardner – Multiple Intelligences",
    text: "Setiap peserta didik memiliki kecerdasan dan cara belajar yang berbeda sehingga pembelajaran perlu dirancang adaptif dan berpihak pada murid.",
  },
  {
    icon: "mdi mdi-book-open-page-variant-outline",
    title: "Pembelajaran Mendalam",
    author: "Deep Learning Approach",
    text: "Pembelajaran dirancang agar peserta didik mampu memahami, mengaplikasikan, dan merefleksikan pengetahuan melalui pengalaman belajar bermakna.",
  },
  {
    icon: "mdi mdi-tune-variant",
    title: "Pembelajaran Berdiferensiasi",
    author: "Carol Ann Tomlinson",
    text: "Keberagaman kebutuhan belajar peserta didik diakomodasi melalui diferensiasi konten, proses, dan produk pembelajaran.",
  },
  {
    icon: "mdi mdi-lightbulb-on-outline",
    title: "Design Thinking",
    author: "Tim Brown & Stanford d.school",
    text: "Pembelajaran dan pemecahan masalah diawali dengan empati, eksplorasi ide, pengembangan solusi, refleksi, dan penyempurnaan berkelanjutan.",
  },
  {
    icon: "mdi mdi-rocket-launch-outline",
    title: "Growth Mindset",
    author: "Carol Dweck",
    text: "Kemampuan bukan sesuatu yang tetap, tetapi dapat terus berkembang melalui usaha, pengalaman, refleksi, dan kemauan belajar dari kesalahan.",
  },
];

const currentPrinciple = computed(() =>
  principles.find((item) => item.id === activePrinciple.value)
);

const LiteratureCard = defineComponent({
  props: ["icon", "title", "author", "text"],
  setup(props) {
    return () =>
      h(
        "div",
        {
          class:
            "group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none",
        },
        [
          h("i", {
            class: `${props.icon} absolute -right-5 top-5 text-8xl text-sky-500/10 transition-all duration-500 group-hover:right-4 group-hover:scale-125 group-hover:text-sky-500/20`,
          }),

          h(
            "div",
            {
              class:
                "relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-sky-500 group-hover:text-white",
            },
            [h("i", { class: `${props.icon} text-3xl` })]
          ),

          h("h3", { class: "relative z-10 mt-5 text-xl font-black text-slate-900 dark:text-white" }, props.title),
          h("p", { class: "relative z-10 mt-2 text-sm font-bold text-violet-500" }, props.author),
          h("p", { class: "relative z-10 mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400" }, props.text),
        ]
      );
  },
});
</script>