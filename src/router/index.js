import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router  = new Router({
    mode: "history",
    props: true,
    routes: [
        { path: '/Heroes', name: 'Heroes', component: () => import("@/components/HeroesAll.Componen.vue") },
        { path: '/HeroeSearch', name: 'HeroeSearch', component: () => import("@/components/Heroes.component.vue") },
        { path: '/Heroe/:id', name: 'InfoHero', component: () => import("@/components/HeroeInfo.Component.vue") },
        { path: '**' , redirect: '/Heroes'}
    ]
})

export default router;