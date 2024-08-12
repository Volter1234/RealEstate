import React from "react";
import logo from "./main.png";

function Intro(){
    return(
        <div className="introComp row">
        <div className="Text col-lg-6">
            <h1 className="heroText">Real Estate <mark>Tokenization</mark></h1>
            <h2 className="heroSubText">Buy and List Properties</h2>
        </div>
        <div className="imgSrc col-lg-6">
            <img src={logo} alt="image"/>
        </div>
        </div>
    )
}
export default Intro;