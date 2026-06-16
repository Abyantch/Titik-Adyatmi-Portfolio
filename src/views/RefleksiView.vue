<template>
  <section class="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-24 text-white">
    <!-- BACKGROUND GRID -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
    <div class="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"></div>
    <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- HERO / MISSION CONSOLE -->
      <div class="rounded-[36px] border border-sky-500/20 bg-white/10 p-8 shadow-2xl shadow-sky-500/10 backdrop-blur-xl">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-sky-300">
              <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              Mission Completed
            </div>

            <h1 class="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Mission:
              <span class="block bg-gradient-to-r from-sky-300 via-sky-500 to-violet-400 bg-clip-text text-transparent">
                Refleksi PPL
              </span>
            </h1>

            <p class="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Menganalisis perjalanan dari orientasi hingga praktik mengajar untuk menemukan strategi pembelajaran yang lebih bermakna, adaptif, dan berpihak pada murid.
            </p>
          </div>

          <div class="relative mx-auto h-64 w-64 shrink-0">
            <div class="absolute inset-0 rounded-full border border-dashed border-sky-400/40"></div>
            <div class="absolute inset-8 rounded-full border border-dashed border-violet-400/40"></div>
            <div class="absolute inset-16 rounded-full bg-gradient-to-br from-sky-500 to-violet-500 shadow-2xl shadow-sky-500/30"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="mdi mdi-radar text-8xl text-white"></i>
            </div>
          </div>
        </div>

        <!-- STATUS BAR -->
        <div class="mt-10 grid gap-4 md:grid-cols-4">
          <MissionStat icon="mdi mdi-compass-outline" label="Orientasi" status="Complete" />
          <MissionStat icon="mdi mdi-magnify" label="Observasi" status="Complete" />
          <MissionStat icon="mdi mdi-handshake-outline" label="Asistensi" status="Complete" />
          <MissionStat icon="mdi mdi-rocket-launch-outline" label="Praktik" status="Complete" />
        </div>
      </div>

      <!-- MISSION LOGS -->
      <section class="mt-14">
        <SectionTitle
          badge="Mission Logs"
          title="Evolusi Pembelajaran PPL Terbimbing"
          desc="Klik log misi untuk membaca fase perjalanan belajar selama PPL."
        />

        <div class="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div class="space-y-4">
            <button
              v-for="log in logs"
              :key="log.id"
              @click="activeLog = log.id"
              :class="[
                'group w-full rounded-[26px] border p-5 text-left transition-all duration-300',
                activeLog === log.id
                  ? 'border-sky-400 bg-sky-500/15 shadow-xl shadow-sky-500/20'
                  : 'border-white/10 bg-white/5 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white/10'
              ]"
            >
              <div class="flex items-center gap-4">
                <div
                  :class="[
                    'flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6',
                    activeLog === log.id ? 'bg-sky-500 text-white' : 'bg-sky-500/10 text-sky-300'
                  ]"
                >
                  <i :class="`${log.icon} text-2xl`"></i>
                </div>

                <div>
                  <p class="text-xs font-black uppercase tracking-[0.2em] text-sky-300">
                    {{ log.code }}
                  </p>
                  <h3 class="mt-1 text-lg font-black">
                    {{ log.title }}
                  </h3>
                </div>
              </div>
            </button>
          </div>

          <div class="scan-card relative overflow-hidden rounded-[32px] border border-sky-400/20 bg-slate-900/80 p-8 shadow-2xl shadow-sky-500/10">
            <i :class="`${currentLog.icon} absolute -right-6 top-4 text-[150px] text-sky-500/10`"></i>

            <p class="relative z-10 text-xs font-black uppercase tracking-[0.25em] text-sky-300">
              {{ currentLog.code }}
            </p>

            <h2 class="relative z-10 mt-4 text-4xl font-black">
              {{ currentLog.title }}
            </h2>

            <div class="relative z-10 mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-sky-400 to-violet-400"></div>

            <p class="relative z-10 mt-6 text-base leading-8 text-slate-300">
              {{ currentLog.text }}
            </p>
          </div>
        </div>
      </section>

      <!-- CHALLENGE LAB -->
      <section class="mt-16">
        <SectionTitle
          badge="Challenge Lab"
          title="Uji Strategi Pembelajaran"
          desc="Pilih masalah kelas, lalu lihat formula strategi yang diterapkan."
        />

        <div class="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 class="text-xl font-black">Problem Input</h3>

            <div class="mt-6 space-y-4">
              <button
                v-for="problem in problems"
                :key="problem.id"
                @click="activeProblem = problem.id"
                :class="[
                  'w-full rounded-[24px] border p-5 text-left transition-all duration-300',
                  activeProblem === problem.id
                    ? 'border-violet-400 bg-violet-500/15 shadow-lg shadow-violet-500/20'
                    : 'border-white/10 bg-slate-900/60 hover:-translate-y-1 hover:border-violet-400/50'
                ]"
              >
                <p class="font-black">{{ problem.title }}</p>
                <p class="mt-2 text-sm leading-6 text-slate-400">
                  {{ problem.text }}
                </p>
              </button>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-[32px] border border-sky-400/20 bg-gradient-to-br from-sky-500/15 to-violet-500/15 p-8 shadow-2xl shadow-sky-500/10">
            <i class="mdi mdi-flask-outline absolute -right-6 top-4 text-[140px] text-white/10"></i>

            <p class="text-xs font-black uppercase tracking-[0.25em] text-sky-300">
              Strategy Formula
            </p>

            <h3 class="mt-4 text-3xl font-black">
              {{ currentProblem.solution }}
            </h3>

            <p class="mt-5 text-sm leading-8 text-slate-300">
              {{ currentProblem.detail }}
            </p>

            <div class="mt-7 rounded-[24px] border border-white/10 bg-slate-950/50 p-5">
              <p class="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
                Output Refleksi
              </p>
              <p class="mt-3 text-sm leading-7 text-slate-300">
                {{ currentProblem.output }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- GROWTH DASHBOARD -->
      <section class="mt-16">
        <SectionTitle
          badge="Growth Dashboard"
          title="Before vs After Praktik PPL"
          desc="Perubahan cara pandang mengajar setelah melalui proses refleksi dan praktik terbimbing."
        />

        <div class="mt-8 grid gap-6 lg:grid-cols-2">
          <GrowthPanel
            title="Sebelum PPL"
            tone="slate"
            :items="[
              'Pembelajaran masih cenderung fokus pada penyampaian materi.',
              'Strategi diferensiasi belum sepenuhnya terencana.',
              'Refleksi pembelajaran belum dilakukan secara terstruktur.',
            ]"
          />

          <GrowthPanel
            title="Setelah PPL"
            tone="gradient"
            :items="[
              'Pembelajaran lebih berpusat pada murid.',
              'Mengintegrasikan Deep Learning dan pembelajaran berdiferensiasi.',
              'Refleksi dan asesmen menjadi dasar perbaikan berkelanjutan.',
            ]"
          />
        </div>
      </section>

      <!-- FINAL REPORT -->
      <section class="mt-16">
        <div class="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-sky-500 via-blue-600 to-violet-500 p-10 text-center shadow-2xl shadow-sky-500/30">
          <i class="mdi mdi-file-check-outline absolute right-8 top-6 text-8xl text-white/15"></i>

          <p class="text-sm font-black uppercase tracking-[0.25em] text-white/70">
            Mission Report
          </p>

          <h2 class="mt-4 text-3xl font-black md:text-5xl">
            Umpan Balik Konstruktif
          </h2>

          <p class="mx-auto mt-7 max-w-4xl text-lg font-medium leading-9 text-white/90">
            “Pembelajaran yang dirancang sudah menunjukkan upaya yang baik dalam meningkatkan keterlibatan peserta didik melalui aktivitas proyek, diskusi, dan pembelajaran kontekstual. Ke depan, perlu penguatan strategi untuk memotivasi peserta didik yang masih pasif, pemerataan partisipasi dalam kelompok, serta pemanfaatan media pembelajaran yang lebih fleksibel.”
          </p>

          <p class="mt-6 font-semibold text-white/80">
            — Hasil Refleksi Bersama
          </p>
        </div>
      </section>

      <!-- NEXT MISSION -->
      <section class="mt-16">
        <SectionTitle
          badge="Next Mission"
          title="Tindak Lanjut Perbaikan"
          desc="Langkah berkelanjutan untuk meningkatkan kualitas pembelajaran berikutnya."
        />

        <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <NextMission icon="mdi mdi-target" title="Motivasi Belajar" text="Ice breaking, simulasi, gallery walk, proyek kreatif, media interaktif, dan game edukatif." />
          <NextMission icon="mdi mdi-account-group-outline" title="Partisipasi Aktif" text="Pembagian peran, pertanyaan pemantik, dan scaffolding untuk mendorong keterlibatan semua murid." />
          <NextMission icon="mdi mdi-laptop" title="Media Adaptif" text="LKPD, media visual, simulasi sederhana, dan strategi pembelajaran tanpa bergantung penuh pada internet." />
          <NextMission icon="mdi mdi-clipboard-check-outline" title="Refleksi & Asesmen" text="Refleksi murid dan hasil asesmen menjadi dasar umpan balik serta perbaikan berkelanjutan." />
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { computed, defineComponent, h, ref } from "vue";

