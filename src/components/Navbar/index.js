import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn, NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)

        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        const ac = new AbortController();
        window.addEventListener('scroll', changeNav);
        return () => ac.abort(); 
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();

    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Tecnemas</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='principal' 
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                   /*Ya está en styled comp  
                                     activeClass="active" */
                                    
                                >
                                        Principal
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='servicios'
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}  
                                >
                                    Publicaciones
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='carusel'
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    Equipo
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/api'>Blog</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
