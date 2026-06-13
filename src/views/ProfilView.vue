<script setup>
import { ref } from "vue";

// 1
const accessInfo = [
  {
    icon: "bx bx-time-five",
    title: "8 Menit",
    description: "dari Pusat Kota Serang",
  },
  {
    icon: "bx bx-buildings",
    title: "10 Menit",
    description: "dari Mall Of Serang",
  },
  {
    icon: "bx bxs-bus",
    title: "17 Menit",
    description: "dari Terminal Pakupatan",
  },
];

// 2
const tabs = ref([
  {
    name: "website",
    label: "Website",
    projects: [
      {
        id: 1,
        title: "LilJoy Beadies",
        image:
          "https://ik.imagekit.io/ymfeid1q7/Liljoy.png?updatedAt=1718337980136",
        link: "https://github.com/Abyantch/Little-Joy-Beadies",
        technologies: ["Boostrap", "SASS", "Vite"],
      },
      {
        id: 2,
        title: "LoveBuddy.id",
        image:
          "https://ik.imagekit.io/ymfeid1q7/LoveBuddy.png?updatedAt=1718337964152",
        link: "https://github.com/Abyantch/LoveBuddy.id--Website-",
        technologies: ["Boostrap", "Code Igniter"],
      },
      {
        id: 3,
        title: "Jadoo",
        image:
          "https://ik.imagekit.io/ymfeid1q7/Jadoo.png?updatedAt=1721720031446",
        link: "https://landingpagejadoo.netlify.app",
        technologies: ["React", "MUI", "Vite"],
      },
    ],
  },
  {
    name: "app",
    label: "App",
    projects: [
      {
        id: 1,
        title: "To-Do-List App",
        image:
          "https://ik.imagekit.io/ymfeid1q7/ToDo.png?updatedAt=1718340328776",
        link: "https://todo-app-abyantch.netlify.app/",
        technologies: ["Vue", "Tailwind"],
      },
      {
        id: 2,
        title: "Drication",
        image:
          "https://ik.imagekit.io/ymfeid1q7/Drication.png?updatedAt=1718337960774",
        link: "https://github.com/Abyantch/Diabetic-retinopathy-identification-CLAHE-2D-LDA-Using-Hassanat-Distance-KNN-H-KNN-algorithm.",
        technologies: ["Python", "Scikit-learn", "OpenCV"],
      },
      {
        id: 3,
        title: "KanbanKuu",
        image:
          "https://ik.imagekit.io/ymfeid1q7/KanbanKuu?updatedAt=1721645598549",
        link: "https://kanbankuu-abyantch.netlify.app/",
        technologies: ["React", "MUI", "Vite"],
      },
    ],
  },
  {
    name: "video",
    label: "Video",
    projects: [
      {
        id: 1,
        title: "Lomba Lampah Kita Pemkot Semarang Tahun 2024",
        image: "",
        link: "https://www.youtube.com/embed/mC_-IauuOuk?si=PIqHneSlQDHTcOK3",
        technologies: ["Premiere Pro", "Capcut Pro"],
      },
      {
        id: 2,
        title: "Video Profil UMKM Tahu Hambida",
        image: "",
        link: "https://www.youtube.com/embed/xkYnUY0mguM?si=84rGaWpKyZhO1TlM",
        technologies: ["Premiere Pro", "Capcut Pro"],
      },
      {
        id: 3,
        title: "Lomba Kampung Hebat Kota Semarang tahun 2024",
        image: "",
        link: "https://www.youtube.com/embed/t6lbIY2AW9w?si=OS1C5FMrfmfC-_Iw",
        technologies: ["Premiere Pro", "Capcut Pro"],
      },
    ],
  },
]);

const currentTab = ref(tabs.value[0]);

//3
import { onMounted, onBeforeUnmount } from "vue";

const currentSlide = ref(0);

const images = [
  "/src/assets/serang.jpg",
  "/src/assets/inspiration.png",
  "/src/assets/goals.png",
];

