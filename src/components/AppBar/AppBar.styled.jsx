import styled from '@emotion/styled';

export const Header = styled.header`
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.light};
  border-bottom: ${({ theme }) => theme.shadows.regular};
  border-bottom-left-radius: ${({ theme }) => theme.spacing(2.5)};
  border-bottom-right-radius: ${({ theme }) => theme.spacing(2.5)};
  width: 100%;
  display: flex;
  /* border-bottom: 2px solid; */
  justify-content: space-between;
  align-items: center;
`;
