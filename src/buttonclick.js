import React from "react";

import './buttonclick.css';

function Namedisplay()
{
    const handleclick=()=>
    {
        const input=document.getElementById('nameinp');
        const result=document.getElementById('result');
        result.textContent=`Hello ${input.value}!`;
    };

    return(
        <div class="style">
            <input type="text" id="nameinp" placeholder="Enter your Name"/>
            <button onClick={handleclick}>Click Here</button>
            <p id="result"></p>
    </div>
);
}
export default Namedisplay;
