import React, { Component } from "react";
import { SpreadSheets } from "@grapecity-software/spread-sheets-react";
import "../assets/Style.css";
import dataService from "../assets/dataService";
import "@grapecity-software/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import GC from "@grapecity-software/spread-sheets";
import "@grapecity-software/spread-sheets-tablesheet";
import "@grapecity-software/spread-sheets-ganttsheet";
import "@grapecity-software/spread-sheets-resources-zh";

GC.Spread.Common.CultureManager.culture("zh-cn");

class GanttTable extends Component {
  constructor(props) {
    super(props);
    this.hostStyle = {
      top: "90px",
      bottom: "10px",
    };
  }

  initSpread(spread) {
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
  }

  render() {
    return (
      <div className="componentContainer" style={this.props.style}>
        <h3>快速入门指南</h3>
        <div>以下示例展示如何使用甘特表。</div>
        <div className="spreadContainer" style={this.hostStyle}>
          <SpreadSheets
            workbookInitialized={(spread) => {
              this.initSpread(spread);
            }}
          ></SpreadSheets>
        </div>
      </div>
    );
  }
}

export default GanttTable;
