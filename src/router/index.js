import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component: () =>import("../views/Login.vue")
  },
  {
    path:'/reg',
    name:'Reg',
    component: () =>import("../views/Reg.vue")
  },
  {
    path:'/pro',
    name:'pro',
    component: () =>import("../views/Profile.vue"),
    beforeEnter(to,from,next){
      const token = localStorage.getItem('token')
      if(token){
        next()
      }else{
        next('/login')
      }
    }
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
