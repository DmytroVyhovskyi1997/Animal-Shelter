import { Outlet, useLocation } from "react-router-dom";
import {
  Link,
  Container,
  HeaderContainer,
  BoxTitle,
  Title,
  Text,
  ButtonHelp,
  BoxNav,
  TitleLocation
} from "./Layout.styled";
import IconShelter from "../../images/icon.svg";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const showAdditionalFooterText = location.pathname === "/animal";

  return (
    <Container>
      <HeaderContainer>
        <BoxTitle>
          <img src={IconShelter} alt="icon header" />
          <div>
            <Title>ХАТИНА</Title>
            <Text>притулок для тварин</Text>
          </div>
        </BoxTitle>

        <nav>
          <Link to="/">Домашня</Link>
          <Link to="/animal">Обрати улюбленця</Link>
        </nav>
        {showAdditionalFooterText && (
          <BoxNav>
            <TitleLocation>Про нас</TitleLocation>
            <TitleLocation>Вірні друзі</TitleLocation>
            <TitleLocation>Наші умови</TitleLocation>
            <TitleLocation>Локація</TitleLocation>
            <TitleLocation>Контакти</TitleLocation>
          </BoxNav>
        )}
        <ButtonHelp>Допомогти</ButtonHelp>
      </HeaderContainer>
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
