import React from 'react'
import style from './Mapp.module.css'
import { MapContainer as LeafletMap , TileLayer ,useMap} from "react-leaflet"
import drawCircles from '../../helpers/drawCircles/drawCircles'
function Mapp({center,zoom,countriesForCircles,casesType}) {

    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.flyTo(center, zoom);
        return null;
      }

    return (
        <div className={style.mapp}>
            <LeafletMap center={center} zoom={zoom} style={{height:"100%"}} >
            <ChangeView center={center} zoom={zoom} /> 
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {drawCircles(countriesForCircles,casesType)}
            </LeafletMap>
        </div>
    )
}

export default Mapp
