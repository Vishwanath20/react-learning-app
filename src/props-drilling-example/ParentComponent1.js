
import React from "react";
import ChildComponent1 from "./ChildComponent1";
import { MyContext } from "./MyContext";



function ParentComponent1(){
    const parentData = "Hello From Parent Component";
    return(
        <>
            <div style={{backgroundColor:"red", height:"500px", width:"500px"}}>
                <h2>Content API Example</h2>
                <h2>Parent Component-1</h2>
                <MyContext.Provider value={parentData}>
                <ChildComponent1 ></ChildComponent1>
                </MyContext.Provider>
            </div>
        </>
    );
}

export default ParentComponent1;