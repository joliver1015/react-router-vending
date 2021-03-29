import React from "react";
import {Link} from "react-router-dom"
import Message from "./Message"
import "./Starburst.css"

const Starburst = () => {
    return (
        <div className="Starburst">
            <Message>
                <h1>You have chosen Starburst!</h1>
                <h1><Link exact to="/">Go Back</Link></h1>
            </Message>
        </div>
    )
}

export default Starburst;