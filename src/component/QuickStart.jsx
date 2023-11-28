import React, { Component } from "react";
import { SpreadSheets } from "@grapecity/spread-sheets-react";
import "../assets/Style.css";
import dataService from "../assets/dataService";

class QuickStart extends Component {
  constructor(props) {
    super(props);
    this.hostStyle = {
      top: "240px",
      bottom: "10px",
    };
  }

  initSpread(spread) {
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
        <h3>快速入门指南</h3>
        <div>
          按照以下步骤快速将 SpreadJS 应用到 React 的应用程序中：
          <div>
            <p>1. 添加 SpreadJS 产品引用到 React 的应用程序中</p>
            <p>2. 添加一个组件来提供数据和业务实现。</p>
            <p>3. 绑定数据，并设置其他 SpreadJS 属性。</p>
            <p>4. 添加一些 css 属性来定制外观。</p>
          </div>
        </div>
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

export default QuickStart;
