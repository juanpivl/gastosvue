import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
import authLayout from '../modules/auth/layout/authLayout.vue'
import appLayout from '../modules/app/layout/appLayout.vue'
import homeView from '../modules/app/views/homeView.vue'
import otrosView from '../modules/app/views/otrosView.vue'

const routes = [
  {
    path: '/',
    name: 'authLayout',
    component: authLayout
  },
  
  {
    path: '/app',
    name: 'app',
    component: appLayout,
    children: [
     {
       path: '/homeView',
        name:'homeView',
        component: homeView  
    },
    {
      path: '/otrosView',
       name:'otrosView',
       component: otrosView  
   }
    ],
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (auth.currentUser) {
      // El usuario está autenticado, permitir acceso a la ruta protegida
      next()
    } else {
      // El usuario no está autenticado, redirigir a la página de inicio de sesión
      next({ name: 'authLayout' })
    }
  } else {
    // La ruta no requiere autenticación, permitir acceso
    next()
  }
})

export default router
