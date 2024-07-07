

export const fetchData = ()=>{
    return async(dispatch) =>{
        dispatch(fetchDataPending());
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch(fetchDataSuccess(data));
        }
        catch(error){
            dispatch(fetchDataFailure(error.message));
        }
    };
};

// export function fetchData(){
//     console.log('----inside fetchData() action---');
//     return function(dispatch){
//         dispatch(fetchDataPending());
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((respone)=>{
//             const data = respone.data;
//             dispatch(fetchDataSuccess(data));
//         }).catch((error)=>{
//             dispatch(fetchDataFailure(error))
//         })
//     }
// }

export const fetchDataSuccess=(data)=>({
    type:'FETCH_DATA_SUCCESS',
    payload:data,
});

export const fetchDataPending=()=>({
    type:'FETCH_DATA_PENDING'
});

export const fetchDataFailure=(error)=>({
    type:'FETCH_DATA_FAILURE',
    payload:error,
});