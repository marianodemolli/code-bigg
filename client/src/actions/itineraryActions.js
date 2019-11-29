export const getItinerariesByCity = (cityId) => {
    return (dispatch,getState) => {
        if(getState().length>0) return;
        return fetch(`http://localhost:5000/itineraries/${cityId}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            dispatch({
                type:'GET_ITINERARIES',
                payload:data
            });
        }).catch(err => console.log(err));
    };
}
