import React, { Component } from "react";

import * as GC from "@grapecity-software/spread-sheets";
import "@grapecity-software/spread-sheets-charts";
import "@grapecity-software/spread-sheets-shapes";
import "@grapecity-software/spread-sheets-slicers";
import "@grapecity-software/spread-sheets-print";
import "@grapecity-software/spread-sheets-barcode";
import "@grapecity-software/spread-sheets-pdf";
import "@grapecity-software/spread-sheets-formula-panel";
import "@grapecity-software/spread-sheets-io";
import "@grapecity-software/spread-sheets-resources-zh";
import "@grapecity-software/spread-sheets-designer-resources-cn";
import "@grapecity-software/spread-sheets-designer";
import { Designer } from "@grapecity-software/spread-sheets-designer-react";
import "@grapecity-software/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity-software/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
GC.Spread.Common.CultureManager.culture("zh-cn");

import "../assets/Style.css";
import dataService from "../assets/dataService";

class DataBingingCon extends Component {
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
      { name: "order_num", displayName: "订单编号", width: 100 },
      { name: "order_date", displayName: "订购日期", width: 150 },
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
      { name: "pay_method", displayName: "支付方式" },
      { name: "cus_name", displayName: "顾客姓名" },
      { name: "cus_phone", displayName: "顾客电话" },
    ];
    sheet.autoGenerateColumns = false;
    sheet.setDataSource(dataService.getDataByNumber(100));
    sheet.bindColumns(colInfos);
  }

  render() {
    return (
      <div className="componentContainer" style={this.props.style}>
        <h3>数据绑定</h3>
        <div>
          <p>以下示例展示如何绑定数据。</p>
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

export default DataBingingCon;
