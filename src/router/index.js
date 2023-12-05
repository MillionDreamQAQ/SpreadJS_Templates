import { createRouter, createWebHashHistory } from "vue-router";
import PivotTable from "../components/PivotTable.vue"
let routes = [
  {
    path: "/",
    redirect: "/PivotTable",
  },
  {
    path: "/PivotTable",
    name: "PivotTable",
    component: PivotTable,
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
