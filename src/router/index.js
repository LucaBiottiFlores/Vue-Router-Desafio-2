import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from "../views/Inicio.vue";
import Entrada from "../views/Entrada.vue";
import Articulo from "../views/Articulo.vue";
import Contacto from "../views/Contacto.vue";
import SobreMi from "../views/SobreMi.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Inicio',
  },
  
  {
    path: '/Inicio',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/Entrada',
    name: 'Entrada',
    component: Entrada,
    children: [
      {
        path: ':Articulo',
        name: 'Articulo',
        component: Articulo,
      },
    ]
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto,
  },
  {
    path: '/SobreMi',
    name: 'SobreMi',
    component: SobreMi,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
