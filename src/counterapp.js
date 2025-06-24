import React, { useState } from "react";

import './counterapp.css';

function CounterApp()
{   
    //count variables 
    //setCount() to write the functionalities of count  conversion
    const[count,setCount]=useState(0);

    const Increment=()=> {
        setCount(prev =>prev+1)
    };

    const Decrement=() =>{
        setCount(prev =>prev-1)
    };

    const Original=() =>{
        setCount(0);
    }


    return(
   <div class="style">
        <h1>COUNTER APP</h1>
        <h2>{count}</h2>
        <button class="but" onClick={Increment}>Next</button>
     
        <button class="but1" onClick={Decrement}>Prev</button>

        <button class="but2" onClick={Original}>Home</button>

   </div>

 );

}
export default CounterApp;