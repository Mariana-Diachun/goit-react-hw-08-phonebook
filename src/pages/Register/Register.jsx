import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container } from 'components/UI/Container/Container.styled';

export default function Register() {
  return (
    <Container>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
}
