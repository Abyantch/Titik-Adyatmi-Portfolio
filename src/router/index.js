import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../views/ProfilView.vue')
  },
  {
    path: '/artefak',
    name: 'artefak',
    component: () => import('../views/ArtefakView.vue')
  },
  {
    path: '/lampiran',
    name: 'lampiran',
    component: () => import('../views/LampiranView.vue')
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router