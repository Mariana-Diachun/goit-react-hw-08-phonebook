import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import {
  FormWrap,
  Input,
  Label,
  Alert,
  Button,
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
        // validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormWrap autoComplete="off">
          <Label htmlFor={emailId}>
            Email
            <Input type="email" name="email" id={emailId} />
          </Label>
          <Alert name="email" compononet="span" />
          <Label htmlFor={passwordId}>
            Password
            <Input type="password" name="password" id={passwordId} />
          </Label>
          <Alert name="password" compononet="span" />
          <Button type="submit">LogIn</Button>
        </FormWrap>
      </Formik>
    </div>
  );
};
