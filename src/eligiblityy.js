import React, { useState } from "react";

function EligiblityCheck()
{
    const [age,setAge]=useState('');
    const [message,setMessage]=useState('');
    const [error,setError]=useState('');

    const checkeligiblity =() =>{
        try{
            setError('');
            setMessage('');

            const parseAge=parseInt(age);

            if(isNaN(parseAge)){

                throw new Error("Enter Numeric Value");
            }
            if(parseAge < 0){
                throw new Error("Age cannot be negative");
            }
            if(parseAge < 18){
                throw new Error("you are not eligible to apply for driving license")
            }
            setMessage("you are eligible to apply for a driving license")

        }catch(e){
            setError(e.message);
        }
};

    return(
        <div style={{maxWidth:'400px',margin:'50px',fontFamily:'cursive'}}>
            <h2>Driving License Eligiblity Checker</h2>
            <input type="text" placeholder="Enter your Age" value={age} onChange={(e) => setAge(e.target.value)}
            style={{padding:'10px',width:'100%',marginBottom:'10px'}} />

            <button onClick={checkeligiblity} style={{padding:'10px', width:'100%'}}>
                check Eligiblity
                </button>
                {message && <p style={{color:'green',marginTop:'15px'}}>{message}</p>}
                {error &&  <p style={{color:'red',marginTop:'15px'}}>{error}</p>}
        </div>
    );
}

export default EligiblityCheck;


