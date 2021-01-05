import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: {totalConfirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData)
        };

        fetchAPI();
    }, [])

    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                 labels : dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                 datasets : [{
                     data : dailyData.map((data) => data.totalConfirmed),
                     label : "Infected",
                     borderColor :  "blue",
                     fill : true,
                 },
                 {
                    data : dailyData.map((data) => data.deaths),
                    label : "Deaths",
                    borderColor : "red",
                    fill : true,
                }
                ]   
                }}
            />
        ):null
    );
    
    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}


export default Chart