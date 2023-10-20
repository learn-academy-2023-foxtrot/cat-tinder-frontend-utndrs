import { useState } from "react"
import React from "react"
import { Form, FormGroup, Label, Input, Button} from "reactstrap"
import { useNavigate } from "react-router-dom"

const UtndrNew = ({ createUtndr }) => {
    const navigate = useNavigate()
    const [newUtndr, setNewUtndr] = useState({
        name:"",
        age:"",
        image:"",
        content:""

    })
    const handleChange = (e) => {
      setNewUtndr({ ...newUtndr, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
      createUtndr(newUtndr)
      navigate("/utndrindex")
    }
    return (
        <>
            <h2>New Utndr</h2>
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
                        value={newUtndr.name}
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
                        value={newUtndr.age}
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
                        value={newUtndr.image}
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
                        value={newUtndr.content}
                    />
                </FormGroup>
                <Button onClick={handleSubmit} name="submit">
                  Submit Utndr
                </Button>
            </Form>
        </>
  )
}

export default UtndrNew