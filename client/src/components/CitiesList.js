import React from 'react';
import {getCities} from '../actions/cityActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
 
class CitiesList extends React.Component{
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
    // console.log("this")
    // console.log(this)
    this.props.getCities()
  }
  render(){
    console.log(this.props)
    let filteredCities = this.props.cities.filter((city)=>{
      return city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    const cities = filteredCities.map(city =>  <Link to={`./itineraries/${city._id}`}><p key={city._id}>{city.name + ", " + city.country}</p></Link>);
    return(
    <React.Fragment>
      <div>
        <div className="citylist">
          city: <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
          <ul>
            {cities}
          </ul>
        </div>
        <hr/>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state2")
  // console.log(state)
  return {
    cities:state.cityReducer
  }
}
export default connect(mapStateToProps, {getCities})(CitiesList);
