import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Inicio',
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "NotFound" */'../views/NotFound.vue') 
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "Inicio" */'../views/Inicio.vue')
  },
  {
    path: '/Entrada',
    name: 'Entrada',
    component: () => import(/* webpackChunkName: "Entrada" */'../views/Entrada.vue'),
    children: [
      {
        path: ':Articulo',
        name: 'Articulo',
        component: () => import(/* webpackChunkName: "Articulo" */'../views/Articulo.vue'),
      },
    ]
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    alias: ['/contactame'],
    component: () => import(/* webpackChunkName: "Contacto" */'../views/Contacto.vue'),
  },
  {
    path: '/SobreMi',
    name: 'SobreMi',
    alias: ['/acerca'],
    component: () => import(/* webpackChunkName: "SobreMi" */'../views/SobreMi.vue'),
  },
  {
      path: '/Administrador',
      name: 'Administrador',
      component: () => import(/* webpackChunkName: "Administrador" */'../views/Administrador.vue'),
      children: [
        {
          path: '/Simple',
          name: 'AdministradorSimple',
          component: () => import(/* webpackChunkName: "AdministradorSimple" */'../views/Simple.vue') 
        },
        {
          path: '/Avanzado',
          name: 'AdministradorAvanzado',
          component: () => import(/* webpackChunkName: "AdministradorAvanzado" */'../views/Avanzado.vue') 
        },
      ]
  },
  {
    path: "/home",
    redirect: "/"
  },
  {
    path: "/portada",
    redirect: "/"
  },
  {
    path: "/inicio",
    redirect: "/"
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
