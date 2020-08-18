import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './History';
import "./Modal.module.css";
import fetchData from './api/index';
import  Cards  from  './Cards/Cards.jsx'
import Chart from './Chart/Chart.jsx'
import Image from './Image'
import CovidTracker from './CovidTracker'
import Doughnut2 from "./DoughnutChart/Doughnut2";
import DatePicker from './DatePicker/DatePicker'


export default class Home extends Component {
    state = {
        data: {},
      }
      async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
      }
  render() {
    const { data } = this.state;
    return (
      <div className='modal'>
          <Image />
          <form>
            <Button className='b1'  size='lg' onClick={() => history.push('/CovidForm')}>FIND OUT IF YOU NEED A COVID 19 TEST </Button>
            <br/>
            {/* <Button className='b2'  onClick={() => history.push('/CovidTracker')}>CURRENT STATISTICS OF COVID-19 STATEWISE</Button> */}
          </form>
        <Cards data={data} />
       
        <Doughnut2/>
        <DatePicker/>
        <div>
         
        </div>
        <Chart/>
        <CovidTracker/>
        
      </div>
    );
  }
}