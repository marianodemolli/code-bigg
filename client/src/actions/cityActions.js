function getCities(){
    return (dispatch,getState) => {
        console.log("getState()")
        console.log(getState())    
        if(getState().length>0) return;
        return fetch("http://localhost:5000/cities").then((res)=>{
            return res.json()
        }).then((data)=>{
            dispatch({
                type:'GET_CITIES',
                payload:data
            });
        })
    };
}
export {getCities}