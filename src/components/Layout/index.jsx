import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutContainer, MainContent } from './style';

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
}