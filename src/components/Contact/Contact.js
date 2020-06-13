import React from "react";

export default class Contact extends React.Component {
  onDestroyContact = () => {
    this.props.destroyContact(this.props.id);
  };
  render() {
    return (
      <div className="Contact" onClick={this.onDestroyContact}>
        <img src={this.props.avatar} alt={this.props.name} />
        <span>{this.props.name}</span>
      </div>
    );
  }
}
