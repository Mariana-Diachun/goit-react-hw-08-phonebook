import { Title, Container } from 'pages/Home/Home.styled';
import { FcContacts } from 'react-icons/fc';

export default function Home() {
  return (
    <Container>
      <Title>Welcome to your phonebook</Title>
      <FcContacts size="100" />
    </Container>
  );
}
