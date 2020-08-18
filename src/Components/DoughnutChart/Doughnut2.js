import React, { useState, useEffect } from 'react';
import {  Doughnut, Pie } from 'react-chartjs-2';
import axios from 'axios'
import styles from './DoughnutChart.module.css'




    const Doughnut2 = () => {
        const [total, setTotal] = useState({})
        let active = [];
        let confirmed = [];
        let recovered = [];
        let deaths = [];
    
    
        useEffect(() => {
               axios
                .get(`https://api.covidindiatracker.com/total.json`)
                .then(response => {
                    console.log(response) 
                    
                    {
                        active.push(parseInt(response.data.active))
                        deaths.push(parseInt(response.data.deaths))
                        recovered.push(parseInt(response.data.recovered))
                        confirmed.push(parseInt(response.data.confirmed)) }

                    
                    setTotal({
                        
                        labels:['Active', 'Confirmed', 'Recovered', 'Deaths'],
                        datasets: [ {
                            label:'total case',
                            data:[active,confirmed,recovered,deaths],
                            backgroundColor:['rgb(255,215,0,0.5)','rgba(0, 0, 255, 0.5)','rgba(0, 255, 0,0.5)','rgba(255, 0, 0,0.5)'],
                            borderColor:['rgb(255,215,0,1)','rgba(0, 0, 255,0.9)','rgba(0, 255, 0,0.9)','rgba(255, 0, 0,0.9)']

                        }
                        
                        ]
    
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        },[])
            
    
        return (
            <div className={styles.container}>
                <center><h1 className='head1'></h1></center>
                <div className={styles.grp}>
                    <Doughnut
                        data={total}
                        options={{
                            responsive: true,
                            maintainAspectRatio: true
                        }} />
    
                </div>
    
            </div>
        )
    }



export default Doughnut2;