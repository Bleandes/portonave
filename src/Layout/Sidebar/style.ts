import { Link } from "react-router-dom";
import { styled } from "styled-components";




export const Sidebar = styled.aside`
height: 100vh;
width: 18.125rem;
background-color: #3b3b3b;
padding-left: 1.8rem;
`

export const ContainerUserName = styled.aside`
display: flex;
padding-top: 2.5rem;
align-items: center;
`

export const NameUser = styled.aside`
color: #f1f1f1;
font-size: 1.6rem;
margin-left: 0.5rem;
`
export const ContainerPreferencias = styled.div`
border-bottom: 1px solid #f1f1f1;
margin-top: 1.8rem;
padding: 0.5rem;
`


export const ContainerMenu = styled.div`
border-bottom: 1px solid #f1f1f1;
margin-top: 1.8rem;
margin-bottom: 1.2rem;
padding: 0.5rem;
`

export const Menu = styled.div`
color:  #f1f1f1;
`

export const Image = styled.div`
margin-top: 1rem;
padding-right: 1rem;
`

export const SubMenus = styled.p`
margin-top: 1rem;
color:  #f1f1f1;
font-weight: 900;
font-size: 1.3rem;
`
export const SubMenusPreferencias = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 1rem;
color:  #f1f1f1;
font-weight: 900;
font-size: 1.3rem;
`

export const LinkCustom = styled(Link)`
     text-decoration:none; 
`

export const SubSubMenus = styled.a`
border: none;
background-color: transparent;
cursor: pointer;

color: #f1f1f1;
display: flex;
flex-direction: column;
padding-left: 3rem;
padding-top: 0.2rem ;
padding-bottom: 0.2rem ;
font-size: 1.1rem;

&:active, &:hover{
color: red;
}

`

export const ItemsMenu = styled.div`
display: flex;
align-items: center;
`
