// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <div>
            <input type="password" onChange={(evnet)=>{console.log('Entering password...')}} />
        </div>
    )
}

export default Keypad;