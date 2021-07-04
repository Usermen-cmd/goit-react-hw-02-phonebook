import PropTypes from 'prop-types';

const InputTel = ({ title, handler, value }) => {
  return (
    <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title={title}
      required
      onChange={handler}
      value={value}
      placeholder="Enter Phone"
    />
  );
};

InputTel.defaultProps = {
  title:
    'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +',
};

InputTel.propTypes = {
  title: PropTypes.string,
  handler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputTel;
