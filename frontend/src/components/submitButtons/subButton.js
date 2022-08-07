import React from "react";
import './submitButton.css';


const submitButton = props =>{
    return(
        <div> 
            <button className="button" type={props.type}> 
                {props.children}
            </button>
        </div>
    )
}

export default submitButton;
