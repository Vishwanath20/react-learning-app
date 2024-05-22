import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import  {fetchData}  from './FetchDataAction';

function FetchDataApp({ fetchData }) {
    // function FetchDataApp() {
    const{data, loading}= useSelector((state)=>({...state.dataFetchApp}));

    const dispatch = useDispatch();

    return (
      <div>
        <h3>Fetch data using redux thunk</h3>
        <button onClick={fetchData}>Fetch Data</button>
        {!loading ? (data.map((data)=><h5>{data.body}</h5>)):(<h5>Loading...</h5>)}
        

        {/* <button onClick={()=>dispatch(fetchData())}>Fetch Data</button>
        {!loading ? (data.map((data)=><h5>{data.body}</h5>)):(<h5>Loading...</h5>)} */}
      </div>
    );
  }

//export default FetchDataApp;

  const mapDispatchToProps = {
    fetchData,
  };
  
  export default connect(null, mapDispatchToProps)(FetchDataApp);

