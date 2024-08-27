import React, { useState } from 'react'
import Searchbox from './Searchbox'
import InfoBox from './InfoBox'

function weatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Surat",
        feelsLike : 24.84,
        temp : 25.05,
        tempMin : 25.05, 
        tempMax : 25.05,
        humidity : 85,
        weather : "haze"
    })


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


  return (
    <div>
      <h2 className='m-3'>Weather App by HP</h2>
      <Searchbox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  )
}

export default weatherApp;