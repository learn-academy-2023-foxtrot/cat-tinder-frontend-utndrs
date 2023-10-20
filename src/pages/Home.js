import React from "react"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

const Home = () => {
	return (
    <>
      <div className="home-img">
      <h2 id="homeTitle">Welcome to Utndr</h2>
      </div>
      <Button>
        <NavLink to={`/utndrindex`} className="nav-link">
          Click to view more
        </NavLink>
      </Button>
    </>
	)
}

export default Home