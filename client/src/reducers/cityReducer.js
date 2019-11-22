const cityReducer = (state = [], action) => {
    console.log("addCity",action)
    switch (action.type){
        case 'GET_CITIES':
            return action.payload
        default:
            return state
    }
}
export default cityReducer