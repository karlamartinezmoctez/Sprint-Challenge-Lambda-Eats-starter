//9. Adding a Pizza Form
//13. Importing React
import React, {useState} from "react";
//14. import components from library
import {Card, CardImg, Form, Input, FormGroup, Dropdown, DropdownToggle, DropdownMenu} from "reactstrap"

const PizzaForm = () =>{

    const{dropdownOpen, setDropdownOpen} = useState(false)

    const toggle = () =>{
        setDropdownOpen((prevState) => !prevState)
    }

    return(
    <> 
    {/* 15. create the form similar to the main page card*/}
    <Card color="info">
        <h2 style={{color:"white", margin:"0 auto"}}>
            Build Your Own Pizza!
        </h2>
        <CardImg style={{width: "75%", margin: "0 auto"}} src={require("./Pizza.jpg")} />
    </Card>

    {/* Creating the form shell */}
    <Form style={{margin: "5%"}}>
        <FormGroup>
        <legend>Name</legend>
        <Input type="name" name="name" />
        </FormGroup>

        {/* 16. creating the dropdown choice of size, by creating a toggle useState and toggle funciton and using it in the dropdown*/}
        <FormGroup>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Dropdown stuffhere
                </DropdownToggle>
                <DropdownMenu>
                <div></div>
                </DropdownMenu>
            </Dropdown>
        </FormGroup>

    </Form>
    
    </>
    )
}

export default PizzaForm; 