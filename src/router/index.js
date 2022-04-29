import Vue from "vue";
import Router from "vue-router";
import 'animate.css';

Vue.use(Router);

const router  = new Router({
    mode: "history",
    props: true,
    routes: [
        { path: '/HeroeSearch', name: 'HeroeSearch', component: () => import("@/components/Heroes.component.vue") },
        { path: '/Heroe/:id', name: 'InfoHero', component: () => import("@/components/HeroeInfo.Component.vue") },
        { path: '**' , redirect: '/HeroeSearch'}
    ]
})

export default router;