const activeLog = ref("orientasi");
const activeProblem = ref("motivasi");

const logs = [
  {
    id: "orientasi",
    code: "LOG-01",
    icon: "mdi mdi-compass-outline",
    title: "Orientasi",
    text: "Melakukan adaptasi terhadap lingkungan sekolah, budaya akademik, sarana prasarana, serta program pembiasaan di SMPN 2 Kota Serang. Tahap ini memberikan pemahaman awal mengenai kondisi sekolah sebagai landasan dalam merancang pembelajaran yang sesuai dengan konteks peserta didik.",
  },
  {
    id: "observasi",
    code: "LOG-02",
    icon: "mdi mdi-magnify",
    title: "Observasi",
    text: "Mengidentifikasi karakteristik peserta didik melalui observasi kelas dan profiling kecerdasan majemuk berdasarkan Teori Howard Gardner. Hasil observasi menunjukkan keberagaman karakteristik belajar serta rendahnya motivasi belajar pada sebagian peserta didik.",
  },
  {
    id: "asistensi",
    code: "LOG-03",
    icon: "mdi mdi-handshake-outline",
    title: "Asistensi",
    text: "Berkolaborasi dengan guru pamong dalam menyusun modul ajar, LKM, asesmen, dan media pembelajaran berbasis Deep Learning. Diskusi dan refleksi dilakukan untuk memastikan perangkat pembelajaran mampu mengakomodasi kebutuhan peserta didik.",
  },
  {
    id: "praktik",
    code: "LOG-04",
    icon: "mdi mdi-rocket-launch-outline",
    title: "Praktik Mengajar",
    text: "Mengimplementasikan pembelajaran pada materi Struktur Bumi, Lempeng Tektonik, dan Gempa Bumi melalui diskusi, simulasi, proyek, gallery walk, dan presentasi kelompok. Hasil praktik direfleksikan melalui inquiry kolaboratif sebagai dasar perbaikan pembelajaran berkelanjutan.",
  },
];

