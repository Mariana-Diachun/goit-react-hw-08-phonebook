import { StyledLink } from './Navigation.styled';
import { useAuth } from 'hooks';
import { FcHome } from 'react-icons/fc';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">
        <FcHome size="30" />
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
