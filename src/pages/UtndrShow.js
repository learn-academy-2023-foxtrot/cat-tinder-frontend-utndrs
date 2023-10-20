import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap"

const UtndrShow = ({ utndrs }) => {
  const { id } = useParams()
  let currentUtndr = utndrs?.find((utndr) => utndr.id === +id)
  console.log(currentUtndr);
  return (
    <>
      <h2>UtndrShow page</h2>
      <main className="card">
        {currentUtndr && (
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt={`profile picture for ${currentUtndr.name}`}
              src={currentUtndr.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                Utndr: {currentUtndr.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {currentUtndr.age}
              </CardSubtitle>
              <CardText>
                {currentUtndr.content}
              </CardText>
              <NavLink to={`/utndredit/${currentUtndr.id}`} className="nav-link">
                Edit Utndr Profile
              </NavLink>
            </CardBody>
          </Card>
        )}
      </main>
    </>
  )
}

export default UtndrShow