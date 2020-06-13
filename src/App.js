import React from "react";
//2. import {Route}
import {Route} from "react-router-dom"
//5. import the remainding libraries
import {Link} from "react-router-dom"
//6. import reacstrap components
import {Button, Navbar, Card, CardImg, ButtonGroup} from "reactstrap"


const App = () => {
  return (
    <>
    <Navbar>
      <h1>LAMBDA EATS</h1> 

      <ButtonGroup>
        <Link To="/">
      <Button outline color="primary" color="info" align="right">Home</Button> 
      </Link>
      <Button outline color="primary" color="info">Help</Button> 
      </ButtonGroup>

    {/* 7. adding the header image */}
    <Card>
      <CardImg src={require("../Assets/Pizza.jpg")}/>
    </Card>
 
    
    </Navbar>

    


    {/* 4. Render the menu */}
    
    
      </>
  );
};
export default App;
