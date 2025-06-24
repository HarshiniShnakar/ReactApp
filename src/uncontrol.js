import React, { useRef, useState } from "react";

function Uncontrolledform()
{
    const nameRef=useRef();
    const emailRef=useRef();

    const [Preview,setPreview]=useState({name:"",email:""});

    const handlePreview =() => {
        setPreview({
            name:nameRef.current.value,
            email:emailRef.current.value
        });

    };

    return(
        <div>
        <h2>UnControlledform</h2>
            <form>
                <input type="text" name="name" placeholder="Enter your Name" ref={nameRef} /><br/>
                
                <input type="text" name="email" placeholder="Enter your EmailID" ref={emailRef} />

                <button onClick={handlePreview}>Show Preview</button>

            
            <p><b>Live Preview:</b></p>
            <p>Name:{Preview.name}</p>
            <p>email:{Preview.email}</p>
            </form>
        
    </div>
);
}
export default Uncontrolledform;