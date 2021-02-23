import React ,{useState,useEffect} from 'react'
import './App.css';
import DropDown from './components/DropDwon'
import Card from './components/Card'
import 'leaflet/dist/leaflet.css'
import Mapp from './components/Mapp'
import Country from './components/Country'
import Chart from './components/Chart'
import {sortCountries} from './components/drawCircles'


function App() {
  const [dropDownCountries,setDropDownCountries]=useState([]) //app
  const [dropDownValue,setDropDownValue]=useState('worlwide') //dropdown
  const [singleCountry,setSingleCountry]=useState([])
  const [zoom,setZoom]=useState(2)
  const [center,setCenter]=useState([34.80746,-40.4098])
  const [countriesForCircles,setCountriesForCircles]=useState([])
  const [casesType,setCasesType]=useState('cases')
  const [data,setData]=useState({})
  useEffect(()=>{
    const getCountries= async()=>{
      let countries=await fetch('https://disease.sh/v3/covid-19/countries')
      let jsonCountries=await countries.json()
      
      setCountriesForCircles(jsonCountries)
      jsonCountries= jsonCountries.map(({country,cases})=>{
        return {
           country,
           cases
        }
      })
      setDropDownCountries(jsonCountries)
    }
    getCountries()
  },[])

  useEffect(()=>{
    const showWorldWideWhenFirstLoad= async()=>{
      let theCountry= await fetch('https://disease.sh/v3/covid-19/all')
      let theCountryJson=await theCountry.json()
      setSingleCountry(theCountryJson)
    }
    showWorldWideWhenFirstLoad()
  },[])

  

  return (
    <div className="App">
      <div className="container">
      <div className="left-part-lay-out">
        <div className="item">
         <div className="header">
          covid-19-tracker
          <DropDown
           dropDownCountries={dropDownCountries}
           dropDownValue={dropDownValue}
           setDropDownValue={setDropDownValue}
           setSingleCountry={setSingleCountry}
           setCenter={setCenter}
           setZoom={setZoom}
           />
         </div>
         <div className="cards-info">
           <Card casesType={casesType} setData={setData} setCasesType={setCasesType} dropDownValue={dropDownValue} total={singleCountry.cases} today={singleCountry.todayCases} title="cases"/>
           <Card casesType={casesType} setData={setData} setCasesType={setCasesType} dropDownValue={dropDownValue} total={singleCountry.recovered} today={singleCountry.todayRecovered} title="recovered"/>
           <Card casesType={casesType} setData={setData} setCasesType={setCasesType} dropDownValue={dropDownValue} total={singleCountry.deaths} today={singleCountry.todayDeaths} title="deaths"/>
         </div>
         <div className="map">
           <Mapp
           casesType={casesType}
           countriesForCircles={countriesForCircles}
           center={center}
           zoom={zoom}
           />
         </div>
        </div>
      </div>
      <div className="right-part-lay-out">
        <div className="item">
          <h2>Live Cases by Country</h2>
          <div className="countries-cases">
            {
              sortCountries(dropDownCountries).map(ele=>{
                return <Country country={ele.country} cases={ele.cases} />
              })
            }
          </div>
          <div className="charts">
            <Chart
            casesType={casesType}
            data={data}
            setData={setData}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
