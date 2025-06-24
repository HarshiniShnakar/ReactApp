/*In react form are handled in two ways controlled form or components
uncontrolled components(form)
useRef() it helps to achieve the exact result in form handling 
controlled components(form)
A controlled components is a form element such as <input><lable><textarea> whose value controlled by react StaticRange.apply
react is having a full control over the form using useState.
its state and properties(variable,function) are updated using the "onChange"
useful at the time of handling form inputs and form ValidityState.
uncontrolled Component
An uncontrolled component is a form element that manages its own state ,React does not control its

Accessing the form values by using the hooked name as "useRef()"
validation process is not possible*/

import React, { useState } from "react";

function Controlledform()
{
    const [formData,setFormData]=useState({name:"",email:""});

    const handleChange =(i) => {
        setFormData({...formData,[i.target.name]:i.target.value});
    };
return(
    <div>
        <h2>Controlledform</h2>
            <form>
                <input type="text" name="name" placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                />


                <input type="text" name="email" placeholder="Enter your EmailID"
                value={formData.email}
                onChange={handleChange}
                />

            </form>
            <p><b>Live Preview:</b></p>
            <p>Name:{formData.name}</p>
            <p>email:{formData.email}</p>
        
    </div>
);


}
export default Controlledform;


