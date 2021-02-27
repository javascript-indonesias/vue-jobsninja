import { createRouter, createWebHashHistory } from 'vue-router';

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const HomeComponent = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
const AboutComponent = () => import(/* webpackChunkName: "about" */ '../views/About.vue');

const HomePageComponent = () => import(/* webpackChunkName: "homepage" */ '../views/HomePage.vue');

const JobListComponent = () =>
    import(/* webpackChunkName: "joblist" */ '../views/jobs/JobList.vue');

const JobDetailComponent = () =>
    import(/* webpackChunkName: "jobdetail" */ '../views/jobs/JobDetail.vue');

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: HomePageComponent,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent,
    },
    {
        path: '/jobs',
        name: 'JobList',
        component: JobListComponent,
    },
    {
        path: '/jobs/:id',
        name: 'JobDetail',
        component: JobDetailComponent,
        props: true,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        redirect: { name: 'Homepage' },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
