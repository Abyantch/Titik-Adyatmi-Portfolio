<script setup>
import { ref, defineComponent, h } from "vue";

const activeTab = ref("observasi");

const tabs = [
  { id: "observasi", label: "Observasi", icon: "mdi mdi-magnify" },
  {
    id: "modul",
    label: "Modul Ajar",
    icon: "mdi mdi-book-open-page-variant-outline",
  },
  { id: "lkm", label: "LKM", icon: "mdi mdi-file-document-edit-outline" },
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

const lkmCards = [
  {
    icon: "mdi mdi-pencil-ruler",
    title: "Konteks Pengembangan",
    text: "LKM dikembangkan untuk mendukung implementasi Deep Learning melalui kegiatan observasi, diskusi, investigasi, proyek, dan refleksi yang mengakomodasi keberagaman kecerdasan peserta didik.",
  },
  {
    icon: "mdi mdi-bullseye-arrow",
    title: "Tujuan Instruksional",
    text: "LKM memandu murid membangun pemahaman konseptual mengenai struktur bumi, pergerakan lempeng, dan gempa bumi melalui kegiatan pengamatan, kolaborasi, dan proyek.",
  },
  {
    icon: "mdi mdi-check-decagram-outline",
    title: "Kelebihan Lembar Kerja",
    text: "LKM disusun bertahap mulai dari eksplorasi konsep, pengamatan fenomena, analisis, hingga penyajian hasil belajar. Diferensiasi produk memberi ruang belajar aktif sesuai gaya belajar murid.",
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
</script>

<template>
  <section class="relative overflow-hidden px-6 pb-20 pt-24">
    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="text-center">
        <h1
          class="mt-8 text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white md:text-6xl"
        >
          Artefak
          <span class="text-sky-500 bg-clip-text"> Pembelajaran </span>
        </h1>

        <p
          class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
        >
          Dokumentasi terstruktur yang mencakup hasil observasi, perangkat
          pembelajaran dan evaluasi praktik mengajar selama masa pendidikan
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
            <h3 class="mt-2 text-lg font-bold text-slate-800 dark:text-white">
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
            <h3 class="mt-2 text-lg font-bold text-slate-800 dark:text-white">
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
            <h3 class="mt-2 text-lg font-bold text-slate-800 dark:text-white">
              Titiek Triadyatmi, S.Pd
            </h3>
          </div>
        </div>
      </div>

      <div class="mt-20 border-t-2 border-dashed border-slate-300/80"></div>
    </div>
  </section>
  <section class="mt-5 px-10">
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

    <!-- OBSERVASI -->
    <div v-if="activeTab === 'observasi'" class="mt-10">
      <div class="text-center">
        <h2
          class="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl"
        >
          Observasi Sekolah &
          <span class="text-sky-500 bg-clip-text"> Lingkungan Belajar </span>
        </h2>

        <p
          class="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400"
        >
          Laporan hasil pengamatan karakteristik peserta didik, lingkungan
          belajar, dan budaya sekolah selama pelaksanaan PPL 1.
        </p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-3">
        <InsightCard
          color="blue"
          icon="mdi mdi-account-group"
          title="Karakteristik Murid"
          target="Pembelajaran Berdiferensiasi Berbasis Kecerdasan Majemuk"
          :items="[
            {
              label: 'Komunikatif dan Kolaboratif',
              text: 'Sebagian besar peserta didik memiliki kecerdasan linguistik yang kuat sehingga lebih mudah belajar melalui diskusi, presentasi, membaca, menulis, dan mengemukakan pendapat. (40,6% peserta didik)',
            },
            {
              label: 'Memiliki Potensi Berpikir Kritis',
              text: 'Sebagian peserta didik menunjukkan kecerdasan logis-matematis yang baik melalui ketertarikan terhadap pemecahan masalah, eksperimen, dan aktivitas yang menuntut penalaran sistematis.',
            },
            {
              label: 'Memerlukan Diferensiasi Pembelajaran',
              text: 'Peserta didik dengan kecerdasan kinestetik, visual, dan intrapersonal memerlukan pembelajaran berbasis praktik, simulasi, media visual, serta refleksi diri.',
              warning: true,
            },
          ]"
        />

        <InsightCard
          color="violet"
          icon="mdi mdi-school"
          title="Kultur & Lingkungan Sekolah"
          target="Penguatan Karakter & Keterlibatan Murid"
          :items="[
            {
              label: 'Budaya Sekolah Positif',
              text: 'Sekolah menerapkan budaya disiplin, religius, dan gotong royong melalui sapa pagi, salat dhuha, mengaji, upacara bendera, serta kegiatan OSIS.',
            },
            {
              label: 'Lingkungan Sosial Harmonis',
              text: 'Warga sekolah berasal dari latar belakang yang beragam namun mampu menjaga hubungan yang rukun, saling menghargai, dan menjunjung tinggi toleransi.',
            },
            {
              label: 'Kepadatan Kelas',
              text: 'Jumlah peserta didik per kelas relatif tinggi sehingga ruang belajar terasa cukup padat dan memerlukan strategi pembelajaran yang menjaga keterlibatan murid.',
              warning: true,
            },
          ]"
        />

        <InsightCard
          color="cyan"
          icon="mdi mdi-monitor-dashboard"
          title="Sarana & Prasarana"
          target="Pemanfaatan Media Interaktif yang Adaptif"
          :items="[
            {
              label: 'Fasilitas Pembelajaran',
              text: 'Didukung laboratorium, perpustakaan, aula, dan perangkat pembelajaran yang memadai.',
            },
            {
              label: 'Lingkungan Belajar',
              text: 'Bangunan hasil revitalisasi menciptakan suasana belajar yang bersih dan nyaman.',
            },
            {
              label: 'Catatan Khusus',
              text: 'Keterbatasan lahan membuat lapangan dan beberapa ruang belajar terasa sempit. Akses internet belum optimal dan proyektor masih terbatas.',
              warning: true,
            },
          ]"
        />
      </div>

      <div class="mt-12">
        <PdfPreviewCard
          title="Laporan Observasi Manajemen Sekolah"
          file="/pdf/laporan-observasi-manajemen-sekolah.pdf"
        />

        <PdfPreviewCard
          title="Laporan Observasi Lingkungan Belajar"
          file="/pdf/laporan-observasi-lingkungan-belajar.pdf"
        />
      </div>
    </div>

    <!-- MODUL AJAR -->
    <div v-else-if="activeTab === 'modul'" class="mt-10">
      <ContentSection
        title="Modul Ajar"
        highlight="Pembelajaran"
        description="Dokumen rancangan pembelajaran yang telah disusun dan diterapkan selama pelaksanaan PPL terbimbing."
        :cards="modulCards"
      />

      <div class="mt-12">
        <PdfPreviewCard
          title="Dokumen Modul Ajar Siklus 1"
          file="/pdf/modul-ajar-siklus-1.pdf"
        />

        <PdfPreviewCard
          title="Dokumen Modul Ajar Siklus 2"
          file="/pdf/modul-ajar-siklus-2.pdf"
        />

        <PdfPreviewCard
          title="Dokumen Modul Ajar Siklus 3"
          file="/pdf/modul-ajar-siklus-3.pdf"
        />
      </div>
    </div>

    <!-- LKM -->
    <div v-else-if="activeTab === 'lkm'" class="mt-10">
      <ContentSection
        title="LKM"
        highlight="Lembar Kerja Murid"
        description="Lembar kerja murid yang dirancang untuk mendukung aktivitas observasi, diskusi, investigasi, proyek, dan refleksi."
        :cards="lkmCards"
      />
        <div class="mt-12">
            <PdfPreviewCard
            title="LKM Siklus 1"
            file="/pdf/lkm-siklus-1.pdf"
            />
    
            <PdfPreviewCard
            title="LKM Siklus 2"
            file="/pdf/lkm-siklus-2.pdf"
            />
    
            <PdfPreviewCard
            title="LKM Siklus 3"
            file="/pdf/lkm-siklus-3.pdf"
            />
        </div>
    </div>

    <div class="mt-20 border-t-2 border-dashed border-slate-300/80"></div>
  </section>
  <section class="relative mt-15 overflow-hidden py-20">
    <!-- BACKGROUND GLOW -->
    <div
      class="absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
    ></div>
    <div
      class="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl"
    ></div>

    <div class="relative z-10 mx-auto max-w-6xl px-6">
      <!-- HEADER -->
      <div class="text-center">
        <p
          class="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500"
        >
          Refleksi Produk
        </p>

        <h2
          class="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-5xl"
        >
          Analisis & Refleksi
          <span
            class="block bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent"
          >
            Produk Pembelajaran
          </span>
        </h2>

        <div
          class="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
        ></div>

        <p
          class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400"
        >
          Evaluasi mendalam terhadap proses perancangan, implementasi, hingga
          penyesuaian perangkat ajar.
        </p>
      </div>

      <!-- REFLECTION GRID -->
      <div class="mt-16 grid gap-8 md:grid-cols-2">
        <!-- CARD 1 -->
        <div
          class="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none"
        >
          <div
            class="absolute -right-6 -top-8 text-[130px] font-extrabold leading-none text-sky-500/10 transition-all duration-500 group-hover:right-4 group-hover:scale-110 group-hover:text-sky-500/20"
          >
            01
          </div>

          <div
            class="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/30"
          >
            <i class="mdi mdi-alert-circle-outline text-3xl"></i>
          </div>

          <h3
            class="relative z-10 mt-6 text-2xl font-bold text-slate-800 dark:text-white"
          >
            Kendala Penyusunan
          </h3>

          <p
            class="relative z-10 mt-4 text-sm leading-8 text-slate-600 dark:text-slate-400"
          >
            Tantangan utama terletak pada penyusunan aktivitas yang mampu
            mengakomodasi keberagaman kebutuhan belajar peserta didik secara
            seimbang. Perancangan modul dan LKM memerlukan penyesuaian antara
            tujuan pembelajaran, diferensiasi aktivitas, asesmen, serta produk
            yang dihasilkan agar tetap selaras dengan Dimensi Profil Lulusan.
            Pengembangan media, proyek, dan instrumen penilaian juga membutuhkan
            waktu panjang karena harus mengukur aspek pengetahuan, keterampilan,
            dan sikap secara terpadu.
          </p>
        </div>

        <!-- CARD 2 -->
        <div
          class="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-violet-500/20 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none"
        >
          <div
            class="absolute -right-6 -top-8 text-[130px] font-extrabold leading-none text-violet-500/10 transition-all duration-500 group-hover:right-4 group-hover:scale-110 group-hover:text-violet-500/20"
          >
            02
          </div>

          <div
            class="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/30"
          >
            <i class="mdi mdi-lightbulb-on-outline text-3xl"></i>
          </div>

          <h3
            class="relative z-10 mt-6 text-2xl font-bold text-slate-800 dark:text-white"
          >
            Teori & Konsep Pedagogi
          </h3>

          <p
            class="relative z-10 mt-4 text-sm leading-8 text-slate-600 dark:text-slate-400"
          >
            Produk pembelajaran dirancang dengan mengintegrasikan pendekatan
            Deep Learning yang mencakup Mindful Learning, Meaningful Learning,
            dan Joyful Learning melalui model Project Based Learning, Problem
            Based Learning, dan Inquiry Based Learning. Desain pembelajaran
            diperkuat dengan prinsip pembelajaran berdiferensiasi yang
            mengakomodasi kecerdasan majemuk peserta didik melalui aktivitas
            visual, kinestetik, dan auditori.
          </p>
        </div>

        <!-- CARD 3 -->
        <div
          class="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-sky-500/20 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none"
        >
          <div
            class="absolute -right-6 -top-8 text-[130px] font-extrabold leading-none text-sky-500/10 transition-all duration-500 group-hover:right-4 group-hover:scale-110 group-hover:text-sky-500/20"
          >
            03
          </div>

          <div
            class="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/30"
          >
            <i class="mdi mdi-chart-line text-3xl"></i>
          </div>

          <h3
            class="relative z-10 mt-6 text-2xl font-bold text-slate-800 dark:text-white"
          >
            Faktor Keberhasilan
          </h3>

          <p
            class="relative z-10 mt-4 text-sm leading-8 text-slate-600 dark:text-slate-400"
          >
            Permasalahan utama kelas VIII-I adalah rendahnya motivasi belajar
            peserta didik. Melalui pembelajaran berbasis proyek, simulasi, dan
            produk kreatif, peserta didik menjadi lebih aktif dan antusias
            selama proses pembelajaran. Tingginya capaian asesmen formatif dan
            hasil produk menunjukkan bahwa pendekatan yang digunakan berhasil
            meningkatkan keterlibatan sekaligus pemahaman konsep peserta didik.
          </p>
        </div>

        <!-- CARD 4 -->
        <div
          class="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-violet-500/20 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none"
        >
          <div
            class="absolute -right-6 -top-8 text-[130px] font-extrabold leading-none text-violet-500/10 transition-all duration-500 group-hover:right-4 group-hover:scale-110 group-hover:text-violet-500/20"
          >
            04
          </div>

          <div
            class="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/30"
          >
            <i class="mdi mdi-sync-circle text-3xl"></i>
          </div>

          <h3
            class="relative z-10 mt-6 text-2xl font-bold text-slate-800 dark:text-white"
          >
            Perubahan & Penyesuaian
          </h3>

          <p
            class="relative z-10 mt-4 text-sm leading-8 text-slate-600 dark:text-slate-400"
          >
            Melalui proses inkuiri kolaboratif, refleksi bersama menunjukkan
            bahwa peserta didik lebih mudah memahami konsep melalui proyek dan
            diskusi, tetapi masih memerlukan penguatan dalam menghubungkan
            konsep antar topik. Oleh karena itu, pembelajaran selanjutnya
            disesuaikan dengan memperbanyak aktivitas investigasi, pertanyaan
            pemantik, dan refleksi terstruktur untuk memperkuat pemahaman
            konseptual serta penalaran kritis peserta didik.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
