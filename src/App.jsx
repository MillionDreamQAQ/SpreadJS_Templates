import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import PivotTable from "./component/PivotTable";

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
        spreadCom = <PivotTable />;
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
              产品官网
            </a>
          </div>
          <div className="header-item">
            <a href="https://www.grapecity.com.cn/developer/spreadjs/getstart-zero-based">
              新手入门路径
            </a>
          </div>
          <div className="header-item">
            <a href="https://demo.grapecity.com.cn/spreadjs/help/docs/overview">
              产品文档
            </a>
          </div>
          <div className="header-item">
            <a href="https://www.grapecity.com.cn/developer/spreadjs/applyonline">
              预约技术顾问
            </a>
          </div>
          <div className="header-item">
            <a href="https://www.grapecity.com.cn/developer/spreadjs/deploy">
              申请临时部署授权
            </a>
          </div>
          <div className="header-item">
            <a href="https://www.grapecity.com.cn/developer/spreadjs/demo">
              更多在线产品 Demo
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;
