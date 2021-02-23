import React from 'react'

function DropDwon({dropDownCountries,setDropDownValue,dropDownValue,setSingleCountry,setCenter,setZoom}) {

    const handleChange= async(e)=>{
        let selectValue=e.target.value

        setDropDownValue(selectValue)

        const url= selectValue === 'worlwide' ?
        'https://disease.sh/v3/covid-19/all':
        `https://disease.sh/v3/covid-19/countries/${selectValue}`

        
        let theCountry= await fetch(url)
        let theCountryJson= await theCountry.json()
        
        let coordinates= selectValue === 'worlwide'?
        [34.80746,-40.4098]:
        [theCountryJson.countryInfo.lat,theCountryJson.countryInfo.long]

        let zoomValue= selectValue === 'worlwide'?
        2:
        6
        
        setCenter(coordinates)
        setZoom(zoomValue)
        setSingleCountry(theCountryJson)
    }

    return (
        <div>
            <select value={dropDownValue} onChange={handleChange}>
                <option value="worlwide">worlwide</option>
                {
                    dropDownCountries.map(ele=>{
                        return <option value={ele.country}>{ele.country}</option>
                    })
                }
            </select>
        </div>
    )
}

export default DropDwon
