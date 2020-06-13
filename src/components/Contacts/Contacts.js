import React from "react";

export default class Contacts extends React.Component {
  render() {
    return (
      <div>
        <span>Contacts</span>
        <div className="Contacts">{this.props.children}</div>
      </div>
    );
  }
}
