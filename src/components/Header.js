import React from "react"
import {Navbar, NavbarBrand} from "reactstrap"
import headerImage from "../assets/good-faces-agency-rr2ifvkhKR8-unsplash.jpg"

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
          Welcome to uTNDR
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Header