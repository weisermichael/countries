import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {DisplayDiv, WeatherDiv, TempContainer, WindContainer, PicContainer} from './styledComponents/styles'
require('dotenv').config()

const Weather = ({weatherData}) => {
  const imgSrc = process.env.PUBLIC_URL + "/icons/" + weatherData.weather.icon + ".png"
  console.log(imgSrc)
  return (
    <WeatherDiv>
      <>
        <TempContainer><div><b>temperature: </b>{weatherData.temp} Celcius <br/></div></TempContainer>
        <PicContainer><div><img src={imgSrc} alt="weather icon" style={{"border": "1px solid #4A6E82", margin: "10px"}}/> <br/></div></PicContainer>
        <WindContainer><div><b>wind: </b> {weatherData.wind_spd} mph direction {weatherData.wind_cdir} <br/></div></WindContainer>
      </>
    </WeatherDiv>
  )
}

const CountryInfo = ({i, countries, disp}) => {
  const [weatherData, setWeatherData] = useState(null)
  const api_key = process.env.REACT_APP_API_KEY
  //console.log(process.env.REACT_APP_API_KEY);
  const urlStr = "https://api.weatherbit.io/v2.0/current?key=" + api_key + "&city=" + countries[i].capital
  useEffect(() =>{
    console.log("effect")
    axios.get(urlStr).then((response) => {try {setWeatherData(response.data.data[0])}
                                            catch(error){
                                              console.log(error)
                                            }})
  }, [])

  if (disp) {
    return (
      <DisplayDiv>
        <div>
          <h1>{countries[i].name.common}</h1>
          <br/>
          capital: {countries[i].capital} <br/>
          population: {countries[i].population} <br/>
          <h2>languages</h2>
          <ul>
            {Object.values(countries[i].languages).map((l, a) => <li key={a}>{l}</li>)}
          </ul>
          <img src={countries[i].flags.png} alt="flag" />
          <br/>
          <h2>Weather in {countries[i].capital}</h2>
          {weatherData && <Weather weatherData={weatherData} /> }
          {!weatherData && <p>Weather data is not avaliable for this location right now.</p>}
        </div>
      </DisplayDiv>
    )
  }
  else{
    return(
      <> </>
    )
  }
}

const Display = ( {countries, search, namesSearched, commonNames, handleChange, handleClick, displayCountry} ) => {

  if (search.length === 0) {
    return (
      <DisplayDiv>
        <div>
          find countries <input value={search} onChange={handleChange}></input>
          <br/>
          specify a filter
        </div>
      </DisplayDiv>
    );
  }

  else if (namesSearched.length > 10) {
    return (
      <DisplayDiv>
        <div>
          find countries <input value={search} onChange={handleChange}></input>
          <br/>
          Too many matches, specify another filter
        </div>
      </DisplayDiv>
    );
  }

  else if (namesSearched.length === 1){
    const i = commonNames.indexOf(namesSearched[0])
    return (
      <DisplayDiv>
        <div>
          find countries <input value={search} onChange={handleChange}></input>
          <CountryInfo i={i} countries={countries} disp={true}/>
        </div>
      </DisplayDiv>
    )
  }

  return (
    <DisplayDiv>
      <div>
        find countries <input value={search} onChange={handleChange}></input>
        <ul>
          {namesSearched.map(n => <>
                                    <li ind={commonNames.indexOf(n)} 
                                        key={commonNames.indexOf(n)}> {n} 
                                      <button key={commonNames.indexOf(n)}
                                              onClick={handleClick}>show</button>
                                      
                                    </li>
                                    <CountryInfo key={1+commonNames.indexOf(n)} 
                                                i={commonNames.indexOf(n)} 
                                                countries={countries} 
                                                disp={displayCountry[commonNames.indexOf(n)]}/>
                                  </>)}
          
        </ul>
      </div>
    </DisplayDiv>
  );
}

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [displayCountry, setDisplay] = useState([])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleClick = (event) => {
    const newArr = [...displayCountry]
    if (displayCountry[event.target.parentElement.getAttribute('ind')] === true) {
      newArr[event.target.parentElement.getAttribute('ind')] = ''
    }
    else{
      newArr[event.target.parentElement.getAttribute('ind')] = true
    }
    setDisplay(newArr)
  }

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
         .then(response => setCountries(response.data))},[])
  
  const commonNames = countries.map(c => c.name.common)
  const namesSearched = commonNames.filter(n => n.toLowerCase().includes(search.toLowerCase()))


  return (
    <Display countries={countries}
             search={search} 
             namesSearched={namesSearched} 
             commonNames={commonNames} 
             handleChange={handleChange} 
             handleClick={handleClick}
             displayCountry={displayCountry} />
  )
}

export default App;
