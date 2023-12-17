import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled(NavLink)`
position: relative;
color:  #202053;
margin-left:50px;
font-weight:400;
font-size:20px;
line-height:30px;
&.active {
    color: #4A86FF;
    &::after,
    hover {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      bottom: -5px;
      background-color: #4A86FF;
      border-radius: 2px;
    }
  }
`

export const Container = styled.div`
margin: 0 auto;
  padding: 0 16px;
@media screen and (max-width: 767px){
    max-width: 480px;
}
@media screen and (min-width: 768px){
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
}
@media screen and (min-width: 1280px){
    width: 1440px;
    padding-left: 40px;
    padding-right: 40px;
}
`;

export const HeaderContainer = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
padding-top:40px;
padding-bottom:40px;
`
export const BoxTitle = styled.div`
display: flex;
margin: 0;
`
export const Title = styled.h2`
font-weight:800;
font-size:35px;
line-height:52px;
margin:0;
color:  #202053;
`

export const Text = styled.p`
font-weight:500;
font-size:15px;
line-height:22px;
margin:0;
color:  #202053;
`

export const ButtonHelp = styled.button`
font-weight:600;
font-size:24px;
line-height:26px;
color:#FFFFFF;
background-color:#EF3959;
padding: 16px 32px 16px 32px;
border-radius:25px;
border:none;
animation: pulse 3s infinite;
box-shadow: 0px 2px 1px -1px rgba(0,0,0,.2), 0px 1px 1px 0px rgba(0,0,0,.14), 0px 1px 3px 0px rgba(0,0,0,.12);
`

export const BoxNav = styled.ul`
display:flex;
padding: 0;

`

export const TitleLocation = styled.li`
color:#202053;
margin-right:20px;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`