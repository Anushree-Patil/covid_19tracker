import React, { useState, useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import axios from 'axios'
import styles from './DatePicker.module.css'


const DatePicker = () => {
    const [Dates, setDate] = useState({})
    let dailyDates = [];
    let dailyconfirmed = [];
    let dailydeceased = [];
    let dailyrecovered = [];


    useEffect(() => {
        axios
            .get(`https://api.covid19india.org/data.json`)
            .then(res => {
                console.log(res)
                for (const obj of res.data.cases_time_series) {
                    dailyDates.push(obj.date)
                    dailyconfirmed.push(parseInt(obj.dailyconfirmed))
                    dailydeceased.push(parseInt(obj.dailydeceased))
                    dailyrecovered.push(parseInt(obj.dailyrecovered))  
                }
                setDate({
                    labels: dailyDates,  
                    datasets :[{  
                      data :dailyconfirmed ,  
                      label: 'confirmed',  
                      borderColor: 'rgb(255,215,0,0.7)',  
                      backgroundColor:'rgb(255,215,0,0.3)',
                      fill: true,
                  },  {  
                        data :dailyrecovered ,  
                        label: 'recovered',  
                        borderColor: '#3333ff',  
                        fill: true,
                    },  
                    {  
                        data :  dailydeceased,  
                        label: 'Deaths',  
                        borderColor: 'red',  
                        backgroundColor: 'rgba(255, 0, 0, 0.3)',  
                      fill: true,  
                   
                    }]  
                   
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className={styles.container}>
            <center><h1 className='head1'>DailyUpdate</h1></center>
            <div className={styles.grp}>
                <Line
                    data={Dates}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                
                />
            </div>

        </div>
    )
}
export default DatePicker
