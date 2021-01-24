import React from 'react'
import style from './Country.module.css'
import numeral from 'numeral'
function Country({country,cases}) {
    return (
        <div className={style.country}>
            <h5>{country}</h5>
            <h5>{numeral(cases).format('0,0')}</h5>
        </div>
    )
}

export default Country
