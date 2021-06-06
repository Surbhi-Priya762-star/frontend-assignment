import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class UserDetails extends React.Component {
  state = { users: {},support:{}};
  componentDidMount() {
    var x = this.props.match.params.id;
   
    fetch(`https://reqres.in/api/users/${x}`)
      .then((response) => response.json())
      .then((data) => {
       
     
        this.setState({ users: data.data });
        this.setState({ support: data.support });
        console.log(this.state)
      });

   
  }
  render() {
    const data={...this.state.users};
    const support={...this.state.support}
    console.log(data);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
         
        }}
      >
       
         <div key={data.id} style={{position:"relative",textAlign:"center",backgroundColor:"gray",border:"5px solid black",marginTop:"20px", borderRadius:"10px"}}>
     
     <img
       style={{
         display: "inline-block",
         width: "300px",
         height: "400px",
         marginTop:"20px",borderRadius:"15px"
       }}
       src={data.avatar}
       alt={data.first_name}
     /><p>FIRST NAME: {data.first_name}</p><p>LAST NAME: {data.last_name}</p><p>EMAIL: {data.email}</p><p>{support.text}</p>
   </div>
       
      </div>
    );
  }
}

export default UserDetails;