import React, { Component } from 'react';
import './App.css';
import Information from './info-json';

class App extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){

    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
        <div>
          <span class="result">{data.name}</span>
          <span class="result">{data.age}</span>
          <span class="result">{data.country}</span>
        </div>
      )
    })

    const facets = (
      <div id="facets">
        Country<br /> 
        Africa <input type="checkbox" id="country1" name="country1" value="Africa"></input><br/>
        China <input type="checkbox" id="country2" name="country2" value="China"></input><br/>
        France <input type="checkbox" id="country3" name="country3" value="France"></input><br/>
        India <input type="checkbox" id="country4" name="country4" value="India"></input><br/>
        Ireland <input type="checkbox" id="country5" name="country5" value="Ireland"></input><br/>
        Korea <input type="checkbox" id="country6" name="country6" value="Korea"></input><br/>
        Spain <input type="checkbox" id="country7" name="country7" value="Spain"></input><br/>
        India <input type="checkbox" id="country8" name="country8" value="USA"></input><br/>
      </div>
    )

    return (
      <div id="container">
        <input id="searchbar" type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} />
        {facets}
        <div id="results">
          {items}
        </div>
      </div>
    )
  }
}

export default App;