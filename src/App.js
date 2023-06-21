import React from "react";
import * as GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-shapes";
import "@grapecity/spread-sheets-slicers";
import "@grapecity/spread-sheets-pivot-addon";
import "@grapecity/spread-sheets-tablesheet";
import "@grapecity/spread-sheets-io";
import "@grapecity/spread-sheets-resources-zh";
import "@grapecity/spread-sheets-designer-resources-cn";
import { Designer } from "@grapecity/spread-sheets-designer-react";
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import "./custom.css";
import * as ExcelIO from "@grapecity/spread-excelio";

import json from "./designer";
//Apply License
var sjsLicense = "sjs-distribution-key";
// GC.Spread.Sheets.LicenseKey = sjsLicense;
// ExcelIO.LicenseKey = sjsLicense;

// GC.Spread.Sheets.Designer.LicenseKey = "designer-component-distribution-key";

GC.Spread.Common.CultureManager.culture("zh-cn");

function App() {
  let config = GC.Spread.Sheets.Designer.DefaultConfig;
  return (
    <Designer
      styleInfo={{ width: "100%", height: "98vh" }}
      config={config}
      spreadOptions={{ sheetCount: 2 }}
      designerInitialized={(designer) => designerInit(designer)}
    ></Designer>
  );
}

function designerInit(designer) {
  let spread = designer.getWorkbook();
  spread.fromJSON(json);
}

export default App;
