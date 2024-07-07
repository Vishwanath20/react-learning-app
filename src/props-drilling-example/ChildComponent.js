import GrandchildComponent from "./GrandchildComponent";

function ChildComponent(props){
    return(
        <>
            <div style={{backgroundColor:"green",  height:"400px", width:"400px"}}>
            <h2>Child Component</h2>
            <GrandchildComponent data={props.data}></GrandchildComponent>
            </div>
            
        </>
    );
}
export default ChildComponent;