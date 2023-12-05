<template>
  <div class="componentContainer gc-scrollbar">
    <h3>分组</h3>
    <p>以下示例展示如何使用分组。</p>

    <div class="spreadContainer">
      <gc-spread-sheets-designer
        :styleInfo="{ height: '100%', width: '100%' }"
        :config="null"
        @designerInitialized="initSpread"
      />
    </div>
  </div>
</template>
<script>
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";

import dataService from "../static/dataService";
import "@grapecity/spread-sheets-vue";
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

GC.Spread.Common.CultureManager.culture("zh-cn");

export default {
  methods: {
    initSpread(value) {
      let spread = value.getWorkbook();

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
      sheet.suspendPaint();
      sheet.autoGenerateColumns = false;
      sheet.setDataSource(dataService.getDataByNumber(100));
      sheet.bindColumns(colInfos);

      let rowOutlineInfo = [
        { index: 1, count: 4 },
        { index: 6, count: 4 },
      ];
      for (let obj of rowOutlineInfo) {
        sheet.rowOutlines.group(obj.index, obj.count);
      }

      let columnOutlineInfo = [{ index: 0, count: 4 }];
      for (let obj of columnOutlineInfo) {
        sheet.columnOutlines.group(obj.index, obj.count);
      }
      sheet.resumePaint();
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
  right: 3px;
  overflow-y: auto;
  overflow-x: hidden;
}
.spreadContainer {
  position: absolute;
  top: 90px;
  padding: 10px;
  /*width: 100%;*/
  /*height: 240px;*/
  left: 10px;
  right: 10px;
  bottom: 10px;
  box-shadow: 0 0 20px grey;
}
.test-btn-list {
  /*padding: 20px;*/
  position: absolute;
  bottom: 0px;
  height: 150px;
}
.test-btn-list label {
  display: inline-flex;
  margin: 10px 20px;
}
.spread-host {
  width: 100%;
  height: 100%;
}
</style>
