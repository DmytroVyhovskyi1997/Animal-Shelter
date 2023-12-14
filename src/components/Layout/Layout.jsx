import { Outlet } from "react-router-dom";
import { Link, Container, HeaderContainer, BoxTitle, Title, Text } from "./Layout.styled";
import IconShelter from "../../images/icon.svg";

const Layout = () => {
  return (
    <Container>
      <HeaderContainer>
        <img src={IconShelter} alt="icon header" />
        <BoxTitle>
          <Title>Хатина</Title>
          <Text>притулок для тварин</Text>
        </BoxTitle>

        <nav>
          <Link to="/">Домашня</Link>
          <Link to="/animal">Обрати улюбленця</Link>
        </nav>
      </HeaderContainer>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Container>
  );
};

export default Layout;
