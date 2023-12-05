import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  GcSpreadSheets,
  GcWorksheet,
  GcColumn,
} from "@grapecity/spread-sheets-vue";
import Designer from "@grapecity/spread-sheets-designer-vue"

const app = createApp(App)

app.component("gc-spread-sheets", GcSpreadSheets);
app.component("gc-worksheet", GcWorksheet);
app.component("gc-column", GcColumn);
app.component("gc-spread-sheets-designer", Designer);

app.use(router)

app.mount('#app')
