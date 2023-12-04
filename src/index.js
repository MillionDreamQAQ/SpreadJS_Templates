window.onload = function () {
  let spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));

  let dataManager = spread.dataManager();
  // let apiUrl =
  //   "https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/server/api/Gantt_Id";
  myTable = dataManager.addTable("myTable", {
    batch: true,
    data: ds,
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
};
