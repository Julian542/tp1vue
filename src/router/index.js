import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";


Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      name:"Home",
      component: Home
    },
    {
      path:"/ubicacion",
      name:"Ubicacion",
      component:()=>import('../views/Ubicacion.vue')
    },
    {
      path:"/productos",
      name:"Productos",
      component:()=>import('../views/Productos.vue')
    },
    {
      path:"/detalle/:id",
      name:"DetalleInstrumento",
      component: ()=> import('../views/DetalleInstrumento.vue')
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
