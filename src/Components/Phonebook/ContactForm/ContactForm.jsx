const { Component } = require('react');

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = event => {
    const label = event.target.name;
    const value = event.target.value;
    this.setState({ [label]: value });
  };

  onSubmitClick = event => {
    event.preventDefault();
    const { setContactList } = this.props;
    this.setState(pervState => {
      setContactList(pervState);
      return { name: '', number: '' };
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmitClick}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onChangeInput}
            value={name}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onChangeInput}
            value={number}
          />
          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}
export default ContactForm;
