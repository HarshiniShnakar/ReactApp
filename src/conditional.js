import React, { Component } from "react";

class Loginstatus extends Component
{
    constructor(props)
    {
        super(props)
        this.state={isLoggedIn:false};
    }

    toggleLogin=()=>{

        this.setState( prev => ({isLoggedIn : !prev.isLoggedIn}));

 };

 render()
 {
    return (
    <div>
        <h2>Conditional Rendering</h2>
        <p>{this.state.isLoggedIn ? 'Welcome Back!': 'Please login'}</p>
        <button onClick={this.toggleLogin}>
            {this.state.isLoggedIn ? 'Logout':'Login'}
        </button>
    </div>
    );
 }

}
export default Loginstatus;