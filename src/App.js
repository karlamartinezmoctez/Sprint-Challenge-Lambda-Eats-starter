import React from "react";
//2. import {Route}
import {Route} from "react-router-dom"
//5. import the remainding libraries
import {Link} from "react-router-dom"
//6. import reacstrap components
import {Button, Navbar, Card, CardImg, ButtonGroup} from "reactstrap"
//10. Importing pizzaform
import PizzaForm from "./PizzaForm" 

const App = () => {
  return (
    <>
    <Navbar color="info">
      <h1 style={{color:"white"}}>LAMBDA EATS</h1> 

      <ButtonGroup>
        <Link to={"/"}>
          <Button color="info" align="right">Home</Button> 
        </Link>
      <Button color="info">Help</Button> 
      </ButtonGroup>
    
    </Navbar>

    <Route exact path ="/">
    {/* 7. adding the header image */}
    <Card>
      <CardImg src={require("./Pizza.jpg")}/>
      {/* 12. Adding the link to the pizza button */}
      <Link to={"/pizza"}>
      <Button color="info" style={{position: "absolute", left:"50%", top:"50%"}}>Pizza?</Button>
      </Link>
    </Card>
    </Route>
    
    {/* 8.Add another Route for the Pizza form path */}
    <Route path="/pizza">
    {/* 11. Rendering the pizza form */}
    <PizzaForm />
    </Route>

    {/* 4. Render the menu */}
    
    
      </>
  );
};
export default App;