const slideTexts = [
  {
    label: "Culture",
    title: "Keunikan Daerah Asal",
  },

  {
    label: "Inspiration",
    title: "Inspirasi Menjadi Guru",
  },

  {
    label: "Goals",
    title: "Tujuan Menjadi Guru Profesional",
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
};

let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    nextSlide();
  }, 6000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <section id="Hero" class="bg-white dark:bg-slate-950">
    <div class="mx-auto mt-[6.5rem] max-w-6xl px-6 py-10 sm:px-8 lg:px-8">
      <div
        class="relative isolate overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-xl ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900 dark:ring-slate-800 sm:px-12 lg:flex lg:items-center lg:gap-x-16 lg:px-16 lg:py-16"
      >
        <div
          class="absolute left-8 top-8 h-1.5 w-16 rounded-full bg-sky-500 sm:left-12 lg:left-16"
        ></div>

        <!-- <div
          class="absolute right-12 top-12 hidden h-36 w-36 opacity-30 lg:block"
          aria-hidden="true"
        >
          <div class="grid grid-cols-6 gap-4">
            <span
              v-for="item in 36"
              :key="item"
              class="h-1.5 w-1.5 rounded-full bg-sky-500"
            ></span>
          </div>
        </div> -->
        <div
          class="absolute left-12 bottom-2 hidden h-36 w-36 opacity-30 lg:block"
          aria-hidden="true"
        >
          <div class="grid grid-cols-6 gap-4">
            <span
              v-for="item in 36"
              :key="item"
              class="h-1.5 w-1.5 rounded-full bg-sky-500"
            ></span>
          </div>
        </div>

        <div
          class="relative z-10 mx-auto max-w-xl text-center lg:mx-0 lg:flex-1 lg:text-left"
        >
          <h1
            class="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Halo, Saya <span class="text-sky-500">Titik</span>
            <span class="block text-sky-500">
              Guru IPA
              <span class="font-bold italic text-slate-950 dark:text-white"
                >Gen Z!</span
              >
            </span>
          </h1>

          <p
            class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl"
          >
            Menciptakan pembelajaran interaktif dan media ajar kreatif untuk
            pengalaman belajar yang mindful, meaningful, & joyful.
          </p>

          <div class="mt-8 flex justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/muhammad-hafidz-amanullah-abyan-4a8b191ab/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              <i class="mdi mdi-account"></i>
              Connect With Me!
            </a>
          </div>
        </div>

        <div class="relative mt-12 flex justify-center lg:mt-0 lg:flex-1">
          <div
            class="absolute h-80 w-80 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-700/20"
          ></div>

          <div
            class="relative rounded-[32px] border border-sky-200/60 bg-white/10 p-2 shadow-2xl shadow-sky-500/10 backdrop-blur-sm dark:border-slate-700"
          >
            <img
              class="relative z-10 w-72 rounded-[28px] object-contain sm:w-96 lg:w-[28rem]"
              src="/src/assets/Titik.png"
              alt="Titik"
            />

            <div class="absolute -left-6 top-8 z-20">
              <div class="badge-3d">
                <div
                  class="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg dark:bg-slate-900"
                >
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500 text-white text-xl"
                  >
                    <i class="mdi mdi-flask-outline"></i>
                  </div>

                  <span class="font-semibold text-slate-800 dark:text-white">
                    IPA
                  </span>
                </div>
              </div>
            </div>

            <div class="absolute -right-8 bottom-10 z-20">
              <div class="badge-3d">
                <div
                  class="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg dark:bg-slate-900"
                >
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500 text-white text-xl"
                  >
                    <i class="mdi mdi-school-outline"></i>
                  </div>

                  <span class="font-semibold text-slate-800 dark:text-white">
                    PPG Prajabatan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrow Down -->
      <div class="relative mt-1">
        <div class="absolute bottom-[25px] left-0 z-10 block w-full">
          <a
            href="#About"
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-500 shadow-md transition hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-200"
          >
            <i class="mdi mdi-arrow-down animate-bounce text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="Profile" class="bg-white py-20 dark:bg-slate-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- LEFT SIDE -->
        <div
          class="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 lg:col-span-2"
        >
          <div
            class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl"
          ></div>

          <div class="relative z-10">
            <div class="mb-6 flex items-center gap-3">
              <div class="h-[2px] w-10 rounded-full bg-sky-500"></div>

              <p
                class="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500"
              >
                Perkenalan Diri
              </p>
            </div>

            <h2
              class="text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-4xl"
            >
              Asal
              <span class="text-sky-500">Perjalanan</span>
            </h2>

            <p
              class="mt-6 text-lg leading-8 text-justify text-slate-600 dark:text-slate-400"
            >
              Halo, nama saya Titik. Saya berasal dari Banten, daerah yang kaya
              akan budaya, nilai kebersamaan, dan semangat gotong royong.
              Lingkungan tempat saya tumbuh mengajarkan pentingnya kepedulian,
              kesederhanaan, serta menghargai sesama. Nilai-nilai tersebut
              membentuk saya menjadi pribadi yang humble, cheerful, mudah
              bergaul, serta memiliki empati yang tinggi terhadap lingkungan
              sekitar. Sejak kecil, saya juga belajar menjadi pribadi yang
              mandiri dan kuat karena harus tumbuh tanpa sosok ayah. Pengalaman
              tersebut mengajarkan saya untuk lebih tangguh dalam menghadapi
              tantangan, menghargai proses kehidupan, dan selalu berusaha
              memberikan yang terbaik dalam setiap kesempatan.
            </p>

            <p
              class="mt-5 text-lg leading-8 text-justify text-slate-600 dark:text-slate-400"
            >
              Perjalanan pendidikan membawa saya merantau untuk menempuh studi
              S1 di Universitas Negeri Semarang (UNNES). Selama kuliah, saya
              aktif dalam organisasi, kegiatan sosial, dan pengabdian masyarakat
              karena saya percaya bahwa “kebahagiaan mereka adalah kebahagiaan
              kita”. Selain itu, saya juga memiliki jiwa kewirausahaan yang
              membuat saya senang mencoba hal baru, mengembangkan ide kreatif,
              dan terus belajar menjadi versi terbaik diri saya. Berbagai
              pengalaman tersebut membentuk saya menjadi pribadi yang adaptif,
              komunikatif, dan senang bertumbuh melalui pengalaman baru.
            </p>

            <div class="relative mt-12">
              <div
                class="animate-float relative overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500 px-8 py-8 text-white shadow-[0_20px_50px_rgba(14,165,233,0.25)] backdrop-blur-sm dark:border-slate-700"
              >
                <div
                  class="absolute -right-6 -top-14 select-none text-[140px] font-bold leading-none text-white/10"
                >
                  ”
                </div>

                <div
                  class="absolute left-6 top-5 select-none text-6xl font-bold text-white/15"
                >
                  “
                </div>

                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]"
                ></div>

                <div class="relative z-10">
                  <p
                    class="max-w-xl text-lg italic leading-9 text-white/90 md:text-[1.35rem]"
                  >
                    Belajar bukan untuk menjadi yang paling terbaik, tetapi agar
                    kita tidak berhenti bertumbuh dan terjebak dalam
                    kebodohan.
                  </p>

                  <div class="mt-8 flex items-center gap-4">
                    <div class="h-[2px] w-12 rounded-full bg-white/40"></div>

                    <p
                      class="text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
                    >
                      Indra Dwi Prasetyo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="flex flex-col gap-8">
          <div
            class="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <img
              :src="images[currentSlide]"
              alt="Profile"
              class="h-[420px] w-full object-cover transition duration-700"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
            ></div>

            <div class="absolute bottom-6 left-6 right-6 z-10 text-white">
              <p class="text-sm uppercase tracking-[0.2em] text-sky-300">
                {{ slideTexts[currentSlide].label }}
              </p>

              <h3 class="mt-2 text-2xl font-bold">
                {{ slideTexts[currentSlide].title }}
              </h3>
            </div>

            <div
              class="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-5"
            >
              <button
                @click="prevSlide"
                class="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/40"
              >
                <i class="mdi mdi-chevron-left text-2xl"></i>
              </button>

              <button
                @click="nextSlide"
                class="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/40"
              >
                <i class="mdi mdi-chevron-right text-2xl"></i>
              </button>
            </div>

            <div
              class="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
            >
              <div
                v-for="(item, index) in images"
                :key="index"
                class="h-2.5 rounded-full transition-all duration-500"
                :class="
                  currentSlide === index
                    ? 'w-8 bg-sky-400'
                    : 'w-2.5 bg-white/50'
                "
              ></div>
            </div>
          </div>

          <div
            class="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <details
              class="group border-b border-slate-200 dark:border-slate-800"
              open
            >
              <summary
                class="flex cursor-pointer list-none items-center justify-between px-6 py-5"
              >
                <div>
                  <p class="text-sm uppercase tracking-[0.2em] text-sky-500">
                    Culture
                  </p>

                  <h3
                    class="mt-1 text-lg font-semibold text-slate-800 dark:text-white"
                  >
                    Keunikan Daerah Asal
                  </h3>
                </div>

                <div
                  class="text-2xl text-sky-500 transition duration-500 group-open:rotate-180"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </div>
              </summary>

              <div class="px-6 pb-6">
                <p
                  class="leading-7 text-justify text-slate-600 dark:text-slate-400"
                >
                  Saya berasal dari Banten, daerah yang kaya akan budaya,
                  tradisi, dan nilai kebersamaan. Kehidupan masyarakat yang
                  masih menjunjung gotong royong, keramahan, serta filosofi
                  hidup sederhana dari budaya Baduy menjadi inspirasi dalam
                  kehidupan saya. Selain itu, keberagaman bahasa, kuliner, dan
                  tradisi di Banten membuat saya belajar untuk lebih terbuka dan
                  menghargai perbedaan. Lingkungan tersebut membentuk saya
                  menjadi pribadi yang kreatif, mudah beradaptasi, memiliki rasa
                  empati yang tinggi, dan mampu menjaga semangat kebersamaan
                  dalam belajar maupun bekerja.
                </p>
              </div>
            </details>

            <details
              class="group border-b border-slate-200 dark:border-slate-800"
            >
              <summary
                class="flex cursor-pointer list-none items-center justify-between px-6 py-5"
              >
                <div>
                  <p class="text-sm uppercase tracking-[0.2em] text-sky-500">
                    Inspiration
                  </p>

                  <h3
                    class="mt-1 text-lg font-semibold text-slate-800 dark:text-white"
                  >
                    Inspirasi Menjadi Guru
                  </h3>
                </div>

                <div
                  class="text-2xl text-sky-500 transition duration-500 group-open:rotate-180"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </div>
              </summary>

              <div class="px-6 pb-6">
                <p
                  class="leading-7 text-justify text-slate-600 dark:text-slate-400"
                >
                  Inspirasi saya menjadi guru berasal dari kepedulian terhadap
                  anak-anak yang memiliki keterbatasan akses pendidikan, namun
                  tetap memiliki semangat dan harapan untuk belajar. Dari
                  pengalaman tersebut, saya menyadari bahwa pendidikan bukan
                  hanya proses belajar di kelas, tetapi juga jembatan untuk
                  membantu seseorang meraih masa depan yang lebih baik. Saya
                  ingin menjadi guru yang tidak hanya mengajar, tetapi juga
                  menjadi pendengar, pembimbing, dan penyemangat bagi siswa.
                  Melalui pembelajaran yang kreatif, interaktif, dan bermakna,
                  saya berharap dapat menciptakan lingkungan belajar yang
                  membuat setiap anak merasa dihargai dan memiliki kesempatan
                  untuk berkembang.
                </p>
              </div>
            </details>

            <details class="group">
              <summary
                class="flex cursor-pointer list-none items-center justify-between px-6 py-5"
              >
                <div>
                  <p class="text-sm uppercase tracking-[0.2em] text-sky-500">
                    Goals
                  </p>

                  <h3
                    class="mt-1 text-lg font-semibold text-slate-800 dark:text-white"
                  >
                    Tujuan Menjadi Guru Profesional
                  </h3>
                </div>

                <div
                  class="text-2xl text-sky-500 transition duration-500 group-open:rotate-180"
                >
                  <i class="mdi mdi-chevron-down"></i>
                </div>
              </summary>

              <div class="px-6 pb-6">
                <p
                  class="leading-7 text-justify text-slate-600 dark:text-slate-400"
                >
                  Sebagai calon guru profesional, saya ingin menjadi guru yang
                  tidak hanya mengajar, tetapi juga menjadi pendamping dan ruang
                  tumbuh bagi peserta didik. Saya ingin menciptakan pembelajaran
                  yang membuat siswa merasa dihargai, didengar, dan percaya diri
                  untuk berkembang sesuai potensinya. Melalui media ajar
                  kreatif, pembelajaran interaktif, serta pendekatan mindful,
                  meaningful, and joyful learning, saya berharap dapat
                  menghadirkan kelas yang aktif, menyenangkan, dan berpihak pada
                  peserta didik. Saya ingin menciptakan lingkungan belajar yang
                  nyaman untuk bertanya, bereksplorasi, berpikir kritis, dan
                  belajar tanpa rasa takut, sehingga siswa tidak hanya memahami
                  materi, tetapi juga menikmati proses belajar dan mampu
                  mengaitkannya dengan kehidupan sehari-hari.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mt-20">
      <!-- HEADER -->
      <div class="text-center">
        <p
          class="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500"
        >
          Hobi
        </p>

        <h2
          class="mt-3 text-3xl font-bold text-slate-800 dark:text-white md:text-4xl"
        >
          Hal yang Saya <span class="text-sky-500">Sukai</span>
        </h2>

        <div class="mx-auto mt-4 h-[2px] w-20 rounded-full bg-sky-500"></div>

        <p
          class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400"
        >
          Aktivitas yang saya lakukan untuk menjaga kreativitas, ketenangan, dan
          pengembangan diri dalam keseharian.
        </p>
      </div>

      <!-- GRID -->
      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- CARD 1 -->
        <div class="group relative h-72 w-full [perspective:1200px]">
          <div
            class="relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-lg shadow-sky-500/10 group-hover:shadow-2xl group-hover:shadow-sky-500/30"
          >
            <!-- FRONT -->
            <div
              class="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-500 group-hover:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
              style="backface-visibility: hidden"
            >
              <div
                class="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-4xl shadow-inner shadow-sky-500/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500/20"
              >
                ✈️
              </div>

              <h3 class="text-xl font-semibold text-slate-800 dark:text-white">
                Traveling
              </h3>

              <p
                class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400"
              >
                Menjelajahi tempat baru dan budaya.
              </p>
            </div>

            <!-- BACK -->
            <div
              class="absolute inset-0 overflow-hidden rounded-2xl"
              style="transform: rotateX(180deg); backface-visibility: hidden"
            >
              <img
                src="/src/assets/traveling.png"
                class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>

              <div class="absolute bottom-5 left-5 right-5 text-white">
                <h3 class="text-xl font-semibold">Traveling</h3>
                <p class="mt-1 text-sm text-white/80">
                  Menikmati perjalanan dan cerita baru.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="group relative h-72 w-full [perspective:1200px]">
          <div
            class="relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-lg shadow-sky-500/10 group-hover:shadow-2xl group-hover:shadow-sky-500/30"
          >
            <!-- FRONT -->
            <div
              class="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-500 group-hover:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
              style="backface-visibility: hidden"
            >
              <div
                class="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-4xl shadow-inner shadow-sky-500/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500/20"
              >
                🎨
              </div>

              <h3 class="text-xl font-semibold text-slate-800 dark:text-white">
                Crafting
              </h3>

              <p
                class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400"
              >
                Membuat karya kreatif tangan.
              </p>
            </div>

            <!-- BACK -->
            <div
              class="absolute inset-0 overflow-hidden rounded-2xl"
              style="transform: rotateX(180deg); backface-visibility: hidden"
            >
              <img
                src="/src/assets/crafting.jpg"
                class="h-full w-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-110"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>

              <div class="absolute bottom-5 left-5 right-5 text-white">
                <h3 class="text-xl font-semibold">Crafting</h3>
                <p class="mt-1 text-sm text-white/80">
                  Merangkai ide menjadi karya.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CARD 3 -->
        <div class="group relative h-72 w-full [perspective:1200px]">
          <div
            class="relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-lg shadow-sky-500/10 group-hover:shadow-2xl group-hover:shadow-sky-500/30"
          >
            <!-- FRONT -->
            <div
              class="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-500 group-hover:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
              style="backface-visibility: hidden"
            >
              <div
                class="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-4xl shadow-inner shadow-sky-500/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500/20"
              >
                🐎
              </div>

              <h3 class="text-xl font-semibold text-slate-800 dark:text-white">
                Berkuda
              </h3>

              <p
                class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400"
              >
                Fokus, ketenangan, dan alam.
              </p>
            </div>

            <!-- BACK -->
            <div
              class="absolute inset-0 overflow-hidden rounded-2xl"
              style="transform: rotateX(180deg); backface-visibility: hidden"
            >
              <img
                src="/src/assets/kuda.jpg"
                class="h-full w-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-110"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>

              <div class="absolute bottom-5 left-5 right-5 text-white">
                <h3 class="text-xl font-semibold">Berkuda</h3>
                <p class="mt-1 text-sm text-white/80">
                  Melatih keberanian dan ketenangan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="relative mt-24 overflow-hidden py-10">
    <!-- HEADER -->
    <div class="text-center">
      <h2 class="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
        Jejak <span class="text-sky-500">Perjalanan</span>
      </h2>

      <div
        class="mx-auto mt-5 h-[3px] w-12 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
      ></div>

      <p
        class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400"
      >
        Perjalanan pendidikan, pengalaman kerja, dan karya yang membentuk proses
        bertumbuh saya.
      </p>
    </div>

    <!-- TIMELINE WRAPPER -->
    <div class="relative mx-auto mt-16 max-w-5xl">
      <!-- GARIS TIMELINE -->
      <div
        class="absolute left-8 top-0 h-full w-[2px] bg-sky-100 dark:bg-slate-700 md:left-10"
      ></div>

      <!-- ITEM 1 / PPG SEDANG BERJALAN -->
      <div class="group relative mb-10 flex gap-8">
        <!-- ICON TIMELINE -->
        <div
          class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-lg shadow-violet-500/20 ring-4 ring-violet-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-500 group-hover:ring-violet-300 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.45)] dark:bg-slate-900"
        >
          <div
            class="absolute inset-0 rounded-full bg-violet-500 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
          ></div>

          <i
            class="relative z-10 mdi mdi-account-school-outline text-2xl text-violet-500 transition-all duration-500 group-hover:text-white"
          ></i>
        </div>

        <!-- CARD -->
        <div
          class="relative w-full overflow-hidden rounded-[26px] border border-violet-200 bg-gradient-to-br from-white via-white to-violet-50 p-7 shadow-xl shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/25 dark:border-violet-500/30 dark:from-slate-900 dark:via-slate-900 dark:to-violet-950/40"
        >
          <!-- ICON DEKORATIF DALAM CARD -->
          <i
            class="mdi mdi-account-school-outline pointer-events-none absolute -right-4 top-4 text-8xl text-violet-500/10 transition-all duration-500 group-hover:right-6 group-hover:scale-125 group-hover:text-violet-500/25"
          ></i>

          <div class="relative z-10 flex flex-wrap items-center gap-3">
            <span
              class="inline-flex rounded-full bg-violet-500 px-4 py-1 text-sm font-bold text-white"
            >
              Pendidikan
            </span>

            <span
              class="inline-flex items-center gap-2 rounded-full border border-violet-300 bg-violet-50 px-4 py-1 text-xs font-bold text-violet-600 dark:border-violet-500/40 dark:bg-violet-500/10 dark:text-violet-300"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex h-2 w-2 rounded-full bg-violet-500"
                ></span>
              </span>
              Sedang Berjalan
            </span>
          </div>

          <h3
            class="relative z-10 mt-5 text-xl font-bold text-slate-800 dark:text-white"
          >
            Universitas Sultan Ageng Tirtayasa
          </h3>

          <p class="relative z-10 mt-2 font-semibold text-violet-500">
            PPG Prajabatan
          </p>

          <p
            class="relative z-10 mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400"
          >
            Menempuh Pendidikan Profesi Guru sebagai proses penguatan kompetensi
            pedagogik, profesional, sosial, dan kepribadian sebagai calon
            pendidik.
          </p>
        </div>
      </div>

      <!-- ITEM 2 -->
      <div class="group relative mb-10 flex gap-8">
        <!-- ICON TIMELINE -->
        <div
          class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-lg shadow-sky-500/20 ring-4 ring-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:ring-sky-300 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.45)] dark:bg-slate-900"
        >
          <div
            class="absolute inset-0 rounded-full bg-sky-500 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
          ></div>

          <i
            class="relative z-10 mdi mdi-school-outline text-2xl text-sky-500 transition-all duration-500 group-hover:text-white"
          ></i>
        </div>

        <!-- CARD -->
        <div
          class="relative w-full overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
        >
          <i
            class="mdi mdi-school-outline pointer-events-none absolute -right-4 top-4 text-8xl text-sky-500/10 transition-all duration-500 group-hover:right-6 group-hover:scale-125 group-hover:text-sky-500/25"
          ></i>

          <span
            class="relative z-10 inline-flex rounded-full bg-sky-500 px-4 py-1 text-sm font-bold text-white"
          >
            Pengalaman Kerja
          </span>

          <h3
            class="relative z-10 mt-5 text-xl font-bold text-slate-800 dark:text-white"
          >
            Guru SD Islam Tunas Harapan
          </h3>

          <p class="relative z-10 mt-2 font-semibold text-violet-500">
            Yayasan Al-Muhajirin
          </p>

          <p
            class="relative z-10 mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400"
          >
            Mengembangkan pengalaman mengajar pada jenjang sekolah dasar,
            khususnya dalam membangun kedekatan, komunikasi, dan pembelajaran
            yang menyenangkan bagi peserta didik.
          </p>
        </div>
      </div>

      <!-- ITEM 3 -->
      <div class="group relative mb-10 flex gap-8">
        <!-- ICON TIMELINE -->
        <div
          class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-lg shadow-sky-500/20 ring-4 ring-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:ring-sky-300 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.45)] dark:bg-slate-900"
        >
          <div
            class="absolute inset-0 rounded-full bg-sky-500 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
          ></div>

          <i
            class="relative z-10 mdi mdi-briefcase-outline text-2xl text-sky-500 transition-all duration-500 group-hover:text-white"
          ></i>
        </div>

        <!-- CARD -->
        <div
          class="relative w-full overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
        >
          <i
            class="mdi mdi-briefcase-outline pointer-events-none absolute -right-4 top-4 text-8xl text-sky-500/10 transition-all duration-500 group-hover:right-6 group-hover:scale-125 group-hover:text-sky-500/25"
          ></i>

          <span
            class="relative z-10 inline-flex rounded-full bg-sky-500 px-4 py-1 text-sm font-bold text-white"
          >
            Pengalaman Kerja
          </span>

          <h3
            class="relative z-10 mt-5 text-xl font-bold text-slate-800 dark:text-white"
          >
            Guru IPA (Infal) SMP N 11 Semarang
          </h3>

          <p class="relative z-10 mt-2 font-semibold text-violet-500">
            Pengalaman mengajar bidang IPA
          </p>

          <p
            class="relative z-10 mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400"
          >
            Berperan dalam mendampingi proses pembelajaran IPA, mengelola kelas,
            dan membantu peserta didik memahami konsep sains secara lebih dekat
            dengan kehidupan sehari-hari.
          </p>
        </div>
      </div>

      <!-- ITEM 4 -->
      <div class="group relative mb-10 flex gap-8">
        <!-- ICON TIMELINE -->
        <div
          class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-lg shadow-sky-500/20 ring-4 ring-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:ring-sky-300 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.45)] dark:bg-slate-900"
        >
          <div
            class="absolute inset-0 rounded-full bg-sky-500 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
          ></div>

          <i
            class="relative z-10 mdi mdi-palette-outline text-2xl text-sky-500 transition-all duration-500 group-hover:text-white"
          ></i>
        </div>

        <!-- CARD -->
        <div
          class="relative w-full overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
        >
          <i
            class="mdi mdi-palette-outline pointer-events-none absolute -right-4 top-4 text-8xl text-sky-500/10 transition-all duration-500 group-hover:right-6 group-hover:scale-125 group-hover:text-sky-500/25"
          ></i>

          <span
            class="relative z-10 inline-flex rounded-full bg-sky-500 px-4 py-1 text-sm font-bold text-white"
          >
            Entrepreneurship
          </span>

          <h3
            class="relative z-10 mt-5 text-xl font-bold text-slate-800 dark:text-white"
          >
            Crafter Liljoy Beadies
          </h3>

          <p class="relative z-10 mt-2 font-semibold text-violet-500">
            Creative Handmade Product
          </p>

          <p
            class="relative z-10 mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400"
          >
            Mengembangkan kreativitas melalui produk handmade, sekaligus melatih
            ketelitian, inovasi, dan jiwa kewirausahaan.
          </p>
        </div>
      </div>

      <!-- ITEM 5 -->
      <div class="group relative mb-10 flex gap-8">
        <!-- ICON TIMELINE -->
        <div
          class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-lg shadow-sky-500/20 ring-4 ring-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:ring-sky-300 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.45)] dark:bg-slate-900"
        >
          <div
            class="absolute inset-0 rounded-full bg-sky-500 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
          ></div>

          <i
            class="relative z-10 mdi mdi-flask-outline text-2xl text-sky-500 transition-all duration-500 group-hover:text-white"
          ></i>
        </div>

        <!-- CARD -->
        <div
          class="relative w-full overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
        >
          <i
            class="mdi mdi-flask-outline pointer-events-none absolute -right-4 top-4 text-8xl text-sky-500/10 transition-all duration-500 group-hover:right-6 group-hover:scale-125 group-hover:text-sky-500/25"
          ></i>

          <span
            class="relative z-10 inline-flex rounded-full bg-sky-500 px-4 py-1 text-sm font-bold text-white"
          >
            Pendidikan & Pengalaman Kampus
          </span>

          <h3
            class="relative z-10 mt-5 text-xl font-bold text-slate-800 dark:text-white"
          >
            Universitas Negeri Semarang (UNNES)
          </h3>

          <p class="relative z-10 mt-2 font-semibold text-violet-500">
            Pengembangan akademik, riset, dan organisasi
          </p>

          <ul
            class="relative z-10 mt-4 space-y-2 text-sm leading-7 text-slate-500 dark:text-slate-400"
          >
            <li>• Asisten Laboratorium Biokimia, Lab IPA FMIPA UNNES</li>
            <li>• Media pembelajaran Science Adventure Game</li>
            <li>• PPK Ormawa Bank Sampah Digital</li>
            <li>
              • PKM Riset Sosial Humaniora: Game Based Learning berbantuan
              Scratch
            </li>
          </ul>
        </div>
      </div>

      <!-- ITEM 6 / SMA BIASA -->
      <div class="group relative flex gap-8">
        <!-- ICON TIMELINE -->
        <div
          class="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-lg shadow-sky-500/20 ring-4 ring-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:ring-sky-300 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.45)] dark:bg-slate-900"
        >
          <div
            class="absolute inset-0 rounded-full bg-sky-500 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
          ></div>

          <i
            class="relative z-10 mdi mdi-school text-2xl text-sky-500 transition-all duration-500 group-hover:text-white"
          ></i>
        </div>

        <!-- CARD -->
        <div
          class="relative w-full overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
        >
          <i
            class="mdi mdi-school pointer-events-none absolute -right-4 top-4 text-8xl text-sky-500/10 transition-all duration-500 group-hover:right-6 group-hover:scale-125 group-hover:text-sky-500/25"
          ></i>

          <span
            class="relative z-10 inline-flex rounded-full bg-sky-500 px-4 py-1 text-sm font-bold text-white"
          >
            Sekolah
          </span>

          <h3
            class="relative z-10 mt-5 text-xl font-bold text-slate-800 dark:text-white"
          >
            SMA N 1 Ciruas
          </h3>

          <p
            class="relative z-10 mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400"
          >
            Tempat awal membangun fondasi akademik, karakter, dan semangat untuk
            terus belajar serta berkembang.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="About" class="bg-white dark:bg-slate-950 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative overflow-hidden rounded-3xl shadow-xl group">
          <img
            src="/src/assets/About.png"
            alt="Foto Kampus"
            class="w-full h-[520px] object-cover transition duration-700 group-hover:scale-105"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          ></div>

          <!-- Quote -->
          <div class="absolute bottom-8 left-8 right-8 text-white">
            <span class="text-5xl font-serif text-sky-300">“</span>

            <p class="mt-3 text-lg leading-relaxed max-w-md">
              Lingkungan akademik yang inspiratif dan nyaman untuk mendukung
              lahirnya generasi pendidik yang profesional dan berdaya saing.
            </p>
          </div>
        </div>

        <!-- Content -->
        <div>
          <!-- Label -->
          <!-- <div class="flex items-center gap-3 mb-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 dark:bg-slate-800"
            >
              <i class="bx bx-map text-sky-500"></i>
            </div>

            <p
              class="text-sm uppercase tracking-[0.2em] text-sky-500 font-semibold"
            >
              Tentang Kampus
            </p>
          </div> -->

          <!-- Heading -->
          <h2
            class="text-5xl md:text-6xl font-bold leading-tight text-slate-800 dark:text-white"
          >
            Discover Our
            <span class="text-sky-500">Campus</span>
          </h2>

          <!-- Divider -->
          <div class="flex items-center gap-2 mt-6">
            <div class="w-16 h-[3px] bg-sky-500 rounded-full"></div>
            <div
              class="w-8 h-[3px] bg-slate-300 dark:bg-slate-700 rounded-full"
            ></div>
          </div>

          <!-- Description -->
          <p class="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
            FKIP Universitas Sultan Ageng Tirtayasa berlokasi di kawasan
            strategis Kota Serang, Banten. Lingkungan kampus yang nyaman dan
            kondusif mendukung proses belajar, pengembangan akademik, serta
            berbagai aktivitas mahasiswa secara optimal.
          </p>

          <!-- Address Card -->
          <a
            href="https://maps.google.com/?q=FKIP+Untirta+Ciwaru"
            target="_blank"
            rel="noopener noreferrer"
            class="group mt-8 block rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg p-6 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 cursor-pointer"
          >
            <div class="flex flex-col sm:flex-row gap-6 sm:items-center">
              <!-- Icon -->
              <div
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white text-4xl shadow-lg shadow-sky-500/30 transition duration-500 group-hover:scale-110 group-hover:shadow-sky-500/50"
              >
                <i class="bx bx-map-pin"></i>
              </div>

              <!-- Divider -->
              <div
                class="hidden sm:block w-px h-24 bg-slate-200 dark:bg-slate-700"
              ></div>

              <!-- Text -->
              <div class="flex-1">
                <div class="flex items-center justify-between gap-3">
                  <h3
                    class="text-2xl font-bold text-slate-800 dark:text-white transition duration-300 group-hover:text-sky-500"
                  >
                    Kampus FKIP Untirta
                  </h3>

                  <!-- Arrow -->
                  <div
                    class="text-sky-500 text-2xl opacity-0 translate-x-[-10px] transition duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    <i class="bx bx-up-arrow-alt rotate-45"></i>
                  </div>
                </div>

                <p class="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                  Jl. Ciwaru Raya, Cipare, Kec. Serang <br />
                  Kota Serang, Provinsi Banten <br />
                  42117
                </p>

                <!-- Mini CTA -->
                <div
                  class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-500"
                >
                  <span>Lihat di Google Maps</span>
                  <i class="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Bottom Info -->
      <div
        class="mt-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-6 md:p-8"
      >
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <!-- Title -->
          <div>
            <p
              class="text-sm uppercase tracking-[0.2em] text-sky-500 font-semibold"
            >
              Akses dari
            </p>

            <h3 class="mt-2 text-2xl font-bold text-slate-800 dark:text-white">
              Lokasi Sekitar
            </h3>
          </div>

          <!-- Items -->
          <div
            v-for="access in accessInfo"
            :key="access.title"
            class="flex items-center gap-4 md:border-l md:border-slate-200 dark:md:border-slate-700 md:pl-8"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 dark:bg-slate-800 text-sky-500 text-2xl"
            >
              <i :class="access.icon"></i>
            </div>

            <div>
              <h4 class="text-xl font-bold text-slate-800 dark:text-white">
                {{ access.title }}
              </h4>

              <p class="text-slate-600 dark:text-slate-400">
                {{ access.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="About" class="bg-white dark:bg-slate-950 py-24 overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- LEFT CONTENT -->
        <div class="relative z-10">
          <h2
            class="text-5xl md:text-7xl font-bold leading-[1.1] text-slate-800 dark:text-white"
          >
            Discover
            <br />

            <span class="text-sky-500">Our School</span>
          </h2>

          <p
            class="mt-4 text-2xl md:text-3xl font-medium italic text-slate-500 dark:text-slate-400"
          >
            SMP Negeri 2 Serang
          </p>

          <div class="flex items-center gap-2 mt-8">
            <div class="w-20 h-[4px] bg-sky-500 rounded-full"></div>

            <div
              class="w-10 h-[4px] bg-slate-300 dark:bg-slate-700 rounded-full"
            ></div>
          </div>

          <p class="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
            SMP Negeri 2 Serang merupakan sekolah menengah pertama yang menjadi
            tempat pelaksanaan praktik pengalaman lapangan. Lingkungan sekolah
            yang aktif, disiplin, dan kondusif memberikan pengalaman berharga
            dalam mengembangkan kompetensi mengajar dan profesionalisme sebagai
            calon guru.
          </p>

          <div
            class="mt-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl"
          >
            <div class="flex gap-5">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 dark:bg-slate-800"
              >
                <i class="bx bxs-quote-alt-left text-3xl text-sky-500"></i>
              </div>

              <div>
                <p class="text-lg leading-8 text-slate-700 dark:text-slate-300">
                  Mewujudkan peserta didik yang beriman, berilmu, berprestasi,
                  dan berkarakter dalam lingkungan belajar yang inspiratif.
                </p>

                <div class="mt-4 flex items-center gap-2">
                  <div class="h-[2px] w-10 bg-sky-500 rounded-full"></div>

                  <span class="font-semibold text-sky-500">
                    SMP Negeri 2 Serang
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="relative">
          <div class="relative overflow-hidden rounded-[40px] shadow-2xl group">
            <img
              src="/src/assets/smp.png"
              alt="SMP Negeri 2 Serang"
              class="w-full h-[650px] object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div
            class="absolute -top-6 -left-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5 backdrop-blur-md"
          >
            <div class="flex items-center gap-4">
              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 text-white text-2xl"
              >
                <i class="bx bxs-graduation"></i>
              </div>

              <div>
                <h3 class="text-lg font-bold text-slate-800 dark:text-white">
                  Sekolah Unggul
                </h3>

                <p class="text-slate-500 dark:text-slate-400 text-sm">
                  Pendidikan Berkarakter
                </p>
              </div>
            </div>
          </div>

          <div
            class="absolute -z-10 -top-10 -right-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
          ></div>
        </div>
      </div>
      <div
        class="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 rounded-[28px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-5 shadow-xl overflow-hidden relative"
      >
        <div
          class="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl"
        ></div>

        <div class="relative z-10 max-w-xl">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-[2px] w-10 bg-sky-500 rounded-full"></div>

            <p
              class="text-xs uppercase tracking-[0.25em] text-sky-500 font-semibold"
            >
              Explore School
            </p>
          </div>

          <h3
            class="text-xl md:text-2xl font-bold leading-snug text-slate-800 dark:text-white"
          >
            Jelajahi Lingkungan
            <span class="text-sky-500">SMP Negeri 2 Serang</span>
          </h3>
        </div>

        <div
          class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="https://maps.app.goo.gl/Ni44ba5s1qEkrrjF9"
            target="_blank"
            class="group relative overflow-hidden rounded-2xl bg-sky-500 px-6 py-4 shadow-lg shadow-sky-500/20 transition duration-500 hover:-translate-y-1 hover:shadow-sky-500/40"
          >
            <div
              class="absolute inset-0 bg-white/10 opacity-0 transition duration-500 group-hover:opacity-100"
            ></div>

            <div class="relative z-10 flex items-center gap-4">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white text-2xl backdrop-blur-md transition duration-500 group-hover:scale-110"
              >
                <i class="bx bxs-map"></i>
              </div>

              <div>
                <p class="text-xs uppercase tracking-[0.18em] text-white/70">
                  Lokasi Sekolah
                </p>

                <h4 class="text-lg font-semibold text-white">
                  Buka Google Maps
                </h4>
              </div>

              <div
                class="ml-2 text-white text-2xl transition duration-500 group-hover:translate-x-1"
              >
                <i class="bx bx-right-arrow-alt"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  border-radius: 0;
}

.badge {
  background-color: #e2e8f0;
  color: #2d3748;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.dark .badge {
  background-color: #4a5568;
  color: #edf2f7;
}

.badge-3d {
  perspective: 1000px;
}

.badge-3d > div {
  transition:
    transform 0.7s ease,
    box-shadow 0.7s ease;
  transform-style: preserve-3d;
}

.badge-3d:hover > div {
  transform: rotateY(18deg) translateY(-4px);
  box-shadow:
    0 10px 30px rgba(14, 165, 233, 0.25),
    0 0 25px rgba(14, 165, 233, 0.35);
}

@keyframes floating {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.perspective {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

@keyframes floatUpDown {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }
}

.float-icon {
  animation: floatUpDown 3s ease-in-out infinite;
}

.float-delay-1 {
  animation-delay: 0s;
}

.float-delay-2 {
  animation-delay: 0.5s;
}

.float-delay-3 {
  animation-delay: 1s;
}
</style>
