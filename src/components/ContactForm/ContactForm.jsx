import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import Notiflix from 'notiflix';

import schema from 'validation/validationContactForm';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import {
  Input,
  FormWrap,
  Label,
  Button,
  Alert,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const nameId = nanoid();
  const numberId = nanoid();

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const hasContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (hasContact)
      return Notiflix.Notify.failure(`${name} is already in contacts`);

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <section>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormWrap autoComplete="off">
          <Label htmlFor={nameId}>
            Name
            <Input type="text" name="name" id={nameId} />
          </Label>
          <Alert name="name" compononet="span" />
          <Label htmlFor={numberId}>
            Number
            <Input type="tel" name="number" id={numberId} />
          </Label>
          <Alert name="number" compononet="span" />
          <Button type="submit">Add contact</Button>
        </FormWrap>
      </Formik>
    </section>
  );
};