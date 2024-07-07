import GrandchildComponent1 from "./GrandchildComponent1";


function ChildComponent1(){
    return(
        <>
            <div style={{backgroundColor:"green",  height:"400px", width:"400px"}}>
          <h2>Child component-1</h2>
           <GrandchildComponent1 ></GrandchildComponent1>
          
           
            </div>
            
        </>
    );
}
export default ChildComponent1;