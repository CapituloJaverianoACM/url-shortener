import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/AboutUs.vue";
import LearnMore from "../views/LearnMore.vue";
import Support from "../views/Support.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/aboutUs",
        name: "AboutUs",
        component: About,
    },
    {
        path: "/learnMore",
        name: "LearnMore",
        component: LearnMore,
    },
    {
        path: "/support",
        name: "Support",
        component: Support,
    },
];

const router = new VueRouter({
  index: "/default.html",
  mode: "history",
  base: process.env.BASE_URL,
  routes,  
})

export default router;