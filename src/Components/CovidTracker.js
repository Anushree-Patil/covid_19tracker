import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CovidTracker.css'



function CovidTracker() {
    const [posts, setPosts] = useState({})
    useEffect(() => {
        axios
            .get(`https://api.covidindiatracker.com/state_data.json`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    

    return (
        <div
            style={{
                background: '',
                // padding: '5%',
                // fontFamily: '"Arial", Monaco, monospace'
            }} className='body'>
              <center> <h1 className='head2'
            style={{
                color: '',
                fontSize:'',
                // padding: '1rem',
                
                // fontFamily: 'Algerian'
                }}></h1></center> 
            

            <div>
                
                <table>
                    
                    <thead>
                        <tr className='content'>
                            <th>STATE</th>
                            <th>ACTIVE</th>
                            <th>CONFIRMED</th>
                            <th>RECOVERED</th>
                            <th>DEATHS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length
                            ? posts.map((post) =>
                                (
                                    <tr key={post.id}>
                                        <td>{post.state}</td>
                                        <td>{post.active}</td>
                                        <td >{post.confirmed}</td>
                                        <td >{post.recovered}</td>
                                        <td >{post.deaths}</td>
                                    </tr>

                                )) : <tr><td colSpan='5'>Loading...</td></tr>
                        }

                    </tbody>

                </table>
            </div>


        </div>
        
    )
}

export default CovidTracker