const problems = [
  {
    id: "motivasi",
    title: "Motivasi belajar rendah",
    text: "Sebagian peserta didik kurang antusias pada tahap awal pembelajaran.",
    solution: "Project Based Learning + Aktivitas Kontekstual",
    detail: "Menggunakan proyek, simulasi, dan studi kasus agar peserta didik lebih terlibat aktif dan melihat keterkaitan materi dengan kehidupan nyata.",
    output: "Peserta didik lebih mudah terlibat karena aktivitas belajar terasa dekat dengan pengalaman mereka.",
  },
  {
    id: "pasif",
    title: "Peserta didik cenderung pasif",
    text: "Partisipasi diskusi dan kontribusi kelompok belum merata.",
    solution: "Scaffolding + Peran Kelompok",
    detail: "Memberikan pembagian peran yang jelas, pertanyaan pemantik, serta pendampingan bertahap untuk mendorong partisipasi seluruh peserta didik.",
    output: "Interaksi kelompok menjadi lebih terarah dan setiap peserta didik memiliki ruang kontribusi.",
  },
  {
    id: "sarpras",
    title: "Sarana digital terbatas",
    text: "Akses internet dan proyektor belum sepenuhnya mendukung.",
    solution: "Media Adaptif Offline",
    detail: "Menyiapkan alternatif pembelajaran yang tidak bergantung penuh pada internet, memanfaatkan LKPD, media visual, simulasi sederhana, dan diskusi tatap muka.",
    output: "Pembelajaran tetap berjalan meskipun fasilitas digital belum sepenuhnya optimal.",
  },
];

