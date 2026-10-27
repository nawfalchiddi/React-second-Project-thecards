import { useState } from "react";
import React from "react";


function Form(){

    return(
        <form action="" className="theform">
          <h1>Add a product now</h1>

          <input className="thename" type="text" placeholder="name"  />

          <input className="price" type="text" placeholder="Price" /> 

          <input className="quatity" type="text" placeholder="Quantity" />

          <button  type="sunmit" className="btnform">Add</button> 
        </form>
    )
}

export default Form