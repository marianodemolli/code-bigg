import React from 'react';
const url = "http://localhost:5000/cities"
 
class CitiesList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isFetching: true,
      cities: null};
  }
  async componentDidMount() {
    await this.fetchCities()
  }
  fetchCities = () => {
    /*this.setState({...this.state, isFetching: true})*/
    fetch(url)
    .then(response => response.json())
    .then(result => this.setState({cities: result, isFetching: false}))
    .catch(e => console.log(e));
  }
  render(){
    if(this.state.isFetching){
      return (<p>Fetching cities...</p>);
    }else{
      const cities = this.state.cities.map(city => <p key={city._id}>{city.name + " " + city.country}</p>);
      // console.log(this.state.cities);
      return <div> {cities}</div>
    }
  }
}
export default CitiesList