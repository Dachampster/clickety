import React from "react";
import "./produce.css";

const Produce = props => (
 
  <div className="card">

    <div className="img-container" onClick = {() => {
      props.handleClick(props.id)
    }}>

    <img className = "pix" alt= {props.name} src={props.pic}  />
    
     </div>
</div>
    
  
    
);

export default Produce;