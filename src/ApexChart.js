import React from 'react';
import ReactApexChart from 'react-apexcharts'

function ApexChartPage() {

    const state = {
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            colors: ["#FF5733", "#ffcc66", "#66ccff", "#ccff66", "#61FF33" ],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };



    return (
        <ReactApexChart
          height='500px'
          width='500px'
         options={state.options} series={state.series} type="donut" />
    );

}

export default ApexChartPage