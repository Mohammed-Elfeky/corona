import React,{useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import numeral from 'numeral'
import {chartCreating} from './drawCircles'
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
    tooltips: {
      mode: "index",
      intersect: false,
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
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return numeral(value).format("0a");
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
