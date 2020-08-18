import React from 'react'
import styles from './Cards.module.css'
import CountUp from 'react-countup';  
import cx from 'classnames';  
import Button from '@material-ui/core/Button';  
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';

const Cards = ({data:{active,confirmed,recovered,deaths}}) => {
    if (!confirmed) {
        return 'Please wait...';

}
    return (
        <div className={cx(styles.bg,styles.form)}>

<div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid  style={{ backgroundColor: 'rgba(255,215,0,0.35)' }} item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={active} duration={3} separator="," />
                        </Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>


                <Grid style={{ backgroundColor: 'rgba(208, 208, 241, 0.5)' }} item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={confirmed} duration={3} separator="," />
                        </Typography>
                        <Typography variant="body2">Number of confirmed cases of Covid-19</Typography>
                    </CardContent>
                </Grid>



                <Grid style={{ backgroundColor: 'rgba(188, 253, 188, 0.5)' }} item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={recovered} duration={3} separator="," />
                        </Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid style={{ backgroundColor: 'rgba(245, 192, 192, 0.5)' }} item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={deaths} duration={3} separator="," />
                        </Typography>
                        
                        <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
        </div>
        
    )
}

export default Cards;