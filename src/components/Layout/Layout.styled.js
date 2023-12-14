import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled(NavLink)`
color: #202053;
&.active{
    color: #4A86FF;
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
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
}
`;

export const HeaderContainer = styled.header`
display:flex;
align-items: center;
padding-top:40px;
padding-bottom:40px;
`
export const BoxTitle = styled.div`
display:flex;
flex-direction: column;
margin: 0;
`
export const Title = styled.h1`
margin:0;
`

export const Text = styled.p`
margin:0;
`