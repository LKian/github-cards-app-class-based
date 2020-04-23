import React from "react";
import "../App.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <h1>Header Title</h1>
      </div>
    );
  }
}

export default Header;
