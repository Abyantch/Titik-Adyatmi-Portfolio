import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'profil',
    component: () => import('../views/ProfilView.vue')
  },

  {
    path: "/seminar/refleksi",
    name: "seminar-refleksi",
    component: () => import("../views/Seminar-RefleksiView.vue"),
  },
  {
    path: "/seminar/artefak",
    name: "seminar-artefak",
    component: () => import("../views/Seminar-ArtefakView.vue"),
  },
  {
    path: "/seminar/3",
    name: "seminar-3",
    component: () => import("../views/Seminar3View.vue"),
  },

  {
    path: '/ppl/semester-1/artefak',
    name: 'ppl-semester-1-artefak',
    component: () => import('../views/ArtefakView.vue')
  },
  {
    path: '/ppl/semester-1/feedback',
    name: 'ppl-semester-1-feedback',
    component: () => import('../views/FeedbackView.vue')
  },
  {
    path: '/ppl/semester-1/model-guru',
    name: 'ppl-semester-1-model-guru',
    component: () => import('../views/ModelGuruView.vue')
  },
  {
    path: '/ppl/semester-1/refleksi',
    name: 'ppl-semester-1-refleksi',
    component: () => import('../views/RefleksiView.vue')
  },
  {
    path: '/ppl/semester-1/filosofi-mengajar',
    name: 'ppl-semester-1-filosofi-mengajar',
    component: () => import('../views/FilosofiMengajarView.vue')
  },
  {
    path: '/ppl/semester-2/topik-3',
    name: 'ppl-semester-2-topik-3',
    component: () => import('../views/PplSemesterTwoView.vue'),
    props: { title: 'Topik 3' }
  },
  {
    path: '/ppl/semester-2/uts',
    name: 'ppl-semester-2-uts',
    component: () => import('../views/PplSemesterTwoView.vue'),
    props: { title: 'UTS' }
  },
  {
    path: '/ppl/semester-2/uas',
    name: 'ppl-semester-2-uas',
    component: () => import('../views/PplSemesterTwoView.vue'),
    props: { title: 'UAS' }
  },

  // URL lama tetap berfungsi dan mengarah ke struktur PPL Semester 1.
  { path: '/artefak', redirect: '/ppl/semester-1/artefak' },
  { path: '/feedback', redirect: '/ppl/semester-1/feedback' },
  { path: '/modelguru', redirect: '/ppl/semester-1/model-guru' },
  { path: '/refleksi', redirect: '/ppl/semester-1/refleksi' },
  { path: '/filosofimengajar', redirect: '/ppl/semester-1/filosofi-mengajar' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // kalau user pencet tombol back/forward browser
    if (savedPosition) {
      return savedPosition
    }

    // route baru -> scroll ke atas
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
})

export default router
