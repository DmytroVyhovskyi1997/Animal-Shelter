import Dog from '../../../images/dog.png'
import Decor from '../../../images/decor.png'
import { Box,ImgDog,ImgDecor, Title,TitleDog, Button } from './Home.styled';


const Home = () => {
  return (
    <Box>
      <div>
        < Title>Цим оченятам<br/> дуже потрібні<br/> любов і турбота</ Title>
        <TitleDog>
          Вірний друг радітиме тобі завжди.<br/> Йому потрібно дуже мало -<br/> теплий дім
          та дбайливий господар
        </TitleDog>
        <Button>Обрати</Button>
      </div>
      <div>
      <ImgDecor src={Decor} alt="decor" />
        <ImgDog src={Dog} alt="dog" width={538} height={680}/>
        
      </div>
    </Box>
  );
};

export default Home;
