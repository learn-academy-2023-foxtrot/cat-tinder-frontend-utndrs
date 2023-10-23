import React from "react"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

const Home = () => {
	return (
    <>
    <div className="whole-page">
      <div className="home-img">
      <h2 id="home-title">Welcome to Utndr</h2>
      </div>
      <div className="button-position">
      <Button>
        <NavLink to={`/utndrindex`} className="nav-link">
          Click to view more
        </NavLink>
      </Button>
      </div>
    </div>
    </>
	)
}

export default Home