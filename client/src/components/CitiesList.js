import React from 'react';
const url = "http://localhost:5000/cities"
 
class CitiesList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: '',
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
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }
  render(){
    if(this.state.isFetching){
      return (<p>Fetching cities...</p>);
    }else{

      //DEBERIA FILTRAR SOLO LAS PRIMERAS LETRAS
      let tamaño = this.state.search.length;
      let filteredCities = this.state.cities.filter((city)=>{
        return city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      });      
      const cities = filteredCities.map(city => <p key={city._id}>{city.name + " " + city.country}</p>);
      return( 
        <div>
          <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
          <ul>
            {cities}
          </ul>
        </div>
      )
    }
  }
}
export default CitiesList