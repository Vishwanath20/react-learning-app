function GrandchildComponent(props){
    return(
        <>
            <div style={{backgroundColor:"yellow", height:"300px", width:"300px"}}>
            <h2>Grand Child Component</h2>
            <div>{props.data}</div>
            </div>
           
        </>
    );
}

export default GrandchildComponent;