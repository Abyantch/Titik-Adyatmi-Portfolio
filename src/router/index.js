import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'profil',
    component: () => import('../views/ProfilView.vue')
  },
  {
    path: '/artefak',
    name: 'artefak',
    component: () => import('../views/ArtefakView.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('../views/FeedbackView.vue')
  },
  {
    path: '/modelguru',
    name: 'modelguru',
    component: () => import('../views/ModelGuruView.vue')
  },
  {
    path: '/refleksi',
    name: 'refleksi',
    component: () => import('../views/RefleksiView.vue')
  },
  {
    path: '/filosofimengajar',
    name: 'filosofimengajar',
    component: () => import('../views/FilosofiMengajarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router