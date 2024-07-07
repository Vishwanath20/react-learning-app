import ChildComponent from "./ChildComponent";

function ParentComponent(){
    const parentData = "Hello From Parent Component";
    return(
        <>
            <div style={{backgroundColor:"red", height:"500px", width:"500px"}}>
                <h2>Parent Component</h2>
            <ChildComponent data={parentData}></ChildComponent>
            </div>
            
        </>
    );
}

export default ParentComponent;