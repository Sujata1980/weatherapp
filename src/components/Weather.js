import React,{ useEffect, useState } from 'react'
import"./Weather.css"
import { FaSearch } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import axios from 'axios'
import { getImageURL } from "./utils/image-util";


const Weather = () => {

    const[city,setCity] = useState();
    const[weather,setWeather] = useState();

    



    const search = async () =>{
        

        try{
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'76758c2e86c42a6afccf552ad6e330aa'}`)

            console.log(res);
            setWeather(res);
        }catch(error){
            setWeather(false);
        }

        
    }


    

  const handleClick = (city) =>{
    
    search();
//     if (city === ""){
//         console.log("Enter City Name")
//         alert("Enter City Name");
        
//     }
  }
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type='text' placeholder='Enter City Name' value={city} onChange={(e)=>setCity(e.target.value)}/>
            <i onClick={handleClick}><FaSearch /></i>
        </div>
        
          { weather && 
          (
            <>
         
          
          
             
        <img src={getImageURL(weather.data.weather[0].icon)} height="200"></img>
        <p className='temperature'>{Math.floor(weather.data.main.temp)}&deg;c</p>
        <p className='location'>{weather.data.name}</p>
        

        <div className="weather-data">
            <div className="col">
                <WiHumidity size={40}/>
                    <div>
                        <p>{weather.data.main.humidity} %</p>
                        <span>Humidity</span>
                    </div>
            </div>

            <div className="col">
                <TiWeatherWindyCloudy size={40}/>
                    <div>
                        <p>{weather.data.wind.speed} km/h</p>
                        <span>Wind Speed</span>
                    </div>
            </div>
        </div>
        </>   
          )}

    
      
    </div>
  )
}

export default Weather
