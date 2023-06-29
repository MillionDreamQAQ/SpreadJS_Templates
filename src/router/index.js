import { createRouter, createWebHashHistory } from "vue-router";
import QuickStart from "@/components/QuickStart.vue";
import DataBinding from "@/components/DataBinding.vue";
import SpreadStyle from "@/components/SpreadStyle.vue";
import OutLine from "@/components/OutLine.vue";

let routes = [
  {
    path: "/",
    redirect: "/QuickStart",
  },
  {
    path: "/QuickStart",
    name: "QuickStart",
    component: QuickStart,
  },
  {
    path: "/DataBinding",
    name: "DataBinding",
    component: DataBinding,
  },
  {
    path: "/SpreadStyle",
    name: "SpreadStyle",
    component: SpreadStyle,
  },
  {
    path: "/OutLine",
    name: "OutLine",
    component: OutLine,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
