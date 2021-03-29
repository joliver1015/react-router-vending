import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css"


const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <Message>
               <h1>Welcome to the Vending Machine!</h1> 
            </Message>
            <Message>
                <h1>Pick which item you want:</h1>
                <h1><Link exact to="/chips">Chips</Link></h1>
                <h1><Link exact to="/soda">Soda</Link></h1>
                <h1><Link exact to="/starburst">Starburst</Link></h1>
            </Message>
            
        </div>
    )
}

export default VendingMachine;