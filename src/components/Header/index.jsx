import { HeaderContainer, Logo, NavMenu, NavLink } from './style';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">Limbus Company</Logo>
      <NavMenu>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/catalogo">Catálogo</NavLink>
      </NavMenu>
    </HeaderContainer>
  );
}