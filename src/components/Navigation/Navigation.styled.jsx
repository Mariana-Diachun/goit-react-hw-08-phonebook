import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: baseline;
  justify-content: space-between;
  padding: 12px;
  color: #2b5749;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};

  &.active {
    color: #e84a5f;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: baseline;
`;
