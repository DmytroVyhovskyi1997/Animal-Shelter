import styled from 'styled-components'


export const DogAboutImg = styled.img`
  position: relative;
`;

export const RectangleImg = styled.img`
  position: absolute;
  left: 40px;
  top: 190px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px; 
  align-items: flex-start; 
  max-width: 620px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Description = styled.p`
color:#404040;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const ReadMoreButton = styled.button`
  color: red;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  padding: 21px 82px;
  cursor: pointer;
  background-color:white;
  border: 3px solid ;
  border-image: linear-gradient(to right, #4A86FF,white, #EF3959);
  border-image-slice: 1;
  background-clip: padding-box; 
`;
export const Title = styled.h2`
margin:0;
color:#202053;
font-size: 56px;
font-style: normal;
font-weight: 800;
line-height: 130%;
`