import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Weather = () => {

    const [location, setLocation] = useState({})

    useEffect(() => {

        function success(pos) {
            const crd = pos.coords;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=b045d170d006915d39ea5fd5426971b8`).then((res)=> setLocation(res.data))

        }

        function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error);

    },[])


    const [celsius, setCelsius] =useState(true)

    const changeToCelsius = () => {

    setCelsius(!celsius)
    }


    const temperature = Math.round((((location.main?.temp) - 273.15) * (9/5)) + 32) 


    return (
        <div>

            <h1>Wheather App</h1>

            <h2> {location.name} , {location.sys?.country} </h2>

        <div className="general">
            
        <div className="temperature">

            <h3> {celsius?  temperature : Math.round(((location.main?.temp)-273.15)) }  <p>{ celsius? "F°" : "C°" }</p></h3>

           
        <div className="img">

            <img src = {`http://openweathermap.org/img/wn/10d@2x.png`} alt="" />
        </div>
            {/* ${location.weather?.icon} */}
        </div>

        <div className="additionalInformation">
            <div className="information">


            <p> {location.weather?.[0].description} </p>
            </div>

        <div className="information">

            <p>Wind Speed: </p>
             <p className='blackColor'> {location.wind?.speed} m/s</p> 
        </div>
        <div className="information">

            <p>Clouds: </p> <p className='blackColor'> {location.clouds?.all}%</p>
        </div>
        <div className="information">
            <p>Pressure: </p><p className='blackColor'> {location.main?.pressure} mb </p>

        </div>


             
        </div>

        </div> 


            <button onClick={changeToCelsius} >Change to{celsius? "C°" : "F°"} </button>
                
        </div>
    );
};

export default Weather;