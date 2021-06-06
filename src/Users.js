/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useState  } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function TitlebarGridList(props) {
 
  const [state,setState]=useState({users:[]})
  
  


  //

  useEffect(()=>{
    fetch('https://reqres.in/api/users?delay=3')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setState({users:data.data})});
        
  },[state])

   const handleClick=(id)=>{
    props.history.push(`/${id}`)
   
  }
  const handleChange=(e)=>{
console.log(e.target.value);
 let data =[...state.users];
 data.sort();
 setState({users:data})
  }

  return (
    <div style={{ padding:"20px" }}> 
    <Loader
        type="TailSpin"
        color="black"
        height={300}
        width={300}
        timeout={3000} //3 secs
      />{state.users==[]?null:
    <select style={{ position:"relative",right:"350px", display:"inline-block",float:"right",padding:"5px"}} onChange={handleChange}>
    <option selected value="None">None</option>
    <option value="FirstName">FirstName</option>
    <option  value="LastName">LastName</option>
    
  </select>}
    <div style={{ padding:"20px", display:"flex", flexWrap: "wrap",justifyContent:"center",alignItems:"center" }}>
      
      
        {state.users.map((tile) => (
          <div  onClick={()=>{handleClick(tile.id)}} style={{borderRadius:"5px", width:"300px", height:"500px",textAlign:"center",backgroundColor:"gray", margin:"10px",padding:"10px"}}  >
          {console.log(tile.avatar)}
            <img src={tile.avatar} alt={tile.first_name}  style={{width:"250px",height:"350Px",marginTop:"20px",borderRadius:"15px"}}/>
            <p>{tile.first_name}</p>
            <p>{tile.last_name}</p>
            
            </div>
        ))}
     
    </div>
    </div>
  );
}