const currentLog = computed(() => logs.find((item) => item.id === activeLog.value));
const currentProblem = computed(() => problems.find((item) => item.id === activeProblem.value));

const SectionTitle = defineComponent({
  props: ["badge", "title", "desc"],
  setup(props) {
    return () =>
      h("div", { class: "text-center" }, [
        h("p", { class: "text-sm font-black uppercase tracking-[0.3em] text-sky-300" }, props.badge),
        h("h2", { class: "mt-3 text-3xl font-black text-white md:text-4xl" }, props.title),
        h("p", { class: "mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400" }, props.desc),
      ]);
  },
});

const MissionStat = defineComponent({
  props: ["icon", "label", "status"],
  setup(props) {
    return () =>
      h("div", { class: "rounded-[24px] border border-white/10 bg-slate-950/40 p-5" }, [
        h("div", { class: "flex items-center gap-3" }, [
          h("div", { class: "flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300" }, [
            h("i", { class: `${props.icon} text-2xl` }),
          ]),
          h("div", [
            h("p", { class: "font-black" }, props.label),
            h("p", { class: "text-xs font-bold text-emerald-400" }, props.status),
          ]),
        ]),
      ]);
  },
});

const GrowthPanel = defineComponent({
  props: ["title", "items", "tone"],
  setup(props) {
    const isGradient = props.tone === "gradient";

    return () =>
      h(
        "div",
        {
          class: isGradient
            ? "rounded-[32px] bg-gradient-to-br from-sky-500 to-violet-500 p-8 shadow-2xl shadow-sky-500/20"
            : "rounded-[32px] border border-white/10 bg-white/5 p-8",
        },
        [
          h("h3", { class: "text-2xl font-black" }, props.title),
          h(
            "ul",
            { class: `mt-6 space-y-4 text-sm leading-7 ${isGradient ? "text-white/90" : "text-slate-300"}` },
            props.items.map((item) => h("li", item))
          ),
        ]
      );
  },
});

const NextMission = defineComponent({
  props: ["icon", "title", "text"],
  setup(props) {
    return () =>
      h("div", { class: "group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20" }, [
        h("i", { class: `${props.icon} absolute -right-5 top-5 text-8xl text-sky-500/10 transition-all duration-500 group-hover:right-4 group-hover:scale-125` }),
        h("div", { class: "relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-sky-500 group-hover:text-white" }, [
          h("i", { class: `${props.icon} text-3xl` }),
        ]),
        h("h3", { class: "relative z-10 mt-5 text-xl font-black" }, props.title),
        h("p", { class: "relative z-10 mt-4 text-sm leading-7 text-slate-400" }, props.text),
      ]);
  },
});
</script>

<style scoped>
.scan-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    transparent,
    rgba(14, 165, 233, 0.12),
    transparent
  );
  transform: translateY(-100%);
  animation: scan 4s linear infinite;
}

@keyframes scan {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>