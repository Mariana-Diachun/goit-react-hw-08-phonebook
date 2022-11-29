import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import {
  FormWrap,
  Input,
  Label,
  Button,
  Alert,
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
        // validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormWrap autoComplete="off">
          <Label htmlFor={nameId}>
            Username
            <Input type="text" name="name" id={nameId} />
          </Label>
          <Alert name="name" compononet="span" />
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
          <Button type="submit">Register</Button>
        </FormWrap>
      </Formik>
    </div>
  );
};
