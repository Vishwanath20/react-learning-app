import React, { useContext } from "react";
import {  MyContext } from "./MyContext";

function GrandchildComponent1(){
    const data = React.useContext(MyContext);
    return(
        
        <>
            <div style={{backgroundColor:"yellow", height:"300px", width:"300px"}}>
            <h2>Grand Child Component-1</h2>
           
            <div>{data}</div>
           
           
            </div>
           
        </>
    );
}

export default GrandchildComponent1;