import React from "react";
import "./App.css";

import { v4 as uuidv4 } from "uuid";
import Contact from "../Contact/Contact";
import Contacts from "../Contacts/Contacts";
import CreateContact from "../CreateContact/CreateContact";

export default class App extends React.Component {
  state = {
    contacts: [
      {
        name: "Bob",
        avatar: "https://source.unsplash.com/WLUHO9A_xik",
        id: uuidv4(),
      },
    ],
  };

  destroyContact = (id) => {
    this.setState({
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  createContact = ({ name, avatar }) => {
    this.setState({
      contacts: [
        {
          name,
          avatar,
          id: uuidv4(),
        },
        ...this.state.contacts,
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <Contacts>
          {this.state.contacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              avatar={contact.avatar}
              destroyContact={this.destroyContact}
            />
          ))}
        </Contacts>
        <CreateContact createContact={this.createContact} />
      </div>
    );
  }
}
