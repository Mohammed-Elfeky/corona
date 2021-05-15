import style from './Card.module.css'
import numeral from 'numeral'
import chartCreating from '../../helpers/chartCreating'
function Card({title,total,today,setCasesType,setData,casesType}) {

    const Classes={
        cases:style.cases,
        deaths:style.deaths,
        recovered:style.recoverd
    }

    const handleClick=async()=>{
        setCasesType(title)
        let theChartData=await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
        let theJsonChartData=await theChartData.json()
        let theFinalData=chartCreating(theJsonChartData,title)
        setData(theFinalData)
    }
    return (
        <div onClick={handleClick} className={`${style.card} ${casesType === title && Classes[title]}`} >
            <p>{title}</p>
            {
                today >= 1000 ?
                <h2>{numeral(today).format('0 a')}</h2>:
                today >= 1000000 ?
                <h2>{numeral(today).format('0.0a')}</h2>:
                <h2>{today}</h2>
            }
            {
                total >= 1000 ?
                <p>{numeral(total).format('0 a')}</p>:
                total >= 1000000 ?
                <p>{numeral(total).format('0.0a')}</p>:
                <p>{total}</p>
            }
        </div>
    )
}

export default Card
