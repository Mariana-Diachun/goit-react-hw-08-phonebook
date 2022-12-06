import { FcContacts } from 'react-icons/fc';

import { Section } from 'components/UI/Section/Section.styled';
import { Container, Title } from 'pages/Home/Home.styled';

export default function Home() {
  return (
    <Section>
      <Container>
        <Title>WELCOME TO YOUR PHONEBOOK</Title>
        <FcContacts size="200" />
      </Container>
    </Section>
  );
}
