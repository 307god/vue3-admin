import { createRouter, createWebHashHistory } from "vue-router";
import f1 from "../components/f1.vue";
import f2 from "../components/f2.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Layout from "@/layout/index.vue";
import Test1 from "@/views/test/Test1.vue";
import Test2 from "@/views/test/Test2.vue";

export const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: HelloWorld,
        name: "Dashboard",
        meta: { title: "Dashboard" }
      }
    ]
  },
  {
    path: "/example",
    component: Layout,
    redirect: "/example/example1",
    children: [
      {
        path: "example1",
        component: Test1,
        name: "Example1",
        meta: { title: "Example1" }
      },
      {
        path: "example2",
        component: Test2,
        name: "Example2",
        meta: { title: "Example2" }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
