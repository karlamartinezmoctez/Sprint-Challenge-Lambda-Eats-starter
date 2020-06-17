//9. Adding a Pizza Form
//13. Importing React
import React, {useState} from "react";
//14. import components from library
import {Card, CardImg, Form, Input, FormGroup, Dropdown, DropdownToggle, DropdownMenu, Label, Button} from "reactstrap"
import axios from 'axios';
//22. importing validation library
import * as yup from 'yup';

const PizzaForm = () =>{

    const [dropdownOpen, setDropdownOpen] = useState(false);
    //18. creating a sata for the data
    const [formData, setFormData] = useState({
        name: "",
        size: "Personal",
        sauce: "",
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        spicyItalian: false,
        grilledChicken: false,
        onions: false,
        greenPeppers: false,
        diceTomatoes: false,
        blackOlives: false,
        roastedGarlic: false,
        artichokeHearts: false,
        threeCheese: false,
        pineapple: false,
        extraCheese: false,
        special: ""
    });
    //23. define your validation schema
    const schema = yup.object().shape({
        name: yup.string().required().min(2),
        special: yup.string()
    })

    //24. submit function to check schema everytime it's submitted
    const submit = () =>{
        schema.validate(formData).then(() => {
            axios.post("https://reqres.in/api/users", formData).then((res) => {
                console.log(res.data, "This is your posted data")
            })
        })
    }

    //19. adding handlechange
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }
    //20. handle topics
    const handleToppings = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.checked})
    }

    const toggle = () => setDropdownOpen((prevState) => !prevState);

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
    <Form style={{margin: "5%"}} data-cy="submit" onSubmit={(e) =>{
        e.preventDefault()
        submit()
        console.log(formData)
    }}>
        <FormGroup>
        <legend>Name</legend>
        {/* 20. implement the values and on change throughout the form */}
        <Input type="name" name="name" data-cy="name" value={formData.name} onChange={handleChange}/>
        </FormGroup>

        {/* 16. creating the dropdown choice of size, by creating a toggle useState and toggle funciton and using it in the dropdown*/}
        <FormGroup>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <legend>Choose Your Pizza Size</legend>
            <DropdownToggle caret>
                {/* 21. Displaying the pizza size in the dropdown */}
                {formData.size === "Personal" ? "Personal" : formData.size}
                </DropdownToggle>
                <DropdownMenu>
                <div onClick={() => {
                    toggle();
                    setFormData({...formData, size: "Personal"})
                }}>Personal</div>
                <div onClick={() => {
                    toggle();
                    setFormData({...formData, size: "Small"})
                }}>Small</div>
                <div onClick={() => {
                    toggle();
                    setFormData({...formData, size: "Medium"})
                }}>Medium</div>
                <div onClick={() => {
                    toggle();
                    setFormData({...formData, size: "Large"})
                }}>Large</div>
                </DropdownMenu>
            </Dropdown>
        </FormGroup>

    

    {/* 17. Adding a Choice of Sauce */}
    <FormGroup tag="fieldset">
        <legend>Choice of Sauce</legend>
        <FormGroup check>
            <Label check>
                <Input type="radio" name="sauce" value="Original Red" onChange={handleChange}/>Original Red
            </Label>
        </FormGroup>

        <FormGroup check>
            <Label check>
                <Input type="radio" name="sauce" value="Garlic Ranch" onChange={handleChange}/>Garlic Ranch
            </Label>
        </FormGroup>

        <FormGroup check>
            <Label check>
                <Input type="radio" name="sauce" value="BBQ Sauce" onChange={handleChange}/>BBQ Sauce
            </Label>
        </FormGroup>

        <FormGroup check>
            <Label check>
                <Input type="radio" name="sauce" value="Spanish Alfredo" onChange={handleChange}/>Spanish Alfredo
            </Label>
        </FormGroup>
        
    </FormGroup>
        
    {/* Creating the Add Toppings */}
    <legend> Add Toppings</legend>
    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="pepperoni" data-cy="checkbox1" value="Pepperoni" checked={formData.pepperoni} onChange={handleToppings}/>Pepperoni
        </Label>
    </FormGroup>

    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="sausage" data-cy="checkbox2" value="Sausage" checked={formData.sausage} onChange={handleToppings}/>Sausage
        </Label>
    </FormGroup>

    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="canadianBacon" data-cy="checkbox3" checked={formData.canadianBacon} onChange={handleToppings}/>Canadian Bacon
        </Label>
    </FormGroup>
    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="spicyItalian" data-cy="checkbox4" checked={formData.spicyItalian} onChange={handleToppings}/>Spicy Italian Sausage
        </Label>
    </FormGroup>
    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="grilledChicken" data-cy="checkbox5" checked={formData.grilledChicken} onChange={handleToppings}/>Grilled Chicken
        </Label>
    </FormGroup>

    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="onions" data-cy="checkbox6" checked={formData.onions} onChange={handleToppings}/>Onions
        </Label>
    </FormGroup>

    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="greenPepper" data-cy="checkbox7" checked={formData.greenPepper} onChange={handleToppings}/>Green Pepper
        </Label>
    </FormGroup>

    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="diceTomatoes" data-cy="checkbox8" checked={formData.diceTomatoes} onChange={handleToppings}/>Dice Tomatoes
        </Label>
    </FormGroup>

    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="blackOlives" data-cy="checkbox9" checked={formData.blackOlives} onChange={handleToppings}/>Black Olives
        </Label>
    </FormGroup>
    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="roastedGarlic" data-cy="checkbox10" checked={formData.roastedGarlic} onChange={handleToppings}/>Roasted Garlic
        </Label>
    </FormGroup>
    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="artichokeHearts" data-cy="checkbox11" checked={formData.artichokeHearts} onChange={handleToppings}/>Artichoke Hearts
        </Label>
    </FormGroup>
    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="threeCheese" data-cy="checkbox12" checked={formData.threeCheese} onChange={handleToppings}/>Three Cheese
        </Label>
    </FormGroup>
    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="pineapple" data-cy="checkbox13" checked={formData.pineapple} onChange={handleToppings}/>Pineapple
        </Label>
    </FormGroup>
    <FormGroup check>
        
        <Label check> 
            <Input type="checkbox" name="extraCheese" data-cy="checkbox14" checked={formData.extraCheese} onChange={handleToppings}/>Extra Cheese
        </Label>
    </FormGroup>

    {/* 18. Creating Special Substitute */}
    <FormGroup>
        <legend>Special Instructions</legend>
        <Input type="textarea" name="special" value={formData.special} onChange={handleChange}/>
    </FormGroup>

    {/* 19. Adding a button */}
    <Button>Add to Order</Button>
    </Form>
    </>
    )
}

export default PizzaForm; 