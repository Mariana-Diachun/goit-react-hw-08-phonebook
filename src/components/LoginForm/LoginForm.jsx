import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { ErrorMessage } from 'formik';

import schema from 'validation/validationLoginForm';
import {
  FormWrap,
  Input,
  Label,
  Button,
  Error,
} from 'components/LoginForm/LoginForm.styled';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const emailId = nanoid();
  const passwordId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormWrap autoComplete="off">
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
          <Button type="submit">Log In</Button>
        </FormWrap>
      </Formik>
    </div>
  );
};
