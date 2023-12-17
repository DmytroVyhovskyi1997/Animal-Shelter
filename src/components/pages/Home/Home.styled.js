import styled from 'styled-components'


export const Box = styled.div`
display:flex;
justify-content: space-between;
`

export const ImgDog = styled.img`
position:relative;
`

export const ImgDecor = styled.img`
position:absolute;
right: 50px;
`

export const Title = styled.h2`
color:#202053;
font-weight:800;
font-size:64px;
line-height:83.2px;
`

export const TitleDog = styled.p`
font-weight:500;
font-size:30px;
line-height:45px;
`

export const Button = styled.button`
font-weight:600;
font-size:24px;
line-height:26px;
color:#FFFFFF;
background-color:#EF3959;
padding: 16px 32px 16px 32px;
border-radius:25px 25px 25px 0px;
border:none;
animation: pulse 3s infinite;
box-shadow: 0px 2px 1px -1px rgba(0,0,0,.2), 0px 1px 1px 0px rgba(0,0,0,.14), 0px 1px 3px 0px rgba(0,0,0,.12);
`