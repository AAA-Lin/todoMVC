import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Mid from "@/views/mid"
const routes = [
  {
    path:"/:model?",
    component:Mid
  }
]

const router = new VueRouter({
  routes
})

export default router
