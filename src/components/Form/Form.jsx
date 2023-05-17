import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormStyled,
  ButtonStyled,
  LabelStyled,
  InputStyled,
} from './Form.styled';
import { useState } from 'react';
const Form = ({ addUser }) => {
   const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = nanoid();

const handleSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  addUser({ name, number });
  form.reset();
  }

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
    return (
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled htmlFor={id}>
          <span>Name</span>
          <InputStyled
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelStyled>
        <LabelStyled htmlFor={id}>
          <span>Number</span>
          <InputStyled
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelStyled>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    );
  }

  Form.propTypes = {
  addUser: PropTypes.func.isRequired,
};
export default Form;