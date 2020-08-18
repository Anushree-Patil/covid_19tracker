import React,{useState, useEffect} from 'react';  
import { Line,Doughnut } from 'react-chartjs-2';  
import styles from './Chart.module.css'  
import axios from 'axios'


const Chart =() => {
    const [chartData,setChartData] =useState({})
    let confirmed =[];
    let state =[];
    let recovered =[];
    let deaths=[];
    let active=[];
    //const [dailyData, setDailyData] = useState({});  
    
    useEffect(() => {
        axios
            .get(`https://api.covidindiatracker.com/state_data.json`)
            .then(res => {
                console.log(res)
                
                //setDailyData(obj.deaths)
                for (const obj of res.data){
                    state.push(obj.state)
                    active.push(parseInt(obj.active))
                    deaths.push(parseInt(obj.deaths))
                    recovered.push(parseInt(obj.recovered))
                    confirmed.push(parseInt(obj.confirmed))
                }
                setChartData({
         
                    labels: state,  
                    datasets :[{  
                      data :active ,  
                      label: 'Active',  
                      borderColor: 'rgb(255,215,0,0.7)',  
                      backgroundColor:'rgb(255,215,0,0.3)',
                      fill: true,
                  },  {  
                        data :confirmed ,  
                        label: 'Confirmed',  
                        borderColor: '#3333ff',  
                        fill: true,
                    },  
                    {  
                        data :  deaths,  
                        label: 'Deaths',  
                        borderColor: 'red',  
                        backgroundColor: 'rgba(255, 0, 0, 0.3)',  
                      fill: true,  
                   },
                    {  
                        data :  recovered,  
                        label: 'Recovered',  
                        borderColor: 'rgb(50, 250, 50)',  
                        backgroundColor: 'rgba(124, 254, 0, 0.5)',  
                        fill: true,  
                    }]  
                 
                
            })
            })
            .catch(err => {
                console.log(err)
            })
    },[]) 
return (
    <div className={styles.container}>
        <center><h1 className='head1'>Current Statistics of State</h1></center> 
        <div className={styles.grp}>
        <Line
        data={chartData}
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
        //  options={ {  
        //              scales : { xAxes : [ { gridLines : { display : false } } ], yAxes : [ { gridLines : { display : false } } ] } } 
        //          } 
                 />
        </div>
       
    </div>
)
}

   
export default Chart

