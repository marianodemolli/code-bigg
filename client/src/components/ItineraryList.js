import React from 'react';
import {getItinerariesByCity} from '../actions/itineraryActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
 
class ItineraryList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ''
      };
  }
  submitForm =()=>{
  }
  updateSearch(event){
    this.setState({search: event.target.value.substring(0,20)})
  }

  componentDidMount() {
    this.props.getItinerariesByCity();
  }
  render(){
    console.log("this.props")
    console.log(this.props)
    const cityId = this.props.match.params.city;
    const itineraries = this.props.itineraries? this.props.itineraries:[];
    // const cityName = itineraries[0].city.name;
    // return ( <h1> asd</h1>)
    const itineraryList = itineraries.map(itinerary => {return  <div key={itinerary._id}><h3>{itinerary.title}</h3></div>})
      return(
            <React.Fragment>
              <div>
                <ul>
                  {itineraryList}
                </ul>
              </div>
            </React.Fragment>
        )
  }
}

const mapStateToProps = (state) => {
  console.log("state")
  console.log(state)
  return {
    itineraries: state.itineraryReducer
  }
}
const mapDispatchToProps = (dispatch, getState) => {
  return { 
    getItinerariesByCity: () => dispatch(getItinerariesByCity(getState.match.params.id))
  }
};
export default connect(mapStateToProps, (mapDispatchToProps))(ItineraryList);
