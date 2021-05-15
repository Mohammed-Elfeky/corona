import {Circle,Popup} from 'react-leaflet'
import numeral from 'numeral'
import style from './popup.module.css'
const casesTypeColors = {
  cases: {
      hex: "#CC1034",
      multiplier: 200,
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 300,
    },
    deaths: {
      hex: "#fb4443",
      multiplier: 2000,
    },
  };

const drawCircles=(data,casesType)=>{
    return data.map(country=>(
         <Circle
               center={[country.countryInfo.lat,country.countryInfo.long]}
               fillOpacity={.3}
               pathOptions={{color:casesTypeColors[casesType].hex,fillColor: casesTypeColors[casesType].hex}}
               radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}
               >
                 <Popup>
                     
                     <div style={{backgroundImage:`url(${country.countryInfo.flag})`}} className={style.flag}>
                        
                     </div>
                     <div className={style.name}>
                         country :{country.country}
                     </div>
                     <div className={style.cases}>
                         cases:{numeral(country.cases).format('0,0')}
                     </div>
                     <div className={style.recovered}>
                         recovered:{numeral(country.recovered).format('0,0')}
                     </div>
                     <div className={style.deaths}>
                         deaths:{numeral(country.deaths).format('0,0')}
                     </div>
                    
                 </Popup>
               </Circle>
    ))
} 

export default drawCircles;



