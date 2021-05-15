import React,{useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import numeral from 'numeral'
import chartCreating from '../../helpers/chartCreating'
const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {                  // when u hover over the graph u see the value 
      mode: "index",
      intersect: false,          //If true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times
      callbacks: {
        label: function (tooltipItem, data) {
          
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        { 
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {      // show or hide the perpendicular lines 
            display: false,
          },
          ticks: {
            
            callback: function (value, index, values) {
              
              return numeral(value).format("0a");      // value =>>>>> the value on the axe 
            },
          },
        },
      ],
    },
  };
function Chart({data,setData}) {
    
    useEffect(()=>{
        const getChartsApiData= async()=>{
            const chartsData=await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
            const jsonChartsData=await chartsData.json()
            console.log(jsonChartsData)
            const chartData=chartCreating(jsonChartsData)
            setData(chartData)
        }
        getChartsApiData()
    },[])

    return (
        <div>
            {
                data && data.length >0 && 
                <Line
                options={options}
                data={{
                    datasets:[
                        {
                            data:data
                        }
                    ]
                }}
                />
            }
        </div>
    )
}

export default Chart
