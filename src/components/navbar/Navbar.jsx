
import React, { useState } from 'react'
import { Nav,Logo,Hamburger,MenuLink,Menu,Links } from './NavbarStyles'
// import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
  const [isOpen,setOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home" >
      <i>{"<Onur>"}</i>
      <span>Recipe</span>
      </Logo>

      <Hamburger onClick={() => setOpen(!isOpen)}>
      <span/>
      <span/>
      <span/>
        {/* <GiHamburgerMenu/> */}
      </Hamburger>

      <Menu osman={isOpen}>
          <MenuLink to="/about" onClick={() => setOpen(!isOpen)}>About</MenuLink>
          <Links href="https://github.com/runotr13" className='link' target='_blank'><span>G</span>ITHUB</Links>
          <MenuLink to="/" onClick={() => setOpen(!isOpen)} onMouseUp={() => sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar