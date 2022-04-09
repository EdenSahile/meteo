import React, {Component} from 'react';
import { SearchBar } from './Components/SearchBar';
import { Main } from './Components/Main';
import {Footer} from './Components/Footer';
import './App.css';



export default class App extends Component {

  constructor(props){

    super(props)

    this.state={

      baseURL :'https://api.openweathermap.org/data/2.5/weather?',

      APIkey:'f09a8654d3fc3b74ab1b6d8613069f0a',
      lang:"&lang=fr",
      input:'paris',
      forecast:{}

    }
  }



  componentDidMount(){
    this.query()
  }

  handleChange(e){
    console.log(e.target.value)
    this.setState({
      input:e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.query()
   
 
  }


  query(){


    let url =this.state.baseURL+"q="+this.state.input+"&appid="+this.state.APIkey+this.state.lang


    fetch(url)
      .then(response=>{

        if(!response.ok){
          console.log('error');
         
        }

       return response.json();
      })
      .then(data=>{
        console.log(data)
        
        let weather=data.weather[0];
       let description = weather.description;
        let icon = weather.icon
         let main=data.main;
        let temp=main.temp;

        let sys= data.sys;
        let country=sys.country;

        let name=data.name;
        let date=data.timezone

        let forecast={

          name:name,
          date:date,
          icon:icon,
          temp:temp,
          description:description
        }

      
    this.setState({
      forecast:forecast,
   
  })
      
    this.setState({
     input:'',
   
  })

  
  })
  


}

  render() {

    return(

        <div>
      <SearchBar  input={this.state.input} change={(e)=>this.handleChange(e)} submit={(e)=>this.handleSubmit(e)} />

      <Main forecast={this.state.forecast} />
      <Footer/>

      </div>

    )

 
   
      
  }

}

