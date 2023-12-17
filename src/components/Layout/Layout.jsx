import { Outlet } from "react-router-dom";
import {
  Link,
  Container,
  HeaderContainer,
  BoxTitle,
  Title,
  Text,
  ButtonHelp,
} from "./Layout.styled";
import IconShelter from "../../images/icon.svg";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Container>
      <HeaderContainer>
        <BoxTitle>
          <img src={IconShelter} alt="icon header" />
          <div>
            <Title>Хатина</Title>
            <Text>притулок для тварин</Text>
          </div>
        </BoxTitle>

        <nav>
          <Link to="/">Домашня</Link>
          <Link to="/animal">Обрати улюбленця</Link>
        </nav>
        <ButtonHelp>Допомогти</ButtonHelp>
      </HeaderContainer>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </Container>
  );
};

export default Layout;
