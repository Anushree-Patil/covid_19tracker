import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CovidForm from './Components/CovidForm'
import styles from './App.module.css'
// import { Cards, Chart } from './Components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import fetchData from './Components/api/index';
// import CovidTracker from './Components/CovidTracker'
// import Image from './Components/Image'
import Doughnut2 from './Components/DoughnutChart/Doughnut2'
import Routes from './Components/Routes';



class App extends React.Component {
 


  render() {
   
    return (<div>


      <div className={styles.container}>

        
        <div className="App">

          <Routes />
        </div>
       
//         <CovidForm/>
//            <CovidTracker/>  

//         <Doughnut2 />
      </div>
    </div>

    )
  }
}
export default App;
