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
      input:'paris'

    }
  }



  // componentDidMount(){
  //   this.query()
  // }

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


    let url =this.state.baseURL+"q="+this.state.input+"&appid="+this.state.APIkey


    fetch(url)
      .then(response=>{

        if(!response.ok){
          console.log('error');
         
        }

       return response.json();
      })
      .then(data=>{
        console.log(data)
    
  })

}

  render() {

    return(

        <div>
      <SearchBar change={(e)=>this.handleChange(e)} submit={(e)=>this.handleSubmit(e)}/>

      <Main/>
      <Footer/>

      </div>

    )

 
   
      
  }

}

