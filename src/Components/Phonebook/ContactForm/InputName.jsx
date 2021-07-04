import PropTypes from 'prop-types';

const InputName = ({ title, handler, value }) => {
  return (
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title={title}
      required
      onChange={handler}
      value={value}
      placeholder="Enter Name"
    />
  );
};

InputName.defaultProps = {
  title:
    "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
};

InputName.propTypes = {
  title: PropTypes.string,
  handler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputName;
