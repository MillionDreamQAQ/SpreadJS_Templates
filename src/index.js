const getDataByNumber = (n) => ds.data.splice(0, n);

window.onload = function () {
  let spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));

  let sheet = spread.getActiveSheet();
  sheet.name("数据源");

  let tableColumns = [],
    names = [
      "order_num",
      "order_date",
      "type_name",
      "product_name",
      "quantity",
      "unit_price",
      "cost",
      "discount",
      "order_amount",
      "order_profit",
      "sales_area",
      "province",
      "city",
      "store",
      "consultant",
      "pay_method",
      "cus_name",
      "cus_phone",
    ],
    labels = [
      "订单编号",
      "订购日期",
      "类别名称",
      "产品名称",
      "购买数量",
      "产品单价",
      "产品成本",
      "折扣",
      "订单金额",
      "订单利润",
      "销售大区",
      "销售省份",
      "销售城市",
      "销售门店",
      "销售顾问",
      "支付方式",
      "顾客姓名",
      "顾客电话",
    ];
  let table = sheet.tables.add("tableRecords", 0, 0, 100, 15);
  table.autoGenerateColumns(false);
  names.forEach(function (name, index) {
    let tableColumn = new GC.Spread.Sheets.Tables.TableColumn();
    tableColumn.name(labels[index]);
    tableColumn.dataField(name);
    tableColumns.push(tableColumn);
  });
  table.expandBoundRows(true);
  table.bindColumns(tableColumns);
  table.bindingPath("sales");

  let data = {
    sales: getDataByNumber(100),
  };
  let source = new GC.Spread.Sheets.Bindings.CellBindingSource(data);
  sheet.setDataSource(source);

  spread.addSheet(0);
  let sheet2 = spread.getSheet(0);
  sheet2.name("透视表");
  sheet2.setColumnCount(60);

  let pt = sheet2.pivotTables.add(
    "myPivotTable",
    "tableRecords",
    1,
    1,
    GC.Spread.Pivot.PivotTableLayoutType.outline,
    GC.Spread.Pivot.PivotTableThemes.light8
  );
  pt.suspendLayout();
  pt.options.showRowHeader = true;
  pt.options.showColumnHeader = true;
  pt.add("销售顾问", "销售顾问", GC.Spread.Pivot.PivotTableFieldType.rowField);
  pt.add("产品名称", "产品名称", GC.Spread.Pivot.PivotTableFieldType.rowField);
  pt.add(
    "订购日期",
    "订购日期",
    GC.Spread.Pivot.PivotTableFieldType.columnField
  );
  let groupInfo = {
    originFieldName: "date",
    dateGroups: [{ by: GC.Pivot.DateGroupType.quarters }],
  };
  pt.group(groupInfo);

  pt.add(
    "订单利润",
    "订单利润",
    GC.Spread.Pivot.PivotTableFieldType.valueField,
    GC.Pivot.SubtotalType.sum
  );

  let panel = new GC.Spread.Pivot.PivotPanel(
    "pp",
    pt,
    document.getElementById("panel")
  );
  panel.sectionVisibility(
    GC.Spread.Pivot.PivotPanelSection.fields +
      GC.Spread.Pivot.PivotPanelSection.area
  );
  pt.resumeLayout();
  pt.autoFitColumn();
};
