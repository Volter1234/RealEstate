import React from "react";
import Nav from "./nav";
import Intro from "./intro";
import Cards from "./cards";
import Form from "./form";

function App(){
    return(
        <div>
            <Nav/>
            <Intro/>
            <Cards/>
            <Form/>
        </div>
    )
}
export default App;