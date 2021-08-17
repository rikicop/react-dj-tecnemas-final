import styled,{ createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  *, &, &:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto  ;
    grid-template-areas: 
        "nav" 
        "wrapper";
    grid-gap: 0.2rem;
    font-family: 'Ubuntu';
    width: 100%;
    margin: 0 auto;
    max-width: 1000px;
    padding: 40px 40px;
    padding-top: 20px;
`;

export const Navbar = styled.nav`

    font-size: 2.2rem;
    text-align: center;
    /* background: #a7ffeb; */
    grid-area: nav;
    border-radius: 5px;
    padding-top:5px;
    margin-bottom: 25px;
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

export const Wrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
    grid-area: wrapper;
    gap: 2rem;
    justify-content: center;  
`;

export const Card = styled.div`

    overflow: hidden;
    box-shadow: 0 2px 20px #e1e5ee;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;
     
    &:hover{
        transform: scale(1.02);
    }
    &:hover &__btn {
        background: #9a69f3;
        color: white;
    }
`;

export const CardImage = styled.img`
    height: 12rem;
    width: 100%;
    object-fit: cover;
`;

export const CardTitle = styled.h2`
    padding: 1rem;
`;

export const CardDescription = styled.div`
    padding: 0 1rem;
`;

export const CardBtn = styled.button`
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: 2px solid #9a69f3;
    background: transparent;
    color: #9a69f3;
    border-radius: 0.2rem;
    transition: background 200ms ease-in, color 200ms ease-in;
`;