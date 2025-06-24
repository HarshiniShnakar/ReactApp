import React, { Component } from "react";

function Studentname()
{
    const username=[{BatchCode:'c209',Name:"Harshini",Gender:"Female",Course:"Fullstack",Location:"Chennai"},
        {BatchCode:'c209',Name:"Shivani",Gender:"Female",Course:"Fullstack",Location:"Chennai"},
        {BatchCode:'c209',Name:"Ramya",Gender:"Female",Course:"Fullstack",Location:"Chennai"},
        {BatchCode:'c209',Name:"Shyam",Gender:"male",Course:"Fullstack",Location:"Chennai"},
        {BatchCode:'c209',Name:"Nandha",Gender:"male",Course:"Fullstack",Location:"Chennai"}];


 return (
    <div>
        <center>
      <h2>Batch Details</h2>
      <table border="7" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
        
        <thead>
          <tr>
            <th>Batchcode</th>
            <th>Name</th>
            <th>Gender</th>
            <th>course</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {username.map((user) => (
            <tr key={user.BatchCode}>
              <td>{user.BatchCode}</td>
              <td>{user.Name}</td>
              <td>{user.Gender}</td>
              <td>{user.Course}</td>
              <td>{user.Location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
    </div>
  );
}


export default Studentname;