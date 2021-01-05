import axios from 'axios';

const url = 'http://covid19.mathdro.id/api'


// fetching data from api
export const fetchData = async (country) => {
    let changeableUrl = url

    if (country){
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)
        console.log(confirmed)
        return{ confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        return error
    }
}

// fetching daily data global
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        return data.map(({ confirmed, deaths, reportDate:date }) => ({ totalConfirmed:confirmed.total, deaths:deaths.total, date }))
    } catch (error) {
        return(error)
    }
}

// list of countries
export const fetchCountries = async () => {
    try {
        const { data : { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name)
    } catch (error) {
        return(error)
    }
}