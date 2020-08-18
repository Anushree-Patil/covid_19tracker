import axios from 'axios';




export const url ='https://api.covidindiatracker.com/total.json'

const fetchData = async () => {
 
    try {
        const {data:{active,confirmed,recovered,deaths}}=await axios.get(url);

        return {active,confirmed,recovered,deaths};
    }
    catch(error) {

    }
}



export default fetchData;