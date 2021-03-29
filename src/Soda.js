import React from "react";
import {Link} from "react-router-dom";
import Message from "./Message";
import "./Soda.css"

const Soda = () => {
    return (
        <div className="Soda">
            <Message>
                <h1>You have chosen soda!</h1>
                <h1><Link exact to="/">Go Back</Link></h1>
            </Message>
            
        </div>
    )
}

export default Soda;