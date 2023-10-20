import React from "react"
import {NavLink} from "react-router-dom"
import {Card, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap"


const UtndrIndex = ({utndrs}) => {
  return (
    <main>
      {utndrs?.map((utndr, index)=>{
        return (
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt={`profile picture for ${utndr.name}`}
              src={utndr.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                {utndr.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {utndr.age}
              </CardSubtitle>
              <Button>
                <NavLink to={`/utndrshow/${utndr.id}`} className="nav-link">
                  More info
                </NavLink>
              </Button>
            </CardBody>
          </Card>  
        )
      })} 
    </main>
  )
}

export default UtndrIndex