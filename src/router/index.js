import { createRouter, createWebHashHistory } from "vue-router";
import GanttSheet from "@/components/GanttSheet.vue";

let routes = [
  {
    path: "/",
    redirect: "/GanttSheet",
  },
  {
    path: "/GanttSheet",
    name: "GanttSheet",
    component: GanttSheet,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
