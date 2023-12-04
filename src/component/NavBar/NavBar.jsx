import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.itemsDesc = ["创建甘特表实例"];
  }
  render() {
    let items = this.itemsDesc.map((data, index) => {
      return (
        <li key={index}>
          <div
            className="navItem"
            style={{
              color: this.props.activeIndex === index ? "#039be5" : "#607D8B",
            }}
            onClick={() => {
              this.props.changeActiveIndex(index);
            }}
          >
            {data}
          </div>
        </li>
      );
    });
    return (
      <div className="navigationBar">
        <h2>快速功能</h2>
        <nav>
          <ul>{items}</ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
