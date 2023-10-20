import React from "react"
import { useState } from "react"
import { Form, FormGroup, Label, Input, Button} from "reactstrap"
import { useParams, useNavigate } from "react-router-dom"

const UtndrEdit = ({utndrs, updateUtndr }) => {
    const { id } = useParams()
    let currentUtndr = utndrs?.find((utndr) => utndr.id === +id)

    const [editUtndr, setEditUtndr] = useState ({
      name: currentUtndr.name,
      age: currentUtndr.age,
      content: currentUtndr.content,
      image: currentUtndr.image
    })
    const handleChange = (e) => {
      setEditUtndr({ ...editUtndr, [e.target.name]: e.target.value})
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
      updateUtndr(editUtndr, currentUtndr.id)
      navigate("/utndrindex")
    }
  return (
    <>
      <h2>Edit Utndr</h2>
      <Form>
              <FormGroup>
                  <Label for="name">
                    Name
                  </Label>
                  <Input
                      id="name"
                      name="name"
                      content="name"
                      placeholder="place your name here"
                      type="text"
                      onChange={handleChange} 
                      value={editUtndr.name}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="age">
                    Age
                  </Label>
                  <Input
                      id="age"
                      name="age"
                      placeholder="place your age here"
                      type="number"
                      content="age"
                      onChange={handleChange} 
                      value={editUtndr.age}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="image">
                      Image
                  </Label>
                  <Input
                      id="image"
                      name="image"
                      placeholder="place your image here"
                      type="url"
                      content="image"
                      onChange={handleChange}
                      value={editUtndr.image}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="content">
                      Content
                  </Label>
                  <Input
                      id="content"
                      name="content"
                      placeholder="place your content here"
                      content="content"
                      type="text"
                      onChange={handleChange}
                      value={editUtndr.content}
                  />
              </FormGroup>
              <Button onClick={handleSubmit} name="submit">
                Submit Updated Utndr
              </Button>
          </Form>
    </>
  )
}

export default UtndrEdit