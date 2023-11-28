window.onload = function () {
  let designer = new GC.Spread.Sheets.Designer.Designer(document.getElementById("ss"));

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
  sheet.setDataSource(ds.data);
  sheet.bindColumns(colInfos);
};
