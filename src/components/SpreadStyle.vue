<template>
  <div class="componentContainer gc-scrollbar">
    <h3>样式</h3>
    <p>以下示例展示如何使用样式。</p>

    <div class="spreadContainer">
      <gc-spread-sheets :hostClass="'spread-host'" @workbookInitialized="initSpread"> </gc-spread-sheets>
    </div>
  </div>
</template>
<script>
import "@grapecity-software/spread-sheets-vue";
import GC from "@grapecity-software/spread-sheets";
import dataService from "../static/dataService";

export default {
  methods: {
    initSpread(value) {
      let sheet = value.getActiveSheet();

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
