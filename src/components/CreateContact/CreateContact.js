import React from "react";

export default class CreateContact extends React.Component {
  state = {
    name: "",
    avatar: "",
  };
  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };
  onChangeAvatar = (event) => {
    this.setState({ avatar: event.target.value });
  };

  onCreateContact = () => {
    this.props.createContact({
      name: this.state.name,
      avatar: this.state.avatar,
    });
    this.setState({
      name: "",
      avatar: "",
    });
  };

  render() {
    return (
      <div className="CreateContact">
        <div>Name: {this.state.name}</div>
        <div>Avatar: {this.state.avatar}</div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChangeName}
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input
            id="avatar"
            name="avatar"
            type="text"
            value={this.state.avatar}
            onChange={this.onChangeAvatar}
          />
        </div>
        <button onClick={this.onCreateContact}>Create Contact</button>
      </div>
    );
  }
}
