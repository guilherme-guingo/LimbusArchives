import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #0d0d0d;
  border-bottom: 2px solid #d4af37;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Logo = styled(Link)`
  color: #d4af37;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    color: #ffffff;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.2s;

  &:hover {
    color: #d4af37;
  }
`;