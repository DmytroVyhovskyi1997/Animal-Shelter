import styled from 'styled-components'
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";

export const BoxTitle = styled.div`
display:flex;
margin: 0;
`
export const Title = styled.h2`
color:  #202053;
font-weight:800;
font-size:35px;
line-height:52px;
margin:0;
`


export const Text = styled.p`
color:  #202053;
font-weight:500;
font-size:15px;
line-height:22px;
margin:0;
`

export const  BoxFooter = styled.footer`
display:flex;
justify-content: space-between;
padding:48px 0 48px 0;
`

export const BoxNav = styled.div`
display:flex;
gap:20px;
`
export const IconInstagram = styled(RiInstagramFill)`
width: 32px; 
height: 32px;
`

export const IconFacebook = styled(FaFacebookSquare)`
width: 32px; 
height: 32px;
`

export const IconTelegram = styled(FaTelegram)`
width: 32px; 
height: 32px;
`

export const BoxIcon = styled.div`
display:flex;
justify-content: space-between;
margin-top:32px;
`
export const TitleSocial = styled.p`
color:  #202053;
margin-top:32px;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const TitleText = styled.li`
color:  #202053;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 8px;
`

export const BoxData = styled.div`
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
gap:8px;
color:#202053;
`