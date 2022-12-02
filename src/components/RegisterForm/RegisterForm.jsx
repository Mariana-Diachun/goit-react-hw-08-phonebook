import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import schema from 'validation/validationRegisterForm';
import { ErrorMessage } from 'formik';

import {
  FormWrap,
  Input,
  Label,
  Button,
  Error,
} from 'components/RegisterForm/RegisterForm.styled';

export const RegisterForm = () => {
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormWrap autoComplete="off">
          <Label htmlFor={nameId}>
            Username
            <Input type="text" name="name" id={nameId} />
          </Label>
          <Error>
            <ErrorMessage name="name" compononet="span" />
          </Error>
          <Label htmlFor={emailId}>
            Email
            <Input type="email" name="email" id={emailId} />
          </Label>
          <Error>
            <ErrorMessage name="email" compononet="span" />
          </Error>
          <Label htmlFor={passwordId}>
            Password
            <Input type="password" name="password" id={passwordId} />
          </Label>
          <Error>
            <ErrorMessage name="password" compononet="span" />
          </Error>
          <Button type="submit">Register</Button>
        </FormWrap>
      </Formik>
    </div>
  );
};
