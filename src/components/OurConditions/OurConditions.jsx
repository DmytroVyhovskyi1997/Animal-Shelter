import { Box, Title,TitleAnimals,TextAnimals,ImgCat,ImgDog } from "./OurConditions.styled";

import Dog1 from '../../images/1.png'
import Cat from '../../images/2.png'
import Dog2 from '../../images/3.png'


const OurConditions = () => {
  return (
    <>
      <Title>Наші умови</Title>
      <Box>
        <div>
          <TitleAnimals>Лише власник</TitleAnimals>
          <TextAnimals>Собаку чи кота віддаємо лише в руки майбутньому власнику </TextAnimals>
          <ImgDog src={Dog2} alt="Dog2" />
         
        </div>
        <div>
      
          <ImgCat src={Cat} alt="Cat" />
       
          <TitleAnimals>Тварина для сім'ї</TitleAnimals>
          <TextAnimals>
            Творинки не для утримання на ланцюгу, охорони підприєства чи
            самовигулу
          </TextAnimals>
        </div>
        <div>
          <TitleAnimals>Відповідальність</TitleAnimals>
          <TextAnimals>
            Не забирайте тварину з притулку, якщо не готові про неї піклуватись
          </TextAnimals>
         
          <ImgDog src={Dog1} alt="Dog1" />

        </div>
      </Box>
    </>
  );
};

export default OurConditions;
