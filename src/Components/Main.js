import React from 'react'

export const Main = ({

  forecast,
  getItem
 

}) => {

  const iconURL='https://openweathermap.org/img/wn/'

const Format=()=>{
  let option= {year:'numeric', month:'long', day:'numeric'}
    return new Date().toLocaleDateString([],option)
}

  return (

  
    <div>

      <h1 className='location'>{forecast.name}</h1>
         <h2 className='date'>{Format()}</h2>
        <div className='weatherIcon'>
            <div className=''>
                <img src={iconURL+forecast.icon+"@2x.png" }
                alt=""/>
          
            </div>
          </div>

      <p className='temp'>{(forecast.temp-273.15).toFixed(0)}</p>

      <p className='conditions'>{forecast.description}</p>

        </div>
           
    )

}
