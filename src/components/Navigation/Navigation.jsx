import { useAuth } from 'hooks';

import { FcHome } from 'react-icons/fc';

import { StyledLink, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <StyledLink to="/">
        Home
        <FcHome size="20" />
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};
