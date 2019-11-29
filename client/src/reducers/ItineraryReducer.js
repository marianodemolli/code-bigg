const itineraryReducer = (state = [{_id:"aaaaaaaaaa"}], action) => {
    console.log("itinerary reducer");
    switch (action.type){
        case 'GET_ITINERARIES':
            return action.payload
        default:
            return state
    }
}
export default itineraryReducer