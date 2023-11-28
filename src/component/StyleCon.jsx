import React, { Component } from "react";

import * as GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-charts";
import "@grapecity/spread-sheets-shapes";
import "@grapecity/spread-sheets-slicers";
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-barcode";
import "@grapecity/spread-sheets-pdf";
import "@grapecity/spread-sheets-formula-panel";
import "@grapecity/spread-sheets-io";
import "@grapecity/spread-sheets-resources-zh";
import "@grapecity/spread-sheets-designer-resources-cn";
import "@grapecity/spread-sheets-designer";
import { Designer } from "@grapecity/spread-sheets-designer-react";
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
GC.Spread.Common.CultureManager.culture("zh-cn");

import "../assets/Style.css";
import dataService from "../assets/dataService";

class StyleCon extends Component {
  constructor(props) {
    super(props);
    this.hostStyle = {
      top: "90px",
      bottom: "0px",
    };
    this.designerStyle = {
      height: "100%",
    };
  }

  initDesigner(designer) {
    let spread = designer.getWorkbook();
    
    let sheet = spread.getActiveSheet();

    let colInfos = [
      { name: "check", displayName: "选择", width: 26 },
      { name: "order_num", displayName: "订单编号", width: 100 },
      { name: "order_date", displayName: "订购日期", width: 150 },
      { name: "pay_method", displayName: "支付方式" },
      { name: "type_name", displayName: "类别名称" },
      { name: "product_name", displayName: "产品名称" },
      { name: "quantity", displayName: "购买数量" },
      { name: "unit_price", displayName: "产品单价" },
      { name: "cost", displayName: "产品成本" },
      { name: "discount", displayName: "折扣" },
      { name: "order_amount", displayName: "订单金额" },
      { name: "order_profit", displayName: "订单利润" },
      { name: "sales_area", displayName: "销售大区" },
      { name: "province", displayName: "销售省份" },
      { name: "city", displayName: "销售城市" },
      { name: "store", displayName: "销售门店" },
      { name: "consultant", displayName: "销售顾问" },
      { name: "cus_name", displayName: "顾客姓名" },
      { name: "cus_phone", displayName: "顾客电话" },
    ];
    sheet.suspendPaint();

    sheet.autoGenerateColumns = false;
    sheet.setDataSource(dataService.getDataByNumber(100));
    sheet.bindColumns(colInfos);

    let checkBoxCellType = new GC.Spread.Sheets.CellTypes.CheckBox();
    sheet.getRange(-1, 0, -1, 1).cellType(checkBoxCellType);

    sheet.getRange(-1, 1, -1, 1).backColor("lightgrey");
    sheet.getRange(-1, 2, -1, 1).foreColor("red");

    let comboBoxCellType = new GC.Spread.Sheets.CellTypes.ComboBox();
    comboBoxCellType.items([
      { text: "支付宝", value: "支付宝" },
      { text: "微信", value: "微信" },
      { text: "刷卡", value: "刷卡" },
      { text: "现金", value: "现金" },
      { text: "其他", value: "其他" },
    ]);
    sheet.getRange(-1, 3, -1, 1).cellType(comboBoxCellType);

    sheet.resumePaint();
  }

  render() {
    return (
      <div className="componentContainer" style={this.props.style}>
        <h3>样式</h3>
        <div>
          <p>以下示例展示如何使用样式。</p>
        </div>
        <div className="spreadContainer" style={this.hostStyle}>
          <Designer
            styleInfo={this.designerStyle}
            designerInitialized={(spread) => {
              this.initDesigner(spread);
            }}
          ></Designer>
        </div>
      </div>
    );
  }
}

export default StyleCon;
