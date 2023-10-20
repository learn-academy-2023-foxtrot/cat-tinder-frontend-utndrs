import { useState } from "react"
import React from "react"
import { Form, FormGroup, Label, Input, Button} from "reactstrap"

const UtndrNew = () => {
    const [newUtndr, setNewUtndr] = useState({
        name:"",
        age:"",
        image:"",
        enjoys:""

    })
    const handleChange = (e) => {

    }
    return (
    <>
        <h2>New component</h2>
        <Form>
            <FormGroup>
                <Label for="name">
                  Name
                </Label>
                <Input
                    id="id"
                    name="name"
                    placeholder="place your name here"
                    type="text"
                  />
            </FormGroup>
            <FormGroup>
                <Label for="age">
                  Age
                </Label>
                <Input
                    id="age"
                    name="age"
                    placeholder="place your name here"
                    type="number"
                  />
            </FormGroup>
            <FormGroup>
                <Label for="image">
                    Image
                </Label>
                <Input
                    id="image"
                    name="image"
                    placeholder="place your name here"
                    type="url"
                  />
            </FormGroup>
            <Button>
              Submit
            </Button>
        </Form>
    </>
  )
}

export default UtndrNew