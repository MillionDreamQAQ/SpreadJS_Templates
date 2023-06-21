import React, { Component } from "react";
import "./Sample.css";
import NavBar from "./NavBar";
import QuickStart from "./spreadContainer/QuickStart";
import DataBingingCon from "./spreadContainer/DataBingingCon";
import StyleCon from "./spreadContainer/StyleCon";
import OutlineCon from "./spreadContainer/OutlineCon";

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  changeActiveIndex(index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    let spreadCom;
    switch (this.state.activeIndex) {
      case 0:
        spreadCom = <QuickStart />;
        break;
      case 1:
        spreadCom = <DataBingingCon />;
        break;
      case 2:
        spreadCom = <StyleCon />;
        break;
      case 3:
        spreadCom = <OutlineCon />;
        break;
      default:
        spreadCom = "";
        break;
    }
    return (
      <div className="app-container">
        <Header />
        <div className="body-container">
          <NavBar
            activeIndex={this.state.activeIndex}
            changeActiveIndex={(index) => {
              this.changeActiveIndex(index);
            }}
          />
          {spreadCom}
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <img
          className="logo"
          src="https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/spread/source/SPJS.svg"
          alt="logo"
        />
        <div className="items-container">
          <div className="header-item">
            <a href="https://www.grapecity.com.cn/developer/spreadjs">
              产品首页
            </a>
          </div>
          <div className="header-item">
            <a href="https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/">
              SpreadJS实例
            </a>
          </div>
          <div className="header-item">
            <a href="https://demo.grapecity.com.cn/SpreadJS/WebDesigner/index.html">
              在线表格编辑器
            </a>
          </div>
          <div className="header-item">
            <a href="https://demo.grapecity.com.cn/spreadjs/help/docs/overview">
              产品文档
            </a>
          </div>
          <div className="header-item">
            <a href="https://demo.grapecity.com.cn/spreadjs/help/api/modules/GC.Data">
              API文档
            </a>
          </div>
          <div className="header-item">
            <a href="https://gcdn.grapecity.com.cn/showforum-230-1.html">
              产品支持论坛
            </a>
          </div>
          <div className="header-item">
            <a href="https://www.grapecity.com.cn/developer/spreadjs/help">
              更多
            </a>
          </div>
          <div className="header-item">
            <a href="https://www.grapecity.com.cn/developer/spreadjs/download">
              立即试用
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;
