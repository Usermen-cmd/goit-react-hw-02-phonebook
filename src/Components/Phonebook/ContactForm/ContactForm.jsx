import { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import InputName from './InputName';
import InputTel from './InputTel';
//Styles
import { Form } from 'styles/Form';

class ContactForm extends Component {
  static propTypes = {
    setContactList: PropTypes.func.isRequired,
  };

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
      <Form onSubmit={this.onSubmitClick}>
        <InputName handler={this.onChangeInput} value={name} />
        <InputTel handler={this.onChangeInput} value={number} />
        <button type="submit">Add Contact</button>
      </Form>
    );
  }
}

export default ContactForm;
