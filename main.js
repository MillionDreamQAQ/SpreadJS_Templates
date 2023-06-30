window.onload = function () {
  let designer = new GC.Spread.Sheets.Designer.Designer(
    document.getElementById("gc-designer-container")
  );

  let spread = designer.getWorkbook();

  spread.fromJSON(json);
};
