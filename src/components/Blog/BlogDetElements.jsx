import styled from 'styled-components';
/* import {Link} from 'react-router-dom'; */


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 1.2fr auto auto;
  grid-template-areas: 
    "nav" 
    "titulo"
    "sidebar"
    "imgcontainer"  
    "main"  
    "footer";
  grid-gap: 0.2rem;
  font-family: 'Ubuntu';
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
  padding: 40px 40px;
  padding-top: 20px;

`;

export const Navbar = styled.nav`
  /* background: #a7ffeb; */
  grid-area: nav;
  border-radius: 5px;
  padding-top: 5px;

`;

export const LeftNavTitle = styled.div`
  color: #9a69f3;
  font-size:22px;
  font-weight: 700;
  text-align: left;
  width: 50%;
  float: left;
  padding: 20px;
`;

export const RightNavTitle = styled.div`

  font-size:22px;
  font-weight: 700;
  text-align: right;
  width: 50%;
  float: left;
  padding: 20px;
 
`;

export const NavBtnLink = styled.button`
        font-weight: bold ;
        border-radius: 50px;
        background: #ba9af5;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover{
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }
`;


export const Titulo = styled.div`
  text-align: center;
  font-size: 2.2rem;
  /* background: #adc32b; */
  grid-area: titulo;
  border-radius: 5px;
  padding-top: 5px;
`;

export const Content = styled.div`
   font-size: 18px;
    /* background: #84ffff; */
    grid-area: main;
    border-radius: 5px;
    padding-top: 5px;
`;

export const Sidebar = styled.div`
   text-align: left;
    /* background: #5763a8; */
    grid-area: sidebar;
    border-radius: 5px;
    padding-top: 5px;
`;


export const ImgContainer = styled.div`
  align-items: center;
  display: flex; /* new */
  justify-content: center;
 /*  background: #94b0ff; */
  grid-area: imgcontainer;
  border-radius: 5px;
  padding-top: 5px;
`;

export const Imagen = styled.img`
    
    max-width: 95%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.55rem;
    border-radius:20px;
`;

export const Footer = styled.footer`

  /* background: #ff94fa; */
  grid-area: footer;
  border-radius: 5px;
  padding-bottom: 20px;
  align-items: center;
  text-align: center;

`;

export const SocialMediaWrap = styled.div`
 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin:40px auto 0 auto;

    
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

`;

export const SocialIconLink = styled.a`
    color: black;
    font-size: 24px;
`;




