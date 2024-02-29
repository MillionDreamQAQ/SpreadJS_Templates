<template>
  <div class="componentContainer">
    <h3>快速入门指南</h3>
    <div>以下示例展示如何使用甘特表。</div>
    <div class="spreadContainer">
      <gc-spread-sheets
        :hostClass="'spreadHost'"
        @workbookInitialized="initSpread"
      >
      </gc-spread-sheets>
    </div>
  </div>
</template>
<script>
import dataService from "../static/dataService";

import "@grapecity-software/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import "@grapecity-software/spread-sheets-vue";
import GC from "@grapecity-software/spread-sheets";
import "@grapecity-software/spread-sheets-tablesheet";
import "@grapecity-software/spread-sheets-ganttsheet";
import "@grapecity-software/spread-sheets-resources-zh";

GC.Spread.Common.CultureManager.culture("zh-cn");
export default {
  methods: {
    initSpread(value) {
      let spread = value;

      let dataManager = spread.dataManager();
      // let apiUrl =
      //   "https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/server/api/Gantt_Id";
      let myTable = dataManager.addTable("myTable", {
        batch: true,
        data: dataService.getData(),
        // remote: {
        //   read: {
        //     url: apiUrl,
        //   },
        //   batch: {
        //     url: apiUrl,
        //   },
        // },
        schema: {
          hierarchy: {
            type: "Parent",
            column: "parentId",
          },
          columns: {
            id: { isPrimaryKey: true },
            taskNumber: { dataType: "rowOrder" },
          },
        },
      });
      let ganttSheet = spread.addSheetTab(
        0,
        "GanttSheet",
        GC.Spread.Sheets.SheetType.ganttSheet
      );
      let view = myTable.addView("ganttView", [
        { value: "taskNumber", caption: "Task Number", width: 100 },
        { value: "mode", caption: "Mode", width: 65 },
        { value: "name", caption: "Task Name", width: 280 },
        { value: "duration", caption: "Duration", width: 90 },
        { value: "start", caption: "Start", width: 120 },
        { value: "finish", caption: "Finish", width: 120 },
        { value: "predecessors", caption: "Predecessors", width: 120 },
      ]);
      view.fetch().then(function () {
        ganttSheet.bindGanttView(view);
      });
    },
  },
};
</script>
<style scoped>
.componentContainer {
  position: absolute;
  padding: 10px;
  left: 242px;
  top: 0;
  bottom: 20px;
  right: 0;
}
.spreadContainer {
  padding: 10px;
  box-shadow: 0 0 20px grey;
}
.spreadContainer {
  position: absolute;
  left: 0px;
  right: 30px;
  top: 90px;
  bottom: 10px;
}
.spreadHost {
  width: 100%;
  height: 100%;
}
</style>
