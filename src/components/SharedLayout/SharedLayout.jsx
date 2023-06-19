import { Outlet } from 'react-router-dom';
import { Container, Header, LinkNav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkNav to="/" end>
            Home
          </LinkNav>
          <LinkNav to="/movies">Movies</LinkNav>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
