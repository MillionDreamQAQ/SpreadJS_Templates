import Vue from "vue";
import Router from "vue-router";
import QuickStart from "@/components/QuickStart";
import DataBinding from "@/components/DataBinding";
import SpreadStyle from "@/components/SpreadStyle";
import OutLine from "@/components/OutLine";

Vue.use(Router);

export default new Router({
  routes: [
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
  ],
});
