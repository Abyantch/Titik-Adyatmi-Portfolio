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
                "border-t border-slate-100 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-800",
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
                  class:
                    "text-sky-500 bg-clip-text",
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

const DocumentLinks = defineComponent({
  props: ["title", "links"],
  setup(props) {
    return () =>
      h(
        "div",
        {
          class:
            "mt-12 rounded-[28px] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none",
        },
        [
          h(
            "h3",
            {
              class:
                "flex items-center gap-3 text-xl font-bold text-slate-800 dark:text-white",
            },
            [
              h("i", {
                class:
                  "mdi mdi-file-document-multiple-outline text-2xl text-sky-500",
              }),
              props.title,
            ],
          ),
          h(
            "div",
            { class: "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3" },
            props.links.map((link) =>
              h(
                "a",
                {
                  href: link.url,
                  target: "_blank",
                  class:
                    "group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-bold text-slate-600 transition-all duration-300 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
                },
                [
                  h("span", link.label),
                  h("i", {
                    class:
                      "mdi mdi-open-in-new text-lg transition-transform duration-300 group-hover:translate-x-1",
                  }),
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
  <section class="mt-10">
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
          <span
            class="text-sky-500 bg-clip-text"
          >
            Lingkungan Belajar
          </span>
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

      <DocumentLinks
        title="Dokumen Observasi"
        :links="[
          { label: 'Laporan Observasi Manajemen Sekolah', url: '#' },
          { label: 'Laporan Observasi Lingkungan Belajar', url: '#' },
        ]"
      />
    </div>

    <div v-else-if="activeTab === 'modul'" class="mt-10">
      <ContentSection
        title="Modul Ajar"
        highlight="Pembelajaran"
        description="Dokumen rancangan pembelajaran yang telah disusun dan diterapkan selama pelaksanaan PPL terbimbing."
        :cards="modulCards"
      />

      <DocumentLinks
        title="Dokumen Modul Ajar"
        :links="[
          {
            label: 'Modul Ajar Siklus 1',
            url: 'https://canva.link/drygyivhzyl5m8n',
          },
          {
            label: 'Modul Ajar Siklus 2',
            url: 'https://canva.link/m36i0wr2bd1a82i',
          },
          {
            label: 'Modul Ajar Siklus 3',
            url: 'https://canva.link/zvxdmwqpbvi6j4r',
          },
        ]"
      />
    </div>

    <!-- LKM -->
    <div v-else-if="activeTab === 'lkm'" class="mt-10">
      <ContentSection
        title="LKM"
        highlight="Lembar Kerja Murid"
        description="Lembar kerja murid yang dirancang untuk mendukung aktivitas observasi, diskusi, investigasi, proyek, dan refleksi."
        :cards="lkmCards"
      />

      <DocumentLinks
        title="Dokumen LKM"
        :links="[
          { label: 'LKM Siklus 1', url: '#' },
          { label: 'LKM Siklus 2', url: '#' },
          { label: 'LKM Siklus 3', url: '#' },
        ]"
      />
    </div>
  </section>
</template>


