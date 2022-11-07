import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import './components/Phonebook.css';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleSubmit = ({ name, number, id = nanoid() }) => {
    this.state.contacts.some(item => item.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [{ name, number, id }, ...prevState.contacts],
        }));
  };
  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  handleDelete = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== e.target.closest('li').id
      ),
    });
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }
  componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="Phonebook">
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilter} />
        <ContactsList contacts={filteredContacts} onClick={this.handleDelete} />
      </div>
    );
  }
}
