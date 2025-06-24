import React, { Component } from "react";

class programming extends Component
{
    render()
    {
        const empname=['Matleen','sam','Kevin','Jeni','Arjun'];
        return(
            <div>
                <h1>My favourite Employees name</h1>
                <ul>
                    {empname.map((em,index) =>(
                        <li key={index}>{em}</li>
                    ))}
                </ul>
            </div>
        )
    };
}
export default programming;