import React from "react";
import {Link} from "react-router-dom"
import Message from "./Message"
import "./Chips.css"
const Chips = () => {
    return (
        <div className="Chips">
            <Message>
                <h1>You have chosen chips!</h1>
                <h1><Link to="/">Go Back</Link></h1>  
            </Message>
        </div>
    )
}

export default Chips;