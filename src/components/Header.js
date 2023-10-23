import React from "react"
import {Navbar, NavbarBrand} from "reactstrap"
import headerImage from "../assets/homepage.jpg"

const Header = () => {
  return (
    <>
      <Navbar
        className="my-2"
        color= ""
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={headerImage}
            style={{
             
              height: 40,
              width: 40
            }}
          />
          The Tinder For Content Creators: Utndr
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Header