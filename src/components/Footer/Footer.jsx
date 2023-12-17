import {
  BoxTitle,
  Text,
  Title,
  BoxFooter,
  BoxNav,
  IconInstagram,
  IconFacebook,
  IconTelegram,
  BoxIcon,
  TitleSocial,
  TitleText,
  BoxData,
} from "./Footer.styled";
import IconShelter from "../../images/icon.svg";
const Footer = () => {
  return (
    <BoxFooter>
      <div>
        <BoxTitle>
          <img src={IconShelter} alt="icon header" />
          <div>
            <Title>Хатина</Title>
            <Text>притулок для тварин</Text>
          </div>
        </BoxTitle>
        <TitleSocial>
          Приєднутесь до нас в <br />
          соціальних мережах
        </TitleSocial>
        <BoxIcon>
          <li>
            <IconInstagram />
          </li>
          <li>
            <IconFacebook />
          </li>
          <li>
            <IconTelegram />
          </li>
        </BoxIcon>
      </div>
      <BoxNav>
        <ul>
          <TitleText>Про нас</TitleText>
          <TitleText>Наші умови</TitleText>
          <TitleText>Наша команда</TitleText>
          <TitleText>Історія створення</TitleText>
        </ul>
        <ul>
          <TitleText>Вірні друзі</TitleText>
          <TitleText>Обрати друга</TitleText>
          <TitleText>Щасливчики</TitleText>
          <TitleText>Стати волонтером</TitleText>
        </ul>
        <ul>
          <TitleText>Локація</TitleText>
          <TitleText>Контакти</TitleText>
          <TitleText>Інормація</TitleText>
        </ul>
      </BoxNav>
      <div>
        <BoxData>
          <p> Допомогти матеріально:</p>
          <p> ГО “ХАТИНА”</p>
          <p> ЄДРПОУ: 123456789</p>
          <p>Карта Приватбанку</p>
          <p>4141 2929 4646 1111</p>
          <p>Прокопів Петро Павлович</p>
        </BoxData>
      </div>
    </BoxFooter>
  );
};

export default Footer